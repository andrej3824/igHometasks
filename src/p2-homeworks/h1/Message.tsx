import React from 'react'

export type MessagePropsType = {
    avatar: any
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
            <div className={'message'}>
                <h2>{props.avatar}</h2>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
        </div>
    )
}


