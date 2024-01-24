let worm = document.querySelector(".mb-CashGraph_Worm");

let values = [
	{
		time: 0,
		value: 170
	},
	{
		time: 30,
		value: 175
	},
	{
		time: 60,
		value: 180
	},
	{
		time: 90,
		value: 175
	},
	{
		time: 120,
		value: 180
	},

];

function makeWorm() {
	let duration = 150;
	let generatePointX = (data) => (100 / duration) * data.time;
	let generatePointY = (data) => ((data.value - 120) * 100) / (180 - 120);

	let maskString = `clip-path: polygon(`;
	values.map((data) => {
		maskString += `${generatePointX(data).toFixed(2)}% ${(
			100 - generatePointY(data)
		).toFixed(2)}%, `;
	});
	values.toReversed().map((data, i, { length }) => {
		maskString += `${generatePointX(data).toFixed(2)}% calc(${(
			100 - generatePointY(data)
		).toFixed(2)}% - 1px)`;
		if (i + 1 !== length) {
			maskString += `, `;
		}
	});

	maskString += `);`;
	return maskString;
}

worm.style = makeWorm();
