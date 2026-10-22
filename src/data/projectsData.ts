import kuriImg from "@assets/images/projects/kuri.png"
import photoSplashImg from "@assets/images/projects/photoSplash.png"
import semiisImg from "@assets/images/projects/semiis.png"
import pangolinImg from "@assets/images/projects/pangolin.png"
import pangolinVueImg from "@assets/images/projects/pangolin-vue.png"

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
    period: "디자인 1주, 퍼블리싱 1주(2025년)",
    tags: ["HTML", "CSS", "JavaScript", "Parallax"],
    img: kuriImg,
    demoUrl: "https://ain0274.github.io/main.html",
    codeUrl: "https://github.com/ain0274/ain0274.github.io"
  },
  {
    id: 2,
    title: "PhotoSplash",
    description: "외부 오픈 API 연동을 통한 이미지 탐색 및 검색 웹 서비스",
    contribution: "100%",
    period: "2주(2026년)",
    tags: ["React", "SCSS", "Axios", "REST API"],
    img: photoSplashImg,
    demoUrl: "https://ain0274.github.io/react-basic/",
    codeUrl: "https://github.com/ain0274/react-basic"
  },
  {
    id: 3,
    title: "SEMIIS",
    description: "반도체 전문 장비 기업 SEMIIS 웹사이트 UI 리뉴얼",
    contribution: "100%",
    period: "디자인 1주(2025년), 퍼블리싱 1주(2026년)",
    tags: ["React", "SCSS", "Figma"],
    img: semiisImg,
    demoUrl: "https://ain0274.github.io/react-semiis/",
    codeUrl: "https://github.com/ain0274/react-semiis"
  },
  {
    id: 4,
    title: "PANGOLIN",
    description: "제조 공정 및 물류 관리를 위한 공장 관리자 대시보드",
    contribution: "100%",
    period: "디자인 1주, 퍼블리싱 2주(2026년)",
    tags: ["React", "TypeScript", "SCSS", "Recharts"],
    img: pangolinImg,
    demoUrl: "https://ain0274.github.io/pangolin-dashboard/",
    codeUrl: "https://github.com/ain0274/pangolin-dashboard"
  },
  {
    id: 5,
    title: "PANGOLIN(Vue)",
    description: "React로 작업했던 화면을 Vue로 재제작",
    contribution: "100%",
    period: "퍼블리싱 2주(2026년)",
    tags: ["Vue", "JavaScript", "SCSS", "ApexCharts"],
    img: pangolinVueImg,
    demoUrl: "https://ain0274.github.io/vue-pangolin/#/",
    codeUrl: "https://github.com/ain0274/vue-pangolin"
  },
];