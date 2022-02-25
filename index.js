// class 로 태그 선택하기

const myTags = document.getElementsByClassName('color-btn');
console.log(myTags); // htmlCollection(8)
console.log(myTags[0]); // 객체 하나 출력 태그그대로 나옴

for (let tag of myTags){
  console.log(tag);
}