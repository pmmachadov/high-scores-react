import React from 'react';
import styles from './PlayerScore.module.css';
import { playerScoreType } from '../../utils/PropTypes';


const PlayerScore = ({ name, score }) => {
    return (
        <tr className={ styles.playerScore }>
            <td>{ name }</td>
            <td>{ score }</td>
        </tr>
    );
};

PlayerScore.propTypes = playerScoreType;



export default PlayerScore;
