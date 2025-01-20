import React from 'react'
import './styles/global.scss'
import Header from './components/Header/Header'
import ImageBanner from './components/ImageBanner/ImageBanner'
import MenuItem from './components/MenuItem/MenuItem'
import NavBarVitrine from './components/NavBarVitrine/NavBarVitrine'
import Vitrine1 from './components/Vitrine1/Vitrine1'
import BannersApoio from './components/BannersApoio/BannersApoio'
import NaveguePorMarcas from './components/NaveguePorMarcas/NavueguePorMarcas'
import NavBarVitrine2 from './components/NavBarVitrine2/NavBarVitrine2'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ImageBanner/>
      <MenuItem/>
      <NavBarVitrine />
      <Vitrine1/>
      <BannersApoio/>
      <NaveguePorMarcas/>
      <NavBarVitrine2/>
      <Vitrine1/>
      <BannersApoio/>
      <NaveguePorMarcas/>
      <NavBarVitrine2/>
      <Vitrine1/>
      <Newsletter />
      <Footer/>
    </div>
  )
}

export default App
