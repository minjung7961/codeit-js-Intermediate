// 비표준 속성 활용하는방법
// 3. 스타일이나 데이터 변경에 활용

// getAttribute -> 속성값가져오고, setAttribute 활용해서 속성값을 설정해주는 원리를 이용해 실시간 스타일이나 데이터 변경 가능

// 대로는 class 를 다루는 것보다 setAttribute로 비표준 속성을 변경하는게 편할때도 있다.

const fields = document.querySelectorAll('[data-field]');
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
  // const status = btn.getAttribute('data-status');
  const status = btn.dataset.status;
  console.log(status)
  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].setAttribute('data-status', status);
    console.log(document.querySelectorAll('[data-field]')[2]);
    console.log(btn); // html 태그에 onclick 프로퍼티가 추가되는것같지는 않다.
  }
  
}
 
// 비표준 속성의 문제가 있다.
// 비표준 속성을 사용해 코드를 작성했을 때 시간이 지나서 나중에 그 속성이 표준으로 등록되면 문제가 발생할 수 있다.
// 이런경우 예기치 못한 부작용이 있는데 이를 방지하기위한 약속된 방식이 존재하는데 다음 커밋에서 알아보자