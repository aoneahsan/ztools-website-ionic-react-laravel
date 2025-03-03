// Core Imports
import React from 'react';

// Packages Imports
import { IonRoute, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Commented Routes
import ZLinks from '@/pages/AdminPanel/ZLinks';
import ZProfile from '@/pages/AdminPanel/ZProfile';

// Routes
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import ZaionsRoutes from './utils/constants/RoutesConstants';
import SignUp from '@/pages/SignUp';
import ZaionsPasswordResetConfirm from '@/pages/ResetPassword/PasswordResetConfirmForm';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import ZWorkspaceListPage from './pages/AdminPanel/Workspaces';
import ZWorkspaceForm from './pages/AdminPanel/Workspaces/Form';
import ViewSingleWorkspace from './pages/AdminPanel/Workspaces/ViewSingle';
import ZAppStartupPage from './pages/AdminPanel/StartUpPage';
import ZPercentageCalculator from './pages/PercentageCalculator';
import ZWordCounter from './pages/WordCounter';
import ZCssSpecificityCalculator from './pages/CssSpecificityCaculator';
import ZPrivacyPolicy from './pages/PrivacyPolicy';
import ZTermsAndConditions from './pages/TermsAndConditions';
import ZAboutProduct from './pages/About/aboutProduct';
import ZAboutCompany from './pages/About/aboutCompany';
import ZLPGenerator from './pages/LPGenerator';

// Functional Component
const AppRoutes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Generic Routes */}
        {/* <IonRoute exact path={ZaionsRoutes.HomeRoute} render={() => <Home />} /> */}

        <IonRoute
          exact
          path={ZaionsRoutes.HomeRoute}
          render={() => <Home />}
        />

        <IonRoute
          exact
          path={ZaionsRoutes.wordCounter}
          render={() => <ZWordCounter />}
        />

        <IonRoute
          exact
          path={ZaionsRoutes.percentageCalculator}
          render={() => <ZPercentageCalculator />}
        />

        <IonRoute
          exact
          path={ZaionsRoutes.cssSpecificityCalculator}
          render={() => <ZCssSpecificityCalculator />}
        />

        <IonRoute
          exact
          path={ZaionsRoutes.loremIpsumGenerator}
          render={() => <ZLPGenerator />}
        />

        <IonRoute
          exact
          path={ZaionsRoutes.privacyPolicy}
          render={() => <ZPrivacyPolicy />}
        />

        <IonRoute
          exact
          path={ZaionsRoutes.termAndConditions}
          render={() => <ZTermsAndConditions />}
        />

        <IonRoute
          exact
          path={ZaionsRoutes.about}
          render={() => <ZAboutProduct />}
        />

        <IonRoute
          exact
          path={ZaionsRoutes.Company.about}
          render={() => <ZAboutCompany />}
        />

        {/* Public Routes */}
        <PublicRoute
          exact
          path={ZaionsRoutes.LoginRoute}
          Component={Login}
        />

        <PublicRoute
          exact
          path={ZaionsRoutes.SignUpRoute}
          Component={SignUp}
        />

        <PublicRoute
          exact
          path={ZaionsRoutes.PasswordResetEmailForm}
          Component={ZaionsPasswordResetConfirm}
        />

        <PrivateRoute
          exact
          path={ZaionsRoutes.AdminPanel.AppStartupPage}
          Component={ZAppStartupPage}
        />

        <PrivateRoute
          exact
          path={ZaionsRoutes.AdminPanel.Workspaces.Main}
          Component={ZWorkspaceListPage}
        />

        <PrivateRoute
          path={ZaionsRoutes.AdminPanel.Workspaces.Create}
          Component={ZWorkspaceForm}
        />

        <PrivateRoute
          exact
          path={ZaionsRoutes.AdminPanel.Workspaces.Edit}
          Component={ZWorkspaceForm}
        />

        <PrivateRoute
          exact
          path={ZaionsRoutes.AdminPanel.Workspaces.View}
          Component={ViewSingleWorkspace}
        />

        <PrivateRoute
          path={ZaionsRoutes.AdminPanel.ZaionsDashboard.ZLinks}
          Component={ZLinks}
        />

        <PrivateRoute
          path={ZaionsRoutes.AdminPanel.ZaionsDashboard.ZProfile}
          Component={ZProfile}
        />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
