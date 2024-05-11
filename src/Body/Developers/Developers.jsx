import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Developers.module.css';
const Developers = () => {
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        const fetchDevelopers = async () => {
        try {
            const response = await axios.get('http://localhost:5036/api/Developers');
            setDevelopers(response.data.$values);
        } catch (error) {
            console.error('Error fetching developers data:', error);
        }
        };

        fetchDevelopers();
    }, []);

    const handlePermissionChange = async (developerId, havePermission) => {
        try {
            await axios.put(`http://localhost:5036/api/Admins/${developerId}/permission?havePermission=${havePermission}`);
            // Обновляем состояние developers после успешного изменения
            setDevelopers(prevDevelopers => prevDevelopers.map(developer => {
                if (developer.id === developerId) {
                    return { ...developer, havepermission: havePermission }; // Обновляем поле havepermission
                }
                return developer;
            }));
        } catch (error) {
            console.error('Error updating permission:', error);
        }
    };

    return (
        <div className={style.developersList}>    
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.th}>Nickname</th>
                        <th className={style.th}>First Name</th>
                        <th className={style.th}>Sure Name</th>
                        <th className={style.th}>Have Permission</th>
                    </tr>
                </thead>
                <tbody>
                    {developers.map(developer => (
                        <tr key={developer.id}>
                            <td className={style.td}>{developer.nickname}</td>
                            <td className={style.td}>{developer.firstname}</td>
                            <td className={style.td}>{developer.surename}</td>
                            <td className={style.td}>
                                <select value={developer.havepermission} onChange={(e) => handlePermissionChange(developer.id, e.target.value)} >
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Developers;