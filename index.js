// 요소 노드 주요 프로퍼티
const myTag = document.querySelector('#list-1');


// innerHTML
console.log(myTag.innerHTML);

    // 출력값은 아래와 같다.
/*
    <li>Ragdoll</li>
    <li>British Shorthair</li>
    <li>Scottish Fold</li>
    <li>Bengal</li>
    <li>Siamese</li>
    <li>Maine Coon</li>
    <li>American Shorthair</li>
    <li>Russian Blue</li>
*/


// outerHTML
console.log(myTag.outerHTML);// 해당 요소를 포함하는 모든 html코드를 보여준다

    // 출력값은 아래와 같다
{
  /* <ul id="list-1">
      <li>Ragdoll</li>
      <li>British Shorthair</li>
      <li>Scottish Fold</li>
      <li>Bengal</li>
      <li>Siamese</li>
      <li>Maine Coon</li>
      <li>American Shorthair</li>
      <li>Russian Blue</li>
    </ul> */}

myTag.outerHTML = "<ul id='new-list'><li>Exotic</li></ul>";

console.log(myTag.outerHTML);

    // 출력값은 아래와 같다 ㅇㅅㅇ
    {
      /* <ul id="list-1">
          <li>Ragdoll</li>
          <li>British Shorthair</li>
          <li>Scottish Fold</li>
          <li>Bengal</li>
          <li>Siamese</li>
          <li>Maine Coon</li>
          <li>American Shorthair</li>
          <li>Russian Blue</li>
        </ul> */}

// console.log(myTag.textContent);

//     // 출력값은 아래와 같다 ㅇㅅㅇ 말그대로 텍스트 값만 출력한다.
//     /*
//       Ragdoll
//       British Shorthair
//       Scottish Fold
//       Bengal
//       Siamese
//       Maine Coon
//       American Shorthair
//       Russian Blue
//     */

// myTag.textContent = '<>new text!</>'
// console.log(myTag.textContent);