
import { useState } from 'react'
import './App.css'
import image from "./assets/images/pexels-goumbik-917460.jpg"
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { Inputbox } from './components/index'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

const convert = () =>{
  setConvertedAmount(amount * currencyInfo[to])
}

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
   style={{backgroundImage: `url(https://images.pexels.com/photos/917460/pexels-photo-917460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}
   >
    <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-90 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <form onSubmit={(e) => {
        e.preventDefault()
        convert()
      }}>
<div className="w-full mb-1">

  <Inputbox
  label='from'
  amount={amount.toFixed(2)}
  currencyOption={options}
  OnCurrencyChange={(currency) => setFrom(currency)}
  onAmountChange={(amount) => setAmount(amount) }
  selectedCurrency={from}
  />
</div>

<div className="relative w-full h-0.5">
   <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap} >swap</button>
</div>
<div className="w-full mb-1">

  <Inputbox
  label="to"
  currencyOption={options}
  amount={convertedAmount.toFixed(2)}
  OnCurrencyChange={(currency) => setTo(currency)}
  selectedCurrency={to}
  amountDisabled
  />
</div>
<button type='submit' className='w-full bg-blue-600 text_white pc-4 py-3 rounded-lg'> convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}</button>
      </form>
      
      </div>
    </div>

   </div>
  )
}

export default App
