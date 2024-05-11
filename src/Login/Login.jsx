import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom'
const Login = () => {
    const [nickname, setNickname] = useState('');
    const [passwd, setPasswd] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.get('http://localhost:5036/api/Admins');
            if (response.data && response.data.$values && response.data.$values.length > 0) {
                for (const key in response.data.$values) {
                    if (key.nickname === nickname && key.passwd === passwd) {
                        setIsAuthenticated(true);
                        navigate('/panel');
                    }
                }
            } else {
                alert('Ошибка входа. Проверьте правильность введенных данных.');
            }
    
        } catch (error) {
            console.error('Ошибка входа:', error);
        }
    };

    return (
        <div>
            <h2>Войти</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Nickname:
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </label>
                <br />
                <label>
                    Passwd:
                    <input type="password" value={passwd} onChange={(e) => setPasswd(e.target.value)} />
                </label>
                <br />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;