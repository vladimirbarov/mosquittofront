import React, { Component } from 'react'

export default class ImageView extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log('ImageView  ' + this.props.imageView);
        return (
            
            <img src={this.props.imageView} alt="frame" width='720px' height='480px'></img>
        )
    }
}
