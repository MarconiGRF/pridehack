import React from "react"

class ColorComponentPurple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="slanteDivPurple" style={{ backgroundColor: this.state.color }}>
            </div>
            
        )
    }
 
}

export default ColorComponentPurple