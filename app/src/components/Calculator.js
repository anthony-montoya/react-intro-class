import React, { Component } from 'react'
import calculatorImg from './calculator.png'

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            header: "Math away.",
            display: "0",
            operator: null,
            tempNum: 0
        }
    }

    updateHeader(e) {
        let value = e.target.value;
        this.setState ({
            header: value
        })
    }

    onPressNum(num) {
        let display;
        if(this.state.display === "0") {
            display = num;
        } else {
            display = this.state.display + num;
        }
        if(this.state.display.length < 13) {
          this.setState ({
              display: display
          })  
        }
    }

    setOperator(operator) {
        if(this.state.operator === null) {
            this.setState ({
                tempNum: parseInt(this.state.display),
                display: "0",
                operator: operator
            })
        }
    }

    calculate() {
        if(this.state.operator === null) {
            return;
        }

        var result;
        switch(this.state.operator) {
            case "+":
                result = this.state.tempNum + parseInt(this.state.display);
                break;
            case "-":
                result = this.state.tempNum - parseInt(this.state.display);
                break;
            case "/":
                result = this.state.tempNum / parseInt(this.state.display);;
                break;
            case "*":
                result = this.state.tempNum * parseInt(this.state.display);;
                break;
        }
            this.setState( {
                display: result,
                operator: null
            })
    }

    clearPress() {
        this.setState ({
            display: "0",
            operator: null,
            tempNum: 0
        })
    }

    render() {
        return (
            <div id="calculator-container">
                {/*This below is what updates the header when a change is made.*/}
                <input id="header-input" onChange= {(e) => this.updateHeader(e)}/>
                <h1 id="header"> { this.state.header } </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                        <span className="total">
                            { this.state.display }
                        </span>
                    </div>

                    <div className="btn clear"  onClick={ () => this.clearPress() }></div>

                    <div className="btn zero"   onClick={ () => this.onPressNum('0') }></div>
                    <div className="btn one"    onClick={ () => this.onPressNum('1') }></div>
                    <div className="btn two"    onClick={ () => this.onPressNum('2') }></div>
                    <div className="btn three"  onClick={ () => this.onPressNum('3') }></div>
                    <div className="btn four"   onClick={ () => this.onPressNum('4') }></div>
                    <div className="btn five"   onClick={ () => this.onPressNum('5') }></div>
                    <div className="btn six"    onClick={ () => this.onPressNum('6') }></div>
                    <div className="btn seven"  onClick={ () => this.onPressNum('7') }></div>
                    <div className="btn eight"  onClick={ () => this.onPressNum('8') }></div>
                    <div className="btn nine"   onClick={ () => this.onPressNum('9') }></div>

                    <div className="btn equal"    onClick={ () => this.calculate() }></div>
                    <div className="btn multiply" onClick={ () => this.setOperator("*") }></div>
                    <div className="btn divide"   onClick={ () => this.setOperator("/") }></div>
                    <div className="btn subtract" onClick={ () => this.setOperator("-") }></div>
                    <div className="btn add"      onClick={ () => this.setOperator("+") }></div>
                </div>
            </div>
        )
    }
}

export default Calculator