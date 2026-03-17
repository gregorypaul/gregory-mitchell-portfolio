import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import heroData from "./data/hero"
import './App.css'
import Section from "./components/layouts/Section"
import Container from "./components/layouts/Container"
import HeroTerminal from "./components/HeroTerminal/HeroTerminal"
import { MotionProvider } from "./motion/MotionProvider";
import Experience from "./components/Experience/Experience"
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <>  
        <MotionProvider>
            <Section noPadding>
                <Container size="full" padding={false}>
                    <HeroTerminal data={heroData}/>  
                </Container>
            </Section>
            <Section noPadding>
                <Container size="full" padding={false}>
                    <Projects/>  
                </Container>
            </Section>
            <Section noPadding>
                <Container size="full" padding={false}>
                    <Experience/>  
                </Container>
            </Section>
            <Section noPadding>
                <Container size="full" padding={false}>
                    <Skills/>  
                </Container>
            </Section>
        </MotionProvider>
    </>
  )
}

export default App