/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from "react";

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */
import { calculatorOutline, logoCss3, textOutline } from "ionicons/icons";
import classNames from "classnames";

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import ZIonPage from "@/components/ZIonPage";
import {
  ZIonCard,
  ZIonCardContent,
  ZIonCardTitle,
  ZIonCol,
  ZIonContent,
  ZIonGrid,
  ZIonIcon,
  ZIonRow,
  ZIonText,
} from "@/components/ZIonComponents";
import Header from "@/components/Header";
import ZAppSideMenu from "@/navigation/AppSideMenu";
import Footer from "@/components/Footer";

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */
import { useZNavigate } from "@/ZaionsHooks/zrouter-hooks";
import { useZMediaQueryScale } from "@/ZaionsHooks/ZGenericHooks";

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */
import ZaionsRoutes from "@/utils/constants/RoutesConstants";
import CONSTANTS, { PRODUCT_NAME, PRODUCT_TITLE } from "@/utils/constants";

// Styles
import "./styles.css";

const Home: React.FC = () => {
  // #region custom hooks
  const { zNavigatePushRoute } = useZNavigate();

  const { isAboveXlScale, isXlScale, isLgScale, isMdScale } =
    useZMediaQueryScale();
  // #endregion

  return (
    <>
      {/* Side menu */}
      <ZAppSideMenu pageId={CONSTANTS.PAGE_IDS.HOME_PAGE_ID} />

      <ZIonPage
        pageTitle={`${PRODUCT_NAME} - Home Page`}
        id={CONSTANTS.PAGE_IDS.HOME_PAGE_ID}
      >
        {/* Header  */}
        <Header title={PRODUCT_TITLE} />

        {/* Constants */}
        <ZIonContent>
          <ZIonGrid className="lg:w-[80%] md:w-[95%] sm:w-[98%] xs:w-[100%] xl:w-[60%] mx-auto my-2 pt-5">
            <ZIonRow>
              <ZIonCol
                size="12"
                className={classNames({
                  "mb-3 flex ion-justify-content-center flex-col ion-text-center":
                    true,
                  "ion-align-items-center": isMdScale,
                })}
              >
                {isMdScale && (
                  <ZIonText
                    className={classNames({
                      "mb-3 ion-no-padding font-semibold": true,
                      "text-2xl": (isXlScale && !isLgScale) || isAboveXlScale,
                      "text-xl": isLgScale,
                    })}
                  >
                    {PRODUCT_TITLE}
                  </ZIonText>
                )}

                <ZIonText
                  className={classNames({
                    "text-lg block":
                      (isXlScale && !isLgScale) || isAboveXlScale,
                    "text-md": isLgScale && !isMdScale,
                  })}
                >
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

              {/* Css Specificity Calculator */}
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
                    zNavigatePushRoute(ZaionsRoutes.cssSpecificityCalculator);
                  }}
                >
                  <ZIonCardContent className="flex flex-col h-full py-10 ion-justify-content-center ion-align-items-center ion-text-center">
                    <ZIonIcon
                      icon={logoCss3}
                      className="w-9 h-9"
                      color="primary"
                    />
                    <ZIonCardTitle className="mt-2" color="dark">
                      Css Specificity Calculator
                    </ZIonCardTitle>
                  </ZIonCardContent>
                </ZIonCard>
              </ZIonCol>
            </ZIonRow>
          </ZIonGrid>
        </ZIonContent>

        {/* Footers */}
        <Footer />
      </ZIonPage>
    </>
  );
};

export default Home;
