// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// 요소노드의 매소드를 이용해서 html 태그 가 가지고있는 속성을 핸들링하는것을 배워보자

//  // elem.getAttribute('속성'); 속성에 접근하기
console.log(tomorrow.getAttribute('href')); // 비표준이지만 핸들링 가능 bb
console.log(item.getAttribute('class')); // 이름 살짝 바뀜 유의 22

// 요소 노드의 속성 추가하는 방법

// // elem.setAttribute('속성', '값'); 속성 추가(수정)하기
tomorrow.setAttribute('class','list'); // 추가
link.setAttribute('href',"htpps://www.codeit.kr")// 수정

// 요소 노드의 속성을 제거하는 방법

// // elem.removeAttribute('속성'): 속성 제거하기
console.log(tomorrow);
tomorrow.removeAttribute('href');
tomorrow.removeAttribute('class');
console.log(tomorrow);