import './App.css';
import NavBar from './layouts/NavBar/NavBar.jsx';
import HeaderInfo from './components/HeaderInfo/HeaderInfo.jsx';
import InfoMain from './components/InfoMain/InfoMain.jsx';
import Form from './components/Form/Form.jsx';


function App() {
  return (
    <div>
      <section className="header">
        <NavBar />
        <HeaderInfo />
        </section>
        <InfoMain />     
      <div className='conteiner'>
			  <div className='conteiner-form'>
			    <Form/>
			  </div>	
			  <div className='conteiner-img'>
			    <img className="img-form" src="./image/formImg.png" alt="Img-Pagina-Form" />
			  </div>
		  </div>
    </div>
  );
}

export default App;
