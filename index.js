// 이벤트 위임 event Delegation
const list = document.querySelector('#list');

// 아직 문제는 남아있다 자식요소 각각에만 이벤트 헨들링을 하고싶지만 부모요소를 클릭해도 이벤트가 핸들링되게된다 -> 자식요소들모두에게 이벤트 핸들러가 작동하게된다
list.addEventListener('click', function(e){
  // solution : class 이름에 item 이있는지 여부를 boolean 형태로 반환하는 메소드를 이용해 그 조건이 맞을때만 작동하게끔 구현한다
  if(e.target.classList.contains('item')){
    e.target.classList.toggle('done');
  }
});


const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);

// event Delegation 은 이벤트 버블링을 이용한 기법이기 때문에 자식 요소에 이벤트 버블링 중단하는 메소드를 쓰면 당연히 이벤트 위임이 제대로 작동하지 않는다
li.addEventListener(li);
li.addEventListener('click', function(e){
  e.stopPropagation();
});