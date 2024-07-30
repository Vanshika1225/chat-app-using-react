import React from 'react'

const TheirMessage = ({ lastMessage, message }) => {

  const ifIsFirstMessagebyUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className='message-row'>
      {ifIsFirstMessagebyUser && (
        <div className='message-avatar'
        style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />

      )}

      {
        message.attachments && message.attachments.length > 0
          ?
          (
            <img src={message.attachments[0].file}
              alt='attachments'
              className='message-avatar'
              styles={{ marginLeft: ifIsFirstMessagebyUser ? '48px' : '4px' }}
            />
          )
          :
          (
            <div className='message' style={{ float: 'left', backgroundColor: "#CABCDC", marginLeft: ifIsFirstMessagebyUser ? '4px' : '48px' }}>
              {message.text}
            </div>
          )
      }
    </div>
  )
}

export default TheirMessage