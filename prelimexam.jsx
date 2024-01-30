import React from 'react'
import './prelimexam.css'
function GreenBring(){
  return(
    <div className='whole'>
      <h2 className='title'Things to Bring></h2>
      <p className='green'>Gum gum Fruit</p>
      <p className='red'>The red vest</p>
    </div>
  );
}

function NoBring(){
  return(
    <div className='whole'>
      <h2 className='nocolor'>Things to Bring</h2>
      <p className='nocolor'>Gum gum Fruit</p>
      <p className='nocolor'>The red vest</p>
    </div>
  );
}

function Bring(props){
  const isBring = props.isBring
  if(isBring){
    return<GreenBring />
  }
  else{
    return<NoBring />
  }
}
export default Bring;