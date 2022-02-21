// 이벤트 위임 event Delegation
const list = document.querySelector('#list');

// 부모요소는 이벤트 버블링을 통해 자식노드들의 이벤트 발생사실을 알게되니 이를 이용해 부모에만 이벤트를 등록하고 이벤트 객체에는 이벤트 위치정보를 가지고 있으니 이를 이용하면 앞선문제 해결된다.
list.addEventListener('click', function(e){
  e.target.classList.toggle('done'); 
})

// 새로생긴 자식객체에 이벤트가 없지만 부모요소에 이벤트 핸들러가 걸려있기때문에 자동으로 자식요소 클릭시 이벤트 핸들러가 잘 작동한다.
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);