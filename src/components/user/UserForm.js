import React, { useContext } from 'react';
import { 
    Card, 
    FormLayout, 
    TextField, 
    Select, 
    Form, 
    Button, 
    TextStyle
} from '@shopify/polaris';

import {UserContext} from '../../context/user-context';

export default function UserForm() {

    const {
            authUser,
            setAuthUser,
            isEditing,
            setIsEditing,
            error,
            handleFirstNameChange,
            handleLastNameChange,
            handleGenderChange,
            handleBirthdayChange,
            handleAddressChange,
            genderOptions
    } = useContext(UserContext)

    return (
        <Card sectioned>
            <Form onSubmit={() => console.log('click the save button')}>
                <FormLayout>
                    <FormLayout.Group>

                        <TextField 
                            disabled={!isEditing}
                            value={authUser.first_name}
                            label="First name"
                            placeholder="Enter your First Name"
                            onChange={handleFirstNameChange}
                            autoComplete="given-name"
                            error={!authUser.first_name ? 'required' : null }
                            />
                        <TextField 
                            disabled={!isEditing}
                            value={authUser.last_name}
                            label="Last name"
                            placeholder="Enter your Last Name"
                            onChange={handleLastNameChange}
                            autoComplete="family-name"
                            error={!authUser.last_name ? 'required' : null }
                            />
                        <Select
                            disabled={!isEditing}
                            label="Gender"
                            options={genderOptions}
                            onChange={handleGenderChange}
                            value={authUser.gender}
                            error={!authUser.gender ? 'required' : null }
                            />
                        <TextField
                            disabled={!isEditing}
                            value={authUser.address}
                            label="Address"
                            placeholder="City, Ward, Street"
                            autoComplete="address"
                            onChange={handleAddressChange}
                            error={!authUser.address ? 'required' : null }
                            />
                        <TextField
                            disabled={!isEditing}
                            value={authUser.birthday}
                            onFocus={() => setAuthUser({...authUser, birthday: ''})}
                            label="Birthday"
                            placeholder="YYYYMMDD"
                            autoComplete="birthday"
                            onChange={handleBirthdayChange}
                            error={!authUser.birthday ? 'required' : null }
                            />
                    </FormLayout.Group>
                        <Button disabled={isEditing} primary onClick={() => setIsEditing(true)}>Edit</Button>
                        {error && <TextStyle variation="negative">{error}</TextStyle>}
                    
              </FormLayout>
        
            </Form>
          </Card>
    )
}