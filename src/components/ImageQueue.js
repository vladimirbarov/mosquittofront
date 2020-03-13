import React, { Component } from 'react';
import {HubConnectionBuilder, LogLevel} from "@microsoft/signalr";

export default class ImageQueue extends Component {
    constructor(props){
        super(props);
        this.state= {
            images: [],
            hubConnection: null,
        }
    }

    componentDidMount = () => {

        console.log("***********************");
        console.log("componentDidMount");
        console.log("***********************");

        const hubConnection = new HubConnectionBuilder()
        .withUrl("http://localhost:5000/imagesqueue")
        .configureLogging(LogLevel.Debug)
        .withAutomaticReconnect({
            nextRetryDelayInMilliseconds: retryContext => {
                return 5000;
            }
        })
        .build();

        this.setState({ hubConnection }, () => {
        this.state.hubConnection.start()
        .then(() => console.log('Connection started!'))
        .catch(err => console.log('Error while establishing connection :(' + err));

        this.state.hubConnection.on('newimage', (path) => {
            console.log(`Received: '${path}';`);

        var q = [...this.state.images];
        if(q.length > 100)
            q = [];

        this.setState((state, props) => ({
            images: [...q, path],
        }));

        this.props.newMessageHandle(path);

      });
    });

    }

    render() {
        const images = [...this.state.images]
        return (
            <ul>
                {images.map((i)=>{
                    return <li className="standardListItem">{i}</li>
                })}
            </ul>
        )
    }
}
