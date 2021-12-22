const range = (start = 1, end, step = 1) => {
	let ans = [];
	for (let i = start; i <= end; i += step) {
		ans.push(Math.round(i));
	}
	return ans;
};

const evaulateOperands = (num2, num1, operand) => {
	if (operand === "^") {
		return Math.pow(num1, num2);
	} else if (operand === "*") {
		return num1 * num2;
	} else if (operand === "+") {
		return num1 + num2;
	} else {
		return num1 - num2;
	}
};

const isFormulaValid = (formula) => {
	const formulaSplited = formula.split(/[\+\-\*\^]/);
	const formulaMapped = formulaSplited.map((element) => element.trim());
	const isValid = formulaMapped.every((element) => /^(\d+|x)$/.test(element));

	return isValid;
};

const recieveInput = () => {
	const form = document.getElementById("form");
	const data = new FormData(form);
	const formula = data.get("function");
	const maxNumber = Number(data.get("max"));
	const minNumber = Number(data.get("min"));

	return { formula, maxNumber, minNumber };
};
