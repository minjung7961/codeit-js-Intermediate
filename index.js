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

// 2. elem.removeEventListener(event, handler)
btn.removeEventListener('click', event2)

// removeEventListener 사용시 주의할 점
// 1. 등록했던 함수의 이름과 반드시 같아야함
// ex

btn.addEventListener('click', function(){
  console.log('event3!');
});

// 제대로 작동안함 이유는 등록했던 바로위의 함수의 이름과 다르기때문(무명 함수...)
// 무명함수 못지우니 이름명시한 함수형태로 등록하고 지우도록하자!
btn.removeEventListener("click", function(){
  console.log('event3!')
});
