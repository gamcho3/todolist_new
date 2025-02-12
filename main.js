//Dummy Data(가짜데이터)
const todos = [
  { title: "자바스크립트 공부", content: "배열메서드", id: 1, checked: false },
  { title: "자바스크립트 공부", content: "DOM", id: 2, checked: true },
];

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
    // 2. 생성한 태그에 todo에 해당하는 제목 넣기
    li.innerHTML = `<h3>${item.title}</h3>`;
    // 3. 내용을 넣을 p태그 생성
    const p = document.createElement("p");
    // 4. p태그 안에 내용 넣기
    p.innerHTML = item.content;
    p.style.color = "blue";
    // 5. p태그를 li태그 안에 넣기
    li.appendChild(p);
    // 6. 생성한 태그를 부모태그에 넣기
    ul.appendChild(li);
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
}
