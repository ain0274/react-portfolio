import { skillsData } from "@/data/skillsData"
import styles from "./Skills.module.scss"

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.wrapper}>
        <h2>SKILLS</h2>
        <div className={styles.list}>
          {skillsData.map((item) => (
            <div
              className={styles.item}
              key={item.id}
            >
            <img src={item.img} alt={`${item.name} 로고`} />
            <p>{item.desc}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills