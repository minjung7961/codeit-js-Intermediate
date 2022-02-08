
// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드  이동하기: prepend, append, before, after

// 오늘 할일의 맨뒤에 내일할일의 뮤지컬 공연 예매를 추가해보자
today.append(tomorrow.children[1]); // 이동!
console.log(document);