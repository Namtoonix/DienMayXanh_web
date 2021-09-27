import FootBottom from 'components/Footer/FootBottom/FootBottom';
import BodyContainer from 'containers/BodyContainer/BodyContainer';
import FooterContainer from 'containers/Footer/FooterContainer';
import HeaderContainer from 'containers/HeaderContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <BodyContainer />
      <FooterContainer />
      <FootBottom />
    </div>
  );
}

export default App;
