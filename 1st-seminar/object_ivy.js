/* Object 생성자 함수 */
const person = new Object(); // 빈 객체 생ㅅㅇ

//프롶티 추가
var name = '이유경'
person.name = '이름';
person.name = '이유경';
person.part = 'server';
person["gender"] = 'female';
person.sayHello = function() {
	console.log(`안녕하세요 ${this.name}입니다.`)
	console.log(`안녕하세요2 ${name}입니다.`);
}

console.log(typeof person);
console.log(person);

person.sayHello();

console.log('=====================');

/* 객체 리터럴 (가장 일반적인 자바스크립트의 객체 생성 방식) */
const emptyObject = {};
console.log(typeof emptyObject); // object

const animal = {
	type : "dog",
	animalName: "뽀삐",
	animalFriends: ['코코', '초코', '쿠키'],
	bark: function() {
		console.log(`${this.animalName}: 멍멍`);
	},
	thisFriends: function() {
		this.animalFriends.forEach( friend => {
			friend = friend + "(참석)"
			console.log(`${this.animalName}의 친구: ${friend}`);
		})
	}
};

console.log(animal);
animal.bark();
animal.thisFriends();
