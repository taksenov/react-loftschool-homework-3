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

    render() {
        return (
            <div>
                <div
                    className={
                        'step ' +
                        (this.props.isSelected ? 'step-selected ' : '') +
                        (this.props.isClickable ? 'step-clickable ' : '')
                    }
                    onClick={this.props.isClickable ? this.handleClick : null}
                >
                    <div className="step__number">{this.props.number}</div>
                </div>
                <div className="step__title">
                    {React.Children.map(this.props.children, el => {
                        el;
                    })}
                </div>
            </div>
        );
    }
}

export default Step;
