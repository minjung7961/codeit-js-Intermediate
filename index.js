// 이벤트(Event) 와 버튼 클릭
const btn = document.querySelector('#myBtn');
console.log(btn);
// 이벤트 핸들링(Event Handling)
btn.onclick = function () { // 해당 함수를 이벤트 헨들러라 부름
  console.log("Hello minjung!");
}