/**
 * Parse UDP tests.
 *
 * @author h345983745
 *
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "Parse UDP: No Data - JSON",
        input: "04 89 00 35 00 2c 01 01",
        expectedOutput: "{\"Source port\":1161,\"Destination port\":53,\"Length\":44,\"Checksum\":\"0101\"}",
        recipeConfig: [
            {
                op: "From Hex",
                args: ["Auto"],
            },
            {
                op: "Parse UDP",
                args: [],
            },
            {
                op: "Find / Replace",
                args: [
                    {
                        option: "Regex",
                        string: "\\s+",
                    },
                    "",
                    true,
                    false,
                    false,
                    false,
                ],
            },
            {
                op: "Find / Replace",
                args: [
                    {
                        option: "Simple string",
                        string: "Sourceport",
                    },
                    "Source port",
                    false,
                    false,
                    false,
                    false,
                ],
            },
            {
                op: "Find / Replace",
                args: [
                    {
                        option: "Simple string",
                        string: "Destinationport",
                    },
                    "Destination port",
                    false,
                    false,
                    false,
                    false,
                ],
            },
        ],
    }, {
        name: "Parse UDP: With Data - JSON",
        input: "04 89 00 35 00 2c 01 01 02 02",
        expectedOutput: "{\"Source port\":1161,\"Destination port\":53,\"Length\":44,\"Checksum\":\"0101\",\"Data\":\"0202\"}",
        recipeConfig: [
            {
                op: "From Hex",
                args: ["Auto"],
            },
            {
                op: "Parse UDP",
                args: [],
            },
            {
                op: "Find / Replace",
                args: [
                    {
                        option: "Regex",
                        string: "\\s+",
                    },
                    "",
                    true,
                    false,
                    false,
                    false,
                ],
            },
            {
                op: "Find / Replace",
                args: [
                    {
                        option: "Simple string",
                        string: "Sourceport",
                    },
                    "Source port",
                    false,
                    false,
                    false,
                    false,
                ],
            },
            {
                op: "Find / Replace",
                args: [
                    {
                        option: "Simple string",
                        string: "Destinationport",
                    },
                    "Destination port",
                    false,
                    false,
                    false,
                    false,
                ],
            },
        ],
    },
    {
        name: "Parse UDP: Not Enough Bytes",
        input: "04 89 00",
        expectedOutput: "Need 8 bytes for a UDP Header",
        recipeConfig: [
            {
                op: "From Hex",
                args: ["Auto"],
            },
            {
                op: "Parse UDP",
                args: [],
            },
            {
                op: "Find / Replace",
                args: [
                    {
                        option: "Regex",
                        string: "\\s+",
                    },
                    "",
                    true,
                    false,
                    false,
                    false,
                ],
            },
            {
                op: "Find / Replace",
                args: [
                    {
                        option: "Simple string",
                        string: "Sourceport",
                    },
                    "Source port",
                    false,
                    false,
                    false,
                    false,
                ],
            },
            {
                op: "Find / Replace",
                args: [
                    {
                        option: "Simple string",
                        string: "Destinationport",
                    },
                    "Destination port",
                    false,
                    false,
                    false,
                    false,
                ],
            },
        ],
    }
]);
