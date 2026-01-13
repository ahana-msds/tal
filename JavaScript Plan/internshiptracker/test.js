function grade(score) {
    if (score >= 75) return "selected";
    return "rejected";
}

function test(desc, exp, act) {
    if (exp === act) console.log("pass:", desc);
    else console.error("fail:", desc);
}

test("high score", "selected", grade(90));
test("low score", "rejected", grade(40));
