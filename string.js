const press = document.querySelector('.press')
const greeting = document.getElementById('greeting')


press.addEventListener('click',function () {
    const name = prompt(`enter your name`)
    greeting.textContent=`Hello ${name}, nice to see you!`
})

/* -------------------------------- includes -------------------------------- */
let browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

/* -------------------------------- endsWith -------------------------------- */
if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

/* --------------------------------- indexof -------------------------------- */
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20

/* ---------------------------------- slice --------------------------------- */
const sliceName = "mozilla";
console.log(sliceName.slice(1, 4)); // "ozi"
console.log(browserType.slice(2))

/* --------------------------------- replace -------------------------------- */
browserType = browserType.replace("moz", "van");

console.log(browserType);

/* ------------------------------- replaceAll ------------------------------- */
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); 


