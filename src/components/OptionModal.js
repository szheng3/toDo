import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectedOption}
      contentLabel="Selected Option"
      className="modal"

  >
      <div>
    <h3>Selected Option</h3>
          {props.selectedOption && <p className='modal-text'>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
      </div>
  </Modal>
);

export default OptionModal;
