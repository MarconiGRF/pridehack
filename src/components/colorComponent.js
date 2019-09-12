import React from "react"

class ColorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        };
    }

    render() {
        return(
            <div className="slanteDivRed">
            </div>
        )
    }
 
}

export default ColorComponent