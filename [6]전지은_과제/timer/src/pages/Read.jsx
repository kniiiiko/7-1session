import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as R from "../styles/styledRead";

const Read = ({ dataList }) => {
  const navigate = useNavigate();

  const { postId } = useParams();

  const goBack = () => {
    navigate(`/`);
  };

  const post = postId
    ? dataList.find((item) => item.postId === parseInt(postId))
    : null;

  return (
    <R.Container>
      <R.Box>
        <R.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="back"
            width="30px"
          />
        </R.BackBtn>
        <R.Content>
          <R.Title>{post && post.title}</R.Title>
          <R.ContentBox>
            <R.Date>{post && post.date}</R.Date>
            {post && post.content}
          </R.ContentBox>
          <R.DeleteBtn>삭제하기</R.DeleteBtn>
        </R.Content>
      </R.Box>
    </R.Container>
  );
};

export default Read;
