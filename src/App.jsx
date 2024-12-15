import { ThemeProvider } from './contexts/ThemeProvider';
import './App.css'
import { Outlet } from 'react-router';


function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
export default App
