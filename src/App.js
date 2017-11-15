import React, { Component } from 'react';
import './App.css';
import Step from './Step';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';

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
            isTimeOver: false,
            steps: {
                one: {
                    isSelected: true,
                    isClickable: false
                },
                two: {
                    isSelected: false,
                    isClickable: false
                },
                three: {
                    isSelected: false,
                    isClickable: false
                }
            }
        };
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleClickNextForm = this.handleClickNextForm.bind(this);
        this.handleChangeTimeOver = this.handleChangeTimeOver.bind(this);
        this.isFormCommitable = this.isFormCommitable.bind(this);
        this.renderForm = this.renderForm.bind(this);
    } //constructor

    handleTabClick(number) {
        this.setState({
            step: number
        });
    } //handleTabClick

    handleChangeForm(name, value) {
        this.setState({ [name]: value });
    } //handleChangeForm

    handleClickNextForm() {
        if (this.state.step === 3) return;
        let thisStep = this.state.step;
        this.setState({
            step: ++thisStep
        });
    } //handleClickNextForm

    handleChangeTimeOver(bool) {
        let timeOverStatus = this.state.isTimeOver;
        if (bool) this.setState({ isTimeOver: !timeOverStatus });
    } //handleChangeTimeOver

    isFormCommitable() {
        switch (this.state.step) {
            case 1:
                if (
                    this.state.firstName !== '' &&
                    this.state.lastName !== '' &&
                    this.state.email !== '' &&
                    this.state.email.includes('@')
                )
                    return true;
                else return false;

            // Должен возвращать false если state.firstName === '' && state.lastName !== '' && state.email !== '' && state.email.includes('@') (1ms)
            //           √ Должен возвращать false если state.firstName !== '' && state.lastName === '' && state.email !== '' && state.email.includes('@') (2ms)
            //           √ Должен возвращать false если state.firstName !== '' && state.lastName !== '' && state.email === '' && state.email.includes('@') (2ms)

            // case 2:
            // alert('В точку!');
            // case 3:
            // alert('Перебор');
            default:
                return false;
        }
        // true если state.firstName !== '' && state.lastName !== '' && state.email !== '' && state.email.includes('@')
    } //isFormCommitable

    renderForm() {} //renderForm

    render() {
        return (
            <div>
                <div className="container">
                    <div className="tab-panel">
                        <Step
                            key={stepTitles[0]}
                            onClick={this.handleTabClick}
                            isSelected={this.state.steps.one.isSelected}
                            number={1}
                            isClickable={this.state.steps.one.isClickable}
                        >
                            {stepTitles[0]}
                        </Step>
                        <Step
                            key={stepTitles[1]}
                            onClick={this.handleTabClick}
                            isSelected={this.state.steps.two.isSelected}
                            number={2}
                            isClickable={this.state.steps.two.isClickable}
                        >
                            {stepTitles[1]}
                        </Step>
                        <Step
                            key={stepTitles[2]}
                            onClick={this.handleTabClick}
                            isSelected={this.state.steps.three.isSelected}
                            number={3}
                            isClickable={this.state.steps.three.isClickable}
                        >
                            {stepTitles[2]}
                        </Step>
                    </div>
                    <div className="form-content">
                        {this.state.step === 1 && (
                            <PersonalForm
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                email={this.state.email}
                                onChangeForm={this.handleChangeForm}
                            />
                        )}
                        {this.state.step === 2 && (
                            <CardForm
                                cardNumber={this.state.cardNumber}
                                onChangeForm={this.handleChangeForm}
                            />
                        )}
                        {this.state.step === 3 && <span>Поздравляем!</span>}
                    </div>
                    <div className="button-panel">
                        <button
                            disabled={
                                !this.isFormCommitable() ||
                                !this.state.isTimeOver
                                    ? true
                                    : false
                            }
                            className="button-next"
                            onClick={this.handleClickNextForm}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
