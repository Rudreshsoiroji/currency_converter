import React, { useId } from 'react'

function Inputbox({
    label,
    amount,
    onAmountChange,
    OnCurrencyChange,
    currencyOption = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {

   const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
        <div className="w-1-2">
            <label className='text-black/40 mb-2 inline-block' htmlFor={id}>{label}</label>
            <input type="number" className='outline-none w-full bg-transparent py-1.5' id={id} placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 wb-3 w-full'>Currency Type</p>
            <select 
            className='rounded-lg px-1 py-1 bg-green-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => {OnCurrencyChange && OnCurrencyChange(e.target.value)}}
            disabled={currencyDisabled}
            >

                {currencyOption.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Inputbox