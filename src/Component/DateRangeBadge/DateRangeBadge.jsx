import React from 'react';
import { format } from 'date-fns';
import './DateRangeBadge.css'; // Fichier CSS séparé pour les styles

const DateRangeBadge = ({ startDate, endDate }) => {
	// Formater les dates en fonction du format souhaité
	const formattedStartDate = format(new Date(startDate), "MMM d");
	const formattedEndDate = format(new Date(endDate), "MMM d");

	return (
		<div className="date-badge">
			{formattedStartDate} - {formattedEndDate}
		</div>
	);
};

export default DateRangeBadge;