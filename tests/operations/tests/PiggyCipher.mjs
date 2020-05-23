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
        expectedOutput: "PiGgy PIggy PiGGy PIggY PigGy Piggy PiGGY PiGgy PiGGy PIggy PiGGy PiGgY PiGGY PigGy PiGGy PiGgY",
        recipeConfig: [
            {
                op: "To Piggy Cipher",
            },
        ],
    },
    {
        name: "From Piggy Cipher",
        input: "PiGgy PIggy PiGGy PIggY PigGy Piggy PiGGY PiGgy PiGGy PIggy PiGGy PiGgY PiGGY PigGy PiGGy PiGgY",
        expectedOutput: "I'm piggy!",
        recipeConfig: [
            {
                op: "From Piggy Cipher",
            },
        ],
    },
]);
