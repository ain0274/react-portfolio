import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>본 사이트는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.</p>
      <p className={styles.copyrighter}>© 2026 ain kim. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer