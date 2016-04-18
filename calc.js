function printValue () {
	document.getElementById('data').value = myArray[ind]; //выводит значение в строку input
}
function daivalue (id) { 
	myArray[ind] += document.getElementById(id).value;  //добавляет к существующему значению новое
	printValue();
}
function drop() {
	myArray[0] = '';  //очищает значения массива
	myArray[1] = '';
	printValue();
}
//                 a    b
var myArray = new Array('', ''); //массив с пустыми элементами

var ind = 0;
var opr;
function operation1(op) { //функция для операций (op) то, какой знак будет получен
	opr = op;
	myArray[1] = '';
	ind = 1;
}

function result1() {  //функция вывода результата
	if (opr === '+') { //если знак операции +
		myArray[0] = Number(myArray[0]) + Number(myArray[1]);
	}
	else if (opr === '-') {
		myArray[0] = Number(myArray[0]) - Number(myArray[1]);
	}
	else if (opr === '*') {
		myArray[0] = Number(myArray[0]) * Number(myArray[1]);
	}
	else if (opr === '/') {
		myArray[0] = Number(myArray[0]) / Number(myArray[1]);
	}
	ind = 0;
	document.getElementById('data').value = myArray[ind];
}
