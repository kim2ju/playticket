import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BottomTab from './components/BottomTab';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="h-full bg-white">
      <BrowserRouter>
        <Routes>
            <Route element={<BottomTab />}>
              <Route path='/' element={<HomePage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
