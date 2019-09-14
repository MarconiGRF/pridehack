import React from "react"

class ColorComponentOrange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="slanteDivContainer slanteDivOrangeContainer">
                <div className="slanteDivOrange" style={{ backgroundColor: this.state.color }}>
                </div>
            </div>
            
        )
    }
 
}

export default ColorComponentOrange