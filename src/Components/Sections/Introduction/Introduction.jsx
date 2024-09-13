import styles from "./Introduction.module.css"

export default function Introduction() {
    return (
        <div className={styles.intro}>
            <h2>Introduction</h2>
            <h3>What is TypeScript?</h3>
            <p>TypeScript is a programming language that adds optional static typing to JavaScript. This means you can define the types of your variables, functions, and objects, which can help catch errors early in the development process.</p>
            <h3>Why Use TypeScript?</h3>
                <ul>
                    <li><strong>Improved code quality:</strong> Types help prevent common mistakes like using the wrong data type or accessing properties that don't exist.</li>
                    <li><strong>Better tooling:</strong> TypeScript integrates well with popular IDEs like Visual Studio Code, providing features like autocompletion, code navigation, and refactoring.</li>
                    <li><strong>Enhanced maintainability:</strong> Types make code easier to understand and maintain, especially in large projects.</li>
                </ul>
            <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Types:</strong> These define the kind of data a variable can hold, such as numbers, strings, booleans, arrays, objects, and more.</li>
                    <li><strong>Annotations:</strong>These are added to your code to specify the types of variables, functions, and other elements.</li>
                    <li><strong>Inference:</strong> TypeScript can often infer types automatically based on how you use variables.</li>
                    <li><strong>Compiler:</strong> The TypeScript compiler converts your TypeScript code into JavaScript that can be run in browsers or Node.js.</li>
                </ul>
            <h3>Getting Started</h3>
                <ol>
                    <li>Set up your development environment: Install Node.js and use npm (or a package manager like yarn or pnpm) to install TypeScript globally.</li>
                    <li>Create a new TypeScript project: Initialize a new project directory and run tsc --init to create a tsconfig.json file, which configures TypeScript for your project.</li>
                    <li>Write TypeScript code: Start writing your code with TypeScript syntax.</li>
                    <li>Compile to JavaScript: Use the tsc command to compile your TypeScript files into JavaScript.</li>
                </ol>
            <pre><code className="codeBlock">
{`let message: string = "Hello, TypeScript!";
     console.log(message);`}
</code></pre>
        </div>
    )
}