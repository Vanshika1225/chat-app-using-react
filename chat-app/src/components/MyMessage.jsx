import React from 'react'

const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img src={message.attachments[0].file}
                alt="image attachment"
                className='message-image'
                style={{ float: "right" }}
            />
        )
    }
    return (
        <div className='message' style={{ float: 'righ', margin: "18px", color: "white", backgroundColr: "#3B2A50" }}>
            {message.text}
        </div>
    )
}

export default MyMessage