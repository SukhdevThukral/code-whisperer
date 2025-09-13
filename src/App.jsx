import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import SignUp from './components/SignUp.jsx';
import CodeEditor from './components/CodeEditor.jsx';

function Layout({children}){
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/signup';

  return (
    <>
      {!hideHeaderFooter && <Header/>}
      {children}
      {!hideHeaderFooter && <Footer/>}
    </>
  );
}

function App(){
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/codeScreen" element={<CodeEditor/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
