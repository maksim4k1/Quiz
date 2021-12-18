import { useEffect } from 'react';
import { connect } from 'react-redux';
import AppRoutes from './components/AppRoutes';
import InfoText from './components/InfoText';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import { logInAction } from './redux/actions/auth/logInAction';
import './styles/App.scss';

function App({info, logIn}) {
  useEffect(() => {
    logIn();
  }, [logIn]);

  return (
    <div className="App">
      <Header/>
      {
        info.loading
        ? <InfoText>Загрузка</InfoText>
        : <AppRoutes/>
      }
      <Footer/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  info: state.auth.loginState
});
const mapDispatchToProps = {
  logIn: logInAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);