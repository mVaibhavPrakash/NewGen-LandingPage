import Navbar from './Navbar'
import Footer from './Footer'
import '../css/App.css'
import Top from './Top';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Top />
      <Footer/>
    </div>
  )
};

export default App;
