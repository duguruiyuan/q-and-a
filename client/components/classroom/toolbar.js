import React from 'react';
import { Link } from 'react-router-dom';
import ToggleFullScreen from './toggle-full-screen';
import {
  IconExit,
  IconAudio,
  IconVideo,
  IconFullScreen,
  IconHangup
} from './toolbar-icons';

const Toolbar = props => (
  <div className="toolbar">
    <div className="media-controls">
      <Link className="button call-exit-button" to="/classroom">
        <IconExit />
      </Link>
      <button
        onClick={props.toggleAudio}
        className={`button button-audio is-${props.audio}`}
      >
        <IconAudio />
      </button>
      <button
        onClick={props.toggleVideo}
        className={`button button-video is-${props.video}`}
      >
        <IconVideo />
      </button>
      <button onClick={ToggleFullScreen} className="button button-fullscreen">
        <IconFullScreen />
      </button>
      <button onClick={props.handleHangup} className="button button-hangup">
        <IconHangup />
      </button>
    </div>

    <div className="request-access">
      <p>
        <span className="you-left">You hung up.&nbsp;</span>Send an invitation
        to join the room.
      </p>
      <form onSubmit={props.send}>
        <div className="field is-grouped">
          <p className="control">
            <input type="text" autoFocus onChange={props.handleInput} data-ref="message" required placeholder="Your name" className="input" />
          </p>
          <p className="control">
            <button className="button is-primary">Send</button>
          </p>
        </div>
      </form>
    </div>

    <div className="grant-access">
      <p>A peer has sent you a message to join the room:</p>
      <button
        onClick={props.handleInvitation}
        data-ref="reject"
        className="button is-primary"
      >
        Reject
      </button>
      <button
        onClick={props.handleInvitation}
        data-ref="accept"
        className="button is-primary"
      >
        Accept
      </button>
    </div>

    <div className="room-occupied">
      <p>Please, try another room!</p>
      <Link className="button is-primary" to="/classroom">
        OK
      </Link>
    </div>

    <div className="waiting">
      <p>
        <span>Waiting for someone to join this room:&nbsp;</span>
        <a href={window.location.href}>{window.location.href}</a>
        <br />
        <span className="remote-left">The remote side hung up.</span>
      </p>
    </div>
  </div>
);

export default Toolbar;