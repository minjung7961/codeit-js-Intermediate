
const today = document.querySelector('#today');
console.log(today.outerHTML);

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; // 완전히 새로운 요소가 되버려서 새로 또 아래와 같이 태그를 찾아야함
console.log(today.outerHTML);
console.log(document);

const today2 = document.querySelector('#today');
today2.outerHTML =  today2.outerHTML + '<p>다음</p>';
