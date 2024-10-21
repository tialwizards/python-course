import React from 'react';
import { useParams } from 'react-router-dom';
import pythonIfStatement from '../images/python-if.png';
import pythonIfElseStatement from '../images/python-if-else.png';
import pythonElifStatement from '../images/python-elif.png';
import pythonNestedIfStatement from '../images/python-nested-if.png';
import pythonWhileLoop from '../images/python-while-loop.png';
import pythonBreakStatement from '../images/break-statement-python.png';
import pythonContinueStatement from '../images/continue-statement-python.png';
import pythonCreateFunction from '../images/create-function-python.png';
import pythonCallFunction from '../images/call-function-python.png';
import pythonReturnStatement from '../images/function-return-value-python.png';


const Introduction = () => {
    const { topic } = useParams();

    const content = {
        "python-overview": (
            <div id="overview"> 
                <h2>Python Overview</h2>
                <p>
                    <strong>What is Python?</strong> Python is a dynamically typed, general-purpose programming language that supports both object-oriented and functional programming approaches. It is also an interpreted and high-level programming language created by Guido Van Rossum in 1989.
                </p>
                <h3>Features of Python</h3>
                <ul>
                    <li>Simple and easy to understand</li>
                    <li>Interpreted and platform-independent</li>
                    <li>Open-source programming language</li>
                    <li>Extensive library support (e.g., NumPy, TensorFlow, Selenium)</li>
                    <li>Ability to integrate other programming languages</li>
                </ul>
                <h3>What is Python used for?</h3>
                <ul>
                    <li>Data Visualization</li>
                    <li>Data Analytics</li>
                    <li>AI and Machine Learning</li>
                    <li>Web Applications</li>
                    <li>Database Handling</li>
                    <li>Business and Accounting Applications</li>
                </ul>
            </div>
        ),
        "installation": (
            <div>
            <h2>Installation & Getting Started</h2>
            <h3>Steps to Install Python:</h3>
            <p>Visit the official python website: <a href="https://www.python.org/">https://www.python.org/</a></p>
            <p>Download the executable file based on your Operating System and version specifications.</p>
            <p>Run the executable file and complete the installation process.</p>
            
            <h3>Version:</h3>
            <p>After installation, check the version of Python by typing the following command: <code>python --version</code></p>
            
            <h3>Starting Python:</h3>
            <p>Open Python IDE or any other text editor of your preferred choice. Let’s understand Python code execution with the simplest print statement. Type the following in the IDE:</p>
            <pre><code>print("Hello World !!!")</code></pre>
            <p>Now save the file with a <strong>.py</strong> extension and run it. You will get the following output:</p>
            <pre><code>Hello World !!!</code></pre>
            
            <h3>Installing Packages:</h3>
            <p>To install packages in Python, we use the <code>pip</code> command.</p>
            <p>e.g. <code>pip install "Package Name"</code></p>
            <p>The following command installs the pandas package in Python:</p>
            <pre><code>pip install pandas</code></pre>
            <p>We will learn more about the pip command in the chapter dedicated to pip.</p>
        </div>
        ),
        "what-is-syntax": (
        <div>
            <h3>What is Syntax?</h3>
            <p>In simplest words, Syntax is the arrangement of words and phrases to create well-formed sentences in a language. In the case of a computer language, the syntax is the structural arrangement of comments, variables, numbers, operators, statements, loops, functions, classes, objects, etc., which helps us understand the meaning or semantics of a computer language.</p>
            
            <p>For example, a ‘comment’ is used to explain the functioning of a block of code. It starts with a <code>#</code>.</p>
            <p>More on comments in the comments chapter.</p>
            
            <p>For example, a block of code is identified by an ‘indentation’. Have a look at the following code, here <code>print(i)</code> is said to be indented with respect to the line above it. In simple words, indentation is the addition of spaces before the line <code>print(i)</code>.</p>
            
            <pre><code>for i in range(5):
            print(i)</code></pre>
        </div>

        ),
        "python-comments": (
            <div>
                <h3>Python Comments</h3>
                <p>A comment is a part of the coding file that the programmer does not want to execute. Rather, the programmer uses it to either explain a block of code or to avoid the execution of a specific part of code while testing.</p>
                
                <h4>Single-Line Comments:</h4>
                <p>To write a comment, just add a <code>#</code> at the start of the line.</p>
                
                <p><strong>Example 1:</strong></p>
                <pre><code>#This is a 'Single-Line Comment'
            print("This is a print statement.")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>This is a print statement.</code></pre>

                <p><strong>Example 2:</strong></p>
                <pre><code>print("Hello World !!!") #Printing Hello World</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Hello World !!!</code></pre>

                <p><strong>Example 3:</strong></p>
                <pre><code>print("Python Program")
            #print("Python Program")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Python Program</code></pre>

                <h4>Multi-Line Comments:</h4>
                <p>To write multi-line comments, you can use <code>#</code> at each line or use a multiline string.</p>
                
                <p><strong>Example 1:</strong> The use of <code>#</code>.</p>
                <pre><code>{`
            #It will execute a block of code if a specified condition is true.
            #If the condition is false then it will execute another block of code.
            p = 7
            if (p &lt; 5):
                print("p is greater than 5.")
            else:
                print("p is not greater than 5.")`}</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>p is greater than 5.</code></pre>

                <p><strong>Example 2:</strong> The use of multiline string.</p>
                <pre><code>{`This is an if-else statement.
            It will execute a block of code if a specified condition is true.
            If the condition is false then it will execute another block of code."""
            p = 7
            if (p &lt; 5):
                print("p is greater than 5.")
            else:
                print("p is not greater than 5.")`}</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>p is greater than 5.</code></pre>
            </div>

        ),
        "python-variables": (
            <div>
            <h3>Python Variables</h3>
            <p>Variables are containers that store information that can be manipulated and referenced later by the programmer within the code.</p>
            <p>In Python, the programmer does not need to declare the variable type explicitly; we just need to assign the value to the variable.</p>
            
            <p><strong>Example:</strong></p>
            <pre><code>{`
name = "Abhishek"   #type str
age = 20            #type int
passed = True       #type bool`}</code></pre> 
            
            <p>It is always advisable to keep variable names descriptive and to follow a set of conventions while creating variables:</p>
            <ul>
                <li>Variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _).</li>
                <li>Variable name must start with a letter or the underscore character.</li>
                <li>Variables are case sensitive.</li>
                <li>Variable name cannot start with a number.</li>
            </ul>

            <p><strong>Example:</strong></p>
            <pre><code>{`
Color = "yellow"    #valid variable name
cOlor = "red"       #valid variable name
_color = "blue"     #valid variable name

5color = "green"    #invalid variable name
$color = "orange"   #invalid variable name`}</code></pre>

            <p>Sometimes, a multi-word variable name can be difficult to read. To make it more readable, the programmer can do the following:</p>
            
            <p><strong>Example:</strong></p>
            <pre><code>
            {`
NameOfCity = "Mumbai"       #Pascal case
nameOfCity = "Berlin"       #Camel case
name_of_city = "Moscow"     #snake case
            `}
            </code></pre>
            
            <h4>Scope of Variable:</h4>
            <p>The scope of the variable is the area within which the variable has been created. Based on this, a variable can either have a local scope or a global scope.</p>
            
            <h4>Local Variable:</h4>
            <p>A local variable is created within a function and can only be used inside that function. Such a variable has a local scope.</p>
            
            <p><strong>Example:</strong></p>
            <pre><code>{`
        icecream = "Vanilla"    #global variable
        def foods():
            vegetable = "Potato"    #local variable
            fruit = "Lichi"         #local variable
            print(vegetable + " is a local variable value.")
            print(icecream + " is a global variable value.")
            print(fruit + " is a local variable value.")

        foods()`}</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>Potato is a local variable value.
        Vanilla is a global variable value.
        Lichi is a local variable value.</code></pre>

            <h4>Global Variable:</h4>
            <p>A global variable is created in the main body of the code and can be used anywhere within the code. Such a variable has a global scope.</p>
            
            <p><strong>Example:</strong></p>
            <pre><code>{`
        icecream = "Vanilla"    #global variable
        def foods():
            vegetable = "Potato"    #local variable
            fruit = "Lichi"         #local variable
            print(vegetable + " is a local variable value.")

        foods()
        print(icecream + " is a global variable value.")
        print(fruit + " is a local variable value.")`}</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>Potato is a local variable value.
        Vanilla is a global variable value.</code></pre>
        </div>

        ),


// Python Data Types & Operators

        "data-types": (
            <>
            <h2>Data Types in Python</h2>
<p>Data types define the kind of value a variable can hold, allowing for various operations without resulting in errors. Python provides several built-in data types by default:</p>

<h3>Numeric Data Types</h3>
<ul>
    <li><strong>int</strong>: Integer values such as <code>3</code>, <code>-8</code>, or <code>0</code>.</li>
    <pre><code>{`x = 3
y = -8
z = 0`}</code></pre>

    <li><strong>float</strong>: Floating-point numbers like <code>7.349</code>, <code>-9.0</code>, or <code>0.0000001</code>.</li>
    <pre><code>{`a = 7.349
b = -9.0
c = 0.0000001`}</code></pre>

    <li><strong>complex</strong>: Complex numbers represented as <code>6 + 2j</code>.</li>
    <pre><code>complex_number = 6 + 2j</code></pre>
</ul>
<p>For more details on numeric data types, refer to the chapter on numbers.</p>

<h3>Text Data Type</h3>
<ul>
    <li><strong>str</strong>: String values such as <code>"Hello World!!!"</code> or <code>"Python Programming"</code>.</li>
    <pre><code>greeting = "Hello World!!!"
language = "Python Programming"</code></pre>
</ul>

<h3>Boolean Data Type</h3>
<ul>
    <li><strong>bool</strong>: Boolean values can be either <code>True</code> or <code>False</code>.</li>
    <pre><code>is_active = True
has_permission = False</code></pre>
</ul>

<h3>Sequenced Data Types</h3>
<ul>
    <li><strong>list</strong>: A list is an ordered collection of items, enclosed in square brackets and separated by commas. Lists are mutable, meaning they can be changed after creation.
    <pre><code>{`list1 = [8, 2.3, [-4, 5], ["apple", "banana"]]
print(list1)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>[8, 2.3, [-4, 5], ['apple', 'banana']]</code></pre>
    </li>

    <li><strong>tuple</strong>: A tuple is an ordered collection of items, enclosed in parentheses and separated by commas. Tuples are immutable, meaning they cannot be changed after creation.
    <pre><code>{`tuple1 = (("parrot", "sparrow"), ("Lion", "Tiger"))
print(tuple1)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`(('parrot', 'sparrow'), ('Lion', 'Tiger'))`}</code></pre>
    </li>

    <li><strong>range</strong>: The <code>range</code> function generates a sequence of numbers as specified by the user. If no parameters are given, it starts from <code>0</code> and increments by <code>1</code>.
    <pre><code>sequence1 = range(4, 14, 2)
for i in sequence1:
    print(i)</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>4
6
8
10
12</code></pre>
    </li>
</ul>

<h3>Mapped Data Type</h3>
<ul>
    <li><strong>dict</strong>: A dictionary is an unordered collection of data organized into key-value pairs, enclosed in curly braces.
    <pre><code>{`dict1 = {"name": "Sakshi", "age": 20, "canVote": True}
print(dict1)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`{'name': 'Sakshi', 'age': 20, 'canVote': True}`}</code></pre>
    </li>
</ul>

<h3>Binary Data Types</h3>
<ul>
    <li><strong>bytes</strong>: The <code>bytes()</code> function is used to convert objects into byte objects or to create an empty bytes object of a specified size.
    <pre><code>{`# Converting string to bytes
str1 = "This is a string"
arr1 = bytes(str1, 'utf-8')
print(arr1)
arr2 = bytes(str1, 'utf-16')
print(arr2)

# Creating bytes of given size
bytestr = bytes(4)
print(bytestr)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`b'This is a string'
b'\xff\xfeT\x00h\x00i\x00s\x00 \x00i\x00s\x00 \x00a\x00 \x00s\x00t\x00r\x00i\x00n\x00g\x00'
b'\x00\x00\x00\x00'`}</code></pre>
    </li>

    <li><strong>bytearray</strong>: The <code>bytearray()</code> function is used to convert objects into bytearray objects or to create an empty bytearray object of a specified size.
    <pre><code>{`# Converting string to bytearray
str1 = "This is a string"
arr1 = bytearray(str1, 'utf-8')
print(arr1)
arr2 = bytearray(str1, 'utf-16')
print(arr2)

# Creating bytearray of given size
bytestr = bytearray(4)
print(bytestr)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`bytearray(b'This is a string')
bytearray(b'\xff\xfeT\x00h\x00i\x00s\x00 \x00i\x00s\x00 \x00a\x00 \x00s\x00t\x00r\x00i\x00n\x00g\x00')
bytearray(b'\x00\x00\x00\x00')`}</code></pre>
    </li>

    <li><strong>memoryview</strong>: The <code>memoryview()</code> function returns a memory view object from a specified object.
    <pre><code>{`str1 = bytes("home", "utf-8")
memoryviewstr = memoryview(str1)
print(list(memoryviewstr[0:]))`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>[104, 111, 109, 101]</code></pre>
    </li>
</ul>

<h3>Set Data Type</h3>
<ul>
    <li><strong>set</strong>: A set is an unordered collection of unique elements, enclosed in curly braces.
    <pre><code>{`set1 = {4, -5, 8, 3, 2.9}
print(set1)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`{2.9, 3, 4, 8, -5}`}</code></pre>
    </li>
</ul>

<h3>None Type</h3>
<ul>
    <li><strong>None</strong>: The <code>None</code> value represents the absence of a value. Assigning <code>None</code> to a variable resets it to an empty state, which is distinct from zero, an empty string, or a <code>False</code> value.
    <pre><code>state = None
print(type(state))</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`&lt;class 'NoneType'&gt;`}</code></pre>
    </li>
</ul>
</>
        ),
        "python-numbers": (
            <>
            <h2>Python Number Data Types</h2>
<p>In Python, numbers can be categorized into the following data types:</p>
<ul>
    <li><strong>int</strong></li>
    <li><strong>float</strong></li>
    <li><strong>complex</strong></li>
</ul>

<h3>Integer (int)</h3>
<p>An <code>int</code> is a whole number that can be either positive or negative and can be of any length. It cannot be a decimal or a fraction.</p>
<p><strong>Example:</strong></p>
<pre><code>{`negativeInt = -2345698
zeroInt = 0
positiveInt = 100548

print(type(negativeInt))
print(type(zeroInt))
print(type(positiveInt))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`<class 'int'>`}</code></pre>

<h3>Floating-Point Number (float)</h3>
<p>A <code>float</code> is a number that can have a decimal point. It can represent both positive and negative decimal numbers, including exponential forms and fractions.</p>
<p><strong>Example:</strong></p>
<pre><code>{`decimalNegative = -8.35245     # Decimal number
decimalSmall = 0.000001         # Decimal number
exponentialPositive = 2.6E44    # Exponential number
exponentialNegative = -6.022e23  # Exponential number

print(type(decimalNegative))
print(type(decimalSmall))
print(type(exponentialPositive))
print(type(exponentialNegative))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`<class 'float'>`}</code></pre>

<h3>Complex Number (complex)</h3>
<p><code>complex</code> numbers consist of a real part and an imaginary part and are expressed in the form <code>a + bj</code>, where <code>a</code> represents the real part and <code>b</code> the imaginary part.</p>
<p><strong>Example:</strong></p>
<pre><code>{`complexPositive = 2 + 4j
complexNegative = -(3 + 7j)
imaginaryNegative = -4.1j
imaginaryPositive = 6j

print(type(complexPositive))
print(type(complexNegative))
print(type(imaginaryNegative))
print(type(imaginaryPositive))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`<class 'complex'>`}</code></pre>


            </>
        ),
        "data-conversion": (
            <>
            <h2>Data Conversion in Python</h2>
<p>The act of changing numeric data from one type to another is referred to as type conversion.</p>

<h3>Converting Integer to Float</h3>
<p>To convert an integer to a float, we can use the <code>float()</code> function.</p>
<p><strong>Example:</strong></p>
<pre><code>{`integerNum = -25
floatNum = float(integerNum)
complexNum = complex(integerNum)

print(floatNum)
print(complexNum)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`-25.0`}</code></pre>
<pre><code>{`(-25+0j)`}</code></pre>

<h3>Converting Float to Integer</h3>
<p>To convert a float to an integer, we use the <code>int()</code> function. This function rounds the float to the nearest integer.</p>
<p><strong>Example:</strong></p>
<pre><code>{`floatNum = 8.4
integerNum = int(floatNum)
complexNum = complex(floatNum)

print(integerNum)
print(complexNum)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`8`}</code></pre>
<pre><code>{`(8.4+0j)`}</code></pre>

<h3>Important Note</h3>
<p>It is important to note that complex numbers cannot be directly converted to integer or float types.</p>

            </>
        ),
        "type-casting": (
            <>
            <h2>Type Casting in Python</h2>
<p>Type casting, similar to type conversion, is used when we want to explicitly define a variable's type.</p>

<h3>Example:</h3>
<pre><code>{`stringNum1 = "7"
stringNum2 = "3.142"
stringNum3 = "13"
integerNum = 29
floatNum = 6.67

print(int(stringNum1))
print(float(stringNum2))
print(float(stringNum3))
print(str(integerNum))
print(str(floatNum))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`7`}</code></pre>
<pre><code>{`3.142`}</code></pre>
<pre><code>{`13.0`}</code></pre>
<pre><code>{`29`}</code></pre>
<pre><code>{`6.67`}</code></pre>

            </>
        ),
        "python-operators": (
            <>
           <h2>Python Operators</h2>
<p>Python includes various types of operators for performing different operations. Below are the main categories:</p>

<h3>Arithmetic Operators</h3>
<p>Arithmetic operators are used for mathematical operations:</p>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Operator</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Addition</td>
            <td>+</td>
            <td>a + b</td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td>-</td>
            <td>a - b</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td>*</td>
            <td>a * b</td>
        </tr>
        <tr>
            <td>Division</td>
            <td>/</td>
            <td>a / b</td>
        </tr>
        <tr>
            <td>Exponential</td>
            <td>**</td>
            <td>a ** b</td>
        </tr>
        <tr>
            <td>Modulus</td>
            <td>%</td>
            <td>a % b</td>
        </tr>
        <tr>
            <td>Floor Division</td>
            <td>{`//`}</td>
            <td>a // b</td>
        </tr>
    </tbody>
</table>

<h3>Assignment Operators</h3>
<p>These operators assign values to variables:</p>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Evaluated As</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>=</td>
            <td>a = b</td>
        </tr>
        <tr>
            <td>+=</td>
            <td>a += b  or  a = a + b</td>
        </tr>
        <tr>
            <td>-=</td>
            <td>a -= b  or  a = a - b</td>
        </tr>
        <tr>
            <td>*=</td>
            <td>a *= b  or  a = a * b</td>
        </tr>
        <tr>
            <td>**=</td>
            <td>a **= b  or  a = a ** b</td>
        </tr>
        <tr>
            <td>/=</td>
            <td>a /= b  or  a = a / b</td>
        </tr>
        <tr>
            <td>{`//=`}</td>
            <td>a //= b  or  a = a // b</td>
        </tr>
        <tr>
            <td>%=</td>
            <td>a %= b  or  a = a % b</td>
        </tr>
        <tr>
            <td>&=</td>
            <td>a &= b  or  a = a & b</td>
        </tr>
        <tr>
            <td>|=</td>
            <td>a |= b  or  a = a | b</td>
        </tr>
        <tr>
            <td>^=</td>
            <td>a ^= b  or  a = a ^ b</td>
        </tr>
        <tr>
            <td>&gt;=</td>
            <td>a &gt;&gt;= b  or  a = a &gt;&gt; b</td>
        </tr>
        <tr>
            <td>&lt;&lt;=</td>
            <td>a &lt;&lt;= b  or  a = a &lt;&lt; b</td>
        </tr>
    </tbody>
</table>

<h3>Bitwise Operators</h3>
<p>Bitwise operators perform operations on binary representations:</p>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Operator</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Bitwise AND</td>
            <td>&</td>
            <td>a & b</td>
        </tr>
        <tr>
            <td>Bitwise OR</td>
            <td>|</td>
            <td>a | b</td>
        </tr>
        <tr>
            <td>Bitwise NOT</td>
            <td>~</td>
            <td>~a</td>
        </tr>
        <tr>
            <td>Bitwise XOR</td>
            <td>^</td>
            <td>a ^ b</td>
        </tr>
        <tr>
            <td>Bitwise Right Shift</td>
            <td>&gt;&gt;</td>
            <td>a &gt;&gt; b</td>
        </tr>
        <tr>
            <td>Bitwise Left Shift</td>
            <td>&lt;&lt;</td>
            <td>a &lt;&lt; b</td>
        </tr>
    </tbody>
</table>

<h3>Comparison Operators</h3>
<p>These operators compare values:</p>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Operator</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Equal</td>
            <td>==</td>
            <td>a == b</td>
        </tr>
        <tr>
            <td>Not Equal</td>
            <td>!=</td>
            <td>a != b</td>
        </tr>
        <tr>
            <td>Less Than</td>
            <td>&lt;</td>
            <td>a &lt; b</td>
        </tr>
        <tr>
            <td>Greater Than</td>
            <td>&gt;</td>
            <td>a &gt; b</td>
        </tr>
        <tr>
            <td>Less Than or Equal to</td>
            <td>&lt;=</td>
            <td>a &lt;= b</td>
        </tr>
        <tr>
            <td>Greater Than or Equal to</td>
            <td>&gt;=</td>
            <td>a &gt;= b</td>
        </tr>
    </tbody>
</table>

<h3>Identity Operators</h3>
<p>Identity operators check if two variables refer to the same object:</p>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Example</th>
            <th>Evaluated As</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>is</td>
            <td>a is b</td>
            <td>Returns True if a and b are the same object.</td>
        </tr>
        <tr>
            <td>is not</td>
            <td>a is not b</td>
            <td>Returns True if a and b are not the same object.</td>
        </tr>
    </tbody>
</table>

<h3>Logical Operators</h3>
<p>Logical operators are used for logical operations:</p>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Operator</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>AND</td>
            <td>and</td>
            <td>a = 2 and b = 3</td>
        </tr>
        <tr>
            <td>OR</td>
            <td>or</td>
            <td>a = 2 or b = 3</td>
        </tr>
        <tr>
            <td>NOT</td>
            <td>not</td>
            <td>not (a = 2 or b = 3)</td>
        </tr>
    </tbody>
</table>

<h3>Membership Operators</h3>
<p>Membership operators check for membership in sequences:</p>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Example</th>
            <th>Evaluated As</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>in</td>
            <td>a in b</td>
            <td>Returns True if a is present in the sequence b.</td>
        </tr>
        <tr>
            <td>not in</td>
            <td>a not in b</td>
            <td>Returns True if a is not present in the sequence b.</td>
        </tr>
    </tbody>
</table>

<h3>Operator Precedence in Python</h3>
<p>The following table lists the precedence of operators from highest to lowest:</p>
<table>
    <thead>
        <tr>
            <th>Precedence</th>
            <th>Operator</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>**</td>
            <td>Exponentiation</td>
        </tr>
        <tr>
            <td>2</td>
            <td>+, -</td>
            <td>Unary plus and minus</td>
        </tr>
        <tr>
            <td>3</td>
            <td>*, /, //, %</td>
            <td>Multiplication, division, floor division, and modulus</td>
        </tr>
        <tr>
            <td>4</td>
            <td>+, -</td>
            <td>Addition and subtraction</td>
        </tr>
        <tr>
            <td>5</td>
            <td>&lt;, &gt;, ==, !=, &lt;=, &gt;=</td>
            <td>Comparison operators</td>
        </tr>
        <tr>
            <td>6</td>
            <td>and, or</td>
            <td>Logical operators</td>
        </tr>
    </tbody>
</table>
            </>
        ),

        "python-booleans": (
            <>
            <h2>Python Booleans</h2>

<p>In Python, a Boolean value can only be either <code>True</code> or <code>False</code>.</p>

<h2>Importance of Booleans</h2>

<p>Booleans are essential for evaluating conditions. For example, consider the following <code>if-else</code> statement:</p>

<pre><code>{`
x = 13
if x > 13:
    print("X is a prime number.")
else:
    print("X is not a prime number.")
`}</code></pre>

<p>This statement checks if <code>x</code> is greater than 13. The outcome will be either <code>True</code> or <code>False</code>.</p>

<p>The <code>bool()</code> function can be used to evaluate various values and return their Boolean equivalents.</p>

<h2>Examples of Boolean Evaluation</h2>

<h3>1. None:</h3>
<pre><code>{`print("None: ", bool(None))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`None: False`}</code></pre>

<h3>2. Numbers:</h3>
<pre><code>{`
print("Zero:", bool(0))
print("Integer:", bool(23))
print("Float:", bool(3.142))
print("Complex:", bool(5 + 2j))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
Zero: False
Integer: True
Float: True
Complex: True
`}</code></pre>

<h3>3. Strings:</h3>
<pre><code>{`
print("Any string:", bool("Nilesh"))
print("A string containing number:", bool("8.5"))
print("Empty string:", bool(""))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
Any string: True
A string containing number: True
Empty string: False
`}</code></pre>

<h3>4. Lists:</h3>
<pre><code>{`
print("Empty List:", bool([]))
print("List:", bool([1, 2, 5, 2, 1, 3]))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
Empty List: False
List: True
`}</code></pre>

<h3>5. Tuples:</h3>
<pre><code>{`
print("Empty Tuple:", bool(()))
print("Tuple:", bool(("Horse", "Rhino", "Tiger")))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
Empty Tuple: False
Tuple: True
`}</code></pre>

<h3>6. Sets and Dictionaries:</h3>
<pre><code>{`
print("Empty Dictionary:", bool({}))
print("Empty Set:", bool({"Mike", 22, "Science"}))
print("Dictionary:", bool({"name": "Lakshmi", "age": 24, "job": "unemployed"}))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
Empty Dictionary: False
Empty Set: True
Dictionary: True
`}</code></pre>

<h2>Summary</h2>

<p>Booleans are fundamental in Python for making decisions based on conditions. Understanding how different data types evaluate to <code>True</code> or <code>False</code> is crucial for effective programming.</p>

            </>
        ),



        // Python Strings

        "python-strings": (
            <>
            <h2>Python Strings</h2>

<h2>What are strings?</h2>
<p>In Python, anything that you enclose between single or double quotation marks is considered a string. A string is essentially a sequence or array of textual data.</p>
<p>Strings are used when working with Unicode characters.</p>

<h3>Example:</h3>
<pre><code>{`
name = "Samuel"
print("Hello, " + name)
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Hello, Samuel`}</code></pre>

<p><strong>Note:</strong> It does not matter whether you enclose your strings in single or double quotes; the output remains the same.</p>

<h2>Including Quotation Marks in Strings</h2>
<p>Sometimes, you might need to include quotation marks in your strings. For example, consider the sentence: <em>He said, “I want to eat an apple”.</em></p>

<h3>Wrong way ❌</h3>
<pre><code>{`print("He said, "I want to eat an apple".")`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`print("He said, "I want to eat an apple".")
                     ^
SyntaxError: invalid syntax`}</code></pre>

<h3>Right way ✔️</h3>
<pre><code>{`
print('He said, "I want to eat an apple".')
# OR
print("He said, "I want to eat an apple".")
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
He said, "I want to eat an apple".
He said, "I want to eat an apple".
`}</code></pre>

<h2>Multiline Strings</h2>
<p>If you want to write multiline strings, you can do so using triple quotes. This is useful for including notes, instructions, or explanations in your code.</p>

<h3>Example:</h3>
<pre><code>{`
receipe = """
1. Heat the pan and add oil
2. Crack the egg
3. Add salt in egg and mix well
4. Pour the mixture in pan
5. Fry on medium heat
"""
print(receipe)

note = '''
This is a multiline string
It is used to display a multiline message in the program
'''
print(note)
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
1. Heat the pan and add oil
2. Crack the egg
3. Add salt in egg and mix well
4. Pour the mixture in pan
5. Fry on medium heat

This is a multiline string
It is used to display a multiline message in the program
`}</code></pre>

            </>
        ),
        "operation-on-strings": (
            <>
            <h2>Operations on Strings</h2>

<h2>Finding the Length of a String:</h2>
<p>To determine the length of a string, you can utilize the <code>len()</code> function.</p>

<h3>Example:</h3>
<pre><code>{`
fruit_name = "Banana"
length = len(fruit_name)
print(f"{fruit_name} is a {length} letter word.")
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Banana is a 6 letter word.`}</code></pre>

<h2>Treating Strings as Arrays:</h2>
<p>In Python, a string can be viewed as a sequence of characters, which allows you to access individual elements like an array.</p>

<h3>Example:</h3>
<pre><code>{`
dessert = "Chocolate"
print(dessert[0:4])  # Accessing the first four characters
print(dessert[5])    # Getting the character at the sixth position
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
Choc
o
`}</code></pre>

<p><strong>Note:</strong> The technique of defining a start and end index to extract a portion of a string is known as slicing.</p>

<h3>Example:</h3>
<pre><code>{`
dessert = "Chocolate"
print(dessert[:4])     # Slicing from the beginning
print(dessert[4:])     # Slicing to the end
print(dessert[2:5])    # Slicing in the middle
print(dessert[-8:])    # Slicing using negative indexing
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
Choc
olate
oco
Chocolate
`}</code></pre>

<h2>Iterating Through a String:</h2>
<p>Since strings can be treated as arrays, you can loop through them easily.</p>

<h3>Example:</h3>
<pre><code>{`
letters = "XYZAB"
for letter in letters:
    print(letter)
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
X
Y
Z
A
B
`}</code></pre>


            </>
        ),
        "string-methods": (
            <>
            <h2>String Methods</h2>

<p>Python comes equipped with a variety of built-in methods that allow us to manipulate and modify strings effectively.</p>

<h3>upper()</h3>
<p>The <code>upper()</code> method transforms all characters in a string to uppercase.</p>
<pre><code>{`
text = "HelloWorld"
print(text.upper())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`HELLOWORLD`}</code></pre>

<h3>lower()</h3>
<p>The <code>lower()</code> method converts all characters in a string to lowercase.</p>
<pre><code>{`
text = "HelloWorld"
print(text.lower())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`helloworld`}</code></pre>

<h3>strip()</h3>
<p>The <code>strip()</code> method removes any leading or trailing whitespace from a string.</p>
<pre><code>{`
text = "   Hello Python!   "
print(text.strip())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Hello Python!`}</code></pre>

<h3>rstrip()</h3>
<p>The <code>rstrip()</code> method eliminates any trailing characters from the right end of the string.</p>
<pre><code>{`
text = "Greetings!!!"
print(text.rstrip("!"))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Greetings`}</code></pre>

<h3>replace()</h3>
<p>The <code>replace()</code> method substitutes a specified substring with another string.</p>
<pre><code>{`
text = "Hello World"
print(text.replace("World", "Everyone"))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Hello Everyone`}</code></pre>

<h3>split()</h3>
<p>The <code>split()</code> method divides a string into a list based on a specified delimiter.</p>
<pre><code>{`
text = "Python is fun"
print(text.split(" "))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Python', 'is', 'fun']`}</code></pre>

<h3>capitalize()</h3>
<p>The <code>capitalize()</code> method capitalizes the first character of the string, while turning all other characters to lowercase.</p>
<pre><code>{`
text1 = "python"
print(text1.capitalize())
text2 = "pYTHON"
print(text2.capitalize())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
Python
Python
`}</code></pre>

<h3>center()</h3>
<p>The <code>center()</code> method centers a string within a specified width, padding it with spaces.</p>
<pre><code>{`
text = "Hello!"
print(text.center(20))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
        Hello!        
`}</code></pre>

<p>Additionally, you can specify a padding character:</p>
<pre><code>{`
text = "Hello!"
print(text.center(20, '*'))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`
*******Hello!********
`}</code></pre>

<h3>count()</h3>
<p>The <code>count()</code> method returns the number of times a substring appears in the string.</p>
<pre><code>{`
text = "banana"
print(text.count("a"))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`3`}</code></pre>

<h3>endswith()</h3>
<p>The <code>endswith()</code> method checks whether a string ends with a specified substring.</p>
<pre><code>{`
text = "Goodbye!"
print(text.endswith("!"))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`True`}</code></pre>

<h3>find()</h3>
<p>The <code>find()</code> method locates the first occurrence of a substring and returns its index; if not found, it returns -1.</p>
<pre><code>{`
text = "This is a test."
print(text.find("is"))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`2`}</code></pre>

<h3>index()</h3>
<p>Similar to <code>find()</code>, the <code>index()</code> method returns the index of the first occurrence of a substring but raises an exception if the substring is not found.</p>
<pre><code>{`
text = "This is a test."
print(text.index("test"))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`10`}</code></pre>

<h3>isalnum()</h3>
<p>The <code>isalnum()</code> method checks if the string consists solely of alphanumeric characters.</p>
<pre><code>{`
text = "Python123"
print(text.isalnum())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`True`}</code></pre>

<h3>isalpha()</h3>
<p>The <code>isalpha()</code> method returns <code>True</code> if the string contains only alphabetic characters.</p>
<pre><code>{`
text = "HelloWorld"
print(text.isalpha())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`True`}</code></pre>

<h3>islower()</h3>
<p>The <code>islower()</code> method checks if all characters in the string are in lowercase.</p>
<pre><code>{`
text = "hello"
print(text.islower())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`True`}</code></pre>

<h3>isprintable()</h3>
<p>The <code>isprintable()</code> method verifies if all characters in the string are printable.</p>
<pre><code>{`
text = "Merry Christmas"
print(text.isprintable())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`True`}</code></pre>

<h3>isspace()</h3>
<p>The <code>isspace()</code> method checks if the string consists entirely of whitespace characters.</p>
<pre><code>{`
text = "   "
print(text.isspace())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`True`}</code></pre>

<h3>istitle()</h3>
<p>The <code>istitle()</code> method checks if each word in the string starts with an uppercase letter.</p>
<pre><code>{`
text = "The Great Gatsby"
print(text.istitle())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`True`}</code></pre>

<h3>isupper()</h3>
<p>The <code>isupper()</code> method verifies if all characters in the string are in uppercase.</p>
<pre><code>{`
text = "HELLO"
print(text.isupper())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`True`}</code></pre>

<h3>startswith()</h3>
<p>The <code>startswith()</code> method checks if the string begins with a specified substring.</p>
<pre><code>{`
text = "Hello, World!"
print(text.startswith("Hello"))
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`True`}</code></pre>

<h3>swapcase()</h3>
<p>The <code>swapcase()</code> method toggles the case of each character in the string.</p>
<pre><code>{`
text = "Python Is Fun"
print(text.swapcase())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`pYTHON iS fUN`}</code></pre>

<h3>title()</h3>
<p>The <code>title()</code> method capitalizes the first character of each word in the string.</p>
<pre><code>{`
text = "hello world"
print(text.title())
`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Hello World`}</code></pre>

            </>
        ),
        "format-strings": (
            <>
            <h2>String Formatting</h2>
<p>When we want to combine two distinct strings, we can use concatenation to merge them into one.</p>

<h3>Example:</h3>
<pre><code>{`str4 = "Captain"
str5 = "America"
str6 = str4 + " " + str5
print(str6)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Captain America`}</code></pre>

<p>In the example above, we saw how to join two strings. But how do we handle concatenation when one of the values is an integer?</p>

<h3>Example:</h3>
<pre><code>{`name = "Guzman"
age = 18
print("My name is " + name + " and my age is " + age)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`TypeError: can only concatenate str (not "int") to str`}</code></pre>
<p>This error indicates that it's not permissible to concatenate a string with a different data type.</p>

<h3>What’s the solution?</h3>
<p>We can utilize the <code>format()</code> method, which allows us to embed values into a string at designated placeholders.</p>

<h3>Example:</h3>
<pre><code>{`name = "Guzman"
age = 18
statement = "My name is {} and my age is {}."
print(statement.format(name, age))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`My name is Guzman and my age is 18.`}</code></pre>

<p>Additionally, we can use indexes to control the order of the arguments within the string.</p>

<h3>Example:</h3>
<pre><code>{`quantity = 2
fruit = "Apples"
cost = 120.0
statement = "I want to buy {2} dozen {0} for {1}$"
print(statement.format(fruit, cost, quantity))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`I want to buy 2 dozen Apples for $120.0`}</code></pre>

            </>
        ),
        "escape-characters": (
            <>
            <h2>Escape Characters</h2>
<p>Escape characters play a crucial role in Python by allowing us to include special characters in strings, such as backslashes, newlines, and tabs.</p>

<h3>Single/Double Quotes</h3>
<p>These are used to include single or double quotes within a string.</p>

<h4>Example:</h4>
<pre><code>{`str1 = "He was \\"Flabergasted\\"."
str2 = 'He was \\'Flabergasted\\'.'
print(str1)
print(str2)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`He was "Flabergasted".
He was 'Flabergasted'.`}</code></pre>

<h3>New Line</h3>
<p>This character inserts a newline wherever specified.</p>

<h4>Example:</h4>
<pre><code>{`str1 = "I love doing Yoga. \\nIt cleanses my mind and my body."
print(str1)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`I love doing Yoga.
It cleanses my mind and my body.`}</code></pre>

<h3>Tab</h3>
<p>This character inserts a tab space wherever specified.</p>

<h4>Example:</h4>
<pre><code>{`str2 = "Hello \\t\\tWorld \\t!!!"
print(str2)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Hello           World   !!!`}</code></pre>

<h3>Backspace</h3>
<p>This character removes the character before it wherever it appears.</p>

<h4>Example:</h4>
<pre><code>{`str2 = "Hello  \\bWorld !!!"
print(str2)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Hello World !!!`}</code></pre>

<h3>Backslash</h3>
<p>This character is used to insert a backslash into a string.</p>

<h4>Example:</h4>
<pre><code>{`str3 = "What will you eat? Apple\\\\Banana"
print(str3)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`What will you eat? Apple \\ Banana`}</code></pre>

            </>
        ),



        // Python Lists

        "python-lists": (
            <>
            <h2>Python Lists</h2>
<p>Lists are ordered collections of data items that allow you to store multiple values within a single variable.</p>
<p>Items in a list are separated by commas and enclosed in square brackets <code>[]</code>.</p>
<p>Lists are mutable, meaning you can modify them after they are created.</p>

<h3>Example 1:</h3>
<pre><code>{`lst1 = [1, 2, 2, 3, 5, 4, 6]
lst2 = ["Red", "Green", "Blue"]
print(lst1)
print(lst2)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`[1, 2, 2, 3, 5, 4, 6]
['Red', 'Green', 'Blue']`}</code></pre>

<h3>Example 2:</h3>
<pre><code>{`details = ["Abhijeet", 18, "FYBScIT", 9.8]
print(details)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Abhijeet', 18, 'FYBScIT', 9.8]`}</code></pre>
<p>As demonstrated, a single list can contain items of different data types.</p>

            </>
        ),
        "list-indexes": (
            <>
            <h2>List Indexes</h2>
<p>Each item in a list is assigned a unique index, which allows you to access specific elements. The first item has an index of <code>[0]</code>, the second item has an index of <code>[1]</code>, the third item has an index of <code>[2]</code>, and so forth.</p>

<h3>Example:</h3>
<pre><code>{`colors = ["Red", "Green", "Blue", "Yellow", "Green"]
#          [0]      [1]     [2]      [3]      [4]`}</code></pre>

<h3>Accessing List Items:</h3>

<h4>Positive Indexing:</h4>
<p>We can access items using their positive indexes.</p>
<pre><code>{`colors = ["Red", "Green", "Blue", "Yellow", "Green"]
print(colors[2])
print(colors[4])
print(colors[0])`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Blue
Green
Red`}</code></pre>

<h4>Negative Indexing:</h4>
<p>Negative indexing allows access to items from the end of the list. The last item has an index of <code>[-1]</code>, the second last has an index of <code>[-2]</code>, and so on.</p>
<pre><code>{`colors = ["Red", "Green", "Blue", "Yellow", "Green"]
print(colors[-1])
print(colors[-3])
print(colors[-5])`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Green
Blue
Red`}</code></pre>

<h4>Checking for Item Presence:</h4>
<p>You can check if an item exists in the list using the <code>in</code> keyword.</p>
<pre><code>{`colors = ["Red", "Green", "Blue", "Yellow", "Green"]
if "Yellow" in colors:
    print("Yellow is present.")
else:
    print("Yellow is absent.")`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Yellow is present.`}</code></pre>

<pre><code>{`colors = ["Red", "Green", "Blue", "Yellow", "Green"]
if "Orange" in colors:
    print("Orange is present.")
else:
    print("Orange is absent.")`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Orange is absent.`}</code></pre>

<h4>Range of Index:</h4>
<p>You can print a range of list items by specifying a start index, an end index, and an optional jump index.</p>
<p><strong>Syntax:</strong> <code>List[start : end : jumpIndex]</code></p>

<h4>Example: Printing Elements Within a Range:</h4>
<pre><code>{`animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
print(animals[3:7])    # using positive indexes
print(animals[-7:-2])   # using negative indexes`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['mouse', 'pig', 'horse', 'donkey']
['bat', 'mouse', 'pig', 'horse', 'donkey']`}</code></pre>
<p>Note: The end index is not included in the output.</p>

<h4>Example: Printing All Elements from a Given Index to the End:</h4>
<pre><code>{`animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
print(animals[4:])    # using positive indexes
print(animals[-4:])   # using negative indexes`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['pig', 'horse', 'donkey', 'goat', 'cow']
['horse', 'donkey', 'goat', 'cow']`}</code></pre>
<p>When no end index is provided, all values until the end are printed.</p>

<h4>Example: Printing All Elements from Start to a Given Index:</h4>
<pre><code>{`animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
print(animals[:6])    # using positive indexes
print(animals[:-3])    # using negative indexes`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['cat', 'dog', 'bat', 'mouse', 'pig', 'horse']
['cat', 'dog', 'bat', 'mouse', 'pig', 'horse']`}</code></pre>
<p>When no start index is provided, it prints all values from the beginning up to the end index.</p>

<h4>Example: Print Alternate Values:</h4>
<pre><code>{`animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
print(animals[::2])        # using positive indexes
print(animals[-8:-1:2])    # using negative indexes`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['cat', 'bat', 'pig', 'donkey', 'cow']
['dog', 'mouse', 'horse', 'goat']`}</code></pre>
<p>By omitting the start and end indices and providing a jump index of <code>2</code>, only alternate values are printed.</p>

<h4>Example: Printing Every 3rd Consecutive Value Within a Given Range:</h4>
<pre><code>{`animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
print(animals[1:8:3])`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['dog', 'pig', 'goat']`}</code></pre>
<p>In this case, a jump index of <code>3</code> is used to print every 3rd element within the specified index.</p>

            </>
        ),
        "add-list-items": (
            <>
            <h2>Add List Items</h2>
<p>There are three methods to add items to a list: <code>append()</code>, <code>insert()</code>, and <code>extend()</code>.</p>

<h3>append()</h3>
<p>The <code>append()</code> method adds an item to the end of the existing list.</p>
<pre><code>{`colors = ["voilet", "indigo", "blue"]
colors.append("green")
print(colors)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['voilet', 'indigo', 'blue', 'green']`}</code></pre>

<h3>insert()</h3>
<p>If you want to insert an item at a specific index in the middle of the list, use the <code>insert()</code> method. You need to specify both the index and the item to insert.</p>
<pre><code>{`colors = ["voilet", "indigo", "blue"]
#           [0]        [1]      [2]
colors.insert(1, "green")   # inserts item at index 1
# Updated list: colors = ["voilet", "green", "indigo", "blue"]
#       indexes              [0]       [1]       [2]      [3]
print(colors)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['voilet', 'green', 'indigo', 'blue']`}</code></pre>

<h3>extend()</h3>
<p>If you want to append an entire list or any other collection (like a set, tuple, or dictionary) to the existing list, use the <code>extend()</code> method.</p>

<h4>Example 1: Add a List to a List</h4>
<pre><code>{`colors = ["voilet", "indigo", "blue"]
rainbow = ["green", "yellow", "orange", "red"]
colors.extend(rainbow)
print(colors)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['voilet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']`}</code></pre>

<h4>Example 2: Add a Tuple to a List</h4>
<pre><code>{`cars = ["Hyundai", "Tata", "Mahindra"]
cars2 = ("Mercedes", "Volkswagen", "BMW")
cars.extend(cars2)
print(cars)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Hyundai', 'Tata', 'Mahindra', 'Mercedes', 'Volkswagen', 'BMW']`}</code></pre>

<h4>Example 3: Add a Set to a List</h4>
<pre><code>{`cars = ["Hyundai", "Tata", "Mahindra"]
cars2 = {"Mercedes", "Volkswagen", "BMW"}
cars.extend(cars2)
print(cars)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Hyundai', 'Tata', 'Mahindra', 'Mercedes', 'BMW', 'Volkswagen']`}</code></pre>

<h4>Example 4: Add a Dictionary to a List</h4>
<p>When adding a dictionary to a list, only the keys are added, not the values.</p>
<pre><code>{`students = ["Sakshi", "Aaditya", "Ritika"]
students2 = {"Yash":18, "Devika":19, "Soham":19}    # only add keys
students.extend(students2)
print(students)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Sakshi', 'Aaditya', 'Ritika', 'Yash', 'Devika', 'Soham']`}</code></pre>

<h3>Concatenate Two Lists</h3>
<p>You can also concatenate two lists to combine them.</p>
<pre><code>{`colors = ["voilet", "indigo", "blue", "green"]
colors2 = ["yellow", "orange", "red"]
print(colors + colors2)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['voilet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']`}</code></pre>

            </>
        ),
        "remove-list-items": (
            <>
            <h2>Remove List Items</h2>
<p>There are various methods to remove items from a list: <code>pop()</code>, <code>remove()</code>, <code>del</code>, and <code>clear()</code>.</p>

<h3>pop()</h3>
<p>The <code>pop()</code> method removes the last item from the list if no index is provided. If an index is specified, it removes the item at that index.</p>

<h4>Example 1: Remove Last Item</h4>
<pre><code>{`colors = ["Red", "Green", "Blue", "Yellow", "Green"]
colors.pop()  # removes the last item of the list
print(colors)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Red', 'Green', 'Blue', 'Yellow']`}</code></pre>

<h4>Example 2: Remove Item at Specific Index</h4>
<pre><code>{`colors = ["Red", "Green", "Blue", "Yellow", "Green"]
colors.pop(1)  # removes item at index 1
print(colors)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Red', 'Blue', 'Yellow', 'Green']`}</code></pre>

<h3>remove()</h3>
<p>The <code>remove()</code> method removes a specific item from the list.</p>
<pre><code>{`colors = ["voilet", "indigo", "blue", "green", "yellow"]
colors.remove("blue")
print(colors)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['voilet', 'indigo', 'green', 'yellow']`}</code></pre>

<h3>del</h3>
<p>The <code>del</code> keyword is not a method; instead, it deletes an item at a specific index or removes the entire list.</p>

<h4>Example 1: Delete Item at Specific Index</h4>
<pre><code>{`colors = ["voilet", "indigo", "blue", "green", "yellow"]
del colors[3]
print(colors)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['voilet', 'indigo', 'blue', 'yellow']`}</code></pre>

<h4>Example 2: Delete Entire List</h4>
<pre><code>{`colors = ["voilet", "indigo", "blue", "green", "yellow"]
del colors
print(colors)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`NameError: name 'colors' is not defined`}</code></pre>
<p>We get an error because the entire list has been deleted, and the variable <code>colors</code> no longer exists.</p>

<h3>clear()</h3>
<p>If you want to remove all items from the list without deleting the list itself, you can use the <code>clear()</code> method. This method clears all items and results in an empty list.</p>
<pre><code>{`colors = ["voilet", "indigo", "blue", "green", "yellow"]
colors.clear()
print(colors)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`[]`}</code></pre>

            </>
        ),
        "change-list-items": (
            <>
            <h2>Change List Items</h2>
<p>Changing items in a list is straightforward; you simply specify the index of the item you want to replace.</p>

<h3>Example 1: Change a Single Item</h3>
<pre><code>{`names = ["Harry", "Sarah", "Nadia", "Oleg", "Steve"]
names[2] = "Millie"
print(names)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Harry', 'Sarah', 'Millie', 'Oleg', 'Steve']`}</code></pre>

<h3>Change Multiple Items</h3>
<p>You can also change more than one item at once by specifying a range of indexes.</p>

<h4>Example 2: Change a Range of Items</h4>
<pre><code>{`names = ["Harry", "Sarah", "Nadia", "Oleg", "Steve"]
names[2:4] = ["Juan", "Anastasia"]
print(names)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Harry', 'Sarah', 'Juan', 'Anastasia', 'Steve']`}</code></pre>

<h3>Handling Index Range Greater than List Length</h3>
<p>What happens if the range of indexes specified is greater than the number of items provided?</p>

<h4>Example 3: Replace with Fewer Items</h4>
<pre><code>{`names = ["Harry", "Sarah", "Nadia", "Oleg", "Steve"]
names[1:4] = ["Juan", "Anastasia"]
print(names)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Harry', 'Juan', 'Anastasia', 'Steve']`}</code></pre>

<h3>Handling More Items than the Index Range</h3>
<p>What if you provide more items to replace than the index range specified?</p>

<h4>Example 4: Replace with More Items</h4>
<pre><code>{`names = ["Harry", "Sarah", "Nadia", "Oleg", "Steve"]
names[2:3] = ["Juan", "Anastasia", "Bruno", "Olga", "Rosa"]
print(names)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Harry', 'Sarah', 'Juan', 'Anastasia', 'Bruno', 'Olga', 'Rosa', 'Oleg', 'Steve']`}</code></pre>

            </>
        ),
        "list-comprehension": (
            <>
            <h2>List Comprehension</h2>
<p>List comprehensions are a concise way to create new lists from other iterables like lists, tuples, dictionaries, sets, and even strings or arrays.</p>

<h3>Syntax</h3>
<pre><code>{`List = [expression(item) for item in iterable if condition]`}</code></pre>
<ul>
    <li><strong>expression:</strong> The item being iterated.</li>
    <li><strong>iterable:</strong> This can be a list, tuple, dictionary, set, or even an array or string.</li>
    <li><strong>condition:</strong> A check to determine if the item should be added to the new list.</li>
</ul>

<h3>Example 1: Filter Items with the Letter "o"</h3>
<pre><code>{`names = ["Milo", "Sarah", "Bruno", "Anastasia", "Rosa"]
namesWith_O = [item for item in names if "o" in item]
print(namesWith_O)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Milo', 'Bruno', 'Rosa']`}</code></pre>

<h3>Example 2: Filter Items Longer than 4 Letters</h3>
<pre><code>{`names = ["Milo", "Sarah", "Bruno", "Anastasia", "Rosa"]
namesWith_O = [item for item in names if len(item) > 4]
print(namesWith_O)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['Sarah', 'Bruno', 'Anastasia']`}</code></pre>

            </>
        ),
        "list-methods": (
            <>
            <h2>List Methods</h2>
<p>We have previously discussed methods like <code>append()</code>, <code>clear()</code>, <code>extend()</code>, <code>insert()</code>, <code>pop()</code>, and <code>remove()</code>. Now we will explore some additional list methods:</p>

<h3>sort()</h3>
<p>This method sorts the list in ascending order.</p>

<h4>Example 1:</h4>
<pre><code>{`colors = ["voilet", "indigo", "blue", "green"]
colors.sort()
print(colors)

num = [4, 2, 5, 3, 6, 1, 2, 1, 2, 8, 9, 7]
num.sort()
print(num)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['blue', 'green', 'indigo', 'voilet']
[1, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]`}</code></pre>

<h4>Descending Order:</h4>
<p>To print the list in descending order, set <code>reverse=True</code> as a parameter in the <code>sort()</code> method.</p>

<pre><code>{`colors = ["voilet", "indigo", "blue", "green"]
colors.sort(reverse=True)
print(colors)

num = [4, 2, 5, 3, 6, 1, 2, 1, 2, 8, 9, 7]
num.sort(reverse=True)
print(num)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['voilet', 'indigo', 'green', 'blue']
[9, 8, 7, 6, 5, 4, 3, 2, 2, 2, 1, 1]`}</code></pre>

<p>Note: The <code>reverse</code> parameter is set to <code>False</code> by default. Do not confuse the <code>reverse</code> parameter with the <code>reverse()</code> method.</p>

<h3>reverse()</h3>
<p>This method reverses the order of the list.</p>
<pre><code>{`colors = ["voilet", "indigo", "blue", "green"]
colors.reverse()
print(colors)

num = [4, 2, 5, 3, 6, 1, 2, 1, 2, 8, 9, 7]
num.reverse()
print(num)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['green', 'blue', 'indigo', 'voilet']
[7, 9, 8, 2, 1, 2, 1, 6, 3, 5, 2, 4]`}</code></pre>

<h3>index()</h3>
<p>This method returns the index of the first occurrence of a specified item in the list.</p>
<pre><code>{`colors = ["voilet", "green", "indigo", "blue", "green"]
print(colors.index("green"))

num = [4, 2, 5, 3, 6, 1, 2, 1, 3, 2, 8, 9, 7]
print(num.index(3))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`1
3`}</code></pre>

<h3>count()</h3>
<p>This method returns the count of the number of items with the given value.</p>
<pre><code>{`colors = ["voilet", "green", "indigo", "blue", "green"]
print(colors.count("green"))

num = [4, 2, 5, 3, 6, 1, 2, 1, 3, 2, 8, 9, 7]
print(num.count(2))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`2
3`}</code></pre>

<h3>copy()</h3>
<p>This method returns a copy of the list, allowing you to perform operations on the copied list without modifying the original list.</p>
<pre><code>{`colors = ["voilet", "green", "indigo", "blue"]
newlist = colors.copy()
print(colors)
print(newlist)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`['voilet', 'green', 'indigo', 'blue']
['voilet', 'green', 'indigo', 'blue']`}</code></pre>

            </>
        ),


        // Python Tuples
        "python-tuples": (
            <>
            <h2>Python Tuples</h2>
<p>Tuples are ordered collections of data items. They store multiple items in a single variable. Tuple items are separated by commas and enclosed within round brackets <code>()</code>. Tuples are unchangeable, meaning we cannot alter them after creation.</p>

<h3>Example 1:</h3>
<pre><code>{`tuple1 = (1, 2, 2, 3, 5, 4, 6)
tuple2 = ("Red", "Green", "Blue")
print(tuple1)
print(tuple2)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`(1, 2, 2, 3, 5, 4, 6)
('Red', 'Green', 'Blue')`}</code></pre>

<h3>Example 2:</h3>
<pre><code>{`details = ("Abhijeet", 18, "FYBScIT", 9.8)
print(details)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`('Abhijeet', 18, 'FYBScIT', 9.8)`}</code></pre>

            </>
        ),
        "tuple-indexes": (
            <>
            <h2>Tuple Indexes</h2>
<p>Each item/element in a tuple has its own unique index. This index can be used to access any particular item from the tuple. The first item has index <code>[0]</code>, the second item has index <code>[1]</code>, the third item has index <code>[2]</code>, and so on.</p>

<h3>Example:</h3>
<pre><code>{`country = ("Spain", "Italy", "India", "England", "Germany")
#            [0]      [1]      [2]       [3]        [4]`}</code></pre>

<h2>Accessing Tuple Items:</h2>

<h3>I. Positive Indexing:</h3>
<p>We can access items using their positive indexes.</p>
<pre><code>{`country = ("Spain", "Italy", "India", "England", "Germany")
#            [0]      [1]      [2]       [3]        [4]
print(country[1])
print(country[3])
print(country[0])`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Italy
England
Spain`}</code></pre>

<h3>II. Negative Indexing:</h3>
<p>Negative indexing is used to access items from the end of the tuple.</p>
<pre><code>{`country = ("Spain", "Italy", "India", "England", "Germany")
#            [0]      [1]      [2]       [3]        [4]
print(country[-1])
print(country[-3])
print(country[-4])`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Germany
India
Italy`}</code></pre>

<h3>III. Check for Item:</h3>
<p>We can check if a given item is present in the tuple using the <code>in</code> keyword.</p>
<h4>Example 1:</h4>
<pre><code>{`country = ("Spain", "Italy", "India", "England", "Germany")
if "Germany" in country:
    print("Germany is present.")
else:
    print("Germany is absent.")`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Germany is present.`}</code></pre>

<h4>Example 2:</h4>
<pre><code>{`country = ("Spain", "Italy", "India", "England", "Germany")
if "Russia" in country:
    print("Russia is present.")
else:
    print("Russia is absent.")`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Russia is absent.`}</code></pre>

<h3>IV. Range of Index:</h3>
<p>You can print a range of tuple items by specifying a start index, an end index, and an optional jump index.</p>

<h4>Syntax:</h4>
<p><code>Tuple[start : end : jumpIndex]</code></p>

<h4>Example: Printing Elements Within a Particular Range:</h4>
<pre><code>{`animals = ("cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow")
print(animals[3:7])     # using positive indexes
print(animals[-7:-2])   # using negative indexes`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`('mouse', 'pig', 'horse', 'donkey')
('bat', 'mouse', 'pig', 'horse', 'donkey')`}</code></pre>

<p>Here, the end index provided is not included in the output.</p>

<h4>Example: Printing All Elements from a Given Index to the End:</h4>
<pre><code>{`animals = ("cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow")
print(animals[4:])      # using positive indexes
print(animals[-4:])     # using negative indexes`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`('pig', 'horse', 'donkey', 'goat', 'cow')
('horse', 'donkey', 'goat', 'cow')`}</code></pre>

<h4>Example: Printing All Elements from Start to a Given Index:</h4>
<pre><code>{`animals = ("cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow")
print(animals[:6])      # using positive indexes
print(animals[:-3])     # using negative indexes`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`('cat', 'dog', 'bat', 'mouse', 'pig', 'horse')
('cat', 'dog', 'bat', 'mouse', 'pig', 'horse')`}</code></pre>

<h4>Example: Print Alternate Values:</h4>
<pre><code>{`animals = ("cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow")
print(animals[::2])     # using positive indexes
print(animals[-8:-1:2]) # using negative indexes`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`('cat', 'bat', 'pig', 'donkey', 'cow')
('dog', 'mouse', 'horse', 'goat')`}</code></pre>

<p>In this case, we provided a jump index of <code>2</code> to print only alternate values.</p>

<h4>Example: Printing Every 3rd Consecutive Element Within a Given Range:</h4>
<pre><code>{`animals = ("cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow")
print(animals[1:8:3])`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`('dog', 'pig', 'goat')`}</code></pre>

<p>Here, the jump index is <code>3</code>, so it prints every 3rd element within the specified index range.</p>

            </>
        ),
        "manipulating-tuples": (
            <>
            <h2>Manipulating Tuples</h2>
<p>Tuples are immutable, meaning you cannot add, remove, or change items directly. To modify a tuple, you first need to convert it into a list, perform the desired operations, and then convert it back into a tuple.</p>

<h3>Example:</h3>
<pre><code>{`countries = ("Spain", "Italy", "India", "England", "Germany")
temp = list(countries)
temp.append("Russia")       # Add an item 
temp.pop(3)                 # Remove an item
temp[2] = "Finland"         # Change an item
countries = tuple(temp)
print(countries)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`('Spain', 'Italy', 'Finland', 'Germany', 'Russia')`}</code></pre>

<p>In this example, we converted the tuple into a list, manipulated the list using various methods, and then converted it back into a tuple.</p>

<h2>Concatenating Tuples</h2>
<p>You can also concatenate two tuples directly without converting them into lists.</p>

<h3>Example:</h3>
<pre><code>{`countries = ("Pakistan", "Afghanistan", "Bangladesh", "ShriLanka")
countries2 = ("Vietnam", "India", "China")
southEastAsia = countries + countries2
print(southEastAsia)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`('Pakistan', 'Afghanistan', 'Bangladesh', 'ShriLanka', 'Vietnam', 'India', 'China')`}</code></pre>

            </>
        ),
        "unpack-tuples": (
            <>
            <h2>Unpack Tuples</h2>
<p>Unpacking is the process of assigning the items of a tuple to individual variables.</p>

<h3>Example:</h3>
<pre><code>{`info = ("Marcus", 20, "MIT")
(name, age, university) = info
print("Name:", name)
print("Age:", age)
print("Studies at:", university)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Name: Marcus
Age: 20
Studies at: MIT`}</code></pre>

<p>In this example, the number of items in the tuple matches the number of variables.</p>

<h3>Handling More Items Than Variables</h3>
<p>If there are more items in the tuple than variables, you can use an asterisk (*) to capture the extra items into a list.</p>

<h3>Example 1:</h3>
<pre><code>{`fauna = ("cat", "dog", "horse", "pig", "parrot", "salmon")
(*animals, bird, fish) = fauna
print("Animals:", animals)
print("Bird:", bird)
print("Fish:", fish)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Animals: ['cat', 'dog', 'horse', 'pig']
Bird: parrot
Fish: salmon`}</code></pre>

<h3>Example 2:</h3>
<pre><code>{`fauna = ("parrot", "cat", "dog", "horse", "pig", "salmon")
(bird, *animals, fish) = fauna
print("Animals:", animals)
print("Bird:", bird)
print("Fish:", fish)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Animals: ['cat', 'dog', 'horse', 'pig']
Bird: parrot
Fish: salmon`}</code></pre>

<h3>Example 3:</h3>
<pre><code>{`fauna = ("parrot", "salmon", "cat", "dog", "horse", "pig")
(bird, fish, *animals) = fauna
print("Animals:", animals)
print("Bird:", bird)
print("Fish:", fish)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Animals: ['cat', 'dog', 'horse', 'pig']
Bird: parrot
Fish: salmon`}</code></pre>

            </>
        ),



        // Python Sets
        "python-sets": (
            <>
            <h2>Python Sets</h2>
<p>Sets are unordered collections of data items that allow you to store multiple items in a single variable. The items in a set are separated by commas and enclosed within curly brackets (<code>{}</code>). Sets are immutable, meaning you cannot change the items of a set once it has been created. Additionally, sets do not allow duplicate items.</p>

<h3>Example:</h3>
<pre><code>{`info = {"Carla", 19, False, 5.9, 19}
print(info)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{False, 19, 5.9, 'Carla'}`}</code></pre>

<p>In this example, the items in the set are displayed in a random order, and you cannot access them using index numbers. Duplicate values are also eliminated.</p>

<h3>Accessing Set Items</h3>
<p>You can access the items in a set using a <code>for</code> loop.</p>

<h4>Example:</h4>
<pre><code>{`info = {"Carla", 19, False, 5.9}
for item in info:
    print(item)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`False
Carla
19
5.9`}</code></pre>

            </>
        ),
        "add-or-remove-set-items": (
            <>
            <h2>Add/Remove Set Items</h2>

<h3>Adding Items to a Set</h3>
<p>To add a single item to a set, you can use the <code>add()</code> method.</p>

<h4>Example:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.add("Helsinki")
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Tokyo', 'Helsinki', 'Madrid', 'Berlin', 'Delhi'}`}</code></pre>

<p>If you want to add multiple items, you can create another set or use any iterable object (like a list, tuple, or dictionary) and utilize the <code>update()</code> method to add them to the existing set.</p>

<h4>Example:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Helsinki", "Warsaw", "Seoul"}
cities.update(cities2)
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Seoul', 'Berlin', 'Delhi', 'Tokyo', 'Warsaw', 'Helsinki', 'Madrid'}`}</code></pre>

<h3>Removing Items from a Set</h3>
<p>You can remove items from a set using the <code>remove()</code> and <code>discard()</code> methods.</p>

<h4>Example 1:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.remove("Tokyo")
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Delhi', 'Berlin', 'Madrid'}`}</code></pre>

<h4>Example 2:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.discard("Delhi")
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Berlin', 'Tokyo', 'Madrid'}`}</code></pre>

<p>The key difference between <code>remove()</code> and <code>discard()</code> is that <code>remove()</code> raises an error if you try to delete an item that is not present in the set, whereas <code>discard()</code> does not.</p>

<h4>Example 3:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.remove("Seoul")`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`KeyError: 'Seoul'`}</code></pre>

<h4>Example 4:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.discard("Seoul")
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Madrid', 'Delhi', 'Tokyo', 'Berlin'}`}</code></pre>

<p>There are other methods for removing items from a set, including <code>pop()</code>, <code>del</code>, and <code>clear()</code>.</p>

<h4>Using <code>pop()</code>:</h4>
<p>The <code>pop()</code> method removes and returns an arbitrary item from the set, but since sets are unordered, you won't know which item was removed unless you assign the result to a variable.</p>

<h4>Example:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
item = cities.pop()
print(cities)
print(item)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Tokyo', 'Delhi', 'Berlin'}
Madrid`}</code></pre>

<h4>Using <code>del</code>:</h4>
<p><code>del</code> is a keyword that can delete an entire set.</p>

<h4>Example:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
del cities
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`NameError: name 'cities' is not defined`}</code></pre>
<p>This error occurs because the set has been completely deleted, and the variable <code>cities</code> no longer exists.</p>

<p>If you only want to delete all items from the set without removing the set itself, you can use the <code>clear()</code> method.</p>

<h4>Example:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.clear()
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`set()`}</code></pre>

<h3>Checking if an Item Exists</h3>
<p>You can also check if an item exists in a set using the <code>in</code> keyword.</p>

<h4>Example 1:</h4>
<pre><code>{`info = {"Carla", 19, False, 5.9}
if "Carla" in info:
    print("Carla is present.")
else:
    print("Carla is absent.")`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Carla is present.`}</code></pre>

<h4>Example 2:</h4>
<pre><code>{`info = {"Carla", 19, False, 5.9}
if "Carmen" in info:
    print("Carmen is present.")
else:
    print("Carmen is absent.")`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`Carmen is absent.`}</code></pre>

            </>
        ),
        "join-sets": (
            <>
            <h2>Joining Sets</h2>
<p>Sets in Python function similarly to mathematical sets, allowing you to perform operations like union and intersection.</p>

<h3>I. Union (<code>union()</code> and <code>update()</code>)</h3>
<p>The <code>union()</code> and <code>update()</code> methods combine the items from two sets. The <code>union()</code> method returns a new set containing all unique items, while the <code>update()</code> method adds items from one set to an existing set.</p>

<h4>Example 1:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Tokyo", "Seoul", "Kabul", "Madrid"}
cities3 = cities.union(cities2)
print(cities3)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Tokyo', 'Madrid', 'Kabul', 'Seoul', 'Berlin', 'Delhi'}`}</code></pre>

<h4>Example 2:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Tokyo", "Seoul", "Kabul", "Madrid"}
cities.update(cities2)
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Berlin', 'Madrid', 'Tokyo', 'Delhi', 'Kabul', 'Seoul'}`}</code></pre>

<h3>II. Intersection (<code>intersection()</code> and <code>intersection_update()</code>)</h3>
<p>The <code>intersection()</code> and <code>intersection_update()</code> methods return only the items common to both sets. The <code>intersection()</code> method creates a new set, while <code>intersection_update()</code> modifies the existing set.</p>

<h4>Example 1:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Tokyo", "Seoul", "Kabul", "Madrid"}
cities3 = cities.intersection(cities2)
print(cities3)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Madrid', 'Tokyo'}`}</code></pre>

<h4>Example 2:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Tokyo", "Seoul", "Kabul", "Madrid"}
cities.intersection_update(cities2)
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Tokyo', 'Madrid'}`}</code></pre>

<h3>III. Symmetric Difference (<code>symmetric_difference()</code> and <code>symmetric_difference_update()</code>)</h3>
<p>The <code>symmetric_difference()</code> and <code>symmetric_difference_update()</code> methods return the items that are unique to each set (i.e., not common). The <code>symmetric_difference()</code> method produces a new set, while <code>symmetric_difference_update()</code> alters the existing set.</p>

<h4>Example 1:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Tokyo", "Seoul", "Kabul", "Madrid"}
cities3 = cities.symmetric_difference(cities2)
print(cities3)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Seoul', 'Kabul', 'Berlin', 'Delhi'}`}</code></pre>

<h4>Example 2:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Tokyo", "Seoul", "Kabul", "Madrid"}
cities.symmetric_difference_update(cities2)
print(cities)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Kabul', 'Delhi', 'Berlin', 'Seoul'}`}</code></pre>

<h3>IV. Difference (<code>difference()</code> and <code>difference_update()</code>)</h3>
<p>The <code>difference()</code> and <code>difference_update()</code> methods return the items that are only found in the original set and not in the other set. The <code>difference()</code> method creates a new set, while <code>difference_update()</code> modifies the existing set.</p>

<h4>Example 1:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul", "Delhi"}
cities3 = cities.difference(cities2)
print(cities3)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Tokyo', 'Madrid', 'Berlin'}`}</code></pre>

<h4>Example 2:</h4>
<pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul", "Delhi"}
print(cities.difference(cities2))`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`{'Tokyo', 'Berlin', 'Madrid'}`}</code></pre>

            </>
        ),
        "set-methods": (
            <>
            <h2>Set Methods</h2>
<p>Apart from the methods we discussed earlier in the chapter, there are some more methods that we can use to manipulate sets.</p>

<p>What if you want to check if items of a particular set are present in another set?</p>
<p>There are a few methods to check this.</p>

<ul>
    <li><strong>isdisjoint():</strong>
        <p>The <code>isdisjoint()</code> method checks if items of the given set are present in another set. This method returns <code>False</code> if items are present; otherwise, it returns <code>True</code>.</p>
        
        <h4>Example 1:</h4>
        <pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Tokyo", "Seoul", "Kabul", "Madrid"}
print(cities.isdisjoint(cities2))`}</code></pre>
        <p><strong>Output:</strong></p>
        <pre><code>{`False`}</code></pre>

        <h4>Example 2:</h4>
        <pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul"}
