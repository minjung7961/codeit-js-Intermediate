// 요소 노드 주요 프로퍼티
const myTag = document.querySelector('#list-1');

// innerHTML
console.log(myTag.innerHTML);// 요소 안에있는 html 자체를 문자열로 나타낸다. 주의할점은 안에 들여쓰기라던지 줄바꿈문자도 모두 포함된다는것이다.

{/*  출력결과를 보아 들여쓰기 줄바꿈 모두 포함하여 콘솔에다가 출력함을 알수있다.
<li>Ragdoll</li>
<li>British Shorthair</li>
<li>Scottish Fold</li>
<li>Bengal</li>
<li>Siamese</li>
<li>Maine Coon</li>
<li>American Shorthair</li>
<li>Russian Blue</li> 
*/}

// 사실 innerHTML 을 값을 수정할때 좀더 많이 쓴다.

myTag.innerHTML += '  <li>Exotic</li>'; // 수정된다.
console.log(myTag.innerHTML);