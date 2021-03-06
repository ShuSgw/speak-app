import React, { Component } from 'react';
import { Alexa } from "../const/alexa"
import { Google } from "../const/google"

export default class SpeakerButton extends Component {
    constructor(props) {
        super(props);
        switch (this.props.type) {
            case "Alexa":
                this.type = Alexa;
                break;
            case "Google":
                this.type = Google;
                break;
        }
    }
    render() {
        // return (
        //     <div className="col-sm-6 mb-2 mt-2">
        //         <button className="card" onClick={this.clicked}>
        //             <div className="card-body">
        //                 <h4 className="card-title text-left">
        //                     <i className="fas fa-play"></i>
        //                     {this.props.type}音楽かけて
        //               </h4>
        //                 <p className="card-text text-left">
        //                     ランダムで音楽をかけてくれるコマンドです。
        //               </p>
        //             </div>
        //         </button>
        //     </div>
        // );
        return (
            <div className="col-sm-6 mb-2 mt-2">
                <button className="card" onClick={() => this.clicked(this.props.pronoun)}>
                    <div className="card-body">
                        <h4 className="card-title text-left">
                            <i className="fas fa-play"></i>
                            {this.props.title}
                        </h4>
                        <p className="card-text text-left">
                            {this.props.description}
                        </p>
                    </div>
                </button>
            </div>
        );
    }
    clicked = (pronoun) => {
        let ssu = new SpeechSynthesisUtterance();
        ssu.text = this.type.type + pronoun;
        speechSynthesis.speak(ssu);
    }
}
