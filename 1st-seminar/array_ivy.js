var arr1 = [];
console.log(arr1);
console.log(typeof arr1); // object

var arr2 = new Array(1,2,3,4,5);
console.log(arr2);
console.log(typeof arr2); // object

var arr3 = ['이유경', 1,2,3,null, {name: 'yk', age:26}]
console.log(arr3);
console.log(typeof arr3); // object

/**
 * 2. array prototype 메서드
 */

var arr = [1,2,3,4];
console.log(arr.length);

arr.push('new item');
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift('first_item');
console.log(arr);
arr.shift();
console.log(arr);

console.log('arr.includes(4):', arr.includes(4));
console.log('arr.includes(1000):', arr.includes('here'));

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var concatArr = arr1.concat(arr2);
// var concatArr = arr2.concat(arr1);
console.log('arr1.concat(arr2):', concatArr);

var location = ["서울", "대전", "대구"];
console.log(location.join('-> '));
console.log(location.reverse().join('-> '));

var countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a,b) => a > b ? 1 : -1) );
console.log(countries.sort( function(a,b) { return a.localeCompare(b); }));
console.log('오름차순 정렬: ', concatArr.sort((a,b) => a - b));
console.log('내림차순 정렬: ', concatArr.sort(function(a, b) { return  b - a; }));
console.log(concatArr.sort((a,b) => b - a));

// 2-10 filter 필터는 배열 요소 전체를 대상으로 조건을 걸어서 그 조건을 충족하는 결과를 새로운 배열을 반환해줌.
var number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5];
var minusNumber = number.filter( item => item < 0);
console.log(minusNumber)

// 2-11 map  map은 배열 요소 전체를 대상으로 함수를 호출하고, 그 결과를 새로운 배열을 반환할때 주로 사용
var countries = ['Österreich', 'Andorra', 'Vietnam', 'Korea', 'China'];
var countriesLengths = countries.map( item => item.length) ;
var countriesStartsWithA = countries.map( item => item.startsWith('A')) ;
var countriesStartsWithA_ = countries.filter( item => item.startsWith('A')) ;

console.log('countriesLengths: ',countriesLengths);
console.log('countriesStartsWithA: ',countriesStartsWithA);
console.log('countriesStartsWithA_: ',countriesStartsWithA_);

// 2-12 reduce map은 배열을 반환할때 사용했지만 reduce는 값 하나를 반환할때 주로 사용 대표적인 예시로 1 ~ n 까지 더하기
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = number.reduce( (pv, cv)  => {
    console.log(`pv: ${pv}, cv: ${cv}`);
    return pv + cv;
});

console.log('sum=', sum);
console.log(`sum2= ${sum}`);

/**
 * 3. 배열 순회
 */

var serverPart = ["이유경", "ivy", "ron"];
let serverIndexStr = '서버파트 여러분 번호 불ㄹㅓ요. \n';
let serverPartMemberNameStr = '서버파트 여러분 이름 한번씩 불러주세용 \n';

// in 과 of 의 차이
for (let item in serverPart) {
    serverIndexStr += item + '! ';
}
console.log(serverIndexStr);

for(let item of serverPart) {
    serverPartMemberNameStr += item + '! ';
}
console.log(serverPartMemberNameStr);

serverPart.forEach( item => {
    item = item + "(출근)";
    console.log(item);
})