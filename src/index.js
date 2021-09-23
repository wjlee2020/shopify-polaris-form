import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/dist/styles.css';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import { App } from './App';
import { UserContextProvider } from './context/user-context';

function WrappedApp() {
  return (
    <div style={{maxWidth: "1200px", margin: '4rem auto 0'}}>
      <AppProvider theme={{
        logo: {
          width: 124,
          contextualSaveBarSource:
            'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
          topBarSource: 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999'
        },
      }}
      i18n={ enTranslations,{
        Polaris: {
          ContextualSaveBar: {
            save: 'Save',
            discard: 'Discard',
          },
        },
      }}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </AppProvider>

    </div>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
