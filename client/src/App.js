import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/header';
import Balance from './components/balance';
import Footer from './components/footer';
import Form from './components/form';
import About from './components/about';
import Search from './components/search';


function App() {
   
  return (
    <Router>
      <div className='container'>
          <Header />

          <Routes>

            <Route path="/" element={<Balance/>}></Route>
            <Route path="/add" element={<Form/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/search" element={<Search/>}></Route>

          </Routes>
  
          <Footer />
        </div>
    </Router>

  )
}

export default App;
