import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BottomTab from './components/BottomTab';
import HomePage from './pages/HomePage';
import TicketWritePage from './pages/TicketWritePage';
import CalendarPage from './pages/CalendarPage';
import SearchPage from './pages/SearchPage';
import ChatPage from './pages/ChatPage';
import MyInfoPage from './pages/MyInfoPage';

const App = () => {
  return (
    <div className="h-full bg-white">
      <BrowserRouter>
        <Routes>
            <Route element={<BottomTab />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/calendar' element={<CalendarPage />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/chat' element={<ChatPage />} />
              <Route path='/myinfo' element={<MyInfoPage />} />
            </Route>
            <Route path='/ticket-write' element={<TicketWritePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
