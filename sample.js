const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

// 1. updateToDo 함수를 완성해 주세요.
function updateToDo(event) {
  // 아래의 주석을 삭제하면 돌아가는걸 알 수 있음.
  // console.log(event.target); 
  // console.log(event.target.classList.toggle('done'));

  event.target.classList.toggle('done');
}

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록해 주세요.

console.log(items.length)
for (var i = 0; i<items.length; i++){
  console.log(i);
  items[i].addEventListener('click',updateToDo);
}


// 테스트 코드
items[2].removeEventListener('click', updateToDo);