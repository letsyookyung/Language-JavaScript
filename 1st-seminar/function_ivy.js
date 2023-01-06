/**
 *  1. 함수 선언식
 */

function add(x, y) {
    return x + y ;
}

console.log(add(2, 3));
console.log(add("안녕", "하세요?"));



/**
 *  2. 함수 표현식
 */
var addStr = function(x, y) {
    return x + y;
}

console.log(addStr("안녕", "하세요"));

/**
 *  2 - 1. 화살표 함수 표현식
 */
var add = (x, y) => {
    return x + y;
}
console.log(add(2,3));


/**
 *  3. 화살표 함수
 */
var add = function(x, y) {
    return x + y;
}

var add = (x,y,z)  => (x + y % z + 2) ;
var add2 = (x,y,z)  => x + y % z + 2 ;

console.log(add(2,3,2));
console.log(add2(2,3,2));

// 매개변수가 하나일때 매개변수 소괄호 생략 가능
var square = x => x * x;
console.log(square(10));

// 객체를 리턴하고 로직이 한줄일때는 소괄호 ( ) 로 감싸줘야함
var person = function(name, age) {
    return {
        name: name,
        age: age,
    };
}
console.log('person:', person("유경", 31)); // person: { name: '유경', age: 31 }

var person2 = (name, age) => ({nㅇme: name, age: age});
console.log('person2:', person("유경", 31)); // person2: { name: '유경', age: 31 }
