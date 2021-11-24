import AppRoutes from './components/AppRoutes';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;