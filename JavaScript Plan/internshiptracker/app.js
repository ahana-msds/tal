import { Evaluator, simulateApi } from "./services.js";

/* ===== chapter 1: variables & datatypes ===== */

let count = 0;                 // number
let active = true;             // boolean
let temp = null;               // null
let unknown;                   // undefined
let id = Symbol("id");         // symbol

/* ===== chapter 4: objects & arrays ===== */

let candidates = [];

/* ===== chapter 3: functions & closures ===== */

function createCounter() {
    let total = 0;
    return function () {
        total++;
        return total;
    }
}
const trackAdds = createCounter();

/* ===== dom ===== */

const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const list = document.getElementById("list");
document.getElementById("addBtn").addEventListener("click", addCandidate);

/* ===== chapter 6: async / await ===== */

async function addCandidate() {
    debugger;

    try {
        const name = nameInput.value;
        const score = Number(scoreInput.value);

        if (!name || isNaN(score)) throw new Error("invalid input");

        const data = await simulateApi({ name, score });

        processCandidate(data);

    } catch (err) {
        alert(err.message);
    }
}

/* ===== chapter 2: control flow ===== */

function processCandidate(c) {

    const evaluator = new Evaluator();
    const result = evaluator.evaluate(c.score);

    switch (result) {
        case "selected": render(c, "selected"); break;
        default: render(c, "rejected");
    }

    candidates.push(c);

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].score < 0) continue;
    }

    let j = 0;
    while (j < 1) j++;

    do { count++; } while (count < 1);

    labelLoop:
    for (let x of candidates) {
        if (x.name === "stop") break labelLoop;
    }

    console.log("total added:", trackAdds());
}

/* ===== rendering ===== */

function render(c, status) {

    const li = document.createElement("li");
    li.textContent = `${c.name} - ${c.score} - ${status}`;
    li.className = status;

    list.appendChild(li);
}
