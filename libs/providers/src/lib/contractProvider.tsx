import { getMainnetSdk, getTestnetSdk } from 'libs/blockchain';
import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';

export interface AppContextProps {
  children?: React.ReactNode;
}

export const ContractContext = React.createContext<{ sdk?: ReturnType<typeof getTestnetSdk> } | undefined>(undefined);


export function ContractProvider({ children }: AppContextProps) {
  const { provider } = useAuth();
  const [sdk, setSdk] = useState<ReturnType<typeof getTestnetSdk> | undefined>();

  useEffect(() => {
    console.log('provider',provider)

    if (!provider) {
      return;
    }
    const sdk1 =process.env['NEXT_PUBLIC_BLOCKCHAIN_NETWORK'] === 'mainnet'
    ? getMainnetSdk(provider?.getSigner())
    :getTestnetSdk(provider?.getSigner())
    setSdk(sdk1);
  }, [provider]);

  return (
    <ContractContext.Provider
      value={{
        sdk,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
}

export function useContract() {
  const context = useContext(ContractContext);
  if (!context) {
    throw new Error('You must use ContractProvider in order to consume this context');
  }
  return context;
}
