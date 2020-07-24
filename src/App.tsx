import React from 'react';
import './App.css';
import {SettingsBoardContainer} from "./components/Settings-board/Settings-board-Container";
import logo from './react_redux.png'
import {ScoreBoardContainer} from "./components/Score-board/Score-board-Container";


const App: React.FunctionComponent = () => {
    let logoStyle = {
        height: '200px',
        width: '400px',
    }
    return (
        <div className="App">
            <img src={logo} style={logoStyle} className="App-logo" alt="logo"/>
            <div className={'Content'}>
                <SettingsBoardContainer/>
                < ScoreBoardContainer />
            </div>
        </div>
    );
}

export default App;
