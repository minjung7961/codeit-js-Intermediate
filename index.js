// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');// 아이디값 기준으로 선택할때 이름 #으로 시작
const items = document.querySelectorAll('.item'); // 클래스기준으로 선택할떄 이름 . 으로 시작 all 메소드사용

content.addEventListener('click', function(){
  console.log('content Event');
});

title.addEventListener('click', function(){
  console.log('title Event');
});

list.addEventListener('click', function(){
  console.log('list Event');
})

for(let item of items){
  item.addEventListener('click', function(){
    console.log('item Event');
  });
}

// 이벤트 헨들링이란?

// 객체가 선택되었을때  객체의 이벤트 핸들러만 실행되는게아니라 부모요소의 이벤트 헨들러까지
// 실행되는것을 이야기한데 이게 부모의 부모 올라가다가 윈도우객체만날때까지 반복된다. 코드는 이전
// 커밋을 보자