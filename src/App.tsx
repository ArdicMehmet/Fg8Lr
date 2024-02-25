
import './App.css'
import './styles/aliceCarosel.css'

import { RegisterPage } from './pages/RegisterPage/index'
import { LoginPage } from './pages/LoginPage/index'
import  {HomePage}  from './pages/HomePage/index'
import { CategoryPage } from './pages/CategoryPage/index'
import {BookDetails} from './pages/BookDetailsPage'


function App() {

  return (
    <>
     <BookDetails bookName='Dune' bookAuthor='Mehmet Ardıç' bookPrice='87.5' bookPriceType='$' bookSummary='Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or "spice", a drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides. As melange can only be produced on Arrakis, control of the planet is a coveted and dangerous undertaking. The story explores the multilayered interactions of politics, religion, ecology, technology, and human emotion, as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice.'/>
      
    </>
  )
}

export default App
