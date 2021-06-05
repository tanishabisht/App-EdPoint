import './Chatbox.scss'
import { auth } from '../../Config/firebaseConfig'


const ChatMessage = props => {
    const { user, body, uid } = props.message
    const initial = user ? user[0].toUpperCase() : 'N'

    const messageClass = uid === auth.currentUser.uid ? 'flex-row-reverse' : 'flex-row'
    const messageBodyClass = uid === auth.currentUser.uid ? 'sent-message-bg text-right' : 'received-message-bg'
    const imageClass = uid === auth.currentUser.uid ? 'ml-2' : 'mr-2'

    return (
        <div className={`px-3 py-2 flex no-wrap items-start ${messageClass}`}>
            <div>
                <span className={`initial block rounded-full object-cover w-10 ${imageClass}`}>{initial}</span>
                
            </div>
            <div className={`block w-80 break-words p-2 rounded-md ${messageBodyClass}`}>
                <p className="text-xs">{user}</p>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default ChatMessage