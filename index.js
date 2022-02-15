// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 따라서 해당 요소의 프로퍼티를 변경하기보단 클래스를 선택해 변경하는것을 권장함

//  // elem.classList: method -> add, remove, toggle
const item = tomorrow.children[1];
item.classList.add('done'); // -> 클래스 리스트 하나 추가
item.classList.add('other', '민쭁이'); // -> 클래스 리스트 2개 추가
item.classList.add('other', '민쭁이', 'ㅇㅇ'); // -> 중복해서 넣을시 뭇함 유의하기!

//  // elem.chlassName:
// today.children[1].className = 'done';

console.log(document)

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';

