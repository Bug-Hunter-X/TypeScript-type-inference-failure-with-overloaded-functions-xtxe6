# TypeScript Type Inference Failure with Overloaded Functions

This repository demonstrates a scenario where TypeScript's type inference fails to catch type errors, leading to unexpected runtime behavior. The issue occurs when using overloaded function signatures or complex type aliases.

## Bug Description
The `add` function is defined to accept two numbers. However, due to a flaw in the type inference, it compiles without error even when called with a number and a string. This results in an unexpected runtime error.

## Steps to Reproduce
1. Clone this repository.
2. Compile the code using the TypeScript compiler (`tsc bug.ts`).
3. Run the compiled JavaScript code. You'll observe that the runtime error is not detected at compile time.

## Solution
The solution involves using more robust type checking within the TypeScript compiler to ensure that such type mismatches are detected during compilation rather than at runtime.