import React from 'react';

import { MDBIcon } from "mdbreact";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const DropdownCurrency = (props) => {
  const {rateNames, onChange, direction, title} = props;

  return (
    <DropdownButton 
      className="currencyButton" 
      variant="Secondary"
      size="sm"
      title={title}   
    >
      {(() => {
        return rateNames.map((currency) => {
          return <Dropdown.Item key={currency} onSelect={() => {onChange(direction, currency)} }>{currency}</Dropdown.Item>
        })
      })()}
    </DropdownButton>
  );
}

const ConversionSection = (props) => {
  const {title, rateNames, onChange, direction, currencyChange } = props

  return (
    <>
    {direction === "base" 
    ? (
      <div className="col-12 col-sm-5 conversionBase conversion">
        <DropdownCurrency className="mr-2" title={title} rateNames={rateNames} onChange={onChange} direction={direction} />
        <input
          placeholder={`00.00 ${title}`}
          id={direction}
          type="number"
          onChange={currencyChange}
          className="ml-2 ml-sm-0"
        >  
        </input>
      </div>
      )
    : (
      <div className="col-12 col-sm-5 conversionTo conversion">
        <input
          placeholder={`00.00 ${title}`}
          id={direction}
          type="number"
          onChange={currencyChange}
          className="mr-2 mr-sm-0"
        >  
        </input>
        <DropdownCurrency className="mr-2" title={title} rateNames={rateNames} onChange={onChange} direction={direction} />
      </div>
      )
  }
  </>
  )
}


const CurrencyForm = (props) => {
  const { base, convertTo } = props.selections
  const { rates, handleCurrencyChange, currencyChange, conversion } = props

  const rateNames = rates.currencyRates.map((currency) => {
    for(const key in currency) { 
      return key
    }
  })

  return (
    <form className="row formRow px-2">
      <ConversionSection title={base} rateNames={rateNames} conversion={conversion.baseValue} goingRate={rates.goingRate} onChange={handleCurrencyChange} currencyChange={currencyChange} direction="base" />
      <div className="col-12 col-sm-1 mt-sm-2 mt-md-0 conversionArrow arrow">
        <MDBIcon  icon="angle-right" className="converterArrow"/>
      </div>
      <ConversionSection title={convertTo} rateNames={rateNames} conversion={conversion.convertToValue} goingRate={rates.goingRate} onChange={handleCurrencyChange} currencyChange={currencyChange}  direction="convertTo" />
    </form>
  )
}

const ConverterBox = (props) => {

  const { selections, rates, currencyChange, handleCurrencyChange, conversion } = props;
  
  return (
    <div className="currencyConverter">
        <CurrencyForm selections={selections} rates={rates} conversion={conversion} handleCurrencyChange={handleCurrencyChange} currencyChange={currencyChange} />
    </div>
  )
}



function Converter(props) {

    const { selections, rates, conversion } = props.stateProps
    const { handleCurrencyChange, currencyChange } = props;


    return (
      <div id="converter" className="functionContainer">
        <h1 className="title converterTitle"><span className="fontColorChoice">Travel</span>Money</h1>
        <ConverterBox selections={selections} rates={rates} conversion={conversion} handleCurrencyChange={handleCurrencyChange} currencyChange={currencyChange} />
      </div>
    )

} 



export default Converter