import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css'
import { AuthContextProvider } from './context/AppContext'


function App() {


  return (
    <main>
    <AuthContextProvider>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>

    </AuthContextProvider>
  
    
    </main>
   
  )
}

export default App
