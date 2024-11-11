import React, { useEffect } from 'react';
import AccountContext from './AccountContext';

const AccountProvider = ({ children }) => {
    const [account, setAccount] = React.useState(null);

    useEffect(() => {
        console.log(account);
    }, [account]);
    
    return (
        <AccountContext.Provider value={{
            account,
            setAccount
        }}
        >
            {children}
        </AccountContext.Provider>
    )
};

export default AccountProvider;
