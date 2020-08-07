import React from 'react';
import './App.css';
import logo from './react_redux.png'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux_store";
import {
    changeValueDisabledScoreBoardButtonAC,
    disabledButtonBooleanAC, getMaxValueAC,
    getStartValueAC,
    incrementValueAC,
    resetValueAC, setValueAC,
    StateType
} from "./redux/reducer/reducer_counter";

import {ScoreBoardWithUseSelector} from "./components/Score-board/Score-boardWithUseSelector";
import {SettingsBoardWithUseSelector} from "./components/Settings-board/Settings-boardWithUseSelector";


const AppWithUseSelector: React.FunctionComponent = () => { // Other way to make Counter with Redux with UseSelector
    const Counter = useSelector<AppStateType, StateType>(state => state.Counter)
    const dispatch = useDispatch();
    //==========================================Dispatch of Score-Board _07.08.2020
    const incrementValue = () => {
        dispatch(incrementValueAC())
    };
    const resetValue = () => {
        dispatch(resetValueAC());
    }
    //==========================================Dispatch of Setting-Board __07.08.2020
    const getStartValue = (startValue: number) => {
        dispatch(getStartValueAC(startValue))

    }
    const getMaxValue = (maxValue: number) => {
        dispatch(getMaxValueAC(maxValue))
    }
    const disabled = () => {
        dispatch(disabledButtonBooleanAC())
    }
    const changeValueDisabled = () => {
        dispatch(changeValueDisabledScoreBoardButtonAC())
    }
    const setSettingsParameters = () => {
        dispatch(setValueAC())
    }


    let logoStyle = {
        height: '200px',
        width: '400px',
    }
    return (
        <div className="App">
            <img src={logo} style={logoStyle} className="App-logo" alt="logo"/>
            <div className={'Content'}>
                <SettingsBoardWithUseSelector
                    CounterData={Counter}
                    getStartValue={getStartValue}
                    getMaxValue={getMaxValue}
                    disabled={disabled}
                    changeValueDisabled={changeValueDisabled}
                    setSettingsParameters={setSettingsParameters}

                />
                < ScoreBoardWithUseSelector CounterData={Counter} incrementValue={incrementValue}
                                            resetValue={resetValue}/>
            </div>
        </div>
    );
}

export default AppWithUseSelector;
