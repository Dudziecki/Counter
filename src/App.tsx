import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/setCounterComponents/SetCounter";


function App() {
    return (
        <div className="App">
            <SetCounter/>
            <Counter/>

        </div>
    );
}

export default App;
