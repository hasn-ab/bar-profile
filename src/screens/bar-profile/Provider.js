import React from 'react';
import {BarContext} from './context';

function BarProfileProvider({children}) {
  return <BarContext.Provider value={null}>{children}</BarContext.Provider>;
}

export default BarProfileProvider;
