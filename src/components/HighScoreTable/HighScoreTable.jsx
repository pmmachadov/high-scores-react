import React from 'react';
import { highScoreTableType } from '../../utils/PropTypes';
import PlayerScore from '../PlayerScore/PlayerScore';
import styles from './HighScoreTable.module.css';

const HighScoreTable = ({ country, ascending }) => {
    const sortedScores = country.scores.sort((a, b) => ascending ? a.s - b.s : b.s - a.s);

    return (
        <table className={ styles.highScoreTable }>
            <caption>{ country.name }</caption>
            <tbody>
                { sortedScores.map((score) => (
                    <PlayerScore key={ score.n } name={ score.n } score={ score.s } />
                )) }
            </tbody>
        </table>
    );
};

HighScoreTable.propTypes = highScoreTableType;



export default HighScoreTable;
