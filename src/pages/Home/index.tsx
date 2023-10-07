// Core Imports
import React from "react";

// Package Imports
import {
  calculatorOutline,
  lockClosedOutline,
  textOutline,
} from "ionicons/icons";
import classNames from "classnames";

// Custom Imports
import ZIonPage from "@/components/ZIonPage";
import {
  ZIonCard,
  ZIonCardContent,
  ZIonCardTitle,
  ZIonCol,
  ZIonContent,
  ZIonGrid,
  ZIonHeader,
  ZIonIcon,
  ZIonImg,
  ZIonRow,
  ZIonText,
  ZIonTitle,
} from "@/components/ZIonComponents";

// Constants
import ZaionsRoutes from "@/utils/constants/RoutesConstants";
import { PRODUCT_NAME } from "@/utils/constants";
import { ProductLogo } from "@/assets/images";
import { useZNavigate } from "@/ZaionsHooks/zrouter-hooks";

// Styles
import "./styles.css";

const Home: React.FC = () => {
  const { zNavigatePushRoute } = useZNavigate();

  return (
    <ZIonPage pageTitle="Home Page">
      {/* Header  */}
      <ZIonHeader className="px-2">
        <div className="flex w-full py-2 ion-align-items-center ion-text-center">
          <ZIonImg src={ProductLogo} className="w-[2.4rem]" />

          <ZIonTitle className="text-2xl font-semibold tracking-widest">
            {PRODUCT_NAME}
          </ZIonTitle>
        </div>
      </ZIonHeader>
      {/* Whether you're a student, professional, or simply looking to simplify life's complexities, Z Tool offers a suite of tools designed to make your tasks easier. */}
      <ZIonContent fullscreen>
        <ZIonGrid className="lg:w-[80%] md:w-[95%] sm:w-[98%] xs:w-[100%] xl:w-[60%] mx-auto my-2 pt-5">
          <ZIonRow>
            <ZIonCol
              size="12"
              className={classNames({
                "mb-3 ion-text-center": true,
              })}
            >
              <ZIonText className="text-lg">
                Whether you're a student, professional, or simply looking to
                simplify life's complexities, <br /> {PRODUCT_NAME} offers a
                suite of tools designed to make your tasks easier.
              </ZIonText>
            </ZIonCol>
          </ZIonRow>

          <ZIonRow className="ion-justify-content-between">
            {/* Percentage Calculator */}
            <ZIonCol
              sizeXl="3.9"
              sizeLg="3.9"
              sizeMd="6"
              sizeSm="12"
              sizeXs="12"
            >
              <ZIonCard
                className="h-full cursor-pointer ion-no-margin"
                onClick={() => {
                  zNavigatePushRoute(ZaionsRoutes.percentageCalculator);
                }}
              >
                <ZIonCardContent className="flex flex-col h-full py-10 ion-align-items-center ion-justify-content-center ion-text-center">
                  <ZIonIcon
                    icon={calculatorOutline}
                    className="w-9 h-9"
                    color="primary"
                  />
                  <ZIonCardTitle className="mt-2" color="dark">
                    Percentage Calculator
                  </ZIonCardTitle>
                </ZIonCardContent>
              </ZIonCard>
            </ZIonCol>

            {/*  Word Counter */}
            <ZIonCol
              sizeXl="3.9"
              sizeLg="3.9"
              sizeMd="6"
              sizeSm="12"
              sizeXs="12"
            >
              <ZIonCard
                className="h-full cursor-pointer ion-no-margin"
                onClick={() => {
                  zNavigatePushRoute(ZaionsRoutes.wordCounter);
                }}
              >
                <ZIonCardContent className="flex flex-col h-full py-10 ion-justify-content-center ion-align-items-center ion-text-center">
                  <ZIonIcon
                    icon={textOutline}
                    className="w-9 h-9"
                    color="primary"
                  />
                  <ZIonCardTitle className="mt-2" color="dark">
                    Word Counter
                  </ZIonCardTitle>
                </ZIonCardContent>
              </ZIonCard>
            </ZIonCol>

            {/* Wordpress Password Generator */}
            <ZIonCol
              sizeXl="3.9"
              sizeLg="3.9"
              sizeMd="6"
              sizeSm="12"
              sizeXs="12"
            >
              <ZIonCard className="h-full cursor-pointer ion-no-margin">
                <ZIonCardContent className="flex flex-col h-full py-10 ion-justify-content-center ion-align-items-center ion-text-center">
                  <ZIonIcon
                    icon={lockClosedOutline}
                    className="w-9 h-9"
                    color="primary"
                  />
                  <ZIonCardTitle className="mt-2" color="dark">
                    Wordpress Password Generator
                  </ZIonCardTitle>
                </ZIonCardContent>
              </ZIonCard>
            </ZIonCol>
          </ZIonRow>
        </ZIonGrid>
      </ZIonContent>
    </ZIonPage>
  );
};

export default Home;
