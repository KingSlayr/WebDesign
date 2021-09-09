import './App.css';
import Header from './components/Header/Header'
import Wrapper from './components/WelcomeWrapper/Wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './components/Section1/Section1';

function App() {
  return (
    <div className="App">
      <Header/>
      <Wrapper/>
      <Section1/>
    </div>
  );
}

export default App;
