import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className='option'>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} className='add_option_form'>
                    <input type="text" name="option" className='form_input'/>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}
