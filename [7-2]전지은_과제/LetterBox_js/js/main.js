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

// let data = JSON.parse(localStorage.getItem("newData")) || initialData.slice();

data.forEach((data, i) => {
  const box = document.getElementById("L" + i);
  if (box) {
    box.innerHTML = data.title;
  }
}); /* 각 편지별 상자 */

document.getElementById("Send").addEventListener("click", function () {
  window.location.href = "write.html";
}); /* 편지 보내러 가기 버튼 */

var boxes = document.getElementsByClassName("Letter");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    window.location.href = `read.html?index=${i}`;
  });
} /* 편지 클릭 시 넘어가도록 */

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const isDeleted = params.get("deleted");
  const index = parseInt(params.get("index"), 10);

  if (isDeleted === "true") {
    data.splice(index, 1);
    localStorage.setItem("newData", JSON.stringify(data));

    params.delete("deleted");
    params.delete("index");
    const newURL = window.location.pathname + "?" + params.toString();
    history.replaceState({}, "", newURL);
    location.reload();
  }
};
