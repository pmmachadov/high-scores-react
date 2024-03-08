// src/types/propTypes.js
import PropTypes from 'prop-types';

export const playerScoreType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

export const highScoreTableType = PropTypes.shape({
    country: PropTypes.shape({
        name: PropTypes.string.isRequired,
        scores: PropTypes.arrayOf(playerScoreType).isRequired,
    }).isRequired,
    ascending: PropTypes.bool.isRequired,
});
