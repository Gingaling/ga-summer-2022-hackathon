import React from 'react';

function ToggleTabs() {
	const x = document.getElementById('myShareDIV');
    const y = document.getElementById('myRespondDIV');
    y.style.display = 'none';
	
    if (x.style.display === 'none') {
		x.style.display = 'block';
        y.style.display = 'none';
	} else {
		x.style.display = 'none';
        y.style.display = 'block';
	}
}

export default ToggleTabs