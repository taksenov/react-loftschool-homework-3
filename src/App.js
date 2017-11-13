import React, { Component } from 'react';
import './App.css';
import Step from './Step';

const stepTitles = ['Personal information', 'Card information', 'Finish'];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            cardNumber: '',
            isTimeOver: false
        };
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleClickNextForm = this.handleClickNextForm.bind(this);
        this.handleChangeTimeOver = this.handleChangeTimeOver.bind(this);
        this.isFormCommitable = this.isFormCommitable.bind(this);
        this.renderForm = this.renderForm.bind(this);
    } //constructor

    handleTabClick() {} //handleTabClick
    handleChangeForm() {} //handleChangeForm
    handleClickNextForm() {
        console.log('handleClickNextForm');
    } //handleClickNextForm
    handleChangeTimeOver() {} //handleChangeTimeOver
    isFormCommitable() {} //isFormCommitable
    renderForm() {} //renderForm

    //    {/* disabled={!this.isFormCommitable || !this.state.isTimeOver ? true : false} */}
    render() {
        return (
            <div>
                <div className="container">
                    <div className="tab-panel">
                        <Step
                            key="Personal information"
                            onClick={this.handleTabClick}
                            isSelected={true}
                            number={1}
                            isClickable={false}
                        >
                            {stepTitles[0]}
                        </Step>
                        <Step
                            key="Card information"
                            onClick={this.handleTabClick}
                            isSelected={false}
                            number={2}
                            isClickable={false}
                        >
                            {stepTitles[1]}
                        </Step>
                        <Step
                            key="Finish"
                            onClick={this.handleTabClick}
                            isSelected={false}
                            number={3}
                            isClickable={false}
                        >
                            {stepTitles[2]}
                        </Step>
                    </div>
                    <div className="form-content" />
                    <div className="button-panel">
                        <button className="button-next" onClick={this.handleClickNextForm}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
