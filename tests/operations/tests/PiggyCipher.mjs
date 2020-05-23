/**
 * Piggy Cipher tests.
 *
 * @author piggymoe [me@piggy.moe]
 *
 * @copyright Crown Copyright 2020
 * @license Apache-2.0
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "To Piggy Cipher",
        input: "I'm piggy!",
        expectedOutput: "PiGgy PIggY PigGy PiGGY PiGGy PIGgY PigGy Piggy PiGGY Piggy PiGGy PIggY PiGGy PiGGY PiGGy PiGGY PiGGY PIggY PigGy PiggY",
        recipeConfig: [
            {
                op: "Piggy Cipher Encode",
                args: [],
            },
        ],
    },
    {
        name: "From Piggy Cipher",
        input: "PiGgy PIggY PigGy PiGGY PiGGy PIGgY PigGy Piggy PiGGY Piggy PiGGy PIggY PiGGy PiGGY PiGGy PiGGY PiGGY PIggY PigGy PiggY",
        expectedOutput: "I'm piggy!",
        recipeConfig: [
            {
                op: "Piggy Cipher Decode",
                args: [],
            },
        ],
    },
]);
