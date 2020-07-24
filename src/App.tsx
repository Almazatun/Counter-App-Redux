import React from 'react';
import './App.css';
import {SettingsBoardContainer} from "./components/Settings-board/Settings-board-Container";
import logo from './logo.svg'
import {ScoreBoardContainer} from "./components/Score-board/Score-board-Container";


const App: React.FunctionComponent = () => {

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className={'Content'}>
                <SettingsBoardContainer/>
                < ScoreBoardContainer />
            </div>
        </div>
    );
}

export default App;
