import React, { useState } from 'react';
import {
    TopBar,
    Frame,
    Navigation
} from '@shopify/polaris'

export default function TopHeaderBar({children}) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchFieldChange = value => {
      setSearchValue(value)
      console.log('this is just a dummy search field')
    }

    const searchFieldMarkup = (
        <TopBar.SearchField
          onChange={handleSearchFieldChange}
          value={searchValue}
          placeholder="Search"
        />
      );

      const topBarMarkup = (
        <TopBar
          searchField={searchFieldMarkup}
        />
      );
      const navigatorMarkup = (
        <Navigation location="/user">
            <Navigation.Section
              items={[
                {
                  url: '/',
                  label: 'Home',
                  selected: false
                },
               {
                 url: '/user-info',
                 label: 'User',
                 selected: true
               }
              ]}
            />
        </Navigation>
      )

    return (
        <Frame
          
          topBar={topBarMarkup}
          navigation={navigatorMarkup}
        >
            {children}
        </Frame>
    )
}