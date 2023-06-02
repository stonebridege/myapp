import React, {useEffect} from 'react'

export default function Detail(props) {
    console.log(props.match.params.myid, "利用id去后端拿数据。")

    useEffect(() => {

        return () => {
            console.log("destroy")
        }
    }, [])

    return (
        <div>
            deteail
        </div>
    )
}
