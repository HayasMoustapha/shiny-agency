import React from 'react';
import ReactDOM from 'react-dom/client';
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import ProfileContainer from './components/ProfileContainer';
import {ThemeProvider} from './utils/context';  
import { SurveyProvider } from './utils/context'  
import GlobalStyle from './utils/style/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route
              path="/profile/:id"
              element={<ProfileContainer />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </SurveyProvider>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

