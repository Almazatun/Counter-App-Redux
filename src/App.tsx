import React from 'react';
import './App.css';
import {ScoreBoard} from "./components/Score-board/Score-board";
import {SettingsBoardContainer} from "./components/Settings-board/Settings-board-Container";
import logo from './logo.svg'


const App: React.FunctionComponent = () => {

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className={'Content'}>
                <SettingsBoardContainer/>
                < ScoreBoard/>
            </div>
        </div>
    );
}

export default App;
