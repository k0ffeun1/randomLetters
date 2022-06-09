// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

const body = document.getElementById('body')
const blocks = document.getElementById('blocks')
const text2 = document.getElementById('text2')
const counterSpan = document.getElementById('counterSpan')
let column = null
let row = null
let array = []
let counter = 16


let timeFunc = setInterval(() => {
	counter -= 1
	counterSpan.innerHTML = counter
	if (counter === 0) {
		clearInterval(timeFunc)
	}
	blocks.style.backgroundColor = getRandomColor()
}, 1000);

let arrayLeters = [
	'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
	'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
	'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'
]

let symbol = ''
for (i = 0; i < 4; i++) {
	column = document.createElement('div')
	column.classList.add('block')
	blocks.appendChild(column)

	if (i % 2 !== 0) {
		column.style.paddingLeft = 100 + 'px'
	}
	for (j = 0; j < 8; j++) {
		row = document.createElement('div')
		row.classList.add('row')
		row.innerHTML = symbol
		column.appendChild(row)
		array.push(row)
	}
}
let arrayOnClick = []
let arrayRandomColor = array.map(function (element) {
	setInterval(() => {
		element.style.color = getRandomColor()
		element.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`
		for (x = 0; x < array.length; x++) {
			arrayLeters.sort(() => Math.random() - 0.5)
			array[x].innerHTML = arrayLeters[x]
		}

	}, 1000);
	element.onmouseover = function () {
		element.style.transform = 'scale(150%)'
	}
	element.onmouseout = function () {
		element.style.transform = 'scale(100%)'
	}
	element.onclick = function () {
		arrayOnClick.push(element.innerHTML)
		arrayOnClick = arrayOnClick.join('')
		input.value = arrayOnClick
		arrayOnClick = arrayOnClick.split('')
		element.style.display = 'none'
	}
})

function getLetter() {
	let arrayLetter = []
	for (s = 0; s < 5; s++) {
		arrayLetter.push(arrayLeters[Math.floor(Math.random() * arrayLeters.length)])
	}
	arrayLetter = arrayLetter.join('')
	text2.innerHTML = arrayLetter
}
getLetter()

function getRandomColor() {
	let str = '0123456789ABCDEF'
	let randomColorArray = []
	for (a = 0; a < 6; a++) {
		randomColorArray.push(str[Math.floor(Math.random() * str.length)])
	}
	randomColorArray = randomColorArray.join('')
	let randomColor = '#' + randomColorArray
	return randomColor
} 