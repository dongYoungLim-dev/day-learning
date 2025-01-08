// 템플릿 리터럴
// [ ] 다음 코드를 템플릿 리터럴을 사용하여 간결하게 작성하세요.

// 문제
const name = "John";
const age = 30;
const message = "Hello, my name is " + name + " and I am " + age + " years old.";

// 답변
const messageCorrent = `Hello, my name is ${name} and I am ${age} years old` 
console.log(message); // Hello, my name is John and I am 30 years old
console.log(messageCorrent); // Hello, my name is John and I am 30 years old

// 중첩 템플릿
const people = [
	{
		name : 'HOJUN 1',
		age : 27,
	},
	{
		name : 'HOJUN 2',
		age : 28,
	},
	{
		name : 'HOJUN 3',
		age : 29,
	},
	{
		name : 'HOJUN 4',
		age : 30,
	}
];

const ul = document.createElement("ul");
const markup = `
	${people.map(person => `<li> ${person.name} </li>` )}
`; 

ul.appendChild(document.createTextNode(markup));

console.log(ul);




// 화살표 함수
//다음 함수를 화살표 함수로 변환하세요.
//문제
function multiply(a, b) {
  return a * b;
}

//답변
const multiply1 = (a, b) => a * b;


// 디폴트 파라미터 *** 
// 디폴트 파라미터란 ? 함수를 선언할 때 정의하는 변수의 디폴트 값을 지정
// 다음 함수에 디폴트 파라미터를 추가하여 b의 기본값을 5로 설정하세요.
//문제
function add(a, b) {
  return a + b;
}

// 답변
function add1(a, b = 5) {
  return a + b;
}


// 배열 구조 분해
// 다음 배열에서 첫 번째와 세 번째 값을 구조 분해 할당으로 추출하세요.
// 문제
const colors = ["red", "green", "blue", "yellow"];

// 답변
[a, b, c, d] = colors;
console.log(a);
console.log(c);

[a, ...b] = colors;
console.log(a);
console.log(b);