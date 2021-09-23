import { ContextualSaveBar } from '@shopify/polaris';
import React, { useContext } from 'react';
import { UserContext } from '../../context/user-context';

export default function SaveBar() {
    const { handleSubmit, handleCancel } = useContext(UserContext)
    return (
        <ContextualSaveBar
            fullWidth
            message="Editing User Info"
            saveAction={{
                onAction: handleSubmit
              }}
              discardAction={{
                onAction: handleCancel,
              }}
        />
    )
}