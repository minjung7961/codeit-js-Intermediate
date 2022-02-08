
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

// 1. 요소 노드 만들기 : document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기 : textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기 : NODE.prepend, append, after, before
tomorrow.prepend(first); // 해당 노드의 젤 첫번째 자식노드로 추가


const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last); // 해당 노드의 젤 마지막 자식노드로 추가

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);// 해당 노드의 앞에 형제 노드를 추가

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);// 해당 노드의 뒤에 형제 노드를 추가