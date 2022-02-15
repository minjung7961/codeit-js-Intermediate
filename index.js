// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// style 프로퍼티
console.log(today.children[0]);
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';

// js 에서 수정하면 생기는 문제점
// 이렇게 수정하면 태그 style 속성에 'text-decoration line-through;' 값을 직접 넣게된다.
// 1. 그로인해 스타일 적용의 우선순위간의 문제가 생길 수 있다
// 2. 같은 스타일을 적용할 다른 노드가 있을경우 불필요한 코드중복이 생길 수 있다.

// 따라서 해당 요소의 프로퍼티를 변경하기보단 클래스를 선택해 변경하는것을 권장함