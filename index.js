// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter Practise</h1>`;

const quizDiv = document.getElementById('quiz');

let arr = [1, 2, 3];

let length = 0;

arr.length = 0;

quizDiv.innerHTML =
`<b>(1)</b> <code> 
let arr = [1,2,3];
<br>
let length = 0;
<br>
arr.length = 0;
<br>
arr[length] ?
</code>
<br>
<p>answer: </p>` + arr[length];
