import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Glossary from './components/Glossary/Glossary';
import MainLayout from './components/MainLayout/MainLayout';
import GraphPage from './components/Graph/GraphPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route  path='/' element={<Glossary />} />
          <Route  path='/graph' element={<GraphPage />} />
          <Route  path='*' element={<Glossary  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
