import htmlImg from "@assets/images/skills/html.png"
import cssImg from "@assets/images/skills/css.png"
import jsImg from "@assets/images/skills/js.png"
import reactImg from "@assets/images/skills/react.png"
import scssImg from "@assets/images/skills/scss.png"
import figmaImg from "@assets/images/skills/figma.png"

export interface Skill{
    id: number;
    name: string;
    img: string;
    desc: string;
}

export const skillsData: Skill[] = [
  {
    id: 1,
    name: 'HTML',
    img: htmlImg,
    desc: '시맨틱 태그 활용, 웹 접근성 및 SEO 최적화 마크업'
  },
  {
    id: 2,
    name: 'CSS',
    img: cssImg,
    desc: 'Flexbox/Grid 레이아웃'
  },
  {
    id: 3,
    name: 'JS',
    img: jsImg,
    desc: 'DOM 제어, 동적 이벤트 처리 및 비동기 통신(Fetch/Axios)'
  },
  {
    id: 4,
    name: 'React',
    img: reactImg,
    desc: '컴포넌트 기반 UI 개발 및 기본 State/Props 상태 관리'
  },
  {
    id: 5,
    name: 'SCSS',
    img: scssImg,
    desc: ' CSS 변수 및 모듈화 구조 설계'
  },
  {
    id: 6,
    name: 'Figma',
    img: figmaImg,
    desc: '디자인 가이드 및 분석, 아이콘 추출 및 퍼블리싱 반영'
  },
];