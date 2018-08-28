import React, { Component } from 'react';

class PlayPauseButton extends Component {

    static iconUrl = {
        playIcon: 'https://cdn.iconscout.com/public/images/icon/free/png-512/play-button-social-media-logo-38378301177154e7-512x512.png',
        pauseIcon: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/pause-button-3dd51b010ebcd1da-512x512.png',
    };

    constructor(props) {
       super(props);
   }

//    handleClick() {
//        this.setState({
//            icon: PlayPauseButton.iconUrl.playIcon === this.state.icon ? PlayPauseButton.iconUrl.pauseIcon : PlayPauseButton.iconUrl.playIcon,
//        });
//    }

   render() {
       return (
           <button
                style={{
                    border: 0,
                    outline: 0,
                }}>
                <img
                    src={this.props.timerRunning ? PlayPauseButton.iconUrl.pauseIcon : PlayPauseButton.iconUrl.playIcon}
                    alt='play pause'
                    onClick={this.props.toggleTimerHandler}
                    width="40"
                    height="40"                     
                />
           </button>
                
       )
   }
}   

export default PlayPauseButton