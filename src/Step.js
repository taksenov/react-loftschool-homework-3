import React, { PureComponent } from 'react';
import './Step.css';

class Step extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            noState: ''
        };
        this.handleClick = this.handleClick.bind(this);
    } //constructor

    handleClick() {
        const { number, onClick } = this.props;
        onClick(number);
    } //handleClick

    // handleDelete = () => {
    //     const { id, onDelete } = this.props;
    //     onDelete(id);
    // };

    render() {
        return (
            <div
                className={
                    (this.props.isSelected ? 'step-selected' : '') +
                    (this.props.isClickable ? 'step-clickable step' : '')
                }
                onClick={this.props.isClickable ? this.handleClick : null}
            >
                <div className="step__number">{this.props.number}</div>
                <div className="step__title">{this.props.childlen}</div>
            </div>
        );
    }
}

export default Step;
