// 비표준 속성 활용하는방법
// 3. 스타일이나 데이터 변경에 활용

// getAttribute -> 속성값가져오고, setAttribute 활용해서 속성값을 설정해주는 원리를 이용해 실시간 스타일이나 데이터 변경 가능

// 대로는 class 를 다루는 것보다 setAttribute로 비표준 속성을 변경하는게 편할때도 있다.

const fields = document.querySelectorAll('[field]');
const task = {
  title: '코드 에디터 개발',
  manager: 'CastleRing, Reccoon lee',
  status: '',
};

for (let tag of fields){
  const field = tag.getAttribute('field');
  tag.textContent = task[field];
}

const btns = document.querySelectorAll('.btn');
for (let btn of btns){
  const status = btn.getAttribute('status');
  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2],this.setAttribute('status',status)
    console.log(document.querySelectorAll('[field]')[2]);
  }
}
