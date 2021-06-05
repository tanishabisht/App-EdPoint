import { db, auth } from './firebaseConfig'

// returns user uid of the current user
// export const getUid = async () => {
//     return userId
// }

// returns current user data from the db
export const getUserData = async () => {
    const user = auth.currentUser
    if(user){
        const dbRef = db.ref()
        const res = await dbRef.child("userdata").child(user.uid).get()
        if(res.exists()) return await res.val()
        return 'data does not exist'
    }
    else return 'User does not exist'
}