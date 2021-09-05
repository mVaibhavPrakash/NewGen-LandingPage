import Navbar from './Navbar'
import Footer from './Footer'
import '../css/App.css'
import Top from './Top';
import Cards from './Cards';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
        <Top />
        <Cards />
      <Footer/>
    </div>
  )
};

export default App;
