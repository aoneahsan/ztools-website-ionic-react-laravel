/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from "react";

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */
import classNames from "classnames";

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import {
  ZIonCol,
  ZIonFooter,
  ZIonRouterLink,
  ZIonRow,
  ZIonText,
  ZIonTitle,
  ZIonToolbar,
} from "../ZIonComponents";

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */
import { useZMediaQueryScale } from "@/ZaionsHooks/ZGenericHooks";

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */
import CONSTANTS, { PRODUCT_NAME } from "@/utils/constants";
import ZaionsRoutes from "@/utils/constants/RoutesConstants";
import { useRouteMatch } from "react-router";

/**
 * Type Imports go down
 * ? Like import of type or type of some recoil state or any external type import is a Type import
 * */

/**
 * Recoil State Imports go down
 * ? Import of recoil states is a Recoil State import
 * */

/**
 * Style files Imports go down
 * ? Import of style sheet is a style import
 * */

/**
 * Images Imports go down
 * ? Import of images like png,jpg,jpeg,gif,svg etc. is a Images Imports import
 * */

/**
 * Component props type go down
 * ? Like if you have a type for props it should be please Down
 * */

/**
 * Functional Component
 * About: (Info of component here...)
 * @type {*}
 * */

const Footer: React.FC = () => {
  // #region custom hooks
  const { isLgScale, isAboveLgScale, isMdScale, isAboveMdScale } =
    useZMediaQueryScale();
  // #endregion

  // #region checking the route.
  const isAboutProductPage = useRouteMatch(ZaionsRoutes.about)?.isExact;
  const isAboutCompanyPage = useRouteMatch(ZaionsRoutes.Company.about)?.isExact;
  const isPrivacyPolicyPage = useRouteMatch(ZaionsRoutes.privacyPolicy)
    ?.isExact;
  const isTeamAndConditionsPage = useRouteMatch(ZaionsRoutes.termAndConditions)
    ?.isExact;
  // #endregion

  return (
    <ZIonFooter>
      <ZIonToolbar>
        <ZIonRow>
          <ZIonCol
            className={classNames({
              "flex ion-align-items-center": true,
              "mt-2": isMdScale,
            })}
          >
            <ZIonTitle
              className={classNames({
                "text-sm": true,
                "ion-no-padding ms-2": isMdScale,
              })}
            >
              &copy; 2023 {CONSTANTS.COMPANY_DETAILS.NAME} Digital
            </ZIonTitle>
          </ZIonCol>

          <ZIonCol
            sizeXl="9"
            sizeLg="9"
            sizeMd="8"
            sizeSm="12"
            sizeXs="12"
            className={classNames({
              "flex ion-align-items-center me-5": true,
              "ion-justify-content-end": isAboveMdScale,
              "ion-justify-content-start ms-2 flex-wrap": isMdScale,
              "gap-4": isAboveLgScale,
              "gap-2": isLgScale,
            })}
          >
            <ZIonRouterLink
              routerLink={ZaionsRoutes.about}
              className={classNames({
                "tracking-wider cursor-pointer hover:underline": true,
                "text-sm": isLgScale,
                "underline ": isAboutProductPage,
              })}
            >
              About {PRODUCT_NAME}
            </ZIonRouterLink>
            <ZIonText>|</ZIonText>

            <ZIonRouterLink
              routerLink={ZaionsRoutes.Company.about}
              className={classNames({
                "tracking-wider cursor-pointer hover:underline": true,
                "text-sm": isLgScale,
                "underline ": isAboutCompanyPage,
              })}
            >
              About {CONSTANTS.COMPANY_DETAILS.NAME}
            </ZIonRouterLink>
            <ZIonText>|</ZIonText>

            <ZIonRouterLink
              routerLink={ZaionsRoutes.privacyPolicy}
              className={classNames({
                "tracking-wider cursor-pointer hover:underline": true,
                "text-sm": isLgScale,
                "underline ": isPrivacyPolicyPage,
              })}
            >
              Privacy policy
            </ZIonRouterLink>
            <ZIonText>|</ZIonText>

            <ZIonRouterLink
              routerLink={ZaionsRoutes.termAndConditions}
              className={classNames({
                "tracking-wider cursor-pointer hover:underline": true,
                "text-sm": isLgScale,
                "underline ": isTeamAndConditionsPage,
              })}
            >
              Term & Conditions
            </ZIonRouterLink>
          </ZIonCol>
        </ZIonRow>
      </ZIonToolbar>
    </ZIonFooter>
  );
};

export default Footer;
