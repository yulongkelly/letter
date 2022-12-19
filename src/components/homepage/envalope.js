import "./envalope.css";
import { useState } from "react";
import { gsap } from "gsap";

const names = ["v姐", "Avery"];
const contents = [
  [
    "大一就认识v姐了但没什么机会有更多交流。非常开心上学期能和v姐成为饭搭子，嘿嘿😁。不得不说v姐还是很可靠的，很细心，很有同理心。上学期你们知道我性取向后 能感受到v姐的包容 是那种舒服的support 感恩❤️。 但我上学期一直到后面 状态挺差的 为给v姐造成的困扰抱歉555 🙇‍♀️。",
    "对v姐最深刻的印象应该是记忆力了，每次点餐前必问，吃啥喝啥哈哈哈。简直是选择纠结症+鱼的记忆患者救星🥺。v姐还能记住周围人最近想干嘛，想买啥，然后精准安利，我觉得必须称之为魔法了。还有感觉v姐知道自己要的是什么，对于自己的喜好很明确并坚定。而且真的很有毅力，对于v姐想减多少减多少真是滔滔江水般的崇敬之情。",
  ],
  [
    "我跟你算这学期才有点交集的吧。很高兴这学期有这么靠谱的射箭伙伴，要不是一起，我这出勤率起码减半。但感觉刚认识你就毕业了😭。",
    "你给我的感觉就对“凡”事不关心， 我就属于那种想很多的 跟你相处还是非常舒服的。而且感觉你特别随性，都可以是真的都可以。记得我们打完球去吃饭，坐到了同德园看到没有啤酒鸭，我说要换一家你也ok，说去哪就去哪。和我形成的鲜明的对比，我属于不喜欢做决定，但经常驳回。hmm, 这么一说感觉自己多少有点问题😳",
    "我这学期被你卷到了，天天早上收到avery complete a workout, avery closed three rings。but下学期我去学校，你以后早上等着收到同样的卷王提醒吧🌚",
    "别的不说了，祝你收到想要的offer！愿你找到并一直奔走在自己的热爱中！",
  ],
];

// function openLetter() {
//   setOpen(true);
//   gsap.to(".letter", { duration: 1, opacity: 1, delay: 2 });
// }

function Envalope(props) {
  const [open, setOpen] = useState(false);
  console.log(props);
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <h4 class="zhufu">
        愿一切浩瀚都归于渺小，愿每身孤独都拥有共鸣。愿衣襟带花，愿岁月风平。
      </h4>
      <div
        className={`envelope ${open ? "open" : "new"}`}
        onClick={() => {
          setOpen(true);
          gsap.to(".zhufu", { duration: 1, display: "none" });
          gsap.to(".greeting", {
            duration: 1,
            animationPlayState: "running",
            delay: 2,
          });
          gsap.to(".main", {
            duration: 1,
            animationPlayState: "running",
            delay: 2,
          });
          gsap.to(".foot", {
            duration: 1,
            animationPlayState: "running",
            delay: 2,
          });
        }}
      >
        <div class="front">
          <div class="mailme">
            <h2 class="front-text">To {names[props.index]}</h2>
          </div>
        </div>
        <div class="back">
          <div class="letter">
            <div class="content">
              <p class="greeting" style={{ textAlign: "left" }}>
                Hi {names[props.index]},
              </p>
              <div class="main" style={{ textAlign: "left" }}>
                {contents[props.index].map((p) => {
                  return <p>{p}</p>;
                })}
                {props.index == 0 ? (
                  <p>
                    想夸想说的太多了，但页面有限。总之祝v姐拿到自己想要的offer,
                    一定一定要
                    <bold class="xingfu">幸福</bold>哦！
                  </p>
                ) : null}
              </div>

              <div class="foot" style={{ textAlign: "right" }}>
                <p>your friend,</p>
                <p>Kelly</p>
              </div>
            </div>
          </div>

          <div class="flap left-flap"></div>
          <div class="flap right-flap"></div>
          <div class="flap bottom-flap"></div>
          <div class="flap top-flap"></div>
        </div>
      </div>
    </div>
  );
}

export default Envalope;
