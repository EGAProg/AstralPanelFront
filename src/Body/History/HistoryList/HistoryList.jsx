import React from 'react';
import style from './HistoryList.module.css'
const HistoryList = ({ histories }) => {
  return (
    <div className={style.historyList}>
        <table className={style.table}>
            <thead>
            <tr>
                <th className={style.th}>Developer</th>
                <th className={style.th}>Job Name</th>
                <th className={style.th}>Build Time</th>
                <th className={style.th}>Status</th>
            </tr>
            </thead>
            <tbody>
            {histories.map(history => (
                <tr key={history.$id}>
                <td className={style.td}>{`${history.developerFirstName} ${history.developerSurname} ${history.developerFatherName}`}</td>
                <td className={style.td}>{history.jobName}</td>
                <td className={style.td}>{new Date(history.buildTime).toLocaleDateString()}</td>
                <td className={style.td}>{history.statusName}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default HistoryList;