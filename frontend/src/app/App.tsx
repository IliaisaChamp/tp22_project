import 'normalize.css';
import './styles/colors.css';
import './styles/variables.css';
import './styles/index.css';

import { CardPage, MainPage } from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:key' element={<CardPage />} />F
      </Routes>
    </BrowserRouter>
  );
}

export default App;
