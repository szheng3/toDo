import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className='widget--header'>
            <p>Options</p>
            <button onClick={props.handleDeleteOptions} className='button--link'>Remove All</button>
        </div>
        {props.options.length === 0 && <p className='option'>Please add an option to get started!</p>}
        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    count={index + 1}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;
