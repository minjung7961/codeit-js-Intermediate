
const today = document.querySelector('#today');
console.log(today.outerHTML);

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; // 완전히 새로운 요소가 되버려서 새로 또 아래와 같이 태그를 찾아야함
console.log(today.outerHTML);
console.log(document);

const today2 = document.querySelector('#today'); // 바뀌어버렸기 때문에 새로 요소를 찾아야함 (이 말인 즉슨 실수를 자주 유발하게 된다.)
today2.outerHTML =  today2.outerHTML + '<p>다음</p>';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기 : document