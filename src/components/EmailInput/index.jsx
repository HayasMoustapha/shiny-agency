import { Component } from "react";


class EmailInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        };
    }

    updateInputValue = (value) => {
        this.setState({ inputValue: value })
    }

    render() {
        return (
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => this.updateInputValue(e.target.value)} />
                {this.state.inputValue}
            </div>
        );
    }
}


export default EmailInput