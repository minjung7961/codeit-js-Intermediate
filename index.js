// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');// 아이디값 기준으로 선택할때 이름 #으로 시작
const items = document.querySelectorAll('.item'); // 클래스기준으로 선택할떄 이름 . 으로 시작 all 메소드사용

content.addEventListener('click', function(e){
  console.log('content Event');
  console.log(e.currentTarget); 
});

title.addEventListener('click', function(e){
  console.log('title Event');
  console.log(e.currentTarget);
});

list.addEventListener('click', function(e){
  console.log('list Event');
  console.log(e.currentTarget);
})

for(let item of items){
  item.addEventListener('click', function(e){
    console.log('item Event');
    console.log(e.currentTarget);
    // 이벤트 버블링을 멈추는 방법
    e.stopPropagation(); // 정말 필요한 경우가 아니라면 안쓰는것을 추천한다
  });
}
