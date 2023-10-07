// Core Imports
import React from "react";

// Packages Imports
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

// Commented Routes
import ZaionsReactArea from "@/Testing/ReactArea";
import TestingReactTable from "@/Testing/ReactTable";
import ZLinks from "@/pages/AdminPanel/ZLinks";
import ChartsExamples from "@/Testing/Charts";
import ZProfile from "@/pages/AdminPanel/ZProfile";
import TestingTabs from "@/Testing/TestingTabs";

// Routes
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ZaionsRoutes from "./utils/constants/RoutesConstants";
import SignUp from "@/pages/SignUp";
import ZaionsPasswordResetConfirm from "@/pages/ResetPassword/PasswordResetConfirmForm";
import TestingIonComponents from "./Testing/TestingIonComponents";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import ZWorkspaceListPage from "./pages/AdminPanel/Workspaces";
import ZWorkspaceForm from "./pages/AdminPanel/Workspaces/Form";
import ViewSingleWorkspace from "./pages/AdminPanel/Workspaces/ViewSingle";
import ZAppStartupPage from "./pages/AdminPanel/StartUpPage";
import ZPercentageCalculator from "./pages/PercentageCalculator";
import ZWordCounter from "./pages/WordCounter";

// Functional Component
const AppRoutes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Generic Routes */}
        {/* <Route exact path={ZaionsRoutes.HomeRoute} component={Home} /> */}

        <Route exact path={ZaionsRoutes.HomeRoute} component={Home} />

        <Route exact path={ZaionsRoutes.wordCounter} component={ZWordCounter} />
        <Route
          exact
          path={ZaionsRoutes.percentageCalculator}
          component={ZPercentageCalculator}
        />

        <Route
          path={ZaionsRoutes.Testing.IonComponents.Main}
          component={TestingIonComponents}
        />

        {/* Public Routes */}
        <PublicRoute exact path={ZaionsRoutes.LoginRoute} Component={Login} />

        <PublicRoute exact path={ZaionsRoutes.SignUpRoute} Component={SignUp} />

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

        <Route
          path={ZaionsRoutes.Testing.ReactTable.Main}
          component={TestingReactTable}
        />

        <Route
          path={ZaionsRoutes.Testing.ReactArea.Main}
          component={ZaionsReactArea}
        />
        <Route
          path={ZaionsRoutes.Testing.ReactCharts.Main}
          component={ChartsExamples}
        />
        <Route
          path={ZaionsRoutes.Testing.TestingTabs.Main}
          component={TestingTabs}
        />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
