// 재사용가능하게 스크립트 만들기
document.querySelector('.flip-button').addEventListener('click', () => {
  document.querySelector('.card').classList.toggle('is-flipped');
});

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
// document.addEventListener('DOMContentLoaded', init); //dom 트리가 구현이 끝날때까지
