import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const HomeWeb = React.lazy(() => import("../src/pages/HomePage"));
const LoginRegisterPage = React.lazy(() => import("./pages/LoginRegisterPage"));
const CategoryPage = React.lazy(() => import("../src/pages/CategoryPage"));
const BookDetailsPage = React.lazy(() => import("../src/pages/BookDetailsPage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeWeb />} />
          <Route path="/register" element={<LoginRegisterPage pageType="register" />} />
          <Route path="/login" element={<LoginRegisterPage pageType="login"/>} />
          <Route path="/home" element={<HomeWeb />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/book-details" element={<BookDetailsPage bookName="Dune" bookAuthor="deneme" bookPrice="87.5" bookPriceType="$" bookSummary='Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or "spice", a drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides. As melange can only be produced on Arrakis, control of the planet is a coveted and dangerous undertaking. The story explores the multilayered interactions of politics, religion, ecology, technology, and human emotion, as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice.' />} />        
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;