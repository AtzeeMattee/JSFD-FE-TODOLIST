import { ThemeProvider } from './contexts/ThemeProvider';
import './App.css'
import { Outlet } from 'react-router';
import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider>
      <Header/>
      <Outlet />
    </ThemeProvider>
  );
}
export default App
