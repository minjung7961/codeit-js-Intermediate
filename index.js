// 이벤트 객체(Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

// 키보드 누르면 일어날 이벤트 등록
myInput.addEventListener('keydown', function(){
  console.log('KeyboardEvent');
});

// 왼쪽 마우스 클릭시 일어날 이벤트 등록
myBtn.addEventListener('click', function (){
  console.log('MouseEvent');
});