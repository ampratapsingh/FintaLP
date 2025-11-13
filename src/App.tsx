import Container from "./components/container"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="layout">
      <div className="layout-lines-cont">
        <div className="left-line"></div>
        <div className="right-line"></div>
      </div>
      <Container>
        <Navbar/>  
        <Hero/>
       </Container>
       <div className="hero-img-cont">
        <div className="horizontal-line"></div>
        <img src="/hero-ui-v5.webp"
        className="hero-img"
        />
       </div>
    </div>
  )
}

export default App