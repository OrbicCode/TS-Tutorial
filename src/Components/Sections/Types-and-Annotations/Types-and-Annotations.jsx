import styles from "./Types-and-Annotations.module.css"

export default function TypesandAnnotations() {
    return (
        <div className={styles.tanda}>
<h3>Why TypeScript?</h3>

<p>Imagine you're building a house with Legos. You have different types of Legos for walls, roofs, doors, etc. TypeScript is like a system for those Legos - it ensures you use the right pieces in the right places. In code, this translates to using the correct data types (like strings, numbers, booleans) for variables and functions. This helps prevent errors and makes your code more reliable.</p>

<h3>Adding Labels: Annotations</h3>

<p>Annotations are like little labels you add to your Legos to tell TypeScript what type of data they hold. For example, a string Lego might have a label "string" and a number Lego might have a label "number."</p>
<ul>
<li><strong>Function Parameter Annotations:</strong> Imagine a function like a box that takes things in and does something with them. Annotations tell TypeScript what type of data the box expects to receive. This way, if you try to put a red Lego (number) in a slot meant for a blue Lego (string), TypeScript will warn you about the mismatch.</li>

<li><strong>Variable Annotations:</strong> Similar to Legos, variables can hold different types of data. Annotations tell TypeScript what type of data a variable is supposed to hold. This helps TypeScript catch errors if you try to store something incompatible in the variable, like putting a Lego car (object) in a slot meant for a single Lego brick (string).</li>
</ul>
<strong>Basic Building Blocks: Types</strong>

<p>TypeScript has different types like Lego categories. Here are a few common ones:</p>
<pre><code className="codeBlock">
{`String 
let greeting: string = "Hello, world!";

Number 
let age: number = 30;

Boolean 
let isOnline: boolean = true;

Array 
let numbers: number[] = [1, 2, 3];

Object
let person: { name: string; age: number } = { name: "Alice", age: 25 };`}
</code></pre>

<h3>Letting TypeScript Guess: Type Inference</h3>

<p>Just like you can often tell what a Lego piece is for by looking at it, TypeScript can sometimes guess the type of data from how you use it in your code. This is called type inference. It's like letting TypeScript be your Lego detective!</p>
<ul>
    <li><strong>Variables Don't Always Need Labels:</strong> If you assign a value to a variable, TypeScript might be able to figure out the type on its own. For example, if you assign the text "Hello World!" to a variable, TypeScript will likely infer it's a string.</li>
</ul>

<pre><code className="codeBlock">
{`let inferredNumber = 42; // TypeScript infers it's a number
let inferredString = "Hello"; // TypeScript infers it's a string`}
</code></pre>

<h3>When Annotations Are Required</h3>
<ul>
    <li><strong>Function Parameters Always Need Labels:</strong> Unlike variables, TypeScript can't always guess the expected type of data a function needs based on its body alone. So, you need to explicitly tell TypeScript what types of data the function's parameters should accept. This ensures you're giving the function the correct Legos to work with.</li>
</ul>
<pre><code className="codeBlock">
{`function greet(name: string): string {
  return "Hello, " + name + "!";
}

let result: string = greet("Bob");
`}
</code></pre>

<h3>The 'any' Type: A Caution Sign</h3>

<p>Imagine a giant Lego bucket that holds any kind of Lego piece. That's kind of like the 'any' type in TypeScript. It tells TypeScript to basically ignore the type and allow anything. While this can be useful in rare cases, using 'any' too often defeats the purpose of using TypeScript for type safety. It's like building your house with a mix of random Legos - things might work initially, but they might also break later!</p>

<h3>Key Takeaways</h3>
<ul>
    <li>TypeScript helps prevent errors by ensuring you use the correct data types.</li>
    <li>Annotations are like labels that tell TypeScript what type of data something holds.</li>
    <li>Type inference allows TypeScript to sometimes guess the type of data based on its usage.</li>
    <li>Function parameters always need annotations to specify the expected data types.</li>
    <li>The 'any' type should be used cautiously as it bypasses type safety.</li>
</ul>
        </div>
    )
}