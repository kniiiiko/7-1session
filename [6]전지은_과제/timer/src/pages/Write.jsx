import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import * as W from "../styles/styledWrite";

const Write = ({ dataList }) => {
  const navigate = useNavigate();
  // const { postId } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  /*React.useEffect(() => {
    if (postId) {
      const post = dataList.find((item) => item.postId === parseInt(postId));
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setDate(post.date);
      }
    }
  }, [postId, dataList]);
  */

  const goBack = () => {
    navigate(`/`);
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const date = year + "." + month + "." + day;

  const Save = () => {
    console.log("제목:", title);
    console.log("날짜:", date);
    console.log("내용:", content);
  };

  return (
    <W.Container>
      <W.Box>
        <W.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="back"
            width="30px"
          />
        </W.BackBtn>
        <W.Content>
          <W.TitleInput
            placeholder="제목을 입력해 주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <W.ContentBox>
            <W.Date>{date}</W.Date>
            <W.ContentInput
              placeholder="내용 입력"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </W.ContentBox>
          <W.SendBtn onClick={Save}>작성하기</W.SendBtn>
        </W.Content>
      </W.Box>
    </W.Container>
  );
};

export default Write;
