import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{background: "red"}}>

                <button onClick={() => {
                    // console.log("子组件通知父组件调用函数", this.props.event)
                    {
                        /*3.子组件可以在合适的时候调用该函数并将数据传递回父组件。*/
                    }
                    this.props.event(1111, "stonebridge")
                }}>click
                </button>
                <span>navbar</span>
            </div>
        );
    }
}
