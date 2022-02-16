// 이벤트 핸들러 등록하기
let btn = document.querySelector('#myBtn');

// 이벤트 핸들러가 덮어씌어져 사라지지 않도록 addEventlistener(event, handler); 사용하기
function event1() {
  console.log('Hi Codeit!');
};

function event2(){
  console.log("Hi again!");
};

btn.addEventListener('click',event1);
btn.addEventListener('click',event2);