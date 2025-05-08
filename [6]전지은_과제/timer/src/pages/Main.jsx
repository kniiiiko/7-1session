import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/styledMain";

const Main = ({ dataList }) => {
  const navigate = useNavigate();
  const goWrite = () => {
    navigate(`/write`);
  };
  return (
    <M.Container>
      <M.Box>
        <M.Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
            alt="logo"
            width="65px"
          />
        </M.Logo>
        <M.Title>🦁DWU LIKELION LETTER🦁</M.Title>
        <M.LetterWrapper>
          {dataList.map((e) => (
            <M.Letter
              key={e.postId}
              onClick={() => navigate(`/read/${e.postId}`)}
            >
              {e.title}
            </M.Letter>
          ))}
        </M.LetterWrapper>
        <M.PostBox>
          <div id="postText">POST</div>
          <hr />
          <M.SendBtn onClick={goWrite}>
            <img
              id="heart"
              src={`${process.env.PUBLIC_URL}/images/heart.svg`}
              alt="heart"
              width="50px"
            />
            <div id="goText">편지 보내러 가기</div>
          </M.SendBtn>
        </M.PostBox>
      </M.Box>
    </M.Container>
  );
};

export default Main;
