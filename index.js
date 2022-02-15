// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 따라서 해당 요소의 프로퍼티를 변경하기보단 클래스를 선택해 변경하는것을 권장함

//  // elem.classList: method -> toggle -> classList 있으면 삭제하고 없으면 추가하기
const item = tomorrow.children[1];
item.classList.toggle('done'); // 추가되고 (여러개 x)
item.classList.toggle('item'); // 삭제되었다 (여러개 x)

//  //  // toggle 의 두번째 인자 True 일떄 : add 기능만, False 일떄 : remove 기능만

//  // elem.chlassName:
// today.children[1].className = 'done';

console.log(document)

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';

