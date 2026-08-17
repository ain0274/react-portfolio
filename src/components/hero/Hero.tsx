import styles from "./Hero.module.scss"

function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.wrapper}>
            <h1>
                AIN’S<br />
                PORTFOLIO
            </h1>
            <p>
                안녕하세요, 신입 퍼블리셔 김아인입니다.
            </p>
            <p>
                저는 누구에게나 편리하고 좋은 웹 페이지를 만듭니다!
            </p>
        </div>
    </section>
  )
}

export default Hero