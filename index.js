// Don 트리 여행하기
const myTag = document.querySelector('#list-1');

// 부모 요소 노드 접근 방법
console.log('부모 요소 접근방법');
console.log(myTag.parentElement);

// 형제 요소 노드 접근 방법
console.log('형제 요소 접근방법');
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 자식 요소 노드 접근 방법
console.log('자식 요소 접근방법');
console.log(myTag.children); // html 컬렉션 형태로 자식 노드들 출력
console.log(myTag.children[0]);
console.log(myTag.children[1]);
console.log(myTag.children[2]);
console.log(myTag.children[3]);
console.log(myTag.children['list-1']);
console.log('첫번째 마지막 요소 접근방법');
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

//  접근 연결해서도 가능
console.log(myTag.parentElement.nextElementSibling);