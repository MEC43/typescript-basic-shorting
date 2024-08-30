import NamooSorter from './NamooSorter';

let sorter = new NamooSorter([10, -7, 22, 3, 15]);
console.log(sorter.sort());

sorter = new NamooSorter('문자열을 입력합니다');
console.log(sorter.sort());

// 사용자 정의의 타입가드 - is 연산자
// let data: string | number[];
// function isString(data: string | number[]): data is string {
//   return (<string>data).split !== undefined;
// }

// data = '타입스크립트';
// if (isString(data)) {
//   data.split('');
// } else {
//   //number[] 타입
// }

// if (typeof data === 'string') {
// }
