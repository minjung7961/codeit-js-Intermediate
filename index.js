// id로 태그 선택하기
document.getElementById("btns");


// css 선택자로 태그 선택하기
const myTag = document.querySelector('.color-btn');
console.log(myTag);

// css 선택자로 태그 여러개 선택하기

// 1.
const myTag2 = document.querySelectorAll('.color-btn');
console.log(myTag2);

// 2.
const myTag3 = document.getElementsByClassName('color-btn');
console.log(myTag3);