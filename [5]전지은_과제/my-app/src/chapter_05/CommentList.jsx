import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "전지은",
    comment: "안녕나다.",
  },

  {
    name: "박명수",
    comment: "그렇구나.",
  },

  {
    name: "유재석",
    comment: "축하한다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
