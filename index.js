// 이벤트 위임 event Delegation
const list = document.querySelector('#list');

// for / of 문 : 객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
for(let item of list.children){
  item.addEventListener('click', function(e){
    e.target.classList.toggle('done');
  });
}

// 만약 객체를 새로 만든다면 추가한 요소에 이벤트 헨들러가 동작하지 않는다는문제가 생긴다
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);