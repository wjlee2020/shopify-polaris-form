import React, { useContext } from 'react';
import { UserContext } from '../../context/user-context';
import SaveBar from './SaveBar';
import UserForm from './UserForm';

export default function UserInfoForm() {
    const { isEditing } = useContext(UserContext)
    return (
        <>
            {isEditing ? (
                <SaveBar />
                
            ) : null }
            <UserForm />
        </>
    )
}