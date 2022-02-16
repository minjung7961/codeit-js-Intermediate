# 이벤트 객체 프로퍼티

## 공통 프로퍼티

| 프로퍼티      | 설명                                                     |
| ------------- | -------------------------------------------------------- |
| type          | 이벤트 이름('click','mouseup','keydown' 등)              |
| target        | 이벤트가 발생한 요소                                     |
| currentTarget | 이벤트 핸들러가 등록된 요소                              |
| timeStamp     | 이벤트 발생 시각(페이지가 로드된 이후부터 경과한 밀리초) |
| bubbles       | 버블링 단계인지를 판단하는 값                            |

## 마우스 이벤트

| 프로퍼티         | 설명                                                         |
| ---------------- | ------------------------------------------------------------ |
| button           | 누른 마우스의 버튼(0:왼쪽, 1:가운데(휠),2:오른쪽)            |
| clientX, clientY | 마우스 커서의 브라우저 표시 영역에서의 위치                  |
| pageX, pageY     | 마우스 커서의 문서 영역에서의 위치                           |
| offsetX, offsetY | 마우스 커서의 이벤트 발생한 요소에서의 위치                  |
| altKey           | 이벤트 발생할 때 alt키를 눌렀는지                            |
| ctrlkey          | 이벤트 발생할 때 ctrlkey키를 눌렀는지                        |
| shiftKey         | 이벤트 발생할 때 shift키를 눌렀는지                          |
| metaKey          | 이벤트가 발생할 때 meta키를 눌렀는지(window는 window키, mac은 cmd키) |

## 키보드 이벤트

| 프로퍼티 | 설명                                                         |
| -------- | ------------------------------------------------------------ |
| key      | 누른키가 가지고 있는 값                                      |
| code     | 누른 키의 물리적인 위치                                      |
| altKey   | 이벤트가 발생할 때 alt키를 눌렀는지                          |
| ctrlkey  | 이벤트 발생할 때 ctrlkey키를 눌렀는지                        |
| shiftKey | 이벤트 발생할 때 shift키를 눌렀는지                          |
| metaKey  | 이벤트가 발생할 때 meta키를 눌렀는지(window는 window키, mac은 cmd키) |

이 프로퍼티들은 자주 사용되는 프로퍼티일 뿐 이벤트 객체의 모든 프로퍼티가 아닙니다. 혹시 이벤트 객체의 더 많은 프로퍼티들이 궁금하시다면 아래 링크를 참고해 보세요! :)

- [이벤트](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [마우스 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- [키보드 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)