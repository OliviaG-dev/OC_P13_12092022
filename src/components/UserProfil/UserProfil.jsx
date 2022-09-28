import "./UserProfil.css"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserProfile, updateUserProfile } from '../../utils/services'
import { userSelector, displayUser, disableLoader } from '../../features/userSlice'

const UserProfil = () => {
    const [editForm, setEditForm] = useState(false)
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    
    const dispatch = useDispatch()

    const user = useSelector(userSelector)
    const token = user.token


    useEffect(() => {
        getUserProfile({ token: token }).then((res) => {
            const firstName = res.firstName
            const lastName = res.lastName
            dispatch(displayUser({ firstName, lastName }))
            dispatch(disableLoader())
        })
    },)

    const handleEdit = () => {
        setEditForm(!editForm)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUserProfile({
            token: token,
            firstName: newFirstName,
            lastName: newLastName,
        }).then(() => {
            getUserProfile({ token: token }).then((res) => {
                const firstName = res.firstName
                const lastName = res.lastName
                dispatch(displayUser({firstName, lastName}))
                dispatch(disableLoader())
                handleEdit();
            })
        })
    }

    const handleCancel = () => {
        setEditForm(!editForm)
    }

    return(
    <div className="userProfil">
        {user.isLoading && (
            <p>Loading ...</p>
        )}
        {!user.isLoading && (
            <h2>Welcome back <br /> {user.firstName} {user.lastName}</h2>
        )}
        {!editForm && (
            <button className="userProfil__button" onClick={handleEdit}>Edit Name</button>
        )}
        {editForm && (
            <div className="userProfil__form">
                <div className="userProfil__wrapper">
                    <input  type="text"
                            id="firstName"
                            value={newFirstName}
                            placeholder={user.firstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                            required>
                    </input>
                    <input  type="text"
                            id="lastName"
                            value={newLastName}
                            placeholder={user.lastName}
                            onChange={(e) => setNewLastName(e.target.value)}
                            required>
                    </input>
                </div>
                <div className="userProfil__form__button">
                    <button className="button__update" onClick={handleUpdate}>Update</button>
                    <button className="button__cancel" onClick={handleCancel}>Cancel</button>
                </div>

            </div>
        )}
    </div>
    )
}


export default UserProfil