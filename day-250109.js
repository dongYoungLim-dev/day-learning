// 나머지 매개변수
// 다음 함수에서 나머지 매개변수를 사용하여 전달받은 모든 숫자의 합을 반환하도록 수정하세요.
function sum(a, b, c) {
  return a + b + c;
}

// 답변1
function sum1(...numbers) {
	let total = 0;
	for (let number of numbers) {
		total += number;
	}

	return total;
}

console.log(sum1(1, 2, 3));

// 전개 연산자
// 다음 객체를 전개 연산자를 사용하여 새로운 프로퍼티 country: "Korea"를 추가한 새로운 객체를 만드세요.
const user = {
  name: "Emma",
  age: 29
};

// 답변
const newUser = {
	...user,
	country: "Korea",
}

console.log(newUser);

// 클래스
// 다음 코드에서 클래스를 사용하여 Car를 정의하고, start() 메서드를 추가하세요.
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function() {
  console.log(this.brand + " is starting...");
};

// 답변
class newCar {
	constructor(brand) {
		this.brand = brand;
	}

	start() {
		// console.log(this.brand + " is starting...");
		return `${this.brand} is starting...` 
	}
}

let classCar = new newCar("test new car class");
console.log(classCar.start());


// 모듈(export/import)
/**
 * 다음 코드를 두 파일로 분리하세요:
 * utils.js: 함수 greet를 정의하고 export.
 * app.js: utils.js에서 greet를 import하고 호출.
 */
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("John"));

// 답변 
// day-250109-utils.js, day-250109-app.js 파일로 분리

// Promise와 async/await
// 다음 코드를 Promise와 async/await로 변환하세요.
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((message) => {
  console.log(message);
});

// Promise 
function fetchDataForPromise(callback) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(callback("Data loaded"))
		}, 1000);
	} )
}

fetchDataForPromise().then((message) => {
	console.log(message);
})

// async / await  틀린 답변
// async function fetchDataForAsyncAwait(callback) {
// 	return setTimeout(() => {
// 		callback("Data loaded");
// 	}, 1000);
// }

// let result = await fetchDataForAsyncAwait((message) => {
// 	return message;
// })

// console.log(result);


// 정답
function newFetchData(callback) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(callback('Data loaded'));
		}, 1000);
	});
}

async function loadData() {
	try {
		const message = await newFetchData((message) => message);
		console.log(message);
	}
	catch (error) {
		console.error(error);
	}
}

loadData();
