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