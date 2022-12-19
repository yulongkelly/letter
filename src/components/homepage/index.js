import DoorUI from "./door";
import { Container, Door, Lock, Title, Input, Header } from "./style";
import { gsap } from "gsap";
import { useState } from "react";
import Envalope from "./envalope";

function displayEnvalope() {
  gsap.to(".title", { duration: 1, display: "none" });
  gsap.to(".form", { duration: 1, display: "none" });
  gsap.to(".envalope-container", { duration: 1, display: "block", delay: 1.5 });
}

function displayForm() {
  gsap.to(".form", {
    duration: 1,
    delay: 6.5,
    display: "block",
  });
}

function displayTitle() {
  gsap.to(".title", {
    duration: 1,
    display: "inline-block",
    onComplete: function () {
      displayForm();
    },
  });
}

function open(left, right) {
  gsap.to(left, { duration: 5.5, width: 0 });
  gsap.to(right, {
    duration: 5.5,
    width: 0,
    onComplete: function () {
      displayTitle();
    },
  });
}

function unlock(el) {
  gsap.to(el, {
    duration: 0.5,
    // transform: "rotate(90deg)",
    onComplete: function () {
      open(".door .left", ".door .right");
    },
  });
}

function HomePage() {
  const [code, setCode] = useState("");
  const [index, setIndex] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (code == "120502") {
      displayEnvalope();
      setIndex(0);
    } else if (code == "100912") {
      displayEnvalope();
      setIndex(1);
    }
  };
  return (
    <Container>
      <Header>
        <Title className="title">
          时间过的真快，都毕业了。想用写信的方式道个别。快输入编码吧👇
        </Title>
        <Input className="form">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="number"
              className="number"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
            ></input>
            <a type="submit" href="#" onClick={onSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>Submit
            </a>
          </form>
        </Input>
      </Header>

      <div
        className="envalope-container"
        style={{ display: "none", position: "relative", zIndex: 30 }}
      >
        <Envalope index={index} />
      </div>

      <audio id="music">
        <source src="./sliding-door.mp3" type="audio/mp3" />
      </audio>
      <Door className="door">
        <div className="left">
          <Lock className="lock" onClick={() => unlock(".door .lock")}>
            <DoorUI />
          </Lock>
        </div>
        <div className="right">
          <Lock className="lock" onClick={() => unlock(".door .lock")}>
            <DoorUI />
          </Lock>
        </div>
      </Door>
    </Container>
  );
}

export default HomePage;
