// Core Imports
import React from 'react';

// Packages Imports
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

// Commented Routes

// Routes
import ZPercentageCalculator from './pages/PercentageCalculator';
import ZaionsRoutes from './utils/constants/RoutesConstants';

// Functional Component
const AppRoutes: React.FC = () => {
	return (
		<IonReactRouter>
			<IonRouterOutlet>
				{/* Generic Routes */}
				{/* <Route exact path={ZaionsRoutes.HomeRoute} component={Home} /> */}
				<Route
					exact
					path={ZaionsRoutes.HomeRoute}
					component={ZPercentageCalculator}
				/>
			</IonRouterOutlet>
		</IonReactRouter>
	);
};

export default AppRoutes;
