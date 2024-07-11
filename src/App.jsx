import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import dotenv from 'dotenv'
import Footer from "./components/Footer.jsx";
import RenderIfVisible from 'react-render-if-visible'
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <RenderIfVisible>
          <Hero />
      </RenderIfVisible>
        </div>
        <About />
        <Experience />
        <RenderIfVisible>
        <Tech />
      </RenderIfVisible>
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
        <RenderIfVisible>
          <Contact />
          <StarsCanvas />
      </RenderIfVisible>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;