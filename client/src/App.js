import './index.css';
import Header from './components/header';
import Balance from './components/balance';
import data from './data';

const last10 = data.slice(0,10)

function App() {

  let balance = 4500
  let style = ''

  balance > 0 ? style = 'green' : style = 'red'
  
  return (
    <div className='content'>
       <Header />
       <Balance balance={balance} test={style}/>
       {last10.map((item, index) => {
         return <p key={index}>{item.item}</p>
       })}
    </div>
  )
}

export default App;
