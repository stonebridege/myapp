import React, {Component} from 'react'

class Box extends Component {

    /**
     * @param nextProps :最新的 props，老属性来自this.props
     * @param nextState :最新的 state，老状态来自this.state
     * @param nextContext
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        /**
         * 如果：this.props.index === this.props.current 成立
         *      说明该组件的序号和原先被选择的组件序号相同或者首次渲染时，此时可能已经选别的组件了，因此需要后续diff比较和重新渲染。
         * 如果：this.props.index === nextProps.current 成立
         *      说明该组件的序号和新选择的组件序号相同，说明该组件被新选中，需要重新渲染。
         */
        if (this.props.index === this.props.current || this.props.index === nextProps.current) {
            console.log("在shouldComponentUpdate函数中的判断结果：true");
            return true
        } else {
            console.log("在shouldComponentUpdate函数中的判断结果：false");
            return false
        }
    }

    /**
     * 在render中进行this.props.index === this.props.current的判断；
     * 此时的this.props.current不是shouldComponentUpdate中的this.props.current，而是nextProps.current，即组件中props中真正的current
     * @returns {JSX.Element}
     */
    render() {
        return <div style={{
            width: "100px",
            height: "100px",
            border: this.props.index === this.props.current ? '1px solid red' : '1px solid gray',
            margin: "10px",
            float: 'left'
        }}>
        </div>
    }
}



export default class App extends Component {
    state = {
        list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
        current: 0
    }

    render() {
        return (
            <div>
                <input type="number" onChange={(evt) => {
                    console.log(evt.target.value)
                    this.setState({
                        current: Number(evt.target.value)
                    })
                }} value={this.state.current}/>

                <div style={{overflow: "hidden"}}>
                    {
                        this.state.list.map((item, index) =>
                            <Box key={item} current={this.state.current} index={index}/>
                        )
                    }
                </div>
            </div>
        )
    }
}
