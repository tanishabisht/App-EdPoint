import { useState, useEffect, useRef } from 'react'


let usersVAR = [
    { name: "Leonard Rogers", email: "egestas@justonecante.org" },
    { name: "Walker Pace", email: "erat.eget.tincidunt@idsapienCras.org" },
    { name: "Lance Mcintyre", email: "Nam.ligula@quamvel.net" },
    { name: "Rudyard Conway", email: "sit@nunc.org" },
    { name: "Chadwick Oneal", email: "laoreet@dictum.edu" },
    { name: "Isaiah Kent", email: "diam.dictum@lobortisquam.co.uk" },
    { name: "Griffith Perkins", email: "congue@acfermentumvel.ca" },
    { name: "Lawrence Wheeler", email: "ac.libero@Duisac.org" },
    { name: "Preston Walker", email: "egestas.rhoncus@eudui.co.uk" },
    { name: "Simon Brewer", email: "nunc.sed@Fuscediamnunc.co.uk" }
]


const SearchComp = () => {
    const [searchString, setSearchString] = useState('')
    const [users, setUsers] = useState(usersVAR)
    const searchRef = useRef('')

    useEffect(() => {
        searchRef.current.focus()
    }, [])
    
    const handleChange = () => {
        setSearchString(searchRef.value)
    }
    
    if (searchString.length > 0) {
        const searchVal = searchString.trim().toLowerCase()
        const userVar = users.filter(user =>  user.name.toLowerCase().match(searchVal))
        setUsers(userVar)
    }

    return (
        <div>
            <h3>React - simple search</h3>
            <div>
                <input
                    type="text"
                    value={searchString}
                    ref={searchRef}
                    onChange={handleChange}
                    placeholder="type name here"
                />
                <ul>
                {users.map(l => {
                    return (
                    <li>{l.name} <a href="#">{l.email}</a></li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}


export default SearchComp


