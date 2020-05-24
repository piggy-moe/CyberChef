/**
 * @author PiggyMoe [me@piggy.moe]
 * @copyright Crown Copyright 2020
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";
import OperationError from "../errors/OperationError.mjs";


const mask = ["iggy", "IGGY"];

/**
 * Convert a 4-characters string in Piggy Cipher to a 4-bitsnumber
 * @param str The 4-characters string
 */
function read4(str) {
    if (str.length !== 4) {
        throw new OperationError("Incomplete input");
    }
    let res = 0;
    for (let i = 3; i >= 0; i--) {
        if (str[3 - i] !== mask[0][3 - i] && str[3 - i] !== mask[1][3 - i]) {
            throw new OperationError("Not a valid Piggy Cipher content");
        }
        res = (res << 1) ^ (str[3 - i] === mask[0][3 - i] ? 0 : 1);
    }
    return res;
}

/**
 * Piggy Cipher Decode operation
 */
class PiggyCipherDecode extends Operation {

    /**
     * PiggyCipherDecode constructor
     */
    constructor() {
        super();

        this.name = "Piggy Cipher Decode";
        this.module = "Default";
        this.description = "The mysterious Piggy Cipher.";
        this.infoURL = "";
        this.inputType = "string";
        this.outputType = "byteArray";
        this.args = [];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {byteArray}
     */
    run(input, args) {
        const output = [];

        let i = 0;
        while (i < input.length) {
            while (/\W/.test(input[i])) i++;
            if (input[i] !== "P") {
                throw new OperationError("Not a valid Piggy Cipher data");
            }
            i++;
            const high = read4(input.slice(i, i + 4));
            i += 4;
            while (/\W/.test(input[i])) i++;
            if (input[i] !== "P") {
                throw new OperationError("Not a valid Piggy Cipher data");
            }
            i++;
            const low = read4(input.slice(i, i + 4));
            i += 4;
            output.push((high << 4) ^ low);
            i++;
        }

        return output;
    }

}

export default PiggyCipherDecode;
