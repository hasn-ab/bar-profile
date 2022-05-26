import React from 'react';
import FriendProfileProvider from './Provider';
import FriendProfileUI from './UI';

export default function FriendProfile() {
  return (
    <FriendProfileProvider>
      <FriendProfileUI />
    </FriendProfileProvider>
  );
}
