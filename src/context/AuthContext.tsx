import { useState, useEffect, ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from './authContext';

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/login');
    }, [navigate]);

    // logout after 10 minutes
    useEffect(() => {
        const timer = setTimeout(() => {
            if (isAuthenticated) {
                logout();
            }
        }, 1000 * 60 * 10)
        return () => clearTimeout(timer);
    }, [isAuthenticated, logout]);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}; 