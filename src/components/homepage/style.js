import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
`;

export const Door = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  div:nth-child(1),
  div:nth-child(2) {
    font-size: 10pt;
    display: inline-block;
    width: 50%;
    height: 100%;
    background: #313131;
    position: relative;
    overflow: hidden;
  }

  div:nth-child(1) {
    float: left;
    // border-right: solid 2.5px #111;
    div {
      left: 75%;
    }
  }

  div:nth-child(2) {
    float: right;
    // border-left: solid 2.5px #111;
    div {
      left: -25%;
    }
  }
`;

export const Lock = styled.div`
  top: 30%;
  z-index: 3;
`;

export const Title = styled.h3`
  position: relative;
  color: #252839;
  z-index: 10;
  display: none;
  text-align: center;
  with: 100%;
  -webkit-text-stroke: 2px #383d52;

  &:before {
    content: "时间过的真快，都毕业了。想用写信的方式道个别。快输入编码吧👇";
    position: absolute;
    color: #01fe87;
    top: 0;
    left: 0;
    height: 100%;
    max-width: 100%;
    z-index: 10;
    white-space: nowrap; // make the animation smooth
    -webkit-text-stroke: 0px #383d52;
    border-right: 2px solid #01fe87;
    animation: animate 4s linear;
    overflow: hidden;
  }

  @media screen and (max-width: 425px) {
    color: #01fe87;
    max-width: 300px;
    &:before {
      content: none;
    }
  }

  @keyframes animate {
    0% {
      max-width: 0;
    }
  }
`;

export const Input = styled.div`
  z-index: 20;
  position: relative;
  left: 35%;
  width: 30%;
  display: none;

  input {
    position: relative;
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    width: 90%;
    margin-right: 10px;
  }

  input:focus-visible {
    border: none;
    border-bottom: 1px solid #fff;
    color: #03e9f4;
    font-size: 20px;
    outline-offset: 0px;
    outline: none;
  }

  a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
  }

  a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }

  a span {
    position: absolute;
    display: block;
  }

  a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;

export const Header = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 40%;
`;
