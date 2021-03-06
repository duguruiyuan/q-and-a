import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../../store';

class MessageForm extends Component {
  handleMessageSubmit = data => {
    const { sendMessage, senderId, receiverId, threadId } = this.props;
    sendMessage({ content: data, senderId, receiverId, threadId });
  };

  submitOnEnter = event => {
    if (event.which === 13 && !event.shiftKey) {
      const message = event.target.value;
      if (/^\s*$/.test(message)) return; // no space, empty chars, line break
      this.handleMessageSubmit(message);
      event.target.value = '';
      event.preventDefault();
    }
  };

  render() {
    return (
      <form className="thread-message-form" onSubmit={this.handleMessageSubmit}>
        <textarea
          name="content"
          className="textarea"
          placeholder="Type a message..."
          spellCheck="true"
          autoFocus
          rows={3}
          onKeyDown={this.submitOnEnter}
        />
      </form>
    );
  }
}

const mapState = state => ({
  senderId: state.thread.senderId,
  receiverId: state.thread.receiverId,
  threadId: state.thread.id
});

const mapDispatch = dispatch => ({
  sendMessage: data => dispatch(createMessage(data))
});

export default connect(mapState, mapDispatch)(MessageForm);
