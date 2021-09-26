import { createContext, useState, useEffect } from "react";
import user from '../data/dummy';

const UserContext = createContext();

function UserContextProvider({children}) {
    const [authUser, setAuthUser] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('Editing Info')
    

    let invalid = !authUser.first_name || !authUser.last_name || !authUser.gender || !authUser.birthday || !authUser.address;

    useEffect(() => {
        let isCurrent = true;
        if(isCurrent) {
            setAuthUser(user);
            if(JSON.parse(localStorage.getItem('authUser'))) {
                setAuthUser(JSON.parse(localStorage.getItem('authUser')))
            }
        }
        else {
            localStorage.removeItem('authUser');
            setAuthUser(null);
        }
        return () => {
            isCurrent = false;
        }
    }, [])

    const handleFirstNameChange = value => {
        const firstName = value.charAt(0).toUpperCase() + value.slice(1);
        setAuthUser({...authUser, first_name: firstName});
    }
    const handleLastNameChange = value => {
        const lastName = value.charAt(0).toUpperCase() + value.slice(1);
        setAuthUser({...authUser, last_name: lastName});
    }
    const handleGenderChange = value => {
        setAuthUser({...authUser, gender: value});
    }
    const handleBirthdayChange = value => {
        const numOnly = /^[0-9\b]+$/;
        if(numOnly.test(value)) {
            let bday = value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
            setAuthUser({...authUser, birthday: bday});
        }
    }
    const handleAddressChange = value => {
        setAuthUser({...authUser, address: value});
    }

    const handleSubmit = () => {
        if(invalid) {
            console.log('fill in the form');
            setError('Please complete the form or cancel your edit');
        } else {
            localStorage.setItem('authUser', JSON.stringify(authUser));
            setAuthUser(JSON.parse(localStorage.getItem('authUser')));
            console.log(authUser)
            setIsLoading(true)
            setMessage('Edited!')
            setTimeout(() => {
                setIsLoading(false);
                setMessage('Editing Info')
                setIsEditing(false);
            }, 350)
        }
    }
    const handleCancel = () => {
        if(JSON.parse(localStorage.getItem('authUser'))) {
            setAuthUser(JSON.parse(localStorage.getItem('authUser')))
        } else {
            setAuthUser(user);
        }
        setIsEditing(false);
        setError(null)
    }

    const genderOptions = [
        {label: "Decline to Answer", value: "Decline to Answer"},
        {label: "Female", value: "Female"},
        {label: "Male", value: "Male"},
    ]

    return (
        <UserContext.Provider value={{
            authUser,
            setAuthUser,
            isEditing,
            setIsEditing,
            error,
            setError,
            invalid,
            handleFirstNameChange,
            handleLastNameChange,
            handleGenderChange,
            handleBirthdayChange,
            handleAddressChange,
            handleSubmit,
            handleCancel,
            genderOptions,
            isLoading,
            message
        }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserContextProvider}