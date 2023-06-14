import LoginPage from './components/LoginPage/LoginPage';
import WeatherList from './components/WeatherList/WeatherList';
import {useState} from 'react';
import './index.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  }

  return (
    <div className="App">
      <header className="App-header">
       {!isLogin && <LoginPage  onLogin={handleLogin} />} 
       {isLogin && <WeatherList/>}
      </header>
    </div>
  );
}

export default App;
