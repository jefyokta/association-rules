import { X } from "./Assoc";


const s = new X([
    ["apple", "beer", "rice", "chicken"],
    ["apple", "beer", "rice"],
    ["apple", "beer"],
    ["apple", "peer"],
    ["milk", "beer", "rice", "chicken"],
    ["milk", "beer", "rice"],
    ["milk", "beer"],
    ["milk", "peer"],
]);


console.log(s.support('apple'));


