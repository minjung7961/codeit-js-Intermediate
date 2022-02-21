// 이벤트 위임 event Delegation
const list = document.querySelector('#list');

// 부모요소는 이벤트 버블링을 통해 자식노드들의 이벤트 발생사실을 알게되니 이를 이용해 부모에만 이벤트를 등록하고 이벤트 객체에는 이벤트 위치정보를 가지고 있으니 이를 이용하면 앞선문제 해결된다.
list.addEventListener('click', function(e){
  e.target.classList.toggle('done'); 
})

// 만약 객체를 새로 만든다면 추가한 요소에 이벤트 헨들러가 동작하지 않는다는문제가 생긴다. 동작하게 하려면 일일이 추가해줘야한다 이는 코드 가독성이나 유지보수하기 좋지 않다.
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);