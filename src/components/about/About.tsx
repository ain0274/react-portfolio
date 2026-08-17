import profileImg from "@assets/images/profile/profile.png"
import styles from "./About.module.scss"

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.about_wrapper}>
        <h2>ABOUT ME</h2>
        <div className={styles.container}>
          <img src={profileImg} alt="반려묘 쿠리 사진" />
          <div className={styles.container_text}>
            <div className={styles.container_text_item}>
              <h3>웹 표준과 접근성을 담는 퍼블리셔, 김아인입니다.</h3>
              <p>
                HTML, CSS, JavaScript를 비롯해 Figma, React까지 다양한 툴을 활용해 웹사이트의 뼈대를 만듭니다. 웹 표준과 웹 접근성을 깊이 이해하고 준수하여, 누구나 차별 없이 손쉽게 이용할 수 있는 웹을 만드는 것에 집중합니다.<br/>
                새로운 기술을 배우는 과정을 즐기며, 맡은 일에 대한 깊은 애정과 책임감으로 완성도 높은 결과물을 만들어냅니다. Visual Studio와 Git을 활용한 원활한 협업 경험을 바탕으로 팀에 긍정적인 시너지를 더하는 개발 동반자가 되겠습니다.
              </p>
            </div>
            
            <div className={styles.container_text_item}>
              <h3>KEY SKILL</h3>
              <ul>
                <li>
                  시맨틱 마크업 (Semantic Markup)
                  <p>웹 표준 및 웹 접근성을 준수한 마크업 구조 설계</p>
                </li>
                <li>
                  반응형 웹 구현 (Responsive Design)
                  <p>다양한 기기(PC, 태블릿, 모바일) 최적화 레이아웃 제작</p>
                </li>
                <li>
                  협업 및 버전 관리 (Git & Figma)
                  <p>Figma 디자인 시스템 이해 및 Git을 활용한 코드 버전 관리</p>              
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default About