// 스타일 다루기

const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// style 프로퍼티
console.log(today.children[0]);
today.children[0].style.textDecoration = 'line-through'; // 여러 속성을 이어서 사용할때는 카멜케이스 써야함을 유의
today.children[0].style.backgroundColor = '#DDDDDD';