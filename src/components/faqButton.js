import React from "react"
import OpenerIcon from "./openerIcon"

class FaqButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            number: props.number,
            active: props.active,
            p: props.p,
            display: "block",
            mh: "0px"
        };
    }

    toggle() {
        this.setState((active) => {
            if(this.state.active){
                return {
                    active: !this.state.active,
                    mh: "0px"
                }
            }
            else{
                return {
                    active: !this.state.active,
                    mh: "500px"
                }
            }
        })
    }

    componentDidMount() { 
        const paragraphElement = this.refs.paragraph;
    }

    componentDidUpdate(prevProps, prevState) {
        this.render()
    }

    render() {
        const styleManager = {
            pDivStyle: {
                maxHeight: this.state.mh,
                display: this.state.display
            }
        };
        return (
            <div>
                <button className="accordion" onClick={this.toggle.bind(this)}>Pergunta {this.state.number} <OpenerIcon color={this.state.color} /></button>
                <div className="panel" style={styleManager.pDivStyle} ref="paragraph">
                    <p>{this.state.p}</p>
                </div>
            </div>
        )
    }
}

export default FaqButton