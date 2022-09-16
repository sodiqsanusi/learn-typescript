# A documentation of me trying to learn TypeScipt

> I'm following NetNija's Typescript playlist on Youtube

> We'll be using Typescript to build a small project. Hopefully I don't f**k this up.

# Video 1

Okay, so with what I've watched at this point, Typescript is not actually another language. It's just an 
addition to Javascript similar to SASS and CSS. It makes your code strictly typed, allows for some new syntax
but is compiled to Javascript at the end to be used in browser's.

First step is to download the Typescript compiler using NPM
```bash
npm install -g typescript
```
This would install the compiler that converts your Typescript code into usable Javascript

# Video 2

This starts with me getting the HTML & CSS file we'll be manipulating from NetNinja's repo.

To compile any Typescript file into a Javascript file, you have to input this bash code in your terminal
```bash
tsc sandbox.ts index.js
```
What the code block above does is to look for a Typescript file in the present directory named "sandbox.ts",
then compiles it into a browser-readable Javascript file called "index.js".

If the specified Typescript file is absent, it creates an empty file with the inputted name. Also, if you don't specify the name of the Javascript file you want it to be compiled into, it uses the same name of the compiled Typescript file for its corresponding Javascript.

## Now, there is an issue somewhere

Based on what has been taught, anytime you make changes in your Typescript file, you have to manually compile it by typing in the bash commands specified above. Fortunately, there is a different command that does live compilation, 
```bash
tsc sandbox.ts -w
```
The `-w` flag lets the command watch the specified Typescript file and auto-compiles it per save.

# Video 3 - Static Types

Talked on the available types present by default in Typescript and on how a variable's Type is inferred based on its value (if not pre-defined)

[Notes](./Video%203.ts)

# Video 4 - Object & Array Types

Learnt on how the strict typing affects arrays and objects.

[Notes](./Video%204.ts)

# Video 5 - Explicit & Union Types

Learnt on how to create variables that can accept different data types and on how to create a custom object type

[Notes](./Video%205.ts)

# Video 6 - Dynamic (`any`) Types

This talked on the usefulness of the `any` type. This will let the specified variable accept all data types as its value.

# Video 7 - Better Workflow & tsconfig

He talks about creating a config file for the Typescript, and on how to improve your workflow through it.
To create the .tsconfig file, you can input this code in your terminal:
```bash
tsc init
```

# Video 8 - Function Basics (& void)

Learnt on how to specify data types for function parameters and the return value of the function. Also learnt on how to make a parameter optional.

[Notes](./Video%208.ts)

# Video 9 - Type Aliases

Learnt about creating custom types and using them for variables or objects.

[Notes](./Video%209.ts)

# Video 10 - Function Types (signatures)