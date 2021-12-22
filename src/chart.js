const drawCanvas = (x, y, formula, myChart) => {
	const ctx = document.getElementById("myChart").getContext("2d");
	myChart = new Chart(ctx, {
		type: "line",
		data: {
			labels: x,
			datasets: [
				{
					label: `${formula}`,
					data: y,
					backgroundColor: "rgba(255, 99, 132, 0.2)",
					borderColor: "rgba(255, 99, 132, 1)",
					borderWidth: 1,
					tension: 0.4,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			elements: {
				point: {
					radius: 0,
				},
			},
		},
	});
	return myChart;
};
