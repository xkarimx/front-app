import './App.css';
import NavBar from './layouts/NavBar/NavBar';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import InfoMain from './components/InfoMain/InfoMain';


function App() {
  return (
    <div>
      <section className="header">
        <NavBar />
        <HeaderInfo />
        </section>
        <InfoMain />     
    </div>
  );
}

export default App;
