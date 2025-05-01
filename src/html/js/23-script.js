document.querySelector('.flip-button').addEventListener('click', () => {
  document.querySelector('.card').classList.toggle('is-flipped');
});

// 스크립트는 재사용가능하게 아래처럼 만들어야함
// // DOM 요소 선택 부분
// const flipButton = document.querySelector('.flip-button');
// const card = document.querySelector('.card');

// // 함수 구현 부분
// function flipCard() {
//   card.classList.toggle('is-flipped');
// }

// // 이벤트 바인딩 부분
// function bindEvents() {
//   flipButton.addEventListener('click', flipCard);
// }

// // 초기화 함수
// function init() {
//   bindEvents();
// }

// // 페이지 로드 시 초기화
// document.addEventListener('DOMContentLoaded', init); //DOMContentLoaded : dom 트리가 구현이 끝났을때, init 초기화 해라
