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

const ZAboutCompany: React.FC = () => {
  // #region custom hooks
  const { isAboveXlScale, isXlScale, isLgScale, isMdScale } =
    useZMediaQueryScale();
  // #endregion

  return (
    <>
      {/* Side menu */}
      <ZAppSideMenu pageId={CONSTANTS.PAGE_IDS.ABOUT_COMPANY_PAGE_ID} />

      <ZIonPage
        pageTitle={`${PRODUCT_NAME} - About ${CONSTANTS.COMPANY_DETAILS.NAME} page`}
        id={CONSTANTS.PAGE_IDS.ABOUT_COMPANY_PAGE_ID}
      >
        {/* Header  */}
        <Header title={`About ${CONSTANTS.COMPANY_DETAILS.NAME}`} />

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
                    About {CONSTANTS.COMPANY_DETAILS.NAME}
                  </ZIonText>
                )}
              </ZIonCol>

              <ZIonCol>
                <ZIonTitle
                  className="text-2xl font-semibold tracking-wider ion-no-padding"
                  color="secondary"
                >
                  Who We Are
                </ZIonTitle>

                <ZIonText className="block mt-2 tracking-wider">
                  Welcome to {CONSTANTS.COMPANY_DETAILS.NAME}, the parent
                  organization behind ZTools and a leading name in the realm of
                  Software as a Service (SaaS) solutions. With a deep-seated
                  focus on user experience, reliability, and innovation, we are
                  revolutionizing the way you interact with digital platforms.
                </ZIonText>

                {/* Our Mission */}
                <ZIonTitle
                  className="mt-4 text-2xl font-semibold tracking-wider ion-no-padding"
                  color="secondary"
                >
                  Our Mission
                </ZIonTitle>

                <ZIonText className="block mt-2 tracking-wider">
                  Our core mission is to simplify the complexities of the
                  digital world. Whether you're a casual browser, a budding
                  entrepreneur, or a seasoned developer, we aim to create
                  software solutions that make your digital life not just
                  easier, but also more secure and enjoyable.
                </ZIonText>

                {/* Our Projects */}
                <ZIonTitle
                  className="mt-4 text-2xl font-semibold ion-no-padding"
                  color="tertiary"
                >
                  Our Projects
                </ZIonTitle>
                {/* Product */}
                <ZIonText
                  className="block mt-3 text-xl tracking-wider"
                  color="secondary"
                >
                  {PRODUCT_NAME}
                </ZIonText>
                <ZIonText className="block mt-2 tracking-wider">
                  An all-in-one digital toolbox with utilities ranging from QR
                  code generators to complex calculators.
                </ZIonText>

                {/* Other Initiatives */}
                <ZIonText
                  className="block mt-3 text-xl tracking-wider"
                  color="secondary"
                >
                  Other Initiatives
                </ZIonText>
                <ZIonText className="block mt-2 tracking-wider">
                  A variety of SaaS solutions designed for different sectors,
                  including ecommerce, healthcare, and education.
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  Online tutorials and educational content on YouTube, catering
                  to a wide audience, from beginners to professionals.
                </ZIonText>

                {/* Why Join Company? */}
                <ZIonTitle
                  className="mt-4 text-2xl font-semibold tracking-wider ion-no-padding"
                  color="tertiary"
                >
                  Why Join {CONSTANTS.COMPANY_DETAILS.NAME}?
                </ZIonTitle>
                {/* Core Utilities */}
                <ZIonText
                  className="block mt-3 text-xl tracking-wider"
                  color="secondary"
                >
                  For Students
                </ZIonText>
                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Real-World Experience:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Get your hands dirty with real projects that make an impact.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Learning & Development:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Sharpen your skills in programming languages, software
                    design, and much more.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Networking:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Meet like-minded individuals and industry experts who can
                    guide your career.
                  </ZIonText>
                </ZIonText>

                {/* For Professionals */}
                <ZIonText
                  className="block mt-3 text-xl tracking-wider"
                  color="secondary"
                >
                  For Professionals
                </ZIonText>
                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Career Growth:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    An ideal platform to showcase your expertise and move up the
                    career ladder.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Innovative Environment:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Work in a culture that encourages innovation and
                    out-of-the-box thinking.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Skill Enhancement:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Exposure to various projects that require a multitude of
                    skills, keeping you versatile and market-ready.
                  </ZIonText>
                </ZIonText>

                {/* Our Commitment to User Safety & Enjoyment */}
                <ZIonTitle
                  className="mt-4 text-2xl font-semibold tracking-wider ion-no-padding"
                  color="tertiary"
                >
                  Our Commitment to User Safety & Enjoyment
                </ZIonTitle>
                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Data Security:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Your privacy is our top priority. We use state-of-the-art
                    encryption methods to ensure your data stays protected.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    Continuous Updates:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    Our platforms are always up-to-date with the latest features
                    and security patches.
                  </ZIonText>
                </ZIonText>

                <ZIonText className="block mt-2 tracking-wider">
                  <ZIonText className="font-semibold tracking-wider">
                    User Feedback:{" "}
                  </ZIonText>
                  <ZIonText className="tracking-wider">
                    We listen to our users and make constant adjustments to
                    improve user experience and functionality.
                  </ZIonText>
                </ZIonText>

                {/* Contact Us */}
                <ZIonTitle
                  className="mt-4 text-2xl font-semibold tracking-wider ion-no-padding"
                  color="tertiary"
                >
                  Contact Us
                </ZIonTitle>
                <ZIonText className="block mt-2 text-lg tracking-wider">
                  For any queries, job applications, or feedback, you can reach
                  us through multiple channels:
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

                <ZIonText className="block mt-4 tracking-wider">
                  Join us in our journey to make the digital world a better
                  place. Whether as a user or a team member, we are excited to
                  welcome you to the {CONSTANTS.COMPANY_DETAILS.NAME} family.
                  Thank you for choosing
                  {CONSTANTS.COMPANY_DETAILS.NAME} for your digital needs
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

export default ZAboutCompany;
