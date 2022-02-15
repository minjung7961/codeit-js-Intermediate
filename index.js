// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 따라서 해당 요소의 프로퍼티를 변경하기보단 클래스를 선택해 변경하는것을 권장함

//  // elem.chlassName
today.children[1].className = 'done';
console.log(today.children[1]);

const done = document.getElementsByClassName('done');
console.dir(done);

console.log(document)

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';

