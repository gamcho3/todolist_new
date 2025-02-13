//Dummy Data(가짜데이터)
let todos = [
  { title: "자바스크립트 공부", content: "배열메서드", id: 1, checked: false },
  { title: "자바스크립트 공부", content: "DOM", id: 2, checked: true },
];

// 전체 실행
loadTodos();

// 화면에 투두리스트 전체를 보여주는 함수
function loadTodos() {
  // ul 태그를 가져온다.
  const ul = document.getElementById("list");
  // ul 안에있는 모든 태그를 초기화
  ul.innerHTML = "";
  todos.forEach((item, index) => {
    // 1. html 태그 생성하기

    const li = document.createElement("li");
    const titleEl = document.createElement("h3");
    const p = document.createElement("p");
    const removeBtn = document.createElement("button");

    /**
     * li태그
     */
    li.style.display = "flex";

    /**
     * checkbox태그
     */
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    /**
     * 삭제버튼 태그
     */
    removeBtn.innerHTML = "삭제";

    /**
     * h3태그
     */
    titleEl.innerHTML = item.title;

    /**
     * p태그
     */
    p.innerHTML = item.content;
    p.style.color = "blue";

    /**
     * 태그 삽입 부분
     */
    li.appendChild(checkBox);
    li.appendChild(titleEl);
    li.appendChild(p);
    li.appendChild(removeBtn);
    ul.appendChild(li);

    /**
     * 태그 이벤트 부분
     */

    // 체크박스의 값이 변경 될때마다 이벤트를 발생
    checkBox.addEventListener("change", (e) => {
      // 작동하는 체크박스가 체크됐을경우
      if (e.target.checked) {
        // 취소선 스타일 적용
        li.style.textDecoration = "line-through";
      } else {
        // 아닐경우 스타일 없애기
        li.style.textDecoration = "none";
      }
    });

    // 삭제 이벤트 등록
    removeBtn.addEventListener("click", () => {
      // 현재 id값을 가진 todo를 삭제
      removeTodo(item.id);
      // 화면에 보여지는 li태그 삭제
      li.remove();
    });
  });
  console.log(todos);
}

//추가버튼 이벤트 등록
document.getElementById("addBtn").addEventListener("click", () => {
  // todo 추가함수 실행
  addTodo();
  // 리스트 불러오는 함수 실행
  loadTodos();
});

// 투두리스트를 추가 하는 함수
function addTodo() {
  // 각각의 input태그에 title과 content에 대한 값 가져오기
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  // 새로운 todo 객체 생성
  const newTodo = {
    title,
    content,
    checked: false,
    // 랜덤난수로 중복되지 않은 id값 생성
    id: Math.random().toString(),
  };
  todos.push(newTodo);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

function removeTodo(id) {
  const newTodo = todos.filter((item) => item.id !== id);
  todos = [...newTodo];
}
const h4 = document.getElementById("time");

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  h4.textContent = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}, 1000);
