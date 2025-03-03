// Core Imports
import React from 'react';

// Packages Imports
import { IonRouterOutlet, IonRoute } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
        <IonRoute
          exact
          path={ZaionsRoutes.HomeRoute}
          render={() => <Home />}
        />

        <IonRoute
          exact
          path={ZaionsRoutes.LoginRoute}
          render={() => <Login />}
        />
        <IonRoute
          exact
          path={ZaionsRoutes.SignUpRoute}
          render={() => <SignUp />}
        />
        <IonRoute
          exact
          path={ZaionsRoutes.PasswordResetEmailForm}
          render={() => <ZaionsPasswordResetConfirm />}
        />

        {/* Admin Panel Pages */}
        {ENVS.isProduction && (
          <>
            <IonRoute
              path={ZaionsRoutes.AdminPanel.ZaionsDashboard.ZLinks}
              render={() => <ZLinks />}
            />

            <IonRoute
              path={ZaionsRoutes.AdminPanel.ZaionsDashboard.ZProfile}
              render={() => <ZProfile />}
            />
          </>
        )}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default ProductionAppRoutes;
