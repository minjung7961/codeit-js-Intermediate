// 이벤트 핸들러 등록하기
let btn = document.querySelector('#myBtn');

// 이벤트 핸들러가 덮어씌어져 사라지지 않도록 addEventlistener(event, handler); 사용하기
function event1() {
  console.log('Hi Codeit!');
};

function event2(){
  console.log("Hi again!");
};

// 1. addEventlistener(event, handler);
btn.addEventListener('click',event1);
btn.addEventListener('click',event2);

// addEventListener 사용시 주의사항
btn.addEventListener('click',event1());
// 두번쨰 인자값에 event1 이 아닌 event1() 을 입력시 이벤트 등록하기전에 브라우저가 event1 함수를 실행시켜 리턴값을
// addEventListener 에 집어 넣는다 이경우 event1() 에 리턴값이 없기때문에 undefine 이 addEventHandler 두번쨰 인자값으로 입력된다.