print(cities.isdisjoint(cities2))`}</code></pre>
        <p><strong>Output:</strong></p>
        <pre><code>{`True`}</code></pre>
    </li>

    <li><strong>issuperset():</strong>
        <p>The <code>issuperset()</code> method checks if all the items of a particular set are present in the original set. It returns <code>True</code> if all the items are present; otherwise, it returns <code>False</code>.</p>

        <h4>Example 1:</h4>
        <pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul"}
print(cities.issuperset(cities2))
cities3 = {"Seoul", "Madrid","Kabul"}
print(cities.issuperset(cities3))`}</code></pre>
        <p><strong>Output:</strong></p>
        <pre><code>{`False
False`}</code></pre>

        <h4>Example 2:</h4>
        <pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Delhi", "Madrid"}
print(cities.issuperset(cities2))`}</code></pre>
        <p><strong>Output:</strong></p>
        <pre><code>{`True`}</code></pre>
    </li>

    <li><strong>issubset():</strong>
        <p>The <code>issubset()</code> method checks if all the items of the original set are present in the particular set. It returns <code>True</code> if all the items are present; otherwise, it returns <code>False</code>.</p>

        <h4>Example 1:</h4>
        <pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Delhi", "Madrid"}
print(cities2.issubset(cities))`}</code></pre>
        <p><strong>Output:</strong></p>
        <pre><code>{`True`}</code></pre>

        <h4>Example 2:</h4>
        <pre><code>{`cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul"}
print(cities2.issubset(cities))
cities3 = {"Seoul", "Madrid", "Kabul"}
print(cities3.issubset(cities))`}</code></pre>
        <p><strong>Output:</strong></p>
        <pre><code>{`False
False`}</code></pre>
    </li>
