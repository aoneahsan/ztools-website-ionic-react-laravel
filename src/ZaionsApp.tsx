// Core Import
import React, { useEffect } from 'react';

// Packages Imports
import { IonApp } from '@ionic/react';
import { ToastContainer } from 'react-toastify';

// Custom Imports
import AppRoutes from './AppRoutes';

// helpers

// global constants

// Recoil State

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
	return (
		<IonApp>
			<AppRoutes />
			<ToastContainer />
		</IonApp>
	);
};

export default App;
