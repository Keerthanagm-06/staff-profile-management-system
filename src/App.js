import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes/AllRoutes';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <AllRoutes />
      </div>
    </Router>
  );
}

export default App;
