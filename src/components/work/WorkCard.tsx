import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS_DATA } from "@/data/projectsData";
import styles from "./WorkCard.module.scss"

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

function WorkCard() {
  const items = PROJECTS_DATA.toReversed();

  return (
    <div className={styles.work_list}>
      {items.map((item, index) => {
        const isReverse = index % 2 !== 0;
        return <WorkCardItem key={item.id} item={item} isReverse={isReverse} />;
      })}
    </div>
  )
}

function WorkCardItem({ item, isReverse }: { item: any; isReverse: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scrollClipPath = useTransform(scrollYProgress, (v) =>
    isReverse
      ? `inset(0 ${100 - v * 100}% 0 0 round 30px)`
      : `inset(0 0 0 ${100 - v * 100}%  round 30px)`
  );

  return (
    <div className={styles.card_section} ref={sectionRef}>
      <div className={styles.card_sticky}>
        <div className={`${styles.card} ${isReverse ? styles.reverse : ""}`}>
          {/* 이미지 영역 */}
          {isMobile ? (
            <motion.div
              key="img-mobile"
              className={styles.img_box}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src={item.img} alt={`${item.title} 캡처 이미지`} />
            </motion.div>
          ) : (
            <motion.div
              key="img-desktop"
              className={styles.img_box}
              style={{ clipPath: scrollClipPath }}
            >
              <img src={item.img} alt={`${item.title} 캡처 이미지`} />
            </motion.div>
          )}

          {/* 텍스트/상세 정보 영역 */}
          <div className={styles.info_box}>
            <h3>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>

            <div className={styles.meta}>
              <p>기여도: {item.contribution}</p>
              <p>제작 기간: {item.period}</p>
            </div>

            {/* 태그 목록 */}
            <ul className={styles.tags}>
              {item.tags.map((tag: string, i: number) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>

            {/* 버튼 영역 */}
            <div className={styles.btn_group}>
              <a href={item.demoUrl} target="_blank" rel="noreferrer" className={styles.btn_primary} title="바로가기">
                바로가기
              </a>
              <a href={item.codeUrl} target="_blank" rel="noreferrer" className={styles.btn_secondary} title="깃허브로 이동">
                깃허브
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard