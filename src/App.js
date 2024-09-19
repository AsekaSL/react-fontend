import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
          <h1>Welcome Saranga</h1>
          <button className="user-button" onClick={() => navigate('/users')}>Enter</button>
      </header>
    </div>
  );
}

export default App;
