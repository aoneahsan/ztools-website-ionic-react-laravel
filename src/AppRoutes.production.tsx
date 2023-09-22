// Core Imports
import React from 'react';

// Packages Imports
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

// Custom Imports
import Home from '@/pages/Home';
import ZaionsReactArea from '@/Testing/ReactArea';
import Login from '@/pages/Login';
import TestingReactTable from '@/Testing/ReactTable';

// Routes
import ZaionsRoutes from './utils/constants/RoutesConstants';
import ZLinks from '@/pages/AdminPanel/ZLinks';
import ChartsExamples from '@/Testing/Charts';
import ZProfile from '@/pages/AdminPanel/ZProfile';
import SignUp from '@/pages/SignUp';
import ZaionsPasswordResetConfirm from '@/pages/ResetPassword/PasswordResetConfirmForm';
import GoogleMapsCapacitorPackageTest from '@/Testing/GoogleMaps';
import TestingTabs from '@/Testing/TestingTabs';
import { ENVS } from '@/utils/envKeys';

// Functional Component
const ProductionAppRoutes: React.FC = () => {
	return (
		<IonReactRouter>
			<IonRouterOutlet>
				{/* Generic Routes */}
				<Route exact path={ZaionsRoutes.HomeRoute} component={Home} />

				<Route exact path={ZaionsRoutes.LoginRoute} component={Login} />
				<Route exact path={ZaionsRoutes.SignUpRoute} component={SignUp} />
				<Route
					exact
					path={ZaionsRoutes.PasswordResetEmailForm}
					component={ZaionsPasswordResetConfirm}
				/>

				{/* Admin Panel Pages */}
				{ENVS.isProduction && (
					<>

						<Route
							path={ZaionsRoutes.AdminPanel.ZaionsDashboard.ZLinks}
							component={ZLinks}
						/>

						<Route
							path={ZaionsRoutes.AdminPanel.ZaionsDashboard.ZProfile}
							component={ZProfile}
						/>

						<Route
							path={ZaionsRoutes.Testing.ReactTable.Main}
							component={TestingReactTable}
						/>
						{/* Testing React area packages */}
						<Route
							path={ZaionsRoutes.Testing.ReactArea.Main}
							component={ZaionsReactArea}
						/>
						{/* Testing React area packages */}
						<Route
							path={ZaionsRoutes.Testing.ReactCharts.Main}
							component={ChartsExamples}
						/>
						{/* Testing Google Maps */}
						<Route
							path={ZaionsRoutes.Testing.GOOGLE_MAP.Main}
							component={GoogleMapsCapacitorPackageTest}
						/>
						{/* Testing Tabs - From now on, we will add all testing pages in this one page so disabling all testing pages will be easy and more manageable. */}
						<Route
							path={ZaionsRoutes.Testing.TestingTabs.Main}
							component={TestingTabs}
						/>
					</>
				)}
			</IonRouterOutlet>
		</IonReactRouter>
	);
};

export default ProductionAppRoutes;
