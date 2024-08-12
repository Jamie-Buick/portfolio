import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import ClientPortfolio from './components/portfolio/clients';
import Contact from './components/contact/Contact';
 




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <ClientPortfolio  /> 
      <Contact  /> 
    </div>
  
  )
}

export default App
