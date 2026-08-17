import semiisImg from "@assets/images/projects/semiis.png"
import photoSplashImg from "@assets/images/projects/photoSplash.png"
import kuriImg from "@assets/images/projects/kuri.png"

export interface Project {
  id: number;
  title: string;
  description: string;
  contribution: string;
  period: string;
  tags: string[];
  img: string;
  demoUrl: string;
  codeUrl: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Kuri's World",
    description: "반려묘 쿠리의 소개 페이지",
    contribution: "100%",
    period: "2주(2025년도)",
    tags: ["HTML", "CSS", "JavaScript", "패럴랙스"],
    img: kuriImg,
    demoUrl: "https://ain0274.github.io/main.html",
    codeUrl: "https://github.com/ain0274/ain0274.github.io"
  },
  {
    id: 2,
    title: "PhotoSplash",
    description: "axios를 활용한 사진 페이지",
    contribution: "100%",
    period: "2주(2026년도)",
    tags: ["React", "SCSS", "API"],
    img: photoSplashImg,
    demoUrl: "https://ain0274.github.io/react-basic/",
    codeUrl: "https://github.com/ain0274/react-basic"
  },
  {
    id: 3,
    title: "SEMIIS",
    description: "반도체 전문 장비 기업 SEMIIS 페이지 리뉴얼",
    contribution: "100%",
    period: "디자인 1주, 퍼블리싱 1주(2025년도)",
    tags: ["React", "SCSS", "Figma"],
    img: semiisImg,
    demoUrl: "https://ain0274.github.io/react-semiis/",
    codeUrl: "https://github.com/ain0274/react-semiis"
  },
];