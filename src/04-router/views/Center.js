import React from 'react'

export default function Center(props) {
    return (
        <div>
            center
            <div onClick={() => {
                props.history.push(`/filmsorder`)
            }}>电影订单</div>
        </div>
    )
}
