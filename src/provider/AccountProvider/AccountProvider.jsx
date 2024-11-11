import React, { useEffect } from 'react';
import AccountContext from './AccountContext';

const AccountProvider = ({ children }) => {
    const [account, setAccount] = React.useState(null);
    const [web3provider, setWeb3Provider] = React.useState(null);
    const [contract, setContract] = React.useState(null);

    useEffect(() => {
        console.log(account);
    }, [account]);
    
    return (
        <AccountContext.Provider value={{
            account,
            web3provider,
            contract,
            setAccount,
            setWeb3Provider,
            setContract
        }}
        >
            {children}
        </AccountContext.Provider>
    )
};

export default AccountProvider;
