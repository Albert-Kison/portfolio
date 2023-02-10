const heading = document.querySelector("h1");

let a = 0;
console.log(a);

heading.addEventListener("click", function() {
    a = 4;
    console.log(a);
});

heading.addEventListener("click", function() {
    a = 10;
    console.log(a);
});

console.log(a);

function A() {
    this.x = 9;
    console.log(this);
}

const b = new A();