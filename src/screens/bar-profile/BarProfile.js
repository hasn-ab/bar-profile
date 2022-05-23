import React from 'react';
import BarProfileProvider from './Provider';
import BarProfileUI from './UI';

export default function BarProfile() {
  return (
    <BarProfileProvider>
      <BarProfileUI />
    </BarProfileProvider>
  );
}
