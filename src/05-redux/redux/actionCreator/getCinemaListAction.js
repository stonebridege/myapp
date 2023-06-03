import axios from "axios";

function getCinemaListAction() {
    return (dispath) => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=6939037",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16821403713477519055454209"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            // console.log(res.data.data.cinemas)
            dispath({
                type: "change-list",
                payload: res.data.data.cinemas
            })
        })
    }
}

export default getCinemaListAction