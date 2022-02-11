// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// 요소노드의 매소드를 이용해서 html 태그 가 가지고있는 속성을 핸들링하는것을 배워보자

//  // elem.getAttribute('속성'); 속성에 접근하기
console.log(tomorrow.getAttribute('href')); // 비표준이지만 핸들링 가능 bb
console.log(item.getAttribute('class')); // 이름 살짝 바뀜 유의 22

