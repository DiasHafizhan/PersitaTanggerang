import {Routes, Route} from "react-router-dom"
import NavbarComponent from "./component/NavbarComponent"
import FooterComponent from "./component/FooterComponent"
import SponsorComponent from "./component/SponsorComponent"
import HomePage from "./pages/HomePage"
import MatchPage from "./pages/MatchPage"
import NewsPage from "./pages/NewsPage"
import TeamsPage from "./pages/TeamsPage"

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/match' Component={MatchPage} />
        <Route path='/news' Component={NewsPage} />
        <Route path='/teams' Component={TeamsPage} />
      </Routes>
      <FooterComponent/>
    </div>
  )
}

export default App
