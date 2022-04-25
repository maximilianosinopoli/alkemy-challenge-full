import './index.css';
import Header from './components/header';
import Balance from './components/balance';
import Footer from './components/footer';


function App() {

  let balance = 4500
   
  return (
    <div className='container'>
       <Header />
       <Balance balance={balance}/>
      <Footer />
    </div>
  )
}

export default App;
