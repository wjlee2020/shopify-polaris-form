import { ContextualSaveBar } from '@shopify/polaris';
import React, { useContext } from 'react';
import { UserContext } from '../../context/user-context';

export default function SaveBar() {
    const { handleSubmit, handleCancel, isLoading, message } = useContext(UserContext);

    return (
        <ContextualSaveBar
            fullWidth
            message={message}
            saveAction={{
                onAction: handleSubmit,
                loading: isLoading
              }}
              discardAction={{
                onAction: handleCancel,
              }}
        />
    )
}