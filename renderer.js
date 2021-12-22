let myChart;

const plot = (e) => {
	e.preventDefault();

	if (myChart) {
		myChart.destroy();
	}

	document.getElementById("plot-text").style.display = "block";
	const { formula, maxNumber, minNumber } = recieveInput();

	if (maxNumber <= minNumber) {
		document.getElementById("plot-text").textContent =
			"Max Should Be Bigger Than Min";

		return;
	}

	if (isFormulaValid(formula)) {
		document.getElementById("plot-text").style.display = "none";

		const formulaSpaceRemoved = formula.replace(/\s+/g, "");

		let x = range(minNumber, maxNumber);
		let y = evaulateYAxis(formulaSpaceRemoved, x);
		myChart = drawCanvas(x, y, formulaSpaceRemoved);
	} else {
		document.getElementById("plot-text").textContent =
			"Function Is Invalid";
	}
};
document.getElementById("form").addEventListener("submit", plot);

const evaulateYAxis = (formula, x) => {
	const precedence = { "^": 3, "*": 2, "+": 1, "-": 1 };
	const numberStack = [];
	const operandsStack = [];
	const y = [];

	let tmp = "";
	let flagX = false;

	for (number of x) {
		for (let i = 0; i < formula.length; i++) {
			if (formula[i] === "x") {
				numberStack.push(number);
				flagX = true;
			} else if (!isNaN(formula[i])) {
				tmp += formula[i];
			} else {
				if (!flagX) {
					numberStack.push(parseInt(tmp));
					tmp = "";
				}
				if (
					operandsStack.length &&
					precedence[operandsStack.at(-1)] > precedence[formula[i]]
				) {
					numberStack.push(
						evaulateOperands(
							numberStack.pop(),
							numberStack.pop(),
							operandsStack.pop()
						)
					);
				}
				flagX = false;
				operandsStack.push(formula[i]);
			}
		}
		numberStack.push(parseInt(tmp));
		tmp = "";
		while (operandsStack.length) {
			numberStack.push(
				evaulateOperands(
					numberStack.pop(),
					numberStack.pop(),
					operandsStack.pop()
				)
			);
		}
		y.push(numberStack.pop());
	}
	return y;
};
