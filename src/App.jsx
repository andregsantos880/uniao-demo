import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Produtos = lazy(() => import('./pages/Produtos'));
const Receitas = lazy(() => import('./pages/Receitas'));
const Historia = lazy(() => import('./pages/Historia'));
const Sustentabilidade = lazy(() => import('./pages/Sustentabilidade'));
const Blog = lazy(() => import('./pages/Blog'));
const Contato = lazy(() => import('./pages/Contato'));

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<p className="container">Carregando...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/sustentabilidade" element={<Sustentabilidade />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
