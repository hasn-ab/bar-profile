import React from 'react';
import {FriendProfileContext} from './context';

export default function FriendProfileProvider({children}) {
  return (
    <FriendProfileContext.Provider value={null}>
      {children}
    </FriendProfileContext.Provider>
  );
}
