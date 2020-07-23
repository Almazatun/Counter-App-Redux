import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SettingsBoard} from "./components/Settings-board/Settings-board";
import {ScoreBoard} from "./components/Score-board/Score-board";

const App: React.FunctionComponent = () => {

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className={'Content'}>
                < SettingsBoard/>
                < ScoreBoard/>
            </div>
        </div>
    );
}

export default App;
