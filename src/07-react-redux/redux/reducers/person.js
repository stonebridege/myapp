import {ADD_PERSON} from "../constant";
//初始化人的列表
const iniState = []
export default function personReducer(preState = iniState, action) {
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]//添加一个人
        default:
            return preState
    }
}