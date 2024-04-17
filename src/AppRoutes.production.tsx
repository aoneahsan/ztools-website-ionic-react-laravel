// Core Imports
import React from 'react';

// Packages Imports
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

// Custom Imports
import Home from '@/pages/Home';
import Login from '@/pages/Login';

// Routes
import ZaionsRoutes from './utils/constants/RoutesConstants';
import ZLinks from '@/pages/AdminPanel/ZLinks';
import ZProfile from '@/pages/AdminPanel/ZProfile';
import SignUp from '@/pages/SignUp';
import ZaionsPasswordResetConfirm from '@/pages/ResetPassword/PasswordResetConfirmForm';
import { ENVS } from '@/utils/envKeys';

// Functional Component
const ProductionAppRoutes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Generic Routes */}
        <Route
          exact
          path={ZaionsRoutes.HomeRoute}
          component={Home}
        />

        <Route
          exact
          path={ZaionsRoutes.LoginRoute}
          component={Login}
        />
        <Route
          exact
          path={ZaionsRoutes.SignUpRoute}
          component={SignUp}
        />
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
          </>
        )}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default ProductionAppRoutes;
