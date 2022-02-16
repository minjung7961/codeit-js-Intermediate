// 이벤트 객체(Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

// 이전 커밋처럼 핸들링 하기 보다는 각 이벤트의 함수에 상세한 설명이 필요하다.

// 함수에 이벤트 객체를 파라미터로 전달. 이벤트 객체는 이벤트 발생시 자동으로 만들어진다.
function printEvent(event){
  console.log(event); // 여러 프로퍼티를 출력하는데 그중에 target 과 type 을 자주사용한다 아래와같이
  event.target.style.color = 'red'; // 이벤트가 발생한 요소의 태그의 스타일을 변경
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);