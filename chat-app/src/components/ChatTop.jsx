import React from 'react'

const ChatTop = (props) => {
  const { creds, chat } = props;
  console.log("creds : ", creds);
  console.log("chat : ", chat);
  if (!chat) return null
  const currentUser = chat.people.find(person => person.person.username === creds.userName);

  return (
    <div className='profile-display'>
      <div className='profile-title'>
        {creds.userName}
      </div>
      <div className='profile-image'>
        {currentUser && currentUser.person.avatar && (
          <img src={currentUser.person.avatar} alt='Profile' />
        )}
      </div>
    </div>
  )
}

export default ChatTop