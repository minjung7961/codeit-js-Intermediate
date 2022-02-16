// 비표준 속성 활용하는방법
// 1. 선택자로 활용
const fields = document.querySelectorAll('[field]');
console.log(fields); // > Nodelist(3)

// 2. 값을 표시할 태그를 구분할 때 활용
// 각 프로퍼티 값들이 들어갈 태그를 구분하는데 활용할 수도 있다.

// const fields = document.querySelectorAll('[field]');
const task = {
  title: '코드 에디터 개발',
  manage: 'CastleRing, Raccon lee',
  status: 'ㅇㅅㅇ',
};

for (let tag of fields){
  const field = tag.getAttribute('field');
  tag.textContent = task[field];
}