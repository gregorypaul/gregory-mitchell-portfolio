import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Navigation from "./components/Navigation/Navigation"
import heroData from "./data/hero"
import './App.css'
import Section from "./components/layouts/Section"
import Container from "./components/layouts/Container"
import HeroTerminal from "./components/HeroTerminal/HeroTerminal"
import { MotionProvider } from "./motion/MotionProvider"
import Experience from "./components/Experience/Experience"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>  
        <MotionProvider>
            <Section noPadding>
                <Container size="full" padding={false}>
                    <Navigation />  
                </Container>
            </Section>
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
            <Section noPadding>
                <Container size="full" padding={false}>
                    <Contact/>  
                </Container>
            </Section>
            <Section noPadding>
                <Container size="full" padding={false}>
                    <Footer/>  
                </Container>
            </Section>
        </MotionProvider>
    </>
  )
}

export default App