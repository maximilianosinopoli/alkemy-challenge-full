import './index.css';
import Header from './components/header';
import Balance from './components/balance';
import Footer from './components/footer';
import Form from './components/form';


function App() {
   
  return (
    <div className='container'>
       <Header />
       {/* <Balance /> */}
        <Form />
       <Footer />

    </div>
  )
}

export default App;
