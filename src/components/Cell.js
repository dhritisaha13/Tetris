import React from 'react';
import { StyledCell } from './styles/StyledCell.js';
import { TETROMINOS } from '../tetrominos.js';

const Cell = ({ type }) => (
	<StyledCell type = {type} color = {TETROMINOS[type].color}>
		{console.log('rerender cell')}
	</StyledCell>	
);

export default React.memo(Cell);