/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from "react";

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import {
  ZIonHeader,
  ZIonRouterLink,
  ZIonImg,
} from "@/components/ZIonComponents";
import ZIonTitle from "@/components/ZIonComponents/ZIonTitle";
import ZaionsRoutes from "@/utils/constants/RoutesConstants";

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
import { ProductFavicon } from "@/assets/images";

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
  return (
    <ZIonHeader className="px-2">
      <div className="flex w-full py-2 ion-align-items-center ion-text-center">
        <ZIonRouterLink routerLink={ZaionsRoutes.HomeRoute}>
          <ZIonImg src={ProductFavicon} className="w-[3.5rem] ms-1" />
        </ZIonRouterLink>

        <ZIonTitle className="text-xl font-semibold tracking-widest">
          {title}
        </ZIonTitle>
      </div>
    </ZIonHeader>
  );
};

export default Header;