</ul>

            </>
        ),



        // Python Dictionaries
        "python-dictionaries": (
            <>
            <h2>Python Dictionaries</h2>
<p>Dictionaries in Python are an ordered collection of data that allows you to store multiple items under a single variable name. Each item in a dictionary consists of a key-value pair, with the pairs separated by commas and enclosed within curly braces { }.</p>

<p>For example:</p>

<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True}
print(data)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`{'username': 'Karan', 'age': 19, 'is_eligible': True}`}</code></pre>

            </>
        ),
        "access-items": (
            <>
            <h2>Accessing Dictionary Items</h2>

<p>To access items in a dictionary, you can use various methods:</p>

<h3>Accessing Single Values</h3>
<p>Values in a dictionary can be retrieved using their corresponding keys. You can access dictionary values either by using square brackets or by employing the <code>get</code> method.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True}
print(data['username'])
print(data.get('is_eligible'))`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`Karan
True`}</code></pre>

<h3>Accessing Multiple Values</h3>
<p>You can retrieve all the values in the dictionary using the <code>values()</code> method.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True}
print(data.values())`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`dict_values(['Karan', 19, True])`}</code></pre>

<h3>Accessing Keys</h3>
<p>To print all the keys in a dictionary, you can use the <code>keys()</code> method.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True}
print(data.keys())`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`dict_keys(['username', 'age', 'is_eligible'])`}</code></pre>

<h3>Accessing Key-Value Pairs</h3>
<p>You can print all the key-value pairs in a dictionary using the <code>items()</code> method.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True}
print(data.items())`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`dict_items([('username', 'Karan'), ('age', 19), ('is_eligible', True)])`}</code></pre>

            </>
        ),
        "add-or-remove-dictionaries-items": (
            <>
            <h2>Add/Remove Items</h2>

<h3>Adding Items to a Dictionary</h3>
<p>There are two primary methods to add items to a dictionary:</p>

<h4>I. Creating a New Key and Assigning a Value</h4>
<p>You can create a new key in the dictionary and assign a value to it.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True}
print(data)
data['DOB'] = 2001
print(data)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`{'username': 'Karan', 'age': 19, 'is_eligible': True}
{'username': 'Karan', 'age': 19, 'is_eligible': True, 'DOB': 2001}`}</code></pre>

