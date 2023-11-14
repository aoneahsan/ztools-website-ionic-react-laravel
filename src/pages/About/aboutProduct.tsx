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
import Header from "@/components/Header";
import {
  ZIonCol,
  ZIonContent,
  ZIonGrid,
  ZIonImg,
  ZIonRouterLink,
  ZIonRow,
  ZIonText,
  ZIonTitle,
} from "@/components/ZIonComponents";
import ZIonPage from "@/components/ZIonPage";
import ZAppSideMenu from "@/navigation/AppSideMenu";
import Footer from "@/components/Footer";

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
import { ProductLogoPng } from "@/assets/images";

/**
 * Component props type go down
 * ? Like if you have a type for props it should be please Down
 * */

/**
 * Functional Component
 * About: (Info of component here...)
 * @type {*}
 * */

const ZAboutProduct: React.FC = () => {
  // #region custom hooks
  const { isAboveXlScale, isXlScale, isLgScale, isMdScale } =
    useZMediaQueryScale();
  // #endregion

  return (
    <>
      {/* Side menu */}
      <ZAppSideMenu pageId={CONSTANTS.PAGE_IDS.ABOUT_PAGE_ID} />

      <ZIonPage
        pageTitle={`${PRODUCT_NAME} - About page`}
        id={CONSTANTS.PAGE_IDS.ABOUT_PAGE_ID}
      >
        {/* Header  */}
        <Header title={`About ${PRODUCT_NAME}`} />

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
                <ZIonImg
                  src={ProductLogoPng}
                  className="w-[12rem] h-[10rem] mx-auto"
                />
                {isMdScale && (
                  <ZIonText
                    className={classNames({
                      "mb-3 ion-no-padding font-semibold": true,
                      "text-2xl": (isXlScale && !isLgScale) || isAboveXlScale,
                      "text-xl": isLgScale,
                    })}
                  >
                    About {PRODUCT_NAME}
                  </ZIonText>
                )}
              </ZIonCol>

              <ZIonCol>
                <ZIonTitle
                  className="text-2xl font-semibold tracking-wider ion-no-padding"
                  color="secondary"
                >
                  Introduction
                </ZIonTitle>

                <ZIonText className="block mt-2 tracking-wider">
                  Welcome to {PRODUCT_NAME}, your one-stop solution for a range
                  of digital utilities designed to make your life simpler.
                  Crafted with meticulous attention to detail and user
                  experience,
                  {PRODUCT_NAME} offers a multitude of tools, ranging from
                  percentage calculators to QR code generators, all at your
                  fingertips.
                </ZIonText>

                {/* Platforms */}
                <ZIonTitle
                  className="mt-4 text-2xl font-semibold ion-no-padding"
                  color="tertiary"
                >
                  Platforms
                </ZIonTitle>
                <ZIonText className="block mt-2">
                  <ZIonText className="font-semibold tracking-wider">
                    Website:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Access all our tools online, directly from your browser.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Android App:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Download our app from the Google Play Store for on-the-go
                    utility.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Coming Soon:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Stay tuned for our upcoming iOS and desktop applications.
                  </ZIonText>
                </ZIonText>

                {/* Our Tools */}
                <ZIonTitle
                  className="mt-4 text-2xl font-semibold tracking-wider ion-no-padding"
                  color="tertiary"
                >
                  Our Tools
                </ZIonTitle>
                {/* Core Utilities */}
                <ZIonText
                  className="block mt-3 text-xl tracking-wider"
                  color="secondary"
                >
                  Core Utilities
                </ZIonText>
                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Percentage Calculator:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Perfect for quickly determining percentages without a manual
                    calculation.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    CSS Selector Specificity Calculator:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    A must-have for web developers aiming to debug or optimize
                    their CSS code.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Word Counter:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Ideal for writers, students, and professionals who need to
                    meet word count requirements.
                  </ZIonText>
                </ZIonText>

                {/* Specialized Utilities */}
                <ZIonText
                  className="block mt-3 text-xl tracking-wider"
                  color="secondary"
                >
                  Specialized Utilities
                </ZIonText>
                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Character Counter:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Helpful for social media posts, SMS, and other platforms
                    with character limitations.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Password Generator:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Create strong, secure passwords to protect your online
                    accounts.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    QR Code Generator:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Easily generate QR codes for websites, texts, or contact
                    information.
                  </ZIonText>
                </ZIonText>

                {/* And More */}
                <ZIonText
                  className="block mt-3 text-xl tracking-wider"
                  color="secondary"
                >
                  And More
                </ZIonText>
                <ZIonText className="block mt-2 tracking-wider">
                  We're constantly expanding our repertoire to bring you a
                  greater variety of tools that cater to a wide range of needs.
                </ZIonText>

                {/* Why Choose us? */}
                <ZIonTitle
                  className="mt-4 text-2xl font-semibold tracking-wider ion-no-padding"
                  color="tertiary"
                >
                  Why Choose {PRODUCT_NAME}?
                </ZIonTitle>
                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    User-Friendly Interface:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Our design ethos centers on providing a simple, intuitive
                    user experience.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Quality:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Each tool undergoes rigorous testing to ensure accuracy and
                    reliability.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Security:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Your data's safety is our top priority; we adhere to
                    industry-leading security protocols.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2">
                  <ZIonText className="font-semibold tracking-wider">
                    Innovation:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Continual research and development to bring you the best in
                    digital utility tools.
                  </ZIonText>
                </ZIonText>

                {/* Get In Touch */}
                <ZIonTitle
                  className="mt-4 text-2xl font-semibold tracking-wider ion-no-padding"
                  color="tertiary"
                >
                  Get In Touch
                </ZIonTitle>
                <ZIonText className="block mt-2 text-lg tracking-wider">
                  For any queries, suggestions, or feedback, feel free to
                  contact us:
                </ZIonText>
                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Email:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    <ZIonRouterLink
                      href={`mailto:${CONSTANTS.COMPANY_DETAILS.ADDRESS_LINK}`}
                      rel="external nofollow noopener"
                      target="_blank"
                      className="tracking-wider"
                    >
                      {CONSTANTS.COMPANY_DETAILS.EMAIL}
                    </ZIonRouterLink>
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Phone:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    {CONSTANTS.COMPANY_DETAILS.NUMBER}
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Contact Page:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    <ZIonRouterLink
                      href={CONSTANTS.COMPANY_DETAILS.CONTACT_LINK}
                      rel="external nofollow noopener"
                      target="_blank"
                      className="tracking-wider"
                    >
                      {CONSTANTS.COMPANY_DETAILS.CONTACT_LINK}
                    </ZIonRouterLink>
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-6 mb-2 tracking-wider">
                  We are excited to be part of your digital journey and are
                  committed to delivering tools that simplify complex tasks and
                  enhance productivity. Thank you for choosing {PRODUCT_NAME}.
                </ZIonText>
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

export default ZAboutProduct;
