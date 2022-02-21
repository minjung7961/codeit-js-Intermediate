// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');// 아이디값 기준으로 선택할때 이름 #으로 시작
const items = document.querySelectorAll('.item'); // 클래스기준으로 선택할떄 이름 . 으로 시작 all 메소드사용

content.addEventListener('click', function(e){
  console.log('content Event');
  // 과연 이벤트 버블링 일어나는 부모 요소들까지 출력할까? 
  // -> 아니다 해당 요소만 출력한다. 
  // 덕분에 이벤트 핸들러 버블링 일어나는 최초의 위치를 알수있게 된다.
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
  });
}
