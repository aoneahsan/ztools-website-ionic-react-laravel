/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from "react";

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */
import { menuController } from "@ionic/core/components";
import { menuOutline } from "ionicons/icons";

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import {
  ZIonHeader,
  ZIonRouterLink,
  ZIonImg,
  ZIonButton,
  ZIonRow,
  ZIonCol,
  ZIonIcon,
} from "@/components/ZIonComponents";
import ZIonTitle from "@/components/ZIonComponents/ZIonTitle";

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */
import { useZMediaQueryScale } from "@/ZaionsHooks/ZGenericHooks";

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */
import ZaionsRoutes from "@/utils/constants/RoutesConstants";
import CONSTANTS from "@/utils/constants";

/**
 * Type Imports go down
 * ? Like import of type or type of some recoil state is a Type import
 * */

/**
 * Recoil State Imports go down
 * ? Import of recoil states is a Recoil State import
 * */

/**
 * Images Imports go down
 * ? Import of images like png,jpg,jpeg,gif,svg etc. is a Images Imports import
 * */
import { ProductLogoPng2 } from "@/assets/images";

/**
 * Component props type Imports go down
 * ? Like if you have a type for props it should be place Down
 * */

/**
 * Functional Component
 * About: (Custom Header of Product)
 * @type {*}
 * */
const Header: React.FC<{ title?: String }> = ({ title }) => {
  // #region custom hooks
  const { isAboveMdScale } = useZMediaQueryScale();
  // #endregion

  return (
    <ZIonHeader className="px-2">
      <ZIonRow className="py-2 ion-align-items-center ion-text-center">
        {/* Logo */}
        <ZIonCol className="ion-no-padding">
          <ZIonRouterLink routerLink={ZaionsRoutes.HomeRoute}>
            <ZIonImg src={ProductLogoPng2} className="w-[10.5rem] ms-1" />
          </ZIonRouterLink>
        </ZIonCol>

        {/* Title */}
        {isAboveMdScale && (
          <ZIonCol className="ion-no-padding">
            <ZIonTitle className="text-xl font-semibold tracking-widest">
              {title}
            </ZIonTitle>
          </ZIonCol>
        )}

        {/* Menu button */}
        <ZIonCol className="flex ion-no-padding ion-align-items-center ion-justify-content-end me-1">
          <ZIonButton
            fill="clear"
            className="overflow-hidden rounded-full ion-no-margin ion-no-padding w-9 h-7"
            onClick={async () => {
              await menuController.open(CONSTANTS.MENU_IDS.APP_SIDE_MENU_ID);
            }}
          >
            <ZIonIcon icon={menuOutline} className="w-7 h-7" />
          </ZIonButton>
        </ZIonCol>
      </ZIonRow>
    </ZIonHeader>
  );
};

export default Header;
