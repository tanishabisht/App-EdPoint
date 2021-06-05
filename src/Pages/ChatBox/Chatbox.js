import { useState, useRef } from 'react'
import { auth, firestore, db } from '../../Config/firebaseConfig'
import './Chatbox.scss'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

// import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'



function ChatMessage(props) {
    const { user, body, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'flex-row-reverse' : 'flex-row';
    const messageBodyClass = uid === auth.currentUser.uid ? 'sent-message-bg text-right' : 'received-message-bg';
    const imageClass = uid === auth.currentUser.uid ? 'ml-2' : 'mr-2';

    return (
        <div className={`px-3 py-2 flex no-wrap items-start ${messageClass}`}>
<div>
  <img className={`block rounded-full object-cover w-10 ${imageClass}`} src={photoURL || 'https://i.imgur.com/rFbS5ms.png'} alt="{user}'s pfp" />
</div>
<div className={`block w-80 break-words p-2 rounded-md ${messageBodyClass}`}>
  <p className="text-xs">{user}</p>
  <p>{body}</p>
</div>
</div>
    )
}





function ChatRoom() {

    const [formValue, setFormValue] = useState('')
    // we will use this to scroll to bottom of chat on page-reload and after sending a message
    const dummy = useRef();
    // const scrollToBottom = () => {
    //   dummy.current.scrollIntoView({ behavior: 'smooth' })
    // }
  
    // getting the message and sorting them by time of creation
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25)
  
    const [messages] = useCollectionData(query, {idField: 'id'})


    
    const sendMessage = async (e) => {
        e.preventDefault()

        // gets name, userID and pfp of logged in user
        console.log(auth.currentUser)
        const { email, uid, photoURL } = auth.currentUser

        const dbRef = db.ref()
        const snapshot = await dbRef.child("userdata").child(uid).get().catch(err => console.log(err))
        const username = snapshot.val().name

        await messagesRef.add({
            user: username,
            email:email,
            body: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: uid,
            photoURL: photoURL
        })

        // resetting form value and scrolling to bottom
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

  
    return (
        
  <div className="chat-bg w-full sm:w-2/3 p-2 rounded">
  <div className="overflow-y-auto h-screen-90">
    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    <span ref={dummy}></span>
  </div>

  <form onSubmit={sendMessage} className="pt-3 w-full inline-flex">
    <input className="rounded-3xl px-3 w-full py-1 outline-none focus:shadow" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something" />
    <button className={`material-icons p-2 mx-2 bg-white rounded-full transition-all duration-75 ease-in-out text-xl ${!formValue || 'text-pink-700 hover:text-pink-900'}`} type="submit" disabled={!formValue}>send</button>
  </form>
</div>
    )
  }


  
export default ChatRoom




// <div>
// <div>
//   {/* we will loop over the message and return a ChatMessage component for each message */}
//   {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
//   <span ref={dummy}></span>
// </div>

// {/* Form to type and submit messages */}
// <form onSubmit={sendMessage}>
//   <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something" />
//   <button type="submit" disabled={!formValue}>send</button>
// </form>
// </div>




// <div>
// <div>
//     <img src={photoURL || 'https://i.imgur.com/rFbS5ms.png'} alt="{user}'s pfp" />
// </div>
// <div>
//     <p>{user}</p>
//     <p>{body}</p>
// </div>
// </div>




// const dbRef = db.ref()
// dbRef.child("userdata").child(uid).get()
//     .then(snapshot => {
//         if(snapshot.exists()){
//             const data = snapshot.val()
//             username = data.name
//         }
//         else console.log('user does not exist')
//     })
//     .catch(err => console.log(err))