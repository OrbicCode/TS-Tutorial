import styles from "./Unions-and-Literals.module.css"

export default function UnionsandLiterals() {
    return (
        <div className={styles.uandl}>
<h3>Unions and Literals</h3>

<p>The code talks about how TypeScript helps manage situations where a variable can hold different types of values.</p>
<strong>It introduces two concepts:</strong>
<ul>
<li>Union Types: Imagine a box that can hold either an apple or an orange. A union type is like saying a variable can be either one type <code>(string)</code> or another type <code>(number)</code>.</li>

<li>Literal Types: Imagine a box that can only hold a specific apple, like a Granny Smith apple. A literal type is like saying a variable can only be a specific value, like the string <code>"Granny Smith"</code>.</li>
</ul>

<h3>Declaring Union Types</h3>

<ul>
    <li>The code shows how to create union types using the <code>|</code> symbol (pipe).</li>
    <li>For example, a variable <code>id</code> can be either a <code>string</code> or a <code>number</code>:</li>
    <code className="codeBlock">
        const id: string | number = '123'; // Or id = 456;
    </code>
</ul>

<h3>Literal Types</h3>

Literal types define variables that can only hold specific values.
<strong>Examples include:</strong>
<ul>
    <li><code>'yes' | 'no'</code> for a yes or no answer.</li>
    <li> <code>200 | 404 | 500</code> for common HTTP status codes.</li>
    <li> <code>true | false</code> for a boolean value.</li>
</ul>
This helps prevent errors by ensuring a variable has the exact value you expect.
        </div>
    )
}