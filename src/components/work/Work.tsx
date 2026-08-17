import styles from "./Work.module.scss"
import WorkCard from "./WorkCard"

function Work() {
  return (
    <section className={styles.work} id="work">
      <div className={styles.wrapper}>
        <h2>WORK</h2>
        <WorkCard />
      </div>
    </section>
  )
}

export default Work