import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <UserDetails />
      <hr></hr>
      <Main />
    </div>
  );
}

export default App;
