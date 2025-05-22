var data = [
  {
    postId: 1,
    title: "첫 편지",
    content: "안뇽안뇽",
    date: "2025.04.04",
  },
  {
    postId: 2,
    title: "🧡마음을 보내요🧡",
    content: "내용내용",
    date: "2025.04.07",
  },
  {
    postId: 3,
    title: "반가워~",
    content: "나는 멋쟁이다",
    date: "2025.04.06",
  },
  {
    postId: 4,
    title: "천재가 쓴 편지😎",
    content: "난 왜 이렇게 똑똑할까",
    date: "2025.04.04",
  },
  {
    postId: 5,
    title: "사자들아",
    content: "파이팅",
    date: "2025.04.10",
  },
  {
    postId: 6,
    title: "심바랑 친구할래",
    content: "난 품바니까",
    date: "2025.04.02",
  },
  {
    postId: 7,
    title: "저메추🤔",
    content: "마라탕",
    date: "2025.04.04",
  },
  {
    postId: 8,
    title: "아 배고파",
    content: "붕어빵계란빵국화빵",
    date: "2025.03.24",
  },
  {
    postId: 9,
    title: "슈퍼이끌림💌",
    content: "유유유유",
    date: "2025.04.08",
  },
  {
    postId: 10,
    title: "네잎클로버🍀",
    content: "행운을 보냅니다",
    date: "2025.04.01",
  },
];

window.onload = function () {
  document.getElementById("Back").addEventListener("click", function () {
    window.location.href = "main.html";
  }); /* 백 버튼 누르면 경로 변경 */

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const date = year + "." + month + "." + day;

  const dateValue = document.getElementsByClassName("Date")[0];
  dateValue.innerHTML = date;

  document.getElementById("write").addEventListener("click", function () {
    const titleValue = document.getElementById("tInput").value;
    const contentValue = document.getElementById("cInput").value;

    console.log("제목:", titleValue);
    console.log("날짜:", date);
    console.log("내용:", contentValue);
  });
}; /* 웹 브라우저의 모든 구성 요소에 대한 로드가 끝났을 때 호출 */
