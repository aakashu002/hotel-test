import React, { Component } from 'react'


 class Resturent extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const {item} = this.props.location.state;
        console.log("rest rend...", item);
        return (
            <div>
                {item.name}
            </div>
        )
    }
}

export default Resturent
