import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 402px;
  height: 100vh;
  background: #fff6d2;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 342px;
  height: 90vh;
  flex-shrink: 0;
  border-radius: 20px;
  border: 10px solid #fff;
  box-shadow: 0px 0px 10px 2px rgba(255, 140, 0, 0.38);
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const Logo = styled.div`
  margin-top: 27px;
`;

export const Title = styled.div`
  margin-top: 17.18px;
  color: #ff5d18;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const LetterWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 29rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Letter = styled.div`
  width: 262px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #ff8400;
  background: #fff;
  box-shadow: 0px 4px 5px 0px rgba(255, 140, 0, 0.1);
  color: #5f5f5f;
  font-family: Pretendard;
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostBox = styled.div`
  position: absolute;
  bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 362px;
  height: 267px;
  flex-shrink: 0;
  border-radius: 160px 160px 0px 0px;
  background: #c52f2f;
  #postText {
    margin-top: 20px;
    color: #fff;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  hr {
    width: 220px;
    height: 15px;
    flex-shrink: 0;
    background: #000;
    border: none;
  }
`;

export const SendBtn = styled.div`
  margin-top: 10px;
  width: 50%;
  height: 12vh;
  border: 1px solid #890505;
  background: #cf4d4d;
  position: relative;

  #heart {
    width: 50px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    height: 8vh;
    margin-top: 3px;
  }
  #goText {
    position: absolute;
    bottom: 7px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
  }
`;
