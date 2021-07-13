import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers'
import {applyNumber, changeOperation, clearTotal, clearMemory, applyMemory, setMemory} from './actions'
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
const [state, dispatch] = useReducer(reducer, initialState)

const handleOpChange = (op) => {
  dispatch(changeOperation(op))
}

const applyNumberFunc = (num) => {
  dispatch(applyNumber(num))
}
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => {
                dispatch(setMemory())
              }}/>
              <CalcButton value={"MR"} onClick={() => {
                dispatch(applyMemory())
              }}/>
              <CalcButton value={"MC"} onClick={() => {
                dispatch(clearMemory())
              }}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {
                applyNumberFunc(1)
              }}/>
              <CalcButton value={2} onClick={() => {
                applyNumberFunc(2)
              }}/>
              <CalcButton value={3} onClick={() => {
                applyNumberFunc(3)
              }}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {
                applyNumberFunc(4)
              }}/>
              <CalcButton value={5} onClick={() => {
                applyNumberFunc(5)
              }}/>
              <CalcButton value={6} onClick={() => {
                applyNumberFunc(6)
              }}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {
                applyNumberFunc(7)
              }}/>
              <CalcButton value={8} onClick={() => {
                applyNumberFunc(8)
              }}/>
              <CalcButton value={9} onClick={() => {
                applyNumberFunc(9)
              }}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {
                handleOpChange('+')
              }}/>
              <CalcButton value={"*"} onClick={() => {
                handleOpChange('*')
              }}/>
              <CalcButton value={"-"} onClick={() => {
                handleOpChange('-')
              }}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {
                dispatch(clearTotal())
              }}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
