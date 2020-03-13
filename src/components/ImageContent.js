import React, { Component } from 'react'
import ImageQueue from './ImageQueue'
import ImageView from './ImageView'

export default class ImageContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageQueue: ['kek'],
            imageView: {},
        };
        this.newMessageReceivedHandle = this.newMessageReceivedHandle.bind(this)
    }

    newMessageReceivedHandle(path){
        console.log("Get " + path);
        fetch(`http://localhost:5000/Files?path=${path}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            return response.blob();
        })
        .then((data) => {
            //console.log(data);
            const outside = URL.createObjectURL(data);
            console.log(outside);

            this.setState((state, props) => ({
                imageView: outside
            }));

            // console.log("2" + reader.result);
            console.log(data);

        })
    }

    render() {
        console.log("To component:" + this.state.imageView);
        return (   
            <>     
            <div className="imageView"><ImageView imageView={this.state.imageView}/></div>
            <div className="imageQueue"><ImageQueue imagesQueue={this.state.imageQueue} newMessageHandle={this.newMessageReceivedHandle}/></div>
            </>
        )
    }
}
