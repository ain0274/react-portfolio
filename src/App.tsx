import Header from "@/components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Work from "./components/work/Work"
import Contact from "./components/contact/Contact"
import Footer from "@/components/footer/Footer"
import Skills from "./components/skills/Skills"
import styles from "./App.module.scss"

function App() {
  return (
    <section className={styles.page}>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      
      <Footer />
    </section>
  )
}

export default App