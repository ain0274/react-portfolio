import { useEffect, useState } from "react";
import styles from "./NavBar.module.scss"

const NAV_ITEMS = [
  { label: 'ABOUT ME', targetId: 'about' },
  { label: 'WORK', targetId: 'work' },
  { label: 'CONTACT', targetId: 'contact' },
];

export default function Navbar() {

  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.targetId))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          } else if (
            entry.target.id === NAV_ITEMS[0].targetId &&
            entry.boundingClientRect.top > 0
          ) {
            setActiveId('');
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px -85% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {NAV_ITEMS.map((item) => (
          <li key={item.targetId}>
            <button
              onClick={() => handleScroll(item.targetId)}
              className={`${styles.nav_list_item} ${activeId === item.targetId ? styles.active : ""}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}