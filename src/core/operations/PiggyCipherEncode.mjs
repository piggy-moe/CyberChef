/**
 * @author PiggyMoe [me@piggy.moe]
 * @copyright Crown Copyright 2020
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";

const mask = ["iggy", "IGGY"];

/**
 * Piggy Cipher Encode operation
 */
class PiggyCipherEncode extends Operation {

    /**
     * PiggyCipherEncode constructor
     */
    constructor() {
        super();

        this.name = "Piggy Cipher Encode";
        this.module = "Default";
        this.description = "The mysterious Piggy Cipher.";
        this.infoURL = "";
        this.inputType = "byteArray";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {byteArray} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        if (!input) return "";
        if (input instanceof ArrayBuffer) input = new Uint8Array(input);

        let output = "";

        for (let i = 0; i < input.length; i++) {
            output += "P";
            for (let j = 7; j >= 4; j--) {
                output += mask[(input[i] >> j) & 1][7 - j];
            }
            output += " P";
            for (let j = 3; j >= 0; j--) {
                output += mask[(input[i] >> j) & 1][3 - j];
            }
            output += " ";
        }

        return output.slice(0, -1);
    }

    /**
     * Highlight Piggy Cipher Encode
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlight(pos, args) {
        return pos.map((p) => ({
            start: p.start * 12,
            end: p.end * 12 - 1
        }));
    }

    /**
     * Highlight Piggy Cipher Encode in reverse
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlightReverse(pos, args) {
        return pos.map((p) => ({
            start: p.start / 12,
            end: (p.end + 1) / 12
        }));
    }

}

export default PiggyCipherEncode;
