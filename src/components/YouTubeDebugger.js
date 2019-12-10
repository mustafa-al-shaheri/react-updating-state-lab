// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state={
            
                errors: [],
                user: null,
                settings: {
                  bitrate: 8,
                  video: {
                    resolution: '1080p'
                  }
                }
              
        }
    }
    changeBitrate = () =>{
        console.log(this.state)
        this.setState({
           settings:{
            bitrate: 12,
            video: {
                resolution: '1080p'
              }
           }
        })
       
    }

    changeResolution = () =>{
       console.log(this.state)
        this.setState({
           settings:{
            bitrate: 8,
            video: {
                resolution: '720p'
              }
           }
        })
    }
   
    render(){
        return(
            <div>
            <button  className='bitrate' onClick={this.changeBitrate}>change Bitrate</button>
            <button  className='resolution' onClick={this.changeResolution}>change Resolution</button>
            </div>
        )
    }
}