<h4>II. Using the <code>update()</code> Method</h4>
<p>The <code>update()</code> method allows you to update the value of an existing key. If the key does not exist, it will create a new key-value pair.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True}
print(data)
data.update({'age': 20})
data.update({'DOB': 2001})
print(data)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`{'username': 'Karan', 'age': 19, 'is_eligible': True}
{'username': 'Karan', 'age': 20, 'is_eligible': True, 'DOB': 2001}`}</code></pre>

<h3>Removing Items from a Dictionary</h3>
<p>There are several methods available to remove items from a dictionary:</p>

<h4>1. <code>clear()</code></h4>
<p>The <code>clear()</code> method removes all items from the dictionary.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True}
data.clear()
print(data)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`{}`}</code></pre>

<h4>2. <code>pop()</code></h4>
<p>The <code>pop()</code> method removes the key-value pair associated with the specified key.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True}
data.pop('is_eligible')
print(data)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`{'username': 'Karan', 'age': 19}`}</code></pre>

<h4>3. <code>popitem()</code></h4>
<p>The <code>popitem()</code> method removes and returns the last key-value pair from the dictionary.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True, 'DOB': 2003}
data.popitem()
print(data)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`{'username': 'Karan', 'age': 19, 'is_eligible': True}`}</code></pre>

<h4>4. Using the <code>del</code> Keyword</h4>
<p>Besides the methods mentioned above, you can also use the <code>del</code> keyword to remove a specific item from the dictionary.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True, 'DOB': 2003}
del data['age']
print(data)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`{'username': 'Karan', 'is_eligible': True, 'DOB': 2003}`}</code></pre>

<h4>5. Deleting the Entire Dictionary</h4>
<p>If you don't specify a key, using <code>del</code> will delete the entire dictionary.</p>

<p>For example:</p>
<pre><code>{`data = {'username': 'Karan', 'age': 19, 'is_eligible': True, 'DOB': 2003}
del data
print(data)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`NameError: name 'data' is not defined`}</code></pre>

            </>
        ),
        "copy-dictionaries": (
            <>
            <h2>Copying Dictionaries</h2>
<p>To copy the contents of one dictionary to another, you can use the <code>copy()</code> method.</p>

<h4>Using the <code>copy()</code> Method</h4>
<p>For example:</p>
<pre><code>{`info = {'name': 'Karan', 'age': 19, 'eligible': True, 'DOB': 2003}
new_dictionary = info.copy()
print(new_dictionary)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`{'name': 'Karan', 'age': 19, 'eligible': True, 'DOB': 2003}`}</code></pre>

<h4>Using the <code>dict()</code> Function</h4>
<p>You can also create a new dictionary using the <code>dict()</code> function by passing the original dictionary as an argument.</p>

<p>For example:</p>
<pre><code>{`info = {'name': 'Karan', 'age': 19, 'eligible': True, 'DOB': 2003}
new_dictionary = dict(info)
print(new_dictionary)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`{'name': 'Karan', 'age': 19, 'eligible': True, 'DOB': 2003}`}</code></pre>

            </>
        ),



        // Conditional Statements
        "if-statement": (
            <>
            <h2>Python <code>if</code> Statement</h2>
<p>An <code>if</code> statement executes a block of code only when the specified condition is met.</p>

<h4>Syntax</h4>
<pre><code>{`if condition:
    # body of if statement`}</code></pre>

<p>In this syntax:</p>
<ul>
    <li><code>condition</code> is a boolean expression, such as <code>number &gt; 5</code>, that evaluates to either <code>True</code> or <code>False</code>.</li>
    <li>If the <code>condition</code> evaluates to <code>True</code>, the body of the <code>if</code> statement is executed.</li>
    <li>If the <code>condition</code> evaluates to <code>False</code>, the body of the <code>if</code> statement is skipped.</li>
</ul>

<h4>Example</h4>
<img src={pythonIfStatement} title="python-if-else" alt="python-if-else" />
<pre><code>{`number = 10
if number > 5:
    print("Number is greater than 5")`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`Number is greater than 5`}</code></pre>

            </>
        ),
        "if-else-statement": (
            <>
            <h2>Python <code>if else</code> Statement</h2>
<p>An <code>if</code> statement can have an optional <code>else</code> clause. The <code>else</code> statement executes if the condition in the <code>if</code> statement evaluates to <code>False</code>.</p>

<h4>Syntax</h4>
<pre><code>{`if condition:
    # body of if statement
else:
    # body of else statement`}</code></pre>

<p>In this syntax:</p>
<ul>
    <li>If the <code>condition</code> inside the <code>if</code> statement evaluates to <code>True</code>, the body of the <code>if</code> executes, and the body of the <code>else</code> is skipped.</li>
    <li>If the <code>condition</code> evaluates to <code>False</code>, the body of the <code>else</code> executes, and the body of the <code>if</code> is skipped.</li>
</ul>
<img src={pythonIfElseStatement} title="python-if" alt="python-if" />
<h4>Example</h4>
<pre><code>{`number = 3
if number > 5:
    print("Number is greater than 5")
else:
    print("Number is 5 or less")`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`Number is 5 or less`}</code></pre>

            </>
        ),
        "elif-statement": (
            <>
            <h2>Python <code>elif</code> Statement</h2>
<p>Sometimes, the programmer may want to evaluate more than one condition. This can be done using an <code>elif</code> statement.</p>

<h4>Principle of Operation</h4>
<ul>
    <li>Execute the block of code inside the <code>if</code> statement if the initial expression evaluates to <code>True</code>. After execution, return to the code outside of the <code>if</code> block.</li>
    <li>Execute the block of code inside the first <code>elif</code> statement if the expression inside it evaluates to <code>True</code>. After execution, return to the code outside of the <code>if</code> block.</li>
    <li>Continue this process for any additional <code>elif</code> statements.</li>
    <li>Execute the block of code inside the <code>else</code> statement if none of the expressions evaluate to <code>True</code>. After execution, return to the code outside of the <code>if</code> block.</li>
</ul>
<img src={pythonElifStatement} title="python-elif" alt="python-elif" />
<h4>Example</h4>
<pre><code>{`number = -5

if number > 0:
    print('Positive number')

elif number < 0:
    print('Negative number')

else:
    print('Zero')

print('This statement is always executed')`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`Negative number
This statement is always executed`}</code></pre>

            </>
        ),
        "nested-if-statement": (
            <>
            <h2>Python Nested <code>if</code> Statements</h2>
<p>It is possible to include an <code>if</code> statement inside another <code>if</code> statement. This allows for more complex conditional logic.</p>
<img src={pythonNestedIfStatement} title="python-nested-if" alt="python-nested-if" />
<h4>Example</h4>
<pre><code>{`number = 5

# outer if statement
if number >= 0:
    # inner if statement
    if number == 0:
        print('Number is 0')
    
    # inner else statement
    else:
        print('Number is positive')

# outer else statement
else:
    print('Number is negative')`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`Number is positive`}</code></pre>

            </>
        ),



        // Python Loops

        "python-for-loop": (
            <>
            <h2>Python <code>for</code> Loop</h2>
<p>In Python, we use a <code>for</code> loop to iterate over sequences such as lists, strings, dictionaries, etc.</p>

<h4>Example</h4>
<pre><code>{`languages = ['Swift', 'Python', 'Go']

# access elements of the list one by one
for lang in languages:
    print(lang)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`Swift
Python
Go`}</code></pre>

<p>In the above example, we created a list named <code>languages</code>. As the list has 3 elements, the loop iterates 3 times:</p>
<ul>
    <li>The value of <code>lang</code> is <code>Swift</code> in the first iteration.</li>
    <li>The value of <code>lang</code> is <code>Python</code> in the second iteration.</li>
    <li>The value of <code>lang</code> is <code>Go</code> in the third iteration.</li>
</ul>

<h4><code>for</code> Loop Syntax</h4>
<pre><code>{`for val in sequence:
    # body of the loop`}</code></pre>
<p>The <code>for</code> loop iterates over the elements of <code>sequence</code> in order. In each iteration, the body of the loop is executed. The loop ends after the last item in the sequence is reached.</p>

<h4>Indentation in Loop</h4>
<p>In Python, we use indentation to define a block of code, such as the body of a loop. For example:</p>
<pre><code>{`languages = ['Swift', 'Python', 'Go']

# Start of loop
for lang in languages:
    print(lang)
    print('-----')
# End of for loop

print('Last statement')`}</code></pre>

<h4>Example: Loop Through a String</h4>
<pre><code>{`language = 'Python'

# iterate over each character in language
for x in language:
    print(x)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`P
y
t
h
o
n`}</code></pre>
<p>Here, we printed each character of the string <code>language</code> using a <code>for</code> loop.</p>

<h4><code>for</code> Loop with Python <code>range()</code></h4>
<p>In Python, the <code>range()</code> function returns a sequence of numbers. For example:</p>
<pre><code>{`values = range(4)`}</code></pre>
<p>Here, <code>range(4)</code> returns a sequence of 0, 1, 2, and 3.</p>
<p>Since the <code>range()</code> function returns a sequence of numbers, we can iterate over it using a <code>for</code> loop. For example:</p>
<pre><code>{`# iterate from i = 0 to i = 3
for i in range(4):
    print(i)`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`0
1
2
3`}</code></pre>
<p>Here, we used the <code>for</code> loop to iterate over a range from 0 to 3.</p>

            </>
        ),
        "python-while-loop": (
            <>
            <h2>Python <code>while</code> Loop</h2>
<p>In Python, we use a <code>while</code> loop to repeat a block of code until a certain condition is met. For example:</p>

<h4>Example</h4>
<pre><code>{`number = 1

while number <= 3:
    print(number)
    number = number + 1`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`1
2
3`}</code></pre>

<p>In the above example, we used a <code>while</code> loop to print the numbers from 1 to 3. The loop runs as long as the condition <code>number &lt;= 3</code> is <strong>True</strong>.</p>

<h4><code>while</code> Loop Syntax</h4>
<pre><code>{`while condition:
    # body of while loop`}</code></pre>

<p>Here:</p>
<ul>
    <li>The <code>while</code> loop evaluates <code>condition</code>, which is a boolean expression.</li>
    <li>If the condition is <strong>True</strong>, the body of the <code>while</code> loop is executed.</li>
    <li>The condition is evaluated again.</li>
    <li>This process continues until the condition is <strong>False</strong>.</li>
</ul>
<p>Once the condition evaluates to <strong>False</strong>, the loop terminates.</p>

<p><strong>Tip:</strong> We should update the variables used in the condition inside the loop so that it eventually evaluates to <strong>False</strong>. Otherwise, the loop keeps running, creating an infinite loop.</p>

<h4>Flowchart of Python <code>while</code> Loop</h4>
<img src={pythonWhileLoop} title="python-while-loop" alt="python-while-loop" />

<h4>Example: Python <code>while</code> Loop</h4>
<pre><code>{`# Print numbers until the user enters 0
number = int(input('Enter a number: '))

# iterate until the user enters 0
while number != 0:
    print(f'You entered {number}.')
    number = int(input('Enter a number: '))

print('The end.')`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`Enter a number: 3
You entered 3.
Enter a number: 1
You entered 1.
Enter a number: -4
You entered -4.
Enter a number: 0
The end.`}</code></pre>

<p>Here is how the above program works:</p>
<ul>
    <li>It asks the user to enter a number.</li>
    <li>If the user enters a number other than 0, it is printed.</li>
    <li>If the user enters 0, the loop terminates.</li>
</ul>

<h4>Infinite <code>while</code> Loop</h4>
<p>If the condition of a <code>while</code> loop always evaluates to <strong>True</strong>, the loop runs continuously, forming an infinite <code>while</code> loop. For example:</p>

<pre><code>{`age = 32

# The test condition is always True
while age > 18:
    print('You can vote')`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`You can vote
You can vote
You can vote
.
.
.`}</code></pre>

<p>The above program is equivalent to:</p>
<pre><code>{`age = 32
    
# the test condition is always True
while True:
    print('You can vote')`}</code></pre>

            </>
        ),
        "nested-loops": (
            <>
            <h2>Nested Loops</h2>
<p>We can use loops inside other loops; these types of loops are called nested loops.</p>

<h4>Example: Nesting <code>for</code> Loop in <code>while</code> Loop</h4>
<pre><code>{`i = 1
while (i <= 3):
    for k in range(1, 4):
        print(i, "*", k, "=", (i * k))
    i = i + 1
    print()`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`1 * 1 = 1
1 * 2 = 2
1 * 3 = 3

2 * 1 = 2
2 * 2 = 4
2 * 3 = 6

3 * 1 = 3
3 * 2 = 6
3 * 3 = 9`}</code></pre>

<h4>Example: Nesting <code>while</code> Loop in <code>for</code> Loop</h4>
<pre><code>{`for i in range(1, 4):
    k = 1
    while (k <= 3):
        print(i, "*", k, "=", (i * k))
        k = k + 1
    print()`}</code></pre>

<p><strong>Output:</strong></p>
<pre><code>{`1 * 1 = 1
1 * 2 = 2
1 * 3 = 3

2 * 1 = 2
2 * 2 = 4
2 * 3 = 6

3 * 1 = 3
3 * 2 = 6
3 * 3 = 9`}</code></pre>

            </>
        ),
        "control-statements": (
            <>
            <h2>Control Statements</h2>
<p>There are three control statements that can be used with <code>for</code> and <code>while</code> loops to alter their behavior: <code>pass</code>, <code>continue</code>, and <code>break</code>.</p>

<h4><code>Pass</code>:</h4>
<p>Whenever loops, functions, if statements, classes, etc., are created, it's necessary to write a block of code in them. An empty code block inside a loop, if statement, or function will result in an error.</p>
<p><strong>Example:</strong></p>
<pre><code>{`i = 1
while (i < 5):
    # This will raise an error
    pass`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`IndentationError: expected an indented block`}</code></pre>

<p>To avoid such an error and continue code execution, the <code>pass</code> statement is used. The <code>pass</code> statement acts as a placeholder for future code.</p>
<p><strong>Example:</strong></p>
<pre><code>{`i = 1
while (i < 5):
    pass

for j in range(5):
    pass

if (i == 2):
    pass`}</code></pre>
<p>The above code does not produce an error.</p>

<p>Note: The difference between a comment and a <code>pass</code> statement in Python is that while the interpreter ignores a comment entirely, <code>pass</code> is not ignored.</p>
<br/><br/>
<h4><code>Continue</code>:</h4>
<p>This keyword is used in loops to end the current iteration and continue with the next iteration of the loop. Sometimes, we might need to skip a specific iteration within a loop, which can be done using the <code>continue</code> keyword.</p>
<img src={pythonContinueStatement} title="python-continue-statement" alt="python-continue-statement" />
<p><strong>Example 1:</strong></p>
<pre><code>{`for i in range(1, 10):
    if (i % 2 == 0):
        continue   
    print(i)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`1
3
5
7
9`}</code></pre>

<p><strong>Example 2:</strong></p>
<pre><code>{`i = 1
while (i <= 10):
    i = i + 1
    if (i % 2 != 0):
        continue
    print(i)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`2
4
6
8
10`}</code></pre>
<br/><br/>
<h4><code>Break</code>:</h4>
<p>The <code>break</code> keyword is used to exit the loop and return to the main body of the program. Whenever the <code>break</code> keyword is used, the loop is terminated, and the interpreter starts executing the next series of statements within the main program.</p>
<img src={pythonBreakStatement} title="python-break-statement" alt="python-break-statemen" />
<p><strong>Example 1:</strong></p>
<pre><code>{`i = 1
while (i <= 10):
    i = i + 1
    if (i == 5):
        break
    print(i)`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`2
3
4`}</code></pre>

<p><strong>Example 2:</strong></p>
<pre><code>{`for i in range(1, 10):
    print(i)
    if (i == 5):
        break`}</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{`1
2
3
4
5`}</code></pre>
<p>Note: The <code>break</code> statement is usually used inside decision-making statements such as if...else.</p>
            </>
        ),



        // Python Functions
        "python-functions": (
            <>
            <div>
    <h2>Python Functions</h2>
    <p>A function is a block of code that performs a specific task when called. In larger programs, using functions helps keep the code organized and easier to manage.</p>
    
    <h3>Types of Functions</h3>
    
    <h4>1. Built-in Functions</h4>
    <p>These are pre-defined in Python. Examples include <code>min()</code>, <code>max()</code>, <code>len()</code>, <code>sum()</code>, <code>type()</code>, <code>range()</code>, <code>dict()</code>, <code>list()</code>, <code>tuple()</code>, <code>set()</code>, and <code>print()</code>.</p>
    
    <h3>2. User-defined Functions</h3>
    <p>These are functions that you create to perform specific tasks based on your needs.</p>
    <h4>Create a Function</h4>
    <pre><code>{`
def greet():
    print('Hello World!')
Here are the different parts of the program:

`}</code></pre>
<img src={pythonCreateFunction} title="python-create-function" alt="python-create-function" />
    <p>- You use the <code>def</code> keyword followed by the function name and parentheses <code>()</code>. Inside the parentheses, you can pass parameters (if needed).</p>
    <p>- The body of the function, containing the code, is indented.</p>
    <p><b>Note:</b> When writing a function, pay attention to indentation, which are the spaces at the start of a code line.

In the above code, the <code>print()</code> statement is indented to show it's part of the function body, distinguishing the function's definition from its body.

</p>
    <br/><br/>
    <h3>Calling a Function</h3>
    <p>To call a function, simply use its name followed by parentheses, passing any required arguments.</p>
    
    <h4>Example</h4>
    <pre><code>{`
def greet():
    print('Hello World!')

# call the function
greet()

print('Outside function')
`}</code></pre>
    
    <h4>Output</h4>
    <pre><code>{`
Hello World!
Outside function
`}</code></pre>
<img src={pythonCallFunction} title="python-call-function" alt="python-call-function" />
<ol>
    <li>When the function greet() is called, the program's control transfers to the function definition.</li>
    <li>All the code inside the function is executed.</li>
    <li>The control of the program jumps to the next statement after the function call.</li>
</ol>
</div>

            </>
        ),
        "function-arguments": (
            <>
            <div>
    <h2>Function Arguments in Python</h2>
    <p>In Python, there are four types of arguments that you can pass to a function:</p>
    
    <ul>
        <li>Default Arguments</li>
        <li>Keyword Arguments</li>
        <li>Required Arguments</li>
        <li>Variable-length Arguments</li>
    </ul>

    <h3>1. Default Arguments</h3>
    <p>You can set a default value for a function's parameter. If the argument is not provided during the function call, the default value is used.</p>
    
    <pre><code>{`
def greet(first_name, middle_name="John", last_name="Watson"):
    print("Hello,", first_name, middle_name, last_name)

greet("Amy")
`}</code></pre>
    
    <p>Output:</p>
    <pre><code>{`
Hello, Amy John Watson
`}</code></pre>

    <h3>2. Keyword Arguments</h3>
    <p>Keyword arguments allow you to pass arguments using the parameter name, making the order irrelevant.</p>
    
    <pre><code>{`
def greet(first_name, middle_name, last_name):
    print("Hello,", first_name, middle_name, last_name)

greet(middle_name="Peter", last_name="Wesker", first_name="Jade")
`}</code></pre>
    
    <p>Output:</p>
    <pre><code>{`
Hello, Jade Peter Wesker
`}</code></pre>

    <h3>3. Required Arguments</h3>
    <p>When using positional arguments (without key-value syntax), the number of arguments passed must match the function's parameters in both count and order.</p>

    <h4>Example: Missing Argument</h4>
    <pre><code>{`
def greet(first_name, middle_name, last_name):
    print("Hello,", first_name, middle_name, last_name)

greet("Peter", "Quill")
`}</code></pre>
    
    <p>Output:</p>
    <pre><code>{`
TypeError: greet() missing 1 required positional argument: 'last_name'
`}</code></pre>

    <h4>Example: Correct Number of Arguments</h4>
    <pre><code>{`
def greet(first_name, middle_name, last_name):
    print("Hello,", first_name, middle_name, last_name)

greet("Peter", "Ego", "Quill")
`}</code></pre>

    <p>Output:</p>
    <pre><code>{`
Hello, Peter Ego Quill
`}</code></pre>

    <h3>4. Variable-length Arguments</h3>
    <p>When you need to pass more arguments than originally defined, you can use variable-length arguments.</p>

    <h4>Arbitrary Arguments</h4>
    <p>By adding an asterisk (*) before the parameter, the function accepts multiple arguments as a tuple.</p>
    
    <pre><code>{`
def greet(*names):
    print("Hello,", names[0], names[1], names[2])

greet("James", "Buchanan", "Barnes")
`}</code></pre>

    <p>Output:</p>
    <pre><code>{`
Hello, James Buchanan Barnes
`}</code></pre>

    <h4>Keyword Arbitrary Arguments</h4>
    <p>By using a double asterisk (**), you can pass arguments as key-value pairs, which are handled as a dictionary inside the function.</p>

    <pre><code>{`
def greet(**names):
    print("Hello,", names["fname"], names["mname"], names["lname"])

greet(fname="James", mname="Buchanan", lname="Barnes")
`}</code></pre>

    <p>Output:</p>
    <pre><code>{`
Hello, James Buchanan Barnes
`}</code></pre>
</div>

            </>
        ),
        "python-variable-scope": (
            <>
            <div>
    <h2>Python Variable Scope</h2>
    <p>In Python, variables can be declared in three different scopes: <strong>local scope</strong>, <strong>global scope</strong>, and <strong>nonlocal scope</strong>. The scope of a variable determines where it can be accessed within the code.</p>

    <h3>Types of Variable Scope</h3>
    <ul>
        <li><strong>Local Variables</strong></li>
        <li><strong>Global Variables</strong></li>
        <li><strong>Nonlocal Variables</strong></li>
    </ul>

    <h3>Python Local Variables</h3>
    <p>Local variables are declared inside a function and can only be accessed within that function. They are not accessible outside of it.</p>

    <h4>Example of Local Variables</h4>
    <pre><code>{`
def greet():
    # local variable
    message = 'Hello'
    print('Local', message)

greet()

# try to access message variable 
# outside greet() function
print(message)  # This will raise an error
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Local Hello
NameError: name 'message' is not defined
`}</code></pre>

    <p>In this example, the <code>message</code> variable is local to the <code>greet()</code> function. Trying to access it outside the function raises a <code>NameError</code>.</p>

    <h3>Python Global Variables</h3>
    <p>A global variable is declared outside of any function and can be accessed inside and outside of functions.</p>

    <h4>Example of Global Variables</h4>
    <pre><code>{`
# declare global variable
message = 'Hello'

def greet():
    # access global variable
    print('Local', message)

greet()
print('Global', message)
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Local Hello
Global Hello
`}</code></pre>

    <p>In this case, the <code>message</code> variable is global, allowing access from both inside and outside the <code>greet()</code> function.</p>

    <h3>Python Nonlocal Variables</h3>
    <p>The <code>nonlocal</code> keyword is used in nested functions to indicate that a variable is not local to the inner function, but belongs to an enclosing function’s scope. This allows modification of a variable from the outer function within the nested function.</p>

    <h4>Example of Nonlocal Variables</h4>
    <pre><code>{`
def outer():
    message = 'local'

    # nested function  
    def inner():
        # declare nonlocal variable
        nonlocal message
        message = 'nonlocal'
        print("inner:", message)

    inner()
    print("outer:", message)

outer()
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
inner: nonlocal
outer: nonlocal
`}</code></pre>

    <p>In this example, the <code>message</code> variable is defined in the outer function <code>outer()</code> and is modified in the nested <code>inner()</code> function using the <code>nonlocal</code> keyword.</p>

    <h3>Key Points to Remember</h3>
    <ul>
        <li>Local variables are accessible only within the function they are declared in.</li>
        <li>Global variables can be accessed throughout the entire program.</li>
        <li>The <code>nonlocal</code> keyword allows modification of variables in an enclosing function's scope from within a nested function.</li>
        <li>Using the correct scope is crucial to avoid naming conflicts and unintended behavior in your programs.</li>
    </ul>
</div>

            </>
        ),
        "return-statement": (
            <>
            <div>
    <h2>The <code>Return</code> Statement in Python</h2>
    <p>In Python, you can return a value from a function using the <code>return</code> statement.</p>
    
    <h3>Example</h3>
    <p>Below is an example where a function calculates and returns the square of a number:</p>
    
    <pre><code>{`
# function definition
def find_square(num):
    result = num * num
    return result

# function call
square = find_square(3)

print('Square:', square)
`}</code></pre>

    <p>Output:</p>
    <pre><code>{`
Square: 9
`}</code></pre>

    <p>In this example, the function <code>find_square()</code> takes a number as input, calculates its square, and returns the result. When called with <code>3</code>, the output is <strong>9</strong>.</p>
    <img src={pythonReturnStatement} title="python-return-statement" alt="python-return-statement" />
</div>

            </>
        ),
        "python-recursion": (
            <>
            <div>
    <h2>Python Recursion</h2>
    <p>In Python, recursion is a process where a function calls itself as part of its execution. This is typically used for tasks that can be divided into similar sub-tasks.</p>
    
    <h3>Example of Recursive Function</h3>
    <p>One of the most common examples of recursion is calculating the factorial of a number.</p>
    
    <pre><code>{`
def factorial(num): 
    if (num == 1 or num == 0):
        return 1
    else:
        return (num * factorial(num - 1))
  
# Driver Code 
num = 7
print("number:", num)
print("Factorial:", factorial(num))
`}</code></pre>

    <p>Output:</p>
    <pre><code>{`
number:  7
Factorial:  5040
`}</code></pre>

    <p>In this example, the function <code>factorial()</code> calls itself recursively until the base condition (<code>num == 1 or num == 0</code>) is met, which stops further recursion. The function calculates the factorial by multiplying the current number with the result of <code>factorial(num - 1)</code>.</p>
    
    <h3>How Recursion Works</h3>
    <p>Recursion works by breaking down complex problems into simpler, smaller sub-problems. In the case of factorial calculation, the problem of finding <code>factorial(7)</code> is reduced to:</p>
    
    <ul>
        <li><code>7 * factorial(6)</code></li>
        <li><code>6 * factorial(5)</code></li>
        <li>And so on, until <code>factorial(1)</code> is reached.</li>
    </ul>

    <h3>Base Case and Recursive Case</h3>
    <p>Two key elements in recursion:</p>
    
    <ul>
        <li><strong>Base Case</strong>: The condition under which recursion ends. In the example, the base case is when <code>num == 1</code> or <code>num == 0</code>.</li>
        <li><strong>Recursive Case</strong>: The part of the function where it calls itself with a modified argument. In the example, <code>factorial(num - 1)</code> is the recursive case.</li>
    </ul>

    <h3>Benefits and Drawbacks</h3>
    <p>Recursion can simplify code for certain problems like tree traversal, searching, and sorting algorithms, but it can lead to performance issues if not implemented with proper termination conditions (base case). Also, excessive recursion can lead to a stack overflow due to too many function calls.</p>
</div>

            </>
        ),
        "python-main-function": (
            <>
            <div>
    <h2>Python Main Function</h2>
    
    <h3>What is the <code>main()</code> Function in Python?</h3>
    <p>In some programming languages, a special function called <code>main()</code> serves as the entry point for program execution. However, Python does not require a <code>main()</code> function, as the interpreter runs each line of code sequentially from the top of the file. Despite this, Python provides a convention for defining the execution point using the <code>main()</code> function alongside the <code>__name__</code> property.</p>

    <h3>What is <code>__name__</code> in Python?</h3>
    <p>The <code>__name__</code> variable is a special built-in variable that indicates the name of the current module. Its value changes depending on how the Python file is executed.</p>

    <h4>Running Python File as a Script</h4>
    <p>Consider a Python file called <code>helloworld.py</code> with the following content:</p>
    <pre><code>{`
print(__name__)
`}</code></pre>

    <p>If we run this script from the command line using:</p>
    <pre><code>$ python helloworld.py</code></pre>
    
    <p>The output will be:</p>
    <pre><code>{`
__main__
`}</code></pre>

    <h4>Running Python File as a Module</h4>
    <p>We can also run a Python file as a module. For this, we can import this file into another Python program. For example, consider a file named <code>main.py</code> in the same directory as <code>helloworld.py</code>:</p>
    <pre><code>{`
import helloworld
`}</code></pre>

    <p>When we run <code>main.py</code>, the output will be:</p>
    <pre><code>{`
helloworld
`}</code></pre>

    <p>Here, since the module is imported, the code in <code>helloworld.py</code> is executed, and the value of <code>__name__</code> is set to the name of the module, which is <code>helloworld</code>.</p>

    <h3>Using <code>if</code> Conditional with <code>__name__</code></h3>
    <p>Now that we understand how the <code>__name__</code> variable is assigned values, we can use an <code>if</code> conditional clause to run the same Python file differently based on its context.</p>

    <h4>Example</h4>
    <p>Let's modify the content of <code>helloworld.py</code> as follows:</p>
    <pre><code>{`
def main():
    print("Hello World")

if __name__ == "__main__":
    main()
`}</code></pre>

    <p>When we run it as a script via the command line, the output will be:</p>
    <pre><code>{`
Hello World
`}</code></pre>

    <p>However, when we run it as a module by importing it in <code>main.py</code>, there will be no output, as the <code>main()</code> function is not called.</p>

    <p>This approach allows us to create a custom <code>main()</code> function in <code>helloworld.py</code>, which executes only when the file is run as a standalone script and not when it is imported as a module.</p>

    <p>Using the <code>__name__</code> variable in conjunction with the <code>if</code> statement is a common convention in Python to define a <code>main()</code> function, ensuring that certain code only runs when the file is executed directly.</p>
</div>

            </>
        ),



        // Python Exception Handling
        "python-exceptions": (<>
        <div>
    <h2>Python Exceptions</h2>
    
    <h3>What are Exceptions?</h3>
    <p>An exception is an unexpected event that occurs during program execution. For instance:</p>
    <pre><code>{`
divide_by_zero = 7 / 0
`}</code></pre>
    <p>The above code causes an exception because dividing a number by zero is not possible.</p>

    <h3>Python Logical Errors (Exceptions)</h3>
    <p>Errors that occur at runtime (after passing the syntax check) are known as exceptions or logical errors. These may occur when we:</p>
    <ul>
        <li>Try to open a file (for reading) that does not exist (<code>FileNotFoundError</code>)</li>
        <li>Try to divide a number by zero (<code>ZeroDivisionError</code>)</li>
        <li>Try to import a module that does not exist (<code>ImportError</code>)</li>
    </ul>
    <p>Whenever these types of runtime errors occur, Python creates an exception object. If not handled properly, it prints a traceback along with details about the error.</p>

    <h4>Example of an Exception</h4>
    <p>Consider the following code:</p>
    <pre><code>{`
divide_numbers = 7 / 0
print(divide_numbers)
`}</code></pre>
    <p>Output:</p>
    <pre><code>{`
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ZeroDivisionError: division by zero
`}</code></pre>
    <p>In this example, attempting to divide <code>7 / 0</code> results in a <code>ZeroDivisionError</code>.</p>

    <h3>Python Built-in Exceptions</h3>
    <p>Illegal operations can raise exceptions, and Python has many built-in exceptions that are raised when specific errors occur. You can view all built-in exceptions using the following code:</p>
    <pre><code>{`
print(dir(locals()['__builtins__']))
`}</code></pre>

    <h4>Common Built-in Exceptions</h4>
    <table>
        <thead>
            <tr>
                <th>Exception</th>
                <th>Cause of Error</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>AssertionError</td><td>Raised when an assert statement fails.</td></tr>
            <tr><td>AttributeError</td><td>Raised when attribute assignment or reference fails.</td></tr>
            <tr><td>EOFError</td><td>Raised when the <code>input()</code> function hits the end-of-file condition.</td></tr>
            <tr><td>FloatingPointError</td><td>Raised when a floating point operation fails.</td></tr>
            <tr><td>ImportError</td><td>Raised when the imported module is not found.</td></tr>
            <tr><td>IndexError</td><td>Raised when the index of a sequence is out of range.</td></tr>
            <tr><td>KeyError</td><td>Raised when a key is not found in a dictionary.</td></tr>
            <tr><td>MemoryError</td><td>Raised when an operation runs out of memory.</td></tr>
            <tr><td>NameError</td><td>Raised when a variable is not found in local or global scope.</td></tr>
            <tr><td>TypeError</td><td>Raised when a function or operation is applied to an object of incorrect type.</td></tr>
            <tr><td>ValueError</td><td>Raised when a function gets an argument of correct type but improper value.</td></tr>
            <tr><td>ZeroDivisionError</td><td>Raised when the second operand of division or modulo operation is zero.</td></tr>
        </tbody>
    </table>

    <h3>Custom Exceptions</h3>
    <p>You can also define your own exceptions in Python. To learn more about creating user-defined exceptions, you can refer to the documentation on <strong>Python User-defined Exceptions</strong>.</p>

    <h3>Handling Exceptions</h3>
    <p>We can handle built-in and user-defined exceptions using the <code>try</code>, <code>except</code>, and <code>finally</code> statements. For details on how to do this, check out the tutorial on <strong>Python try, except, and finally statements</strong>.</p>

    <h3>Errors vs. Exceptions</h3>
    <p>Errors represent conditions such as compilation errors, syntax errors, library incompatibility, infinite recursion, etc. These are usually beyond the control of the programmer, and we should not try to handle them.</p>
    <p>In contrast, exceptions can be caught and handled by the program.</p>

    <p>Now that you understand exceptions, you can learn how to handle them in Python in the next tutorial.</p>
</div>

        </>),
        "python-exception-handling": (
        <>
        <div>
    <h2>Python Exception Handling</h2>
    <p>In the previous tutorial, we learned about Python exceptions, which can terminate a program's execution unexpectedly. Thus, it is crucial to handle exceptions properly. In Python, we utilize the <code>try...except</code> block for exception handling.</p>

    <h3>Python <code>try...except</code> Block</h3>
    <p>The <code>try...except</code> block is employed to manage exceptions in Python. Here’s the syntax:</p>
    <pre><code>{`try:
    # Code that may raise an exception
except:
    # Code to execute when an exception occurs`}</code></pre>
    <p>In this structure, the code that might lead to an exception is placed within the <code>try</code> block, followed by an <code>except</code> block. If an exception occurs, control is transferred to the <code>except</code> block. Note that the <code>except</code> block cannot be used without the <code>try</code> block.</p>

    <h3>Example: Exception Handling with <code>try...except</code></h3>
    <pre><code>{`try:
    numerator = 10
    denominator = 0

    result = numerator / denominator

    print(result)
except:
    print("Error: Denominator cannot be 0.")`}</code></pre>
    <p><strong>Output:</strong> <code>Error: Denominator cannot be 0.</code></p>

    <p>In this example, we attempt to divide a number by zero, which raises an exception. By placing the division operation within the <code>try</code> block, we ensure that when an exception occurs, the remaining code in that block is skipped, and the <code>except</code> block executes.</p>

    <p>If no exceptions occur in the <code>try</code> block, the <code>except</code> block is ignored.</p>

    <h3>Catching Specific Exceptions in Python</h3>
    <p>For each <code>try</code> block, you can have multiple <code>except</code> blocks to handle different exceptions. The argument type of each <code>except</code> block indicates the type of exception it can manage.</p>
    <pre><code>{`try:
    even_numbers = [2, 4, 6, 8]
    print(even_numbers[5])

except ZeroDivisionError:
    print("Denominator cannot be 0.")
    
except IndexError:
    print("Index Out of Bound.")`}</code></pre>
    <p><strong>Output:</strong> <code>Index Out of Bound</code></p>

    <p>In this example, we create a list called <code>even_numbers</code>. Since list indexing begins at 0, attempting to access index 5 results in an <code>IndexError</code>. When this error occurs, the corresponding <code>except</code> block for <code>IndexError</code> is executed, while the one for <code>ZeroDivisionError</code> is ignored.</p>

    <h3>Using <code>else</code> with <code>try</code></h3>
    <p>In certain scenarios, you may want to execute a block of code only if the code in the <code>try</code> block runs without any errors. This can be accomplished using the optional <code>else</code> keyword:</p>
    <pre><code>{`try:
    num = int(input("Enter a number: "))
    assert num % 2 == 0
except:
    print("Not an even number!")
else:
    reciprocal = 1 / num
    print(reciprocal)`}</code></pre>
    <p><strong>Output:</strong></p>
    <p>- If an odd number is entered: <br/> <code>Enter a number: 1</code> <br/> <code>Not an even number!</code></p>
    <p>- If an even number is entered: <br/> <code>Enter a number: 4</code> <br/> <code>0.25</code></p>
    <p>If <code>0</code> is entered, a <code>ZeroDivisionError</code> occurs since the <code>else</code> block does not handle exceptions from the preceding <code>except</code> clauses:</p>
    <p><code>Enter a number: 0</code></p>
    <pre><code>{`Traceback (most recent call last):
  File "<string>", line 7, in <module>
    reciprocal = 1 / num
ZeroDivisionError: division by zero`}</code></pre>
    <p>In this case, the <code>assert</code> statement ensures that <code>num</code> is even; if it is odd, it raises an <code>AssertionError</code>, triggering the <code>except</code> block.</p>
    <p><strong>Note:</strong> Exceptions occurring in the <code>else</code> block are not handled by the preceding <code>except</code> clauses.</p>

    <h3>The <code>finally</code> Block</h3>
    <p>In Python, the <code>finally</code> block is executed regardless of whether an exception occurs or not. This block is optional, and there can only be one <code>finally</code> block for each <code>try</code> block.</p>
    <p>Here’s an example:</p>
    <pre><code>{`try:
    numerator = 10
    denominator = 0

    result = numerator / denominator

    print(result)
except:
    print("Error: Denominator cannot be 0.")
    
finally:
    print("This is the finally block.")`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`Error: Denominator cannot be 0.
This is the finally block.`}</code></pre>
    <p>In this case, an exception is raised due to division by zero. The <code>except</code> block handles the error, and the <code>finally</code> block executes afterward.</p>
</div>

        </>
        ),
        "python-custom-exceptions": (
            <>
            <div>
    <h2>Python Custom Exceptions</h2>
    <p>In the previous tutorial, we explored various built-in exceptions in Python and discussed the importance of handling them. However, there are times when we may need to create our own custom exceptions to meet specific requirements.</p>

    <h3>Defining Custom Exceptions</h3>
    <p>In Python, custom exceptions can be defined by creating a new class that derives from the built-in <code>Exception</code> class. The syntax for defining custom exceptions is as follows:</p>
    <pre><code>{`class CustomError(Exception):
    ...
    pass

try:
    ...
except CustomError:
    ...`}</code></pre>
    <p>In this example, <code>CustomError</code> is a user-defined exception that inherits from the <code>Exception</code> class.</p>
    <p><strong>Note:</strong> When developing a large Python program, it's a good practice to store all user-defined exceptions in a separate file. Many standard modules typically define their exceptions in files named <code>exceptions.py</code> or <code>errors.py</code>.</p>

    <h3>Example: Python User-Defined Exception</h3>
    <pre><code>{`# Define Python user-defined exceptions
class InvalidAgeException(Exception):
    "Raised when the input value is less than 18"
    pass

# You need to guess this number
number = 18

try:
    input_num = int(input("Enter a number: "))
    if input_num < number:
        raise InvalidAgeException
    else:
        print("Eligible to Vote")
        
except InvalidAgeException:
    print("Exception occurred: Invalid Age")`}</code></pre>
    <p><strong>Output:</strong></p>
    <p>- If the user inputs a number greater than 18:</p>
    <pre><code>{`Enter a number: 45
Eligible to Vote`}</code></pre>
    <p>- If the user inputs a number smaller than 18:</p>
    <pre><code>{`Enter a number: 14
Exception occurred: Invalid Age`}</code></pre>
    
    <p>In this example, we defined a custom exception called <code>InvalidAgeException</code> by creating a class that extends the built-in <code>Exception</code> class. When <code>input_num</code> is less than 18, an exception is raised.</p>
    
    <p>When an exception occurs, the remaining code in the <code>try</code> block is skipped, and the corresponding <code>except</code> block executes to handle the <code>InvalidAgeException</code>.</p>

    <h3>Customizing Exception Classes</h3>
    <p>We can further customize exception classes to accept additional arguments as needed. To learn about customizing exception classes, you should have a basic understanding of Object-Oriented Programming.</p>
    <p>For more information, you can visit the tutorial on Python Object Oriented Programming.</p>
    
    <p>Here’s an example of a customized exception class:</p>
    <pre><code>{`class SalaryNotInRangeError(Exception):
    """Exception raised for errors in the input salary.

    Attributes:
        salary -- input salary which caused the error
        message -- explanation of the error
    """
    
    def __init__(self, salary, message="Salary is not in (5000, 15000) range"):
        self.salary = salary
        self.message = message
        super().__init__(self.message)

salary = int(input("Enter salary amount: "))
if not 5000 < salary < 15000:
    raise SalaryNotInRangeError(salary)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`Enter salary amount: 2000
Traceback (most recent call last):
  File "<string>", line 17, in <module>
    raise SalaryNotInRangeError(salary)
__main__.SalaryNotInRangeError: Salary is not in (5000, 15000) range`}</code></pre>

    <p>In this case, we override the constructor of the <code>Exception</code> class to accept custom arguments <code>salary</code> and <code>message</code>. The parent <code>Exception</code> class's constructor is called using <code>super()</code>, passing the <code>self.message</code> argument.</p>
    
    <p>The custom attribute <code>self.salary</code> is defined for future use. The inherited <code>__str__</code> method of the <code>Exception</code> class is then utilized to display the appropriate message when <code>SalaryNotInRangeError</code> is raised.</p>
</div>

            </>
        ),



        // Python Modules
        "python-modules": (
            <>
            <div>
    <h2>Python Modules</h2>
    <p>As programs grow larger, it becomes difficult to manage all the code in one file. Modules allow us to separate code into files based on functionality, making our code more organized and easier to maintain.</p>

    <h3>What is a Module?</h3>
    <p>A module is a file that contains Python definitions and statements, such as variables, functions, and classes. For example, you can create a module with a function:</p>

    <pre><code>{`
# Python Module - addition
def add(a, b):
    result = a + b
    return result
`}</code></pre>

    <p>Here, we created a function <code>add()</code> inside a module named <code>example.py</code>, which adds two numbers and returns the result.</p>

    <h3>Importing Modules in Python</h3>
    <p>To use a module in another module or script, we import it using the <code>import</code> keyword.</p>

    <pre><code>{`
import example
example.add(4, 5) # returns 9
`}</code></pre>

    <p>This imports the module <code>example</code>, and using <code>example.add()</code> allows us to call the <code>add()</code> function.</p>

    <h3>Python Standard Modules</h3>
    <p>Python has many standard modules that are built into the language. For instance, to get the value of pi from the <code>math</code> module, we can do this:</p>

    <pre><code>{`
# import standard math module
import math
print("The value of pi is", math.pi)
`}</code></pre>

    <p><strong>Output:</strong></p>
    <pre><code>{`
The value of pi is 3.141592653589793
`}</code></pre>

    <h3>Renaming a Module During Import</h3>
    <p>We can also import a module with a custom name using <code>as</code>. This is useful for reducing typing:</p>

    <pre><code>{`
import math as m
print(m.pi)
`}</code></pre>

    <p><strong>Output:</strong> 3.141592653589793</p>

    <h3>Using from...import</h3>
    <p>We can import specific attributes or functions from a module instead of importing the entire module:</p>

    <pre><code>{`
from math import pi
print(pi)
`}</code></pre>

    <p><strong>Output:</strong> 3.141592653589793</p>

    <h3>Importing All Definitions</h3>
    <p>It is possible to import everything from a module using <code>*</code>, though it's generally not a good practice as it can lead to name conflicts:</p>

    <pre><code>{`
from math import *
print("The value of pi is", pi)
`}</code></pre>

    <h3>Listing All Functions in a Module</h3>
    <p>The <code>dir()</code> function returns a sorted list of all names defined in a module. For example:</p>

    <pre><code>{`
import example
print(dir(example))
`}</code></pre>

    <p><strong>Output:</strong></p>
    <pre><code>{`
['__builtins__', '__cached__', '__doc__', '__file__', '__name__', 'add']
`}</code></pre>

    <p>Here, <code>dir()</code> lists all the attributes of the module, including the function <code>add()</code>. Other names starting with underscores are default Python attributes.</p>

    <h3>Finding Current Namespace</h3>
    <p>We can also use <code>dir()</code> to list all names in the current namespace:</p>

    <pre><code>{`
a = 1
b = "hello"
import math
print(dir())
`}</code></pre>

    <p><strong>Output:</strong></p>
    <pre><code>{`
['__builtins__', '__doc__', '__name__', 'a', 'b', 'math']
`}</code></pre>

</div>

            </>
        ),
        "python-packages": (
            <>
<div>
    <h2>Python Package</h2>
    <p>A package in Python serves as a container for related functions and modules that perform specific tasks. For instance, the <code>math</code> package provides the <code>sqrt()</code> function to compute the square root of a number.</p>

    <h3>Why Use Packages?</h3>
    <p>In larger projects, managing a vast amount of code within a single file can lead to disorganization. By utilizing packages, we can separate our code into multiple files, grouping related functionality together. This not only enhances readability but also allows for code reuse across different projects.</p>

    <h3>Creating a Package</h3>
    <p>To create a package, a directory must include a file named <code>__init__.py</code>. This file can be empty, but it is typically where we place initialization code for the package.</p>

    <h3>Importing Modules from a Package</h3>
    <p>In Python, modules from packages can be imported using the dot <code>(.)</code> operator. For example, if we want to import the <code>DataFrame</code> class from the <code>pandas</code> package, we can do so as follows:</p>

    <pre><code>{`
import pandas as pd
`}</code></pre>

    <p>Now we can create a DataFrame using:</p>

    <pre><code>{`
df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
print(df)
`}</code></pre>

    <h3>Importing Without Package Prefix</h3>
    <p>If using the full package prefix feels cumbersome, we can import the module without it:</p>

    <pre><code>{`
from pandas import DataFrame
`}</code></pre>

    <p>This allows us to call the DataFrame constructor directly:</p>

    <pre><code>{`
df = DataFrame({'A': [1, 2], 'B': [3, 4]})
print(df)
`}</code></pre>

    <h3>Importing Specific Functionality</h3>
    <p>To import only the required function (or class or variable) from a module within a package, we can use:</p>

    <pre><code>{`
from pandas import read_csv
`}</code></pre>

    <p>Now, we can directly use <code>read_csv</code> to load a CSV file:</p>

    <pre><code>{`
data = read_csv('data.csv')
print(data)
`}</code></pre>

    <p>While this method is convenient, it is often not recommended. Using the full namespace helps avoid confusion and prevents identifier name collisions.</p>

    <h3>Famous Python Packages</h3>
    <p>Here are some well-known Python packages that are widely used in various applications:</p>
    <ul>
        <li><strong>NumPy:</strong> A package for numerical computing that supports large multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays.</li>
        <li><strong>Pandas:</strong> A data manipulation and analysis package that provides data structures like DataFrames, making it easier to handle structured data.</li>
        <li><strong>Requests:</strong> A simple and elegant HTTP library for Python, allowing you to send HTTP requests easily.</li>
        <li><strong>Matplotlib:</strong> A plotting library for creating static, animated, and interactive visualizations in Python.</li>
        <li><strong>Flask:</strong> A lightweight web framework that allows you to build web applications quickly and easily.</li>
        <li><strong>Django:</strong> A high-level web framework that encourages rapid development and clean, pragmatic design for building web applications.</li>
        <li><strong>Beautiful Soup:</strong> A library for web scraping purposes to pull the data out of HTML and XML files.</li>
        <li><strong>TensorFlow:</strong> An open-source library for numerical computation and machine learning, widely used for developing neural networks.</li>
    </ul>

    <h3>Module Search Path</h3>
    <p>When importing packages, Python searches for modules in the directories listed in <code>sys.path</code>, similar to how it looks for modules.</p>
</div>
            </>
        ),



        // Python OOPS
        "python-oops": (
            <>
            <div>
    <h2>Python Object-Oriented Programming</h2>
    <p>Python is a versatile programming language that supports various programming styles, including object-oriented programming (OOP) through the use of objects and classes.</p>

    <h3>Understanding Objects and Classes</h3>
    <p>An object is any entity that has attributes and behaviors. For example, consider a parrot:</p>
    <ul>
        <li><strong>Attributes:</strong> name, age, color, etc.</li>
        <li><strong>Behavior:</strong> dancing, singing, etc.</li>
    </ul>
    <p>A class serves as a blueprint for creating such objects.</p>

    <h3>Python Class and Object</h3>
    <pre><code>{`
class Parrot:
    # class attribute
    name = ""
    age = 0

# create parrot1 object
parrot1 = Parrot()
parrot1.name = "Blu"
parrot1.age = 10

# create another object parrot2
parrot2 = Parrot()
parrot2.name = "Woo"
parrot2.age = 15

# access attributes
print(f"{parrot1.name} is {parrot1.age} years old")
print(f"{parrot2.name} is {parrot2.age} years old")
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Blu is 10 years old
Woo is 15 years old
`}</code></pre>
    <p>In this example, we created a class named <code>Parrot</code> with two attributes: <code>name</code> and <code>age</code>. We then created instances of the <code>Parrot</code> class, <code>parrot1</code> and <code>parrot2</code>, and accessed their attributes.</p>

    <h3>Python Inheritance</h3>
    <p>Inheritance allows us to create a new class that utilizes the details of an existing class without modifying it. The new class is called the derived class (or child class), while the existing class is referred to as the base class (or parent class).</p>

    <h4>Example of Inheritance</h4>
    <pre><code>{`
# base class
class Animal:
    def eat(self):
        print("I can eat!")
    
    def sleep(self):
        print("I can sleep!")

# derived class
class Dog(Animal):
    def bark(self):
        print("I can bark! Woof woof!!")

# Create object of the Dog class
dog1 = Dog()

# Calling members of the base class
dog1.eat()
dog1.sleep()

# Calling member of the derived class
dog1.bark()
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
I can eat!
I can sleep!
I can bark! Woof woof!!
`}</code></pre>
    <p>In this example, the object <code>dog1</code> can access the members of the base class <code>Animal</code> because <code>Dog</code> inherits from <code>Animal</code>.</p>

    <h3>Python Encapsulation</h3>
    <p>Encapsulation is a key feature of object-oriented programming, referring to the bundling of attributes and methods within a single class. This prevents external classes from accessing or modifying the class's attributes and methods, helping to achieve data hiding.</p>

    <h4>Example of Encapsulation</h4>
    <pre><code>{`
class Computer:
    def __init__(self):
        self.__maxprice = 900

    def sell(self):
        print("Selling Price: {}".format(self.__maxprice))

    def setMaxPrice(self, price):
        self.__maxprice = price

c = Computer()
c.sell()

# change the price
c.__maxprice = 1000
c.sell()

# using setter function
c.setMaxPrice(1000)
c.sell()
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Selling Price: 900
Selling Price: 900
Selling Price: 1000
`}</code></pre>
    <p>In this program, we defined a <code>Computer</code> class and used the <code>__init__()</code> method to store the maximum selling price. The attribute <code>__maxprice</code> is private, and attempting to modify it directly outside of the class does not affect its value.</p>

    <h3>Polymorphism</h3>
    <p>Polymorphism is another important concept of object-oriented programming, meaning "more than one form." It allows the same entity (method or operator or object) to perform different operations in different contexts.</p>

    <h4>Example of Polymorphism</h4>
    <pre><code>{`
class Polygon:
    # method to render a shape
    def render(self):
        print("Rendering Polygon...")

class Square(Polygon):
    # renders Square
    def render(self):
        print("Rendering Square...")

class Circle(Polygon):
    # renders circle
    def render(self):
        print("Rendering Circle...")

# create an object of Square
s1 = Square()
s1.render()

# create an object of Circle
c1 = Circle()
c1.render()
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Rendering Square...
Rendering Circle...
`}</code></pre>
    <p>In this example, we have a superclass <code>Polygon</code> and two subclasses <code>Square</code> and <code>Circle</code>. Each subclass overrides the <code>render()</code> method, demonstrating polymorphism as the same method behaves differently in different classes.</p>

    <h3>Key Points to Remember</h3>
    <ul>
        <li>Object-Oriented Programming (OOP) makes the program easier to understand and more efficient.</li>
        <li>Classes are sharable, allowing for code reuse.</li>
        <li>Encapsulation ensures data safety and security through data abstraction.</li>
        <li>Polymorphism allows a consistent interface for different objects, enabling efficient code writing.</li>
    </ul>
</div>

            </>
        ),
        "self-method": (
            <>
            <div>
    <h2>The `self` Method in Python</h2>
    <p>The <code>self</code> parameter is a reference to the current instance of a class and is used to access variables and methods that belong to that instance. It is an essential part of object-oriented programming in Python, allowing us to differentiate between instance attributes and methods.</p>

    <h3>Understanding the `self` Parameter</h3>
    <p>When defining a method within a class, you need to include <code>self</code> as the first parameter. This is necessary because when an object of the class is created, <code>self</code> refers to that specific object.</p>
    
    <h4>Example of Using `self`</h4>
    <pre><code>{`
class Details:
    name = "Simran"
    age = 20

    def desc(self):
        print("My name is", self.name, "and I'm", self.age, "years old.")

obj1 = Details()
obj1.desc()
`}</code></pre>
    
    <h4>Output</h4>
    <pre><code>{`
My name is Simran and I'm 20 years old.
`}</code></pre>

    <h3>Why Use `self`?</h3>
    <p>Using <code>self</code> allows you to access instance attributes and methods. Without <code>self</code>, Python would not know which instance's attributes or methods you are referring to, especially in the case of multiple objects created from the same class.</p>

    <h3>Example of Class with Multiple Methods</h3>
    <pre><code>{`
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        print(f"Car Info: {self.year} {self.make} {self.model}")

    def start_engine(self):
        print(f"The {self.make} {self.model}'s engine is starting!")

my_car = Car("Toyota", "Corolla", 2022)
my_car.display_info()
my_car.start_engine()
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Car Info: 2022 Toyota Corolla
The Toyota Corolla's engine is starting!
`}</code></pre>

    <h3>Modifying Attributes Using `self`</h3>
    <p>You can also modify instance attributes using <code>self</code>. Here's an example:</p>
    
    <pre><code>{`
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def update_grade(self, new_grade):
        self.grade = new_grade
        print(f"{self.name}'s grade has been updated to {self.grade}.")

student1 = Student("Alice", "B")
student1.update_grade("A")
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Alice's grade has been updated to A.
`}</code></pre>

    <h3>Key Points to Remember</h3>
    <ul>
        <li>The <code>self</code> parameter must be the first parameter in the method definition.</li>
        <li>Use <code>self</code> to access attributes and methods of the instance within the class.</li>
        <li>Each instance of a class has its own copy of the attributes defined in the class, which can be accessed or modified using <code>self</code>.</li>
    </ul>
</div>

            </>
        ),
        "init-method": (
            <>
            <div>
    <h2>The `__init__` Method in Python</h2>
    <p>The <code>__init__</code> method is a special method in Python used to initialize the state of an object when it is created. It is called automatically when a new instance of a class is instantiated, and it allows you to set initial values for the object's attributes.</p>

    <h3>Defining the `__init__` Method</h3>
    <p>The <code>__init__</code> method takes at least one parameter: <code>self</code>, which refers to the instance being created. Additional parameters can be defined to initialize the object's attributes.</p>

    <h4>Example of Using the `__init__` Method</h4>
    <pre><code>{`
class Details:
    def __init__(self, animal, group):
        self.animal = animal
        self.group = group

obj1 = Details("Crab", "Crustaceans")
print(obj1.animal, "belongs to the", obj1.group, "group.")
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Crab belongs to the Crustaceans group.
`}</code></pre>

    <h3>Modifying Object Properties</h3>
    <p>Once an object is created, you can modify its properties using dot notation. The attributes can be changed at any time after the object is created.</p>

    <h4>Example of Modifying Object Properties</h4>
    <pre><code>{`
class Details:
    def __init__(self, animal, group):
        self.animal = animal
        self.group = group

obj1 = Details("Crab", "Crustaceans")
obj1.animal = "Shrimp"  # Modify object property
print(obj1.animal, "belongs to the", obj1.group, "group.")
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Shrimp belongs to the Crustaceans group.
`}</code></pre>

    <h3>Deleting Objects and Their Properties</h3>
    <p>You can also delete objects entirely or delete specific attributes using the <code>del</code> statement. Deleting an object means that it can no longer be referenced, leading to a NameError if you try to access it afterward.</p>

    <h4>Example of Deleting an Object</h4>
    <pre><code>{`
class Details:
    def __init__(self, animal, group):
        self.animal = animal
        self.group = group

obj1 = Details("Crab", "Crustaceans")
del obj1  # Delete object entirely
print(obj1.animal, "belongs to the", obj1.group, "group.")
`}</code></pre>

    <h4>Output</h4>
    <pre><code>{`
Traceback (most recent call last):
  File "example.py", line 12, in <module>
    print(obj1.animal, "belongs to the", obj1.group, "group.")
NameError: name 'obj1' is not defined
`}</code></pre>

    <h3>Key Points to Remember</h3>
    <ul>
        <li>The <code>__init__</code> method is automatically called when an object is created.</li>
        <li>Use <code>self</code> to refer to instance variables and methods within the class.</li>
        <li>Object properties can be modified or deleted after the object is created.</li>
        <li>Attempting to access an object after it has been deleted will raise a NameError.</li>
    </ul>
</div>

            </>
        ),



        // Python Advance Topics
        "python-lambda-or-anonymous-function": (
            <>
            <div>
    <h2>Python Lambda/Anonymous Function</h2>
    <p>A lambda function in Python is a special kind of function that does not have a name. For example:</p>
    <pre><code>{`lambda : print('Hello World')`}</code></pre>
    <p>In this example, we have defined a lambda function that outputs 'Hello World'. Before exploring lambdas, it’s important to have a grasp of Python functions.</p>

    <h3>Defining a Lambda Function</h3>
    <p>To create a lambda function, we utilize the <code>lambda</code> keyword in place of <code>def</code>. The syntax for declaring a lambda function is as follows:</p>
    <pre><code>{`lambda argument(s) : expression`}</code></pre>
    <p>In this syntax:</p>
    <ul>
        <li><strong>argument(s)</strong>: Represents any values that are passed into the lambda function.</li>
        <li><strong>expression</strong>: This is the expression that gets executed and returned.</li>
    </ul>
    
    <p>Here's an example:</p>
    <pre><code>{`greet = lambda : print('Hello World')`}</code></pre>
    <p>In this case, we've created a lambda function and assigned it to a variable named <code>greet</code>.</p>
    
    <p>To invoke this lambda function, you simply call it as shown below:</p>
    <pre><code>{`# call the lambda
greet()`}</code></pre>
    <p>This lambda function will print 'Hello World'.</p>
    <p><strong>Note:</strong> This specific lambda function does not take any arguments.</p>

    <h3>Example of a Lambda Function</h3>
    <pre><code>{`# declare a lambda function
greet = lambda : print('Hello World')

# call lambda function
greet()`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`Hello World`}</code></pre>
    <p>In this example, we have defined a lambda function and assigned it to the variable <code>greet</code>. When this lambda function is called, the <code>print()</code> statement inside it is executed.</p>

    <h3>Lambda Function with Arguments</h3>
    <p>Like regular functions, lambda functions can also accept arguments. For instance:</p>
    <pre><code>{`# lambda that accepts one argument
greet_user = lambda name : print('Hey there,', name)

# lambda call
greet_user('Delilah')`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`Hey there, Delilah`}</code></pre>
    <p>In this scenario, we have assigned a lambda function to the variable <code>greet_user</code>. The <code>name</code> following the <code>lambda</code> keyword signifies that the lambda function takes an argument called <code>name</code>.</p>
    
    <p>The lambda function is called as follows:</p>
    <pre><code>{`greet_user('Delilah')`}</code></pre>
    <p>By passing the string 'Delilah' to the lambda function, it executes the corresponding statement inside it.</p>
</div>


            </>
        ),
        "python-iterators": (
            <>
<div>
    <h2>Python Iterators</h2>
    <p>Iterators are special methods used to traverse collections like lists and tuples. With an iterator, we can loop through an object and retrieve its elements.</p>

    <p>In Python, an iterator object must implement two special methods: <code>__iter__()</code> and <code>__next__()</code>, which together make up the iterator protocol.</p>

    <h3>Iterating Through an Iterator</h3>
    <p>To get the next item in a sequence, we can use the <code>next()</code> function. Here's an example:</p>
    <pre><code>{`# define a list
my_list = [4, 7, 0]

# create an iterator from the list
iterator = iter(my_list)

# get the first element of the iterator
print(next(iterator))  # prints 4

# get the second element of the iterator
print(next(iterator))  # prints 7

# get the third element of the iterator
print(next(iterator))  # prints 0`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`4
7
0`}</code></pre>
    <p>In this example, we first created an iterator from the list using the <code>iter()</code> method, and then we utilized the <code>next()</code> function to sequentially retrieve the elements. Once we reach the end and there are no more elements to return, a <code>StopIteration</code> exception is raised.</p>

    <h3>Using a For Loop</h3>
    <p>A more convenient way to iterate through an iterator is by using a <code>for</code> loop. For example:</p>
    <pre><code>{`# define a list
my_list = [4, 7, 0]

for element in my_list:
    print(element)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`4
7
0`}</code></pre>
    
    <h3>How the For Loop Works with Iterators</h3>
    <p>The <code>for</code> loop in Python is designed to iterate over sequences such as lists, tuples, or strings. When used with an iterator, the loop automatically iterates through the elements until the iterator is exhausted.</p>
    
    <pre><code>{`# create a list of integers
my_list = [1, 2, 3, 4, 5]

# create an iterator from the list
iterator = iter(my_list)

# iterate through the elements of the iterator
for element in iterator:
    # Print each element
    print(element)`}</code></pre>
    
    <p>In this example, the <code>for</code> loop iterates over the elements of the iterator object. In each iteration, the next element's value is assigned to the variable <code>element</code>, and the indented block of code is executed. This process continues until the iterator is exhausted, at which point the loop ends.</p>

    <h3>Building Custom Iterators</h3>
    <p>Creating an iterator from scratch in Python is straightforward. You simply need to implement the <code>__iter__()</code> and <code>__next__()</code> methods:</p>
    <ul>
        <li><code>__iter__()</code> should return the iterator object itself, allowing for any necessary initialization.</li>
        <li><code>__next__()</code> must return the next item in the sequence. When reaching the end, it should raise <code>StopIteration</code>.</li>
    </ul>
    
    <p>Here's an example that provides the next power of 2 in each iteration, starting from zero up to a user-defined number:</p>
    <pre><code>{`class PowTwo:
    """Class to implement an iterator of powers of two"""

    def __init__(self, max=0):
        self.max = max

    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n <= self.max:
            result = 2 ** self.n
            self.n += 1
            return result
        else:
            raise StopIteration

# create an object
numbers = PowTwo(3)

# create an iterable from the object
i = iter(numbers)

# Using next to get to the next iterator element
print(next(i))  # prints 1
print(next(i))  # prints 2
print(next(i))  # prints 4
print(next(i))  # prints 8
print(next(i))  # raises StopIteration exception`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`1
2
4
8
Traceback (most recent call last):
  File "<string>", line 32, in <module>
    raise StopIteration`}</code></pre>
    <p>We can also utilize a <code>for</code> loop to iterate over our iterator class:</p>
    <pre><code>{`for i in PowTwo(3):
    print(i)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`1
2
4
8`}</code></pre>
    
    <h3>Python Infinite Iterators</h3>
    <p>An infinite iterator is one that never ends, continually producing elements indefinitely. Here’s how to create an infinite iterator using the <code>count()</code> function from the <code>itertools</code> module:</p>
    <pre><code>{`from itertools import count

# create an infinite iterator that starts at 1 and increments by 1 each time
infinite_iterator = count(1)

# print the first 5 elements of the infinite iterator
for i in range(5):
    print(next(infinite_iterator))`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`1
2
3
4
5`}</code></pre>
    <p>In this example, we created an infinite iterator starting at 1 and incrementing by 1 each time. We then printed the first five elements using the <code>for</code> loop and the <code>next()</code> method.</p>
</div>

            </>
        ),
        "python-generators": (
            <>
            <div>
    <h2>Python Generators</h2>
    <p>A generator in Python is a function that returns an iterator, which yields a sequence of values as it is iterated over. Generators are particularly useful for producing large sequences of values without the need to store all of them in memory simultaneously.</p>

    <h3>Creating a Python Generator</h3>
    <p>Similar to defining a regular function, we define a generator function using the <code>def</code> keyword. However, instead of the <code>return</code> statement, we utilize the <code>yield</code> statement:</p>
    <pre><code>{`def generator_name(arg):
    # statements
    yield something`}</code></pre>
    <p>In this syntax, the <code>yield</code> keyword is used to produce a value from the generator. When the generator function is called, it does not execute immediately; instead, it returns a generator object that can be iterated to produce values.</p>

    <h3>Example: Python Generator</h3>
    <p>Here's an example of a generator function that creates a sequence of numbers:</p>
    <pre><code>{`def my_generator(n):
    # initialize counter
    value = 0

    # loop until the counter is less than n
    while value < n:
        # produce the current value of the counter
        yield value
        # increment the counter
        value += 1

# iterate over the generator object produced by my_generator
for value in my_generator(3):
    # print each value produced by generator
    print(value)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`0
1
2`}</code></pre>
    <p>In this example, the <code>my_generator()</code> function takes an integer <code>n</code> as an argument and generates numbers from 0 to <code>n-1</code> using a <code>while</code> loop. The <code>yield</code> keyword produces a value and pauses the function’s execution until the next value is requested.</p>

    <p>You can also create a generator object from the generator function by calling it like any other function:</p>
    <pre><code>{`generator = my_generator(3)
print(next(generator))  # 0
print(next(generator))  # 1
print(next(generator))  # 2`}</code></pre>

    <h3>Python Generator Expression</h3>
    <p>A generator expression is a concise way to create a generator object, similar to a list comprehension, but instead of producing a list, it produces a generator object:</p>
    <pre><code>{`(expression for item in iterable)`}</code></pre>
    <p>The generator expression creates a generator object that yields values for each item in the iterable, one at a time, when iterated over.</p>

    <h4>Example 2: Python Generator Expression</h4>
    <pre><code>{`# create the generator object
squares_generator = (i * i for i in range(5))

# iterate over the generator and print the values
for i in squares_generator:
    print(i)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`0
1
4
9
16`}</code></pre>
    <p>This example creates a generator object that yields the squares of numbers from 0 to 4 when iterated over, which is done using a <code>for</code> loop.</p>

    <h3>Benefits of Python Generators</h3>
    <p>Generators offer several advantages:</p>
    
    <h4>1. Easy to Implement</h4>
    <p>Generators can be implemented more clearly and concisely compared to their iterator class counterparts. For instance, to generate a sequence of powers of 2:</p>
    <pre><code>{`class PowTwo:
    def __init__(self, max=0):
        self.n = 0
        self.max = max

    def __iter__(self):
        return self

    def __next__(self):
        if self.n > self.max:
            raise StopIteration

        result = 2 ** self.n
        self.n += 1
        return result`}</code></pre>
    <p>The previous example is longer and more complex. Now, here’s how we can achieve the same using a generator function:</p>
    <pre><code>{`def PowTwoGen(max=0):
    n = 0
    while n < max:
        yield 2 ** n
        n += 1`}</code></pre>

    <h4>2. Memory Efficient</h4>
    <p>Unlike normal functions that create the entire sequence in memory before returning it, generators produce one item at a time, making them more memory efficient—especially for large sequences.</p>

    <h4>3. Represent Infinite Streams</h4>
    <p>Generators can represent infinite streams of data. Since they yield one item at a time, they are suitable for infinite sequences. For example:</p>
    <pre><code>{`def all_even():
    n = 0
    while True:
        yield n
        n += 2`}</code></pre>

    <h4>4. Pipelining Generators</h4>
    <p>Generators can be used to pipeline multiple operations together. For example, consider a generator that produces Fibonacci numbers and another that squares those numbers. We can calculate the sum of the squares of Fibonacci numbers like this:</p>
    <pre><code>{`def fibonacci_numbers(nums):
    x, y = 0, 1
    for _ in range(nums):
        x, y = y, x+y
        yield x

def square(nums):
    for num in nums:
        yield num**2

print(sum(square(fibonacci_numbers(10))))`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`4895`}</code></pre>
    <p>This pipelining method is both efficient and easy to read!</p>
</div>

            </>
        ),
        "python-namespace-and-scope": (
            <>
            <div>
    <h2>Python Namespace and Scope</h2>
    <p>In simple terms, a <strong>namespace</strong> is a collection of names. In Python, it can be imagined as a mapping of each defined name to its corresponding object. Namespaces are used to store the values of variables and other objects in a program, associating them with specific names. This feature allows us to use the same name for different variables or objects in different parts of the code without causing conflicts or confusion.</p>

    <h3>Types of Python Namespaces</h3>
    <p>When the Python interpreter starts, a namespace containing all built-in names is created and exists for the entire duration of the interpreter's execution. This is why built-in functions like <code>id()</code> and <code>print()</code> are always accessible from any part of the program.</p>
    <p>Each module in Python creates its own global namespace. These namespaces are isolated, meaning that the same name can exist in different modules without colliding. When a function is called, a local namespace is created that contains all the names defined within that function, similar to how a class works.</p>
    
    <h3>Python Variable Scope</h3>
    <p>Although various unique namespaces are defined, not all of them are accessible from every part of the program. This is where the concept of <strong>scope</strong> comes into play. A scope defines the portion of a program from which a namespace can be accessed directly without any prefix.</p>
    <p>At any given moment, there are at least three nested scopes:</p>
    <ul>
        <li>The scope of the current function, which contains local names.</li>
        <li>The scope of the module, which contains global names.</li>
        <li>The outermost scope, which contains built-in names.</li>
    </ul>
    <p>When a reference is made inside a function, Python searches for the name in the local namespace first, then in the global namespace, and finally in the built-in namespace. If there is a function defined within another function, a new nested scope is created inside the local scope.</p>

    <h3>Example 1: Scope and Namespace in Python</h3>
    <pre><code>{`# global_var is in the global namespace
global_var = 10

def outer_function():
    # outer_var is in the local namespace 
    outer_var = 20

    def inner_function():
        # inner_var is in the nested local namespace 
        inner_var = 30
        print(inner_var)

    print(outer_var)
    inner_function()

# print the value of the global variable
print(global_var)

# call the outer function and print local and nested local variables
outer_function()`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`10
20
30`}</code></pre>
    <p>In this example, there are three separate namespaces: the global namespace, the local namespace within the <code>outer_function()</code>, and the local namespace within the <code>inner_function()</code>.</p>
    <ul>
        <li><code>global_var</code>: in the global namespace with value <code>10</code></li>
        <li><code>outer_var</code>: in the local namespace of <code>outer_function()</code> with value <code>20</code></li>
        <li><code>inner_var</code>: in the nested local namespace of <code>inner_function()</code> with value <code>30</code></li>
    </ul>
    <p>When executed, the global variable <code>global_var</code> is printed first, followed by the local variables <code>outer_var</code> and <code>inner_var</code> when the respective functions are called.</p>

    <h3>Example 2: Use of Global Keyword in Python</h3>
    <pre><code>{`# define global variable 
global_var = 10

def my_function():
    # define local variable
    local_var = 20

    # modify global variable value 
    global global_var
    global_var = 30

# print global variable value
print(global_var)

# call the function and modify the global variable
my_function()

# print the modified value of the global variable
print(global_var)`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`10
30`}</code></pre>
    <p>In this example, the <code>global</code> keyword is used to indicate that <code>global_var</code> is a global variable, allowing its value to be modified to <code>30</code> within the function. Thus, when executed, <code>global_var</code> is printed first with a value of <code>10</code>, then the function is called, modifying <code>global_var</code> to <code>30</code>, which is printed again.</p>
</div>

            </>
        ),
        "python-closures": (
            <>
            <div>
    <h2>Python Closures</h2>
    <p>A Python <strong>closure</strong> is a nested function that allows us to access the variables of its enclosing (outer) function even after that function has finished executing.</p>

    <h3>Nested Functions in Python</h3>
    <p>In Python, we can create a function inside another function. This is known as a <strong>nested function</strong>. For example:</p>
    <pre><code>{`def greet(name):
    # inner function
    def display_name():
        print("Hi", name)
    
    # call inner function
    display_name()

# call outer function
greet("John")`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`Hi John`}</code></pre>
    <p>In this example, we have defined the <code>display_name()</code> function inside the <code>greet()</code> function. Here, <code>display_name()</code> is a nested function that executes when called inside <code>greet()</code>.</p>

    <h3>Python Closures</h3>
    <p>A closure is a nested function that retains access to the outer function's variables even after the outer function has finished executing. For example:</p>
    <pre><code>{`def greet():
    # variable defined outside the inner function
    name = "John"
    
    # return a nested anonymous function
    return lambda: "Hi " + name

# call the outer function
message = greet()

# call the inner function
print(message())`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`Hi John`}</code></pre>
    <p>In this example, the <code>greet()</code> function returns a nested anonymous function. When we call the outer function:</p>
    <pre><code>{`message = greet()`}</code></pre>
    <p>the returned function is assigned to the variable <code>message</code>. Although the outer function's execution is complete, the nested function can still access the <code>name</code> variable.</p>

    <h3>Example: Print Odd Numbers using Python Closure</h3>
    <pre><code>{`def calculate():
    num = 1
    def inner_func():
        nonlocal num
        num += 2
        return num
    return inner_func

# call the outer function
odd = calculate()

# call the inner function
print(odd())
print(odd())
print(odd())

# call the outer function again
odd2 = calculate()
print(odd2())`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`3
5
7
3`}</code></pre>
    <p>In this example, when we call <code>calculate()</code>:</p>
    <pre><code>{`odd = calculate()`}</code></pre>
    <p>it returns a closure that allows access to the variable <code>num</code>. This is why we can get the next odd number each time we call <code>odd()</code>.</p>
    <p>When we call <code>calculate()</code> again with <code>odd2 = calculate()</code>, a new closure is returned, allowing us to start from the initial value of <code>num</code>.</p>

    <h3>When to Use Closures?</h3>
    <p>Closures can be useful for:</p>
    <ul>
        <li>Avoiding global values.</li>
        <li>Providing data hiding.</li>
        <li>Implementing simple cases with one or a few methods.</li>
    </ul>
    <p>However, for more complex cases with multiple attributes and methods, a class implementation may be more appropriate.</p>

    <h3>Example: Creating Multipliers with Closures</h3>
    <pre><code>{`def make_multiplier_of(n):
    def multiplier(x):
        return x * n
    return multiplier

# Multiplier of 3
times3 = make_multiplier_of(3)

# Multiplier of 5
times5 = make_multiplier_of(5)

# Output: 27
print(times3(9))

# Output: 15
print(times5(3))

# Output: 30
print(times5(times3(2)))`}</code></pre>
    
    <h3>Conclusion</h3>
    <p>Python decorators make extensive use of closures. It's worth noting that the values enclosed in a closure can be accessed via the <code>__closure__</code> attribute, which returns a tuple of cell objects if it is a closure function.</p>
</div>

            </>
        ),
        "python-decorators": (
            <>
            <div>
    <h2>Python Decorators</h2>
    <p>In Python, a <strong>decorator</strong> is a design pattern that allows you to modify the functionality of a function by wrapping it in another function.</p>
    <p>The outer function is called the decorator, which takes the original function as an argument and returns a modified version of it.</p>

    <h3>Prerequisites for Learning Decorators</h3>
    <p>Before we learn about decorators, we need to understand a few important concepts related to Python functions. Remember that everything in Python is an object, even functions themselves.</p>

    <h4>Nested Function</h4>
    <p>We can include one function inside another, known as a <strong>nested function</strong>. For example:</p>
    <pre><code>{`def outer(x):
    def inner(y):
        return x + y
    return inner

add_five = outer(5)
result = add_five(6)
print(result)  # prints 11`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`11`}</code></pre>
    <p>Here, we have created the <code>inner()</code> function inside the <code>outer()</code> function.</p>

    <h4>Pass Function as Argument</h4>
    <p>We can pass a function as an argument to another function in Python. For example:</p>
    <pre><code>{`def add(x, y):
    return x + y

def calculate(func, x, y):
    return func(x, y)

result = calculate(add, 4, 6)
print(result)  # prints 10`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`10`}</code></pre>
    <p>In this example, the <code>calculate()</code> function takes a function as its argument. When calling <code>calculate()</code>, we pass the <code>add()</code> function as the argument.</p>

    <h4>Return a Function as a Value</h4>
    <p>In Python, we can also return a function as a return value. For example:</p>
    <pre><code>{`def greeting(name):
    def hello():
        return "Hello, " + name + "!"
    return hello

greet = greeting("Atlantis")
print(greet())  # prints "Hello, Atlantis!"`}</code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>{`Hello, Atlantis!`}</code></pre>
    <p>In this example, the statement <code>return hello</code> returns the inner <code>hello()</code> function, which is assigned to the <code>greet</code> variable.</p>

    <h3>Python Decorators</h3>
    <p>A Python decorator is a function that takes in a function and returns it after adding some functionality. Any object that implements the special <code>__call__()</code> method is termed callable. In essence, a decorator is a callable that returns another callable.</p>

    <pre><code>{`def make_pretty(func):
    def inner():
        print("I got decorated")
        func()
    return inner

def ordinary():
    print("I am ordinary")

# Output: I am ordinary`}</code></pre>
    
    <p>Here, we have created two functions:</p>
    <ul>
        <li><code>ordinary()</code> that prints "I am ordinary"</li>
        <li><code>make_pretty()</code> that takes a function as its argument and returns the inner function.</li>
    </ul>
    
    <p>When we call the <code>ordinary()</code> function normally, we get the output "I am ordinary". Now, let's call it using the decorator function:</p>
    
    <pre><code>{`# define the ordinary function
def ordinary():
    print("I am ordinary")
    
# decorate the ordinary function
decorated_func = make_pretty(ordinary)

# call the decorated function
decorated_func()`}</code></pre>

    <p><strong>Output:</strong></p>
    <pre><code>{`I got decorated
I am ordinary`}</code></pre>
    <p>In this example, <code>make_pretty()</code> is a decorator. The line <code>decorated_func = make_pretty(ordinary)</code> passes the <code>ordinary()</code> function to <code>make_pretty()</code>, which returns the inner function, assigned to <code>decorated_func</code>.</p>

    <h3>@ Symbol with Decorator</h3>
    <p>Instead of assigning the function call to a variable, Python provides a more elegant way to achieve this functionality using the <code>@</code> symbol. For example:</p>
    
    <pre><code>{`@make_pretty
def ordinary():
    print("I am ordinary")

ordinary()`}</code></pre>

    <p><strong>Output:</strong></p>
    <pre><code>{`I got decorated
I am ordinary`}</code></pre>
    
    <p>Here, the <code>ordinary()</code> function is decorated with the <code>make_pretty()</code> decorator using the <code>@make_pretty</code> syntax, which is equivalent to <code>ordinary = make_pretty(ordinary)</code>.</p>

    <h3>Decorating Functions with Parameters</h3>
    <p>The above decorator only works with functions that do not have parameters. What if we have functions that take parameters like:</p>
    
    <pre><code>{`def divide(a, b):
    return a/b`}</code></pre>

    <p>This function has two parameters, <code>a</code> and <code>b</code>, and will raise an error if <code>b</code> is 0. Let's create a decorator to check for this case:</p>

    <pre><code>{`def smart_divide(func):
    def inner(a, b):
        print("I am going to divide", a, "and", b)
        if b == 0:
            print("Whoops! cannot divide")
            return

        return func(a, b)
    return inner

@smart_divide
def divide(a, b):
    print(a/b)

divide(2,5)

divide(2,0)`}</code></pre>
    
    <p><strong>Output:</strong></p>
    <pre><code>{`I am going to divide 2 and 5
0.4
I am going to divide 2 and 0
Whoops! cannot divide`}</code></pre>
    
    <p>When we call <code>divide()</code> with the arguments <code>(2,5)</code>, the inner function checks the values and prints the result. If we call <code>divide()</code> with <code>(2,0)</code>, it checks for division by zero and prints an error message.</p>

    <h3>Chaining Decorators in Python</h3>
    <p>Multiple decorators can be chained in Python by applying them to a single function, with the most inner decorator applied first.</p>

    <pre><code>{`def star(func):
    def inner(*args, **kwargs):
        print("*" * 15)
        func(*args, **kwargs)
        print("*" * 15)
    return inner


def percent(func):
    def inner(*args, **kwargs):
        print("%" * 15)
        func(*args, **kwargs)
        print("%" * 15)
    return inner


@star
@percent
def printer(msg):
    print(msg)

printer("Hello")`}</code></pre>

    <p><strong>Output:</strong></p>
    <pre><code>{`***************
%%%%%%%%%%%%%%%
Hello
%%%%%%%%%%%%%%%
***************`}</code></pre>
    
    <p>The above syntax:</p>
    <pre><code>{`@star
@percent
def printer(msg):
    print(msg)`}</code></pre>
    <p>is equivalent to:</p>
    <pre><code>{`def printer(msg):
    print(msg)
printer = star(percent(printer))`}</code></pre>
    
    <p>The order in which we chain decorators matters. If we reverse the order:</p>
    <pre><code>{`@percent
@star
def printer(msg):
    print(msg)`}</code></pre>
    <p>The output would be:</p>
    <pre><code>{`%%%%%%%%%%%%%%%
***************
Hello
***************
%%%%%%%%%%%%%%%`}</code></pre>
</div>

            </>
        ),
        "python-regex": (
            <>
            <h2>Python Regex Overview</h2>
<p>Regular expressions (regex) are a powerful tool for matching patterns in strings. In Python, the <code>re</code> module provides various functions to work with regex.</p>

<h2>Importing the <code>re</code> Module</h2>
<pre><code>{`import re`}</code></pre>

<h2>Commonly Used Functions</h2>

<h3>1. <code>re.match()</code></h3>
<p>Determines if the regular expression matches at the beginning of the string.</p>
<div>
<pre><code>{`import re

pattern = r"Hello"
text = "Hello, World!"

match = re.match(pattern, text)
if match:
    print("Match found:", match.group())
else:
    print("No match")`}</code></pre>
</div>

<h3>2. <code>re.search()</code></h3>
<p>Searches the string for a match and returns a match object if found, otherwise returns <code>None</code>.</p>
<div>
<pre><code>{`import re

pattern = r"World"
text = "Hello, World!"

search = re.search(pattern, text)
if search:
    print("Search found:", search.group())
else:
    print("No match")`}</code></pre>
</div>

<h3>3. <code>re.findall()</code></h3>
<p>Returns a list of all matches in the string.</p>
<div >
<pre><code>{`import re

pattern = r"\\d+"  # Matches one or more digits
text = "There are 2 apples, 3 bananas, and 5 oranges."

matches = re.findall(pattern, text)
print("Findall matches:", matches)`}</code></pre>
</div>

<h3>4. <code>re.sub()</code></h3>
<p>Replaces occurrences of the pattern with a replacement string.</p>
<div >
<pre><code>{`import re

pattern = r"bananas"
replacement = "grapes"
text = "I like bananas and bananas are yellow."

new_text = re.sub(pattern, replacement, text)
print("Replaced text:", new_text)`}</code></pre>
</div>

<h3>5. <code>re.split()</code></h3>
<p>Splits the string by the occurrences of the pattern.</p>
<div >
<pre><code>{`import re

pattern = r"\\s+"
text = "Split this sentence into words."

words = re.split(pattern, text)
print("Split words:", words)`}</code></pre>
</div>

<h2>Special Characters in Regex</h2>
<ul>
    <li><code>.</code> - Matches any character except a newline.</li>
    <li><code>^</code> - Matches the start of the string.</li>
    <li><code>$</code> - Matches the end of the string.</li>
    <li><code>*</code> - Matches zero or more repetitions of the preceding pattern.</li>
    <li><code>+</code> - Matches one or more repetitions of the preceding pattern.</li>
    <li><code>?</code> - Matches zero or one repetition of the preceding pattern.</li>
    <li><code>{'m,n'}</code> - Matches from <code>{'m'}</code> to <code>{'n'}</code> repetitions of the preceding pattern.</li>
    <li><code>[...]</code> - Matches any single character inside the brackets.</li>
    <li><code>\d</code> - Matches any digit (equivalent to <code>[0-9]</code>).</li>
    <li><code>\D</code> - Matches any non-digit character.</li>
    <li><code>\w</code> - Matches any word character (alphanumeric + underscore).</li>
    <li><code>\W</code> - Matches any non-word character.</li>
    <li><code>\s</code> - Matches any whitespace character (space, tab, newline).</li>
    <li><code>\S</code> - Matches any non-whitespace character.</li>
</ul>

<h2>Example: Validate Email Addresses</h2>
<p>Here's how you can use regex to validate an email address:</p>
<div >
<pre><code>{`import re

def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    return re.match(pattern, email) is not None

email = "example@example.com"
if is_valid_email(email):
    print("Valid email")
else:
    print("Invalid email")`}</code></pre>
</div>

<h2>Example: Extracting Dates from Text</h2>
<p>You can use regex to extract dates from a string in the format <code>DD/MM/YYYY</code>.</p>
<div >
<pre><code>{`import re

text = "I have meetings on 12/05/2023 and 14/06/2023."
pattern = r"\b(\\d{2}/\\d{2}/\\d{4})\b"

dates = re.findall(pattern, text)
print("Extracted dates:", dates)`}</code></pre>
</div>

<h2>Summary</h2>
<p>Regular expressions are a versatile and powerful tool for string manipulation in Python. The <code>re</code> module provides various functions to search, match, and manipulate strings based on patterns. Understanding the syntax and special characters used in regex is essential for effectively using this feature in your Python code.</p>

            </>
        ),
        "python-json": (
            <>
            <h2>JSON in Python</h2>
<p>JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. Python provides a built-in package called <code>json</code> to work with JSON data.</p>

<h2>A. Converting JSON String to Python Object</h2>
<p>To convert a JSON string into a Python object, you can use the <code>json.loads()</code> method.</p>
<div >
<pre><code>{`import json

# JSON String:
colors =  '["Red", "Yellow", "Green", "Blue"]'

# JSON string to python list:
lst1 = json.loads(colors)
print(lst1)`}</code></pre>
</div>
<p><strong>Output:</strong></p>
<pre><code>{`['Red', 'Yellow', 'Green', 'Blue']`}</code></pre>

<h2>B. Converting Python Object to JSON String</h2>
<p>To convert a Python object (like a dictionary or list) to a JSON string, you can use the <code>json.dumps()</code> method.</p>
<div >
<pre><code>{`import json

# Python list
lst1 = ['Red', 'Yellow', 'Green', 'Blue']

# Convert Python list to JSON
jsonObj = json.dumps(lst1)
print(jsonObj)`}</code></pre>
</div>
<p><strong>Output:</strong></p>
<pre><code>{`["Red", "Yellow", "Green", "Blue"]`}</code></pre>

<h2>C. Conversion Type</h2>
<p>When converting Python objects to JSON, their types change to match the JSON format.</p>
<div >
<pre><code>{`import json

print(json.dumps(22))               # integer
print(json.dumps(6.022))            # float
print(json.dumps("Hello World"))    # string
print(json.dumps(True))              # True
print(json.dumps(False))             # False
print(json.dumps(None))              # None`}</code></pre>
</div>
<p><strong>Output:</strong></p>
<pre><code>{`22
6.022
"Hello World"
true
false
null`}</code></pre>

<h2>Summary</h2>
<p>The <code>json</code> module in Python allows for easy conversion between JSON and Python objects. Understanding how to work with JSON data is essential for handling data interchange in web applications and APIs.</p>

            </>
        ),
        "python-try-and-except": (
            <>
            <h2>Python try...except</h2>
<p>The <code>try</code>...<code>except</code> blocks are used in Python to handle errors and exceptions. The code in the <code>try</code> block runs when there is no error. If the <code>try</code> block catches an error, the <code>except</code> block is executed.</p>

<h2>Basic Example</h2>
<div >
<pre><code>{`try:
    num = int(input("Enter an integer: "))
except ValueError:
    print("Number entered is not an integer.")`}</code></pre>
</div>
<p><strong>Output 1:</strong></p>
<pre><code>{`Enter an integer: 6.022
Number entered is not an integer.`}</code></pre>
<p><strong>Output 2:</strong></p>
<pre><code>{`Enter an integer: -8.5
Number entered is not an integer.`}</code></pre>
<p><strong>Output 3:</strong></p>
<pre><code>{`Enter an integer: -36`}</code></pre>

<h2>Using else Block</h2>
<p>The code in the <code>else</code> block is executed when there is no error in the <code>try</code> block.</p>
<div >
<pre><code>{`try:
    num = int(input("Enter an integer: "))
except ValueError:
    print("Number entered is not an integer.")
else:
    print("Integer Accepted.")`}</code></pre>
</div>
<p><strong>Output 1:</strong></p>
<pre><code>{`Enter an integer: 69
Integer Accepted.`}</code></pre>
<p><strong>Output 2:</strong></p>
<pre><code>{`Enter an integer: -2.3
Number entered is not an integer.`}</code></pre>

<h2>Using finally Block</h2>
<p>The <code>finally</code> block is executed regardless of the outcome of the <code>try</code>...<code>except</code>...<code>else</code> blocks.</p>
<div >
<pre><code>{`try:
    num = int(input("Enter an integer: "))
except ValueError:
    print("Number entered is not an integer.")
else:
    print("Integer Accepted.")
finally:
    print("This block is always executed.")`}</code></pre>
</div>
<p><strong>Output 1:</strong></p>
<pre><code>{`Enter an integer: 19
Integer Accepted.
This block is always executed.`}</code></pre>
<p><strong>Output 2:</strong></p>
<pre><code>{`Enter an integer: 3.142
Number entered is not an integer.
This block is always executed.`}</code></pre>

<h2>Summary</h2>
<p>The <code>try</code>...<code>except</code> structure in Python is a powerful way to handle exceptions and ensure that your program can handle errors gracefully without crashing.</p>


            </>
        ),
        "python-pip": (
            <>
            <h2>Python PIP</h2>
<p><code>pip</code> stands for Package Installer for Python. It is used to install and manage software packages in Python that are not part of the standard Python library.</p>
<p>In later versions of Python (3.4 and after), the <code>pip</code> command is pre-installed.</p>

<h2>Check if PIP is Installed</h2>
<p>To check if <code>pip</code> is installed on your system, type the following in the command prompt:</p>
<div >
<pre><code>{`pip --version`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`pip 22.2 from C:\\users\\yourName\\appdata\\local\\programs\\python\\python39\\lib\\site-packages\\pip (python 3.9)`}</code></pre>


<h2>Installing PIP</h2>
<p>If your system does not have <code>pip</code> installed, you can easily download it from their official website: <a href="https://pypi.org/project/pip/">https://pypi.org/project/pip/</a></p>

<h2>Installing Packages</h2>
<p>Once <code>pip</code> is installed, you can download packages to your system. Here’s an example:</p>
<div >
<pre><code>{`PS D: \\Python\\Codes> pip install numpy`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`Collecting numpy
  Downloading numpy-1.23.1-cp39-cp39-win_amd64.whl (14.7 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 14.7/14.7 MB 2.9 MB/s eta 0:00:00
Installing collected packages: numpy`}</code></pre>

<h2>Package Already Installed</h2>
<p>If the package already exists, the following message is displayed:</p>
<div >
<pre><code>{`PS D:\\Python\\Codes> pip install sklearn
Requirement already satisfied: sklearn in C:\\users\\yourName\\appdata\\local\\programs\\python\\python39\\lib\\site-packages\\pip (python 3.9)`}</code></pre>
</div>

<h2>Listing Installed Packages</h2>
<p>To list all the installed packages, you can use:</p>
<div >
<pre><code>{`PS D:\\Python\\Codes> pip list`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`Package                           Version
--------------------------------- -------------------
Flask                             2.0.3
ipython                           8.0.1
jupyter                           1.0.0
keras                             2.8.0
Kivy                              2.0.0
matplotlib                        3.4.3
mysql-connector                   2.2.9
numpy                             1.19.5
pandas                            1.4.1
pip                               22.2
plotly                            5.6.0
pygame                            2.0.0
scipy                             1.7.1
seaborn                           0.11.2
selenium                          3.141.0
sklearn                           0.0
sympy                             1.10
tensorflow                        2.8.0`}</code></pre>

<h2>Conclusion</h2>
<p><code>PIP</code> is an essential tool for managing Python packages, enabling developers to easily install and maintain libraries that enhance their applications.</p>

            </>
        ),
        "date-&-time": (
            <>
            <h2>Data & Time in Python</h2>
<p>Dates and timings are very important for computers. Computers keep track of date and time for files, documents, and various other operations. Similarly, Python uses date and time to perform several operations.</p>

<h2>Current Time</h2>
<p>To get the current time in seconds since January 1, 1970 (epoch), you can use the <code>time.time()</code> function:</p>
<div >
<pre><code>{`import time
print(time.time())`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`1658659152.7263992`}</code></pre>

<h2>Understanding Ticks</h2>
<p>Ticks are floating-point numbers measured in units of seconds for time intervals.</p>

<h2>Human Readable Format</h2>
<p>You can use the <code>ctime()</code> function to print the current time in a human-readable format:</p>
<div >
<pre><code>{`import time
print(time.ctime())`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`Sun Jul 24 16:24:50 2022`}</code></pre>

<h2>Delaying Execution</h2>
<p>The <code>sleep()</code> function inside the <code>time</code> module is used to delay the execution of the current thread by the given number of seconds:</p>
<div >
<pre><code>{`import time
time.sleep(10)
print(time.ctime())`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`Sun Jul 24 16:24:50 2022`}</code></pre>

<h2>Time.struct_time Class</h2>
<table>
    <thead>
        <tr>
            <th>Index</th>
            <th>Field</th>
            <th>Attribute</th>
            <th>Value</th>
            <th>Meaning</th>
            <th>Format Codes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>Year</td>
            <td>tm_year</td>
            <td>0000, ………., 9999</td>
            <td>Four digit year</td>
            <td>%Y</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Month</td>
            <td>tm_mon</td>
            <td>1 – January, 2 – February, ……., 12 - December</td>
            <td>Months in a year</td>
            <td>%m</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Day</td>
            <td>tm_mday</td>
            <td>1, 2, 3, ……., 29, 31</td>
            <td>Days in a month</td>
            <td>%d</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Hour</td>
            <td>tm_hour</td>
            <td>0, 1, 2, ……., 22, 23</td>
            <td>Hours in a day</td>
            <td>%H</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Minute</td>
            <td>tm_min</td>
            <td>0, 1, 2, ……., 58, 59</td>
            <td>Minutes in an hour</td>
            <td>%M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Second</td>
            <td>tm_sec</td>
            <td>0, 1, 2, ……., 60, 61</td>
            <td>Seconds in a minute</td>
            <td>%S</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Day of Week</td>
            <td>tm_wday</td>
            <td>0 – Monday, 1 – Tuesday, ……., 6 – Sunday</td>
            <td>Days in a week</td>
            <td>%w</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Day of Year</td>
            <td>tm_yday</td>
            <td>1, 2, 3, ……., 355, 356</td>
            <td>Days in a year</td>
            <td>%j</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Daylight savings</td>
            <td>tm_isdst</td>
            <td>-1, 0, 1</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


<h2>Local Time</h2>
<p>To get the output of local time in struct_time format, use the <code>localtime()</code> function:</p>
<div >
<pre><code>{`import time
print(time.localtime(1658672956.8853111))`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`time.struct_time(tm_year=2022, tm_mon=7, tm_mday=24, tm_hour=19, tm_min=59, tm_sec=16, tm_wday=6, tm_yday=205, tm_isdst=0)`}</code></pre>

<h2>Coordinated Universal Time</h2>
<p>To get the output of Coordinated Universal Time in struct_time format, use the <code>gmtime()</code> function:</p>
<div >
<pre><code>{`import time
print(time.gmtime(1658672956.8853111))`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`time.struct_time(tm_year=2022, tm_mon=7, tm_mday=24, tm_hour=14, tm_min=29, tm_sec=16, tm_wday=6, tm_yday=205, tm_isdst=0)`}</code></pre>

<h2>Seconds since Epoch</h2>
<p>We also have the reverse of <code>localtime()</code> function that prints seconds passed since epoch in local time using the <code>mktime()</code> function:</p>
<div >
<pre><code>{`import time
local_time = (2022, 7, 24, 20, 14, 39, 6, 205, 0)
print(time.mktime(local_time))`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`1658673879.0`}</code></pre>

<h2>String Representation</h2>
<p>The <code>asctime()</code> function takes struct_time and prints a single string representing it:</p>
<div >
<pre><code>{`import time
local_time = (2022, 7, 24, 20, 14, 39, 6, 205, 0)
print(time.asctime(local_time))`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`Sun Jul 24 20:14:39 2022`}</code></pre>

<h2>Parsing Dates</h2>
<p>The <code>strptime()</code> function parses a string based on a given format and returns it in struct_time format:</p>
<div >
<pre><code>{`import time
local_time = "24 July, 2022"
print(time.strptime(local_time, "%d %B, %Y"))`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`time.struct_time(tm_year=2018, tm_mon=7, tm_mday=24, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=1, tm_yday=205, tm_isdst=-1)`}</code></pre>

<h2>Printing a Calendar</h2>
<p>You can print a calendar for a particular month using the <code>calendar</code> module:</p>
<div >
<pre><code>{`import calendar
print(calendar.month(2022, 7))`}</code></pre>
</div>
<p><strong>Example Output:</strong></p>
<pre><code>{`
     July 2022
Mo Tu We Th Fr Sa Su
            1   2   3
 4   5   6  7  8  9  10
11  12  13 14  15 16 17
18  19  20 21  22 23 24
25  26  27 28  29 30 31`}</code></pre>

            </>
        ),
        "python-args-and-kwargs": (
            <>
            <h1>Python *args and **kwargs</h1>
<p>In programming, we define a function to create reusable code that performs similar operations. The values passed to these functions are known as function arguments in Python.</p>
<p>We recommend reading about Python Functions and Python Function Arguments.</p>

<h2>Example 1: Function to Add 3 Numbers</h2>
<div >
<pre><code>{`def adder(x, y, z):
    print("sum:", x + y + z)

adder(10, 12, 13)`}</code></pre>
</div>
<p><strong>Output:</strong></p>
<pre><code>{`sum: 35`}</code></pre>

<p>In the above program, the <code>adder()</code> function takes three arguments: x, y, and z. When we pass three values while calling the function, we get the sum of the 3 numbers as output.</p>

<h2>TypeError on Passing More Arguments</h2>
<p>Let's see what happens when we pass more than three arguments to the <code>adder()</code> function:</p>
<div >
<pre><code>{`def adder(x, y, z):
    print("sum:", x + y + z)

adder(5, 10, 15, 20, 25)`}</code></pre>
</div>
<p><strong>Output:</strong></p>
<pre><code>{`TypeError: adder() takes 3 positional arguments but 5 were given`}</code></pre>

<h2>Introduction to *args and **kwargs</h2>
<p>In Python, we can pass a variable number of arguments to a function using special symbols:</p>
<ul>
    <li><code>*args</code> (Non Keyword Arguments)</li>
    <li><code>**kwargs</code> (Keyword Arguments)</li>
</ul>
<p>We use <code>*args</code> and <code>**kwargs</code> when we are unsure about the number of arguments to pass to the functions.</p>

<h2>Python *args</h2>
<p>To allow passing a variable number of non-keyword arguments to a function, we use <code>*args</code>. The arguments are passed as a tuple inside the function.</p>
<div >
<pre><code>{`def adder(*num):
    sum = 0
    for n in num:
        sum += n
    print("Sum:", sum)

adder(3, 5)
adder(4, 5, 6, 7)
adder(1, 2, 3, 5, 6)`}</code></pre>
</div>
<p><strong>Output:</strong></p>
<pre><code>{`
Sum: 8
Sum: 22
Sum: 17`}</code></pre>

<h2>Python **kwargs</h2>
<p>For passing variable length keyword arguments to a function, we use <code>**kwargs</code>. The arguments are passed as a dictionary inside the function.</p>
<div >
<pre><code>{`def intro(**data):
    print("\nData type of argument:", type(data))
    for key, value in data.items():
        print("{} is {}".format(key, value))

intro(Firstname="Sita", Lastname="Sharma", Age=22, Phone=1234567890)
intro(Firstname="John", Lastname="Wood", Email="johnwood@nomail.com", Country="Wakanda", Age=25, Phone=9876543210)`}</code></pre>
</div>
<p><strong>Output:</strong></p>
<pre><code>{`
Data type of argument: <class 'dict'>
Firstname is Sita
Lastname is Sharma
Age is 22
Phone is 1234567890

Data type of argument: <class 'dict'>
Firstname is John
Lastname is Wood
Email is johnwood@nomail.com
Country is Wakanda
Age is 25
Phone is 9876543210`}</code></pre>

<h2>Things to Remember</h2>
<ul>
    <li><code>*args</code> and <code>**kwargs</code> are special keywords that allow functions to take variable length arguments.</li>
    <li><code>*args</code> passes a variable number of non-keyword arguments, which can be processed as a tuple.</li>
    <li><code>**kwargs</code> passes a variable number of keyword arguments, which can be processed as a dictionary.</li>
    <li>Using <code>*args</code> and <code>**kwargs</code> makes functions flexible and adaptable.</li>
</ul>

            </>
        ),
        // Add more topics here...
    };

    // Convert topic to lower case and replace spaces with hyphens for URL compatibility
    const topicKey = topic.toLowerCase();

    return (
        <div>
            {content[topicKey] ? content[topicKey] : <div><h2>Content not found</h2></div>}
        </div>
    );
};

export default Introduction;
