import React, { Component } from 'react'
import Title from './Title'
import './PersonalForm.css'

export class PersonalForm extends Component {
    constructor(props) {
        super(props)

        this.handleChangeForm = this.handleChangeForm.bind(this)
    }

    handleChangeForm(event) {
        const { onChangeForm } = this.props
        onChangeForm(event.target.name, event.target.value)
    } //handleChangeForm

    render() {
        return (
            <div className="personal-form">
                <Title>Персональная информация</Title>
                <input
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    onChange={this.handleChangeForm}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="lastName"
                    onChange={this.handleChangeForm}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChangeForm}
                />
            </div>
        )
    }
}

export default PersonalForm
