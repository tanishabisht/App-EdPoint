import { useState, useEffect, useRef } from 'react'
import { auth, firestore, db } from '../../Config/firebaseConfig'
import { Layout } from '../../Components'
import ChatMessage from './ChatMessage'
import './Chatbox.scss'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import { useCollectionData } from 'react-firebase-hooks/firestore'




const ChatRoom = () => {

    // State to store user data
    const [userData, setUserData] = useState('')

    // message entered by the user
    const [mssgVal, setMssgVal] = useState('')

    // we will use this to scroll to bottom of chat on page-reload and after sending a message
    const dummy = useRef()

    // getting the message and sorting them by time of creation
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25)  
    const [messages] = useCollectionData(query, {idField: 'id'})



    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                const dbRef = db.ref()
                dbRef.child("userdata").child(user.uid).get()
                .then(res => {
                    if(res.exists()) setUserData(res.val())
                    else console.log("No user data available")
                }).catch(err => console.log(err))
            }
        })
    }, [])


    
    const sendMessage = async (e) => {
        // to not refresh after sending message
        e.preventDefault()

        // gets name, userID and pfp of logged in user
        const { email, uid } = auth.currentUser

        // to get user's name
        const dbRef = db.ref()
        const snapshot = await dbRef.child("userdata").child(uid).get().catch(err => console.log(err))
        const userName = snapshot.val().name

        // adding data to the message ref
        await messagesRef.add({
            user:userName,
            email:email,
            body:mssgVal,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid:uid
        })

        // resetting form value and scrolling to bottom
        setMssgVal('')
        dummy.current.scrollIntoView({ behavior: 'smooth' })
    }


  
    return (
        <Layout userData={userData}>
            <div className="w-full p-3">
                <div className="overflow-y-auto noScrollBar h-screen-90">
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                    <span ref={dummy}></span>
                </div>
                <form onSubmit={sendMessage} className="pt-3 w-full inline-flex">
                    <input className="border-2 rounded-3xl px-3 w-full py-1 outline-none focus:shadow" value={mssgVal} onChange={(e) => setMssgVal(e.target.value)} placeholder="Say something" />
                    <button className={`material-icons border-2 p-2 px-4 mx-2 bg-white rounded-full transition-all duration-75 ease-in-out text-xl ${!mssgVal || 'text-pink-700 hover:text-pink-900'}`} type="submit" disabled={!mssgVal}>send</button>
                </form>
            </div>
        </Layout>
    )
}

  
export default ChatRoom