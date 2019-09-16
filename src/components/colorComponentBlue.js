import React from "react"

class ColorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        };
    }

    render() {
        return (
            <div className="slanteDivContainer slanteDivAbsoluteFix">
                <div className="slanteDivBlue">
                </div>
            </div>
        )
    }

}

export default ColorComponent