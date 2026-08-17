import styles from "./Contact.module.scss"

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.wrapper}>
          <h2>함께 일 할 웹 퍼블리셔를 찾고 계신가요?</h2>
          <a href="mailto:ain022700@gmail.com" className={styles.email}>ain022700@gmail.com</a>
          <p>저에게 궁금한 점이 있다면 연락 주세요! 빠르게 답장 드리겠습니다!</p>
      </div>
    </section>
  )
}

export default Contact