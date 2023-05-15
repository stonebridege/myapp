import React, {Component} from 'react'

class Box extends Component {

    /**
     * @param nextProps :最新的 props，老属性来自this.props
     * @param nextState :最新的 state，老状态来自this.state
     * @param nextContext
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        /**
         * 如果：this.props.index === this.props.current 成立（该组件的序号和原先被选择的组件序号相同），说明此时可能已经选别的组件了，因此需要重新渲染
         * 如果：this.props.index === nextProps.current 成立（该组件的序号和新选择的组件序号相同），说明该组件被新选中，需要重新渲染。
         */
        if (this.props.index === this.props.current || this.props.index === nextProps.current) {
            return true
        } else {
            return false
        }
    }

    render() {
        console.log("render")
        return <div style={{
            width: "100px",
            height: "100px",
            border: this.props.current === this.props.index ? '1px solid red' : '1px solid gray',
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
