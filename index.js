
// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드  이동하기: prepend, append, before, after

  // 오늘 할 일의 고양이 화장실 청소를 내일할일의 뮤지컬 공연 예매 다음으로 옮겨보자

console.log(tomorrow.children[1]);
tomorrow.children[1].after(today.children[1]);
tomorrow.children[2].before(today.children[1]);
tomorrow.lastElementChild.before(today.children[1]);