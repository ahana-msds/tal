export class Evaluator {

    static company = "talview";

    evaluate(score = 0) {
        if (score >= 75) return "selected";
        return "rejected";
    }
}

export function simulateApi(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), 800);
    });
}
