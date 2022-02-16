// 이벤트 핸들러 등록하기
let btn = document.querySelector('#myBtn');

// 기존 html 의 onclick 프로퍼티에 덮어써서 기능함
btn.onclick = function () {
  console.log('Hi Codeit!');
};

const myContent = document.querySelector('#content');
myContent.innerHTML = '<div>Hello</div>'; //위의 이벤트 코드위에도 덮어쓰는바람에 hello 만 남음
myContent.className = 'button';
