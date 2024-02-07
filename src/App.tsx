import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderComponent } from "./Components/Header/Header"
import { IndexPage } from "./Pages/Index/Index"
import { StreamingPage } from "./Pages/Streaming/Streaming";
import { useState } from 'react'
import { MainWrapperComponent } from "./Components/Main/AppWrapper";

function App() {
  const [headerForceBackground, setHeaderForceBackground] = useState(false)

  const forceBackground = () => {
    setHeaderForceBackground(true)
  }

  return (
    <>
      <HeaderComponent forceBackground={headerForceBackground} />
      <MainWrapperComponent>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage/>} />
              <Route path="/assistir" element={<StreamingPage headerForceBackground={forceBackground} />} />
            </Routes>
          </BrowserRouter>
      </MainWrapperComponent>
    </>
  )
}

export default App
