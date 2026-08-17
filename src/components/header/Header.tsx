import Navbar from "./NavBar"
import styles from "./Header.module.scss"
import { motion, useScroll } from "framer-motion";

function Header() {

  const { scrollYProgress } = useScroll();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a className={styles.title} href="/">Ain's Web Portfolio</a>
        <Navbar />
        <motion.div style={{ scaleX: scrollYProgress, originX: 0 }} className={styles.progress} />
      </div>
    </header>
  )
}

export default Header