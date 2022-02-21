// 이벤트 위임 event Delegation
const list = document.querySelector('#list');

// 아직 문제는 남아있다 자식요소 각각에만 이벤트 헨들링을 하고싶지만 부모요소를 클릭해도 이벤트가 핸들링되게된다 -> 자식요소들모두에게 이벤트 핸들러가 작동하게된다
list.addEventListener('click', function(e){
  e.target.classList.toggle('done'); 
})


const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);