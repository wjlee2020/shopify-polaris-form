import React from 'react';
import { 
  Layout, 
  Page,
  FooterHelp,
  Link
} from '@shopify/polaris';

import UserInfoForm from './components/user';
import TopHeaderBar from './components/header/TopHeaderBar';


export function App() {

  return (
    
      <TopHeaderBar>
        <Page title="Account Details">
          <Layout>
            <Layout.AnnotatedSection
              title="User Information"
              description={`
                *You can always update your information whenever you'd like.
                When you are filling out the form, don't forget to fill in all the required inputs.
                You can decide to discard while editing, and you won't lose your previous data.
              `}
            >
                <UserInfoForm />
                <FooterHelp>
                  For more details on Lunaris, visit our{' '}
                  <Link url="https://teamlunaris.com/">web site</Link>.
                </FooterHelp>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      </TopHeaderBar>
  );
}

