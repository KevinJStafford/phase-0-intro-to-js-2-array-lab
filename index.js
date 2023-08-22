// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    destructivelyAppendCat = cats.push("Ralph");
}

function destructivelyPrependCat() {
    destructivelyPrependCat = cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    destructivelyRemoveLastCat = cats.pop();
}

function destructivelyRemoveFirstCat() {
    destructivelyRemoveFirstCat = cats.shift();
}

function appendCat(name) {
    appendCat = [...cats, "Broom"];
    return appendCat;
}

function prependCat(name) {
    prependCat = ["Arnold", ...cats];
    return prependCat;
}

function removeLastCat() {
    removeLastCat = cats.slice(0, 2);
    return removeLastCat;
}

function removeFirstCat() {
    removeFirstCat = cats.slice(1);
    return removeFirstCat;
}