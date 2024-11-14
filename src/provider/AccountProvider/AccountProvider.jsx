import React, { useEffect } from 'react';
import AccountContext from './AccountContext';
import { ethers } from 'ethers'; // Asegúrate de importar ethers

const AccountProvider = ({ children }) => {
    const [account, setAccount] = React.useState(() => {
        return localStorage.getItem('account') ? localStorage.getItem('account') : null;
    });
    const [web3provider, setWeb3Provider] = React.useState(null);
    const [contract, setContract] = React.useState(null);
    const [isConnected, setIsConnected] = React.useState(false);

    useEffect(() => {
        if (account) {
            localStorage.setItem('account', account);
            
            // Recrear el proveedor web3 al recargar la página
            if (!web3provider) {
                try {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    setWeb3Provider(provider);
                    setIsConnected(true);
                } catch (error) {
                    console.error('Error recreando el proveedor:', error);
                }
            }
        } else {
            setIsConnected(false);
            setAccount(null);
            setWeb3Provider(null);
            localStorage.removeItem('account');
        }
    }, [account]);

    return (
        <AccountContext.Provider value={{
            account,
            web3provider,
            contract,
            setAccount,
            setWeb3Provider,
            setContract,
            isConnected
        }}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountProvider;

