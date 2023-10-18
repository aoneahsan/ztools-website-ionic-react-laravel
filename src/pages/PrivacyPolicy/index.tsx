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
import ZIonPage from "@/components/ZIonPage";
import ZAppSideMenu from "@/navigation/AppSideMenu";
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
import { ProductLogoPng } from "@/assets/images";
import Footer from "@/components/Footer";

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

const ZPrivacyPolicy: React.FC = () => {
  // #region custom hooks
  const { isAboveXlScale, isXlScale, isLgScale, isMdScale } =
    useZMediaQueryScale();
  // #endregion

  return (
    <>
      {/* Side menu */}
      <ZAppSideMenu pageId={CONSTANTS.PAGE_IDS.PRIVACY_POLICY_PAGE_ID} />
      <ZIonPage
        pageTitle={`${PRODUCT_NAME} - Privacy Policy page`}
        id={CONSTANTS.PAGE_IDS.PRIVACY_POLICY_PAGE_ID}
      >
        {/* Header  */}
        <Header title={`${PRODUCT_NAME} Privacy Policy`} />

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
                    {PRODUCT_NAME} Privacy Policy
                  </ZIonText>
                )}
              </ZIonCol>
              <ZIonCol>
                <ZIonText className="mb-2 blok">
                  Last updated: October 18, 2023
                </ZIonText>
                <ZIonText>
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                </ZIonText>
                <ZIonText>
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Interpretation and Definitions
                </ZIonTitle>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Interpretation
                </ZIonTitle>
                <ZIonText>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Definitions
                </ZIonTitle>
                <ZIonText>For the purposes of this Privacy Policy:</ZIonText>
                <ul>
                  <li>
                    <ZIonText>
                      <strong>Account</strong> means a unique account created
                      for You to access our Service or parts of our Service.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Affiliate</strong> means an entity that controls,
                      is controlled by or is under common control with a party,
                      where "control" means ownership of 50% or more of the
                      shares, equity interest or other securities entitled to
                      vote for election of directors or other managing
                      authority.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Application</strong> refers to {PRODUCT_NAME}, the
                      software program provided by the Company.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Company</strong> (referred to as either "the
                      Company", "We", "Us" or "Our" in this Agreement) refers to
                      Zaions, zaions.com/address.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Cookies</strong> are small files that are placed
                      on Your computer, mobile device or any other device by a
                      website, containing the details of Your browsing history
                      on that website among its many uses.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Country</strong> refers to: Pakistan
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Device</strong> means any device that can access
                      the Service such as a computer, a cellphone or a digital
                      tablet.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Personal Data</strong> is any information that
                      relates to an identified or identifiable individual.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Service</strong> refers to the Application or the
                      Website or both.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Service Provider</strong> means any natural or
                      legal person who processes the data on behalf of the
                      Company. It refers to third-party companies or individuals
                      employed by the Company to facilitate the Service, to
                      provide the Service on behalf of the Company, to perform
                      services related to the Service or to assist the Company
                      in analyzing how the Service is used.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Third-party Social Media Service</strong> refers
                      to any website or any social network website through which
                      a User can log in or create an account to use the Service.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Usage Data</strong> refers to data collected
                      automatically, either generated by the use of the Service
                      or from the Service infrastructure itself (for example,
                      the duration of a page visit).
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Website</strong> refers to {PRODUCT_NAME},
                      accessible from{" "}
                      <ZIonRouterLink
                        href={CONSTANTS.PRODUCT_DETAILS.URL}
                        rel="external nofollow noopener"
                        target="_blank"
                      >
                        {CONSTANTS.PRODUCT_DETAILS.URL}
                      </ZIonRouterLink>
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>You</strong> means the individual accessing or
                      using the Service, or the company, or other legal entity
                      on behalf of which such individual is accessing or using
                      the Service, as applicable.
                    </ZIonText>
                  </li>
                </ul>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Collecting and Using Your Personal Data
                </ZIonTitle>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Types of Data Collected
                </ZIonTitle>
                <h4>Personal Data</h4>
                <ZIonText>
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </ZIonText>
                <ul>
                  <li>
                    <ZIonText>Email address</ZIonText>
                  </li>
                  <li>
                    <ZIonText>First name and last name</ZIonText>
                  </li>
                  <li>
                    <ZIonText>Phone number</ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      Address, State, Province, ZIP/Postal code, City
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>Usage Data</ZIonText>
                  </li>
                </ul>
                <h4>Usage Data</h4>
                <ZIonText>
                  Usage Data is collected automatically when using the Service.
                </ZIonText>
                <ZIonText>
                  Usage Data may include information such as Your Device's
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </ZIonText>
                <ZIonText>
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </ZIonText>
                <ZIonText>
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </ZIonText>
                <h4>Information from Third-Party Social Media Services</h4>
                <ZIonText>
                  The Company allows You to create an account and log in to use
                  the Service through the following Third-party Social Media
                  Services:
                </ZIonText>
                <ul>
                  <li>Google</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
                <ZIonText>
                  If You decide to register through or otherwise grant us access
                  to a Third-Party Social Media Service, We may collect Personal
                  data that is already associated with Your Third-Party Social
                  Media Service's account, such as Your name, Your email
                  address, Your activities or Your contact list associated with
                  that account.
                </ZIonText>
                <ZIonText>
                  You may also have the option of sharing additional information
                  with the Company through Your Third-Party Social Media
                  Service's account. If You choose to provide such information
                  and Personal Data, during registration or otherwise, You are
                  giving the Company permission to use, share, and store it in a
                  manner consistent with this Privacy Policy.
                </ZIonText>
                <h4>Information Collected while Using the Application</h4>
                <ZIonText>
                  While using Our Application, in order to provide features of
                  Our Application, We may collect, with Your prior permission:
                </ZIonText>
                <ul>
                  <li>Information regarding your location</li>
                  <li>
                    Information from your Device's phone book (contacts list)
                  </li>
                  <li>
                    Pictures and other information from your Device's camera and
                    photo library
                  </li>
                </ul>
                <ZIonText>
                  We use this information to provide features of Our Service, to
                  improve and customize Our Service. The information may be
                  uploaded to the Company's servers and/or a Service Provider's
                  server or it may be simply stored on Your device.
                </ZIonText>
                <ZIonText>
                  You can enable or disable access to this information at any
                  time, through Your Device settings.
                </ZIonText>
                <h4>Tracking Technologies and Cookies</h4>
                <ZIonText>
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
                </ZIonText>
                <ul>
                  <li>
                    <strong>Cookies or Browser Cookies.</strong> A cookie is a
                    small file placed on Your Device. You can instruct Your
                    browser to refuse all Cookies or to indicate when a Cookie
                    is being sent. However, if You do not accept Cookies, You
                    may not be able to use some parts of our Service. Unless you
                    have adjusted Your browser setting so that it will refuse
                    Cookies, our Service may use Cookies.
                  </li>
                  <li>
                    <strong>Web Beacons.</strong> Certain sections of our
                    Service and our emails may contain small electronic files
                    known as web beacons (also referred to as clear gifs, pixel
                    tags, and single-pixel gifs) that permit the Company, for
                    example, to count users who have visited those pages or
                    opened an email and for other related website statistics
                    (for example, recording the popularity of a certain section
                    and verifying system and server integrity).
                  </li>
                </ul>
                <ZIonText>
                  Cookies can be "Persistent" or "Session" Cookies. Persistent
                  Cookies remain on Your personal computer or mobile device when
                  You go offline, while Session Cookies are deleted as soon as
                  You close Your web browser.
                </ZIonText>
                <ZIonText>
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
                </ZIonText>
                <ul>
                  <li>
                    <ZIonText>
                      <strong>Necessary / Essential Cookies</strong>
                    </ZIonText>
                    <ZIonText>Type: Session Cookies</ZIonText>
                    <ZIonText>Administered by: Us</ZIonText>
                    <ZIonText>
                      Purpose: These Cookies are essential to provide You with
                      services available through the Website and to enable You
                      to use some of its features. They help to authenticate
                      users and prevent fraudulent use of user accounts. Without
                      these Cookies, the services that You have asked for cannot
                      be provided, and We only use these Cookies to provide You
                      with those services.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>
                        Cookies Policy / Notice Acceptance Cookies
                      </strong>
                    </ZIonText>
                    <ZIonText>Type: Persistent Cookies</ZIonText>
                    <ZIonText>Administered by: Us</ZIonText>
                    <ZIonText>
                      Purpose: These Cookies identify if users have accepted the
                      use of cookies on the Website.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Functionality Cookies</strong>
                    </ZIonText>
                    <ZIonText>Type: Persistent Cookies</ZIonText>
                    <ZIonText>Administered by: Us</ZIonText>
                    <ZIonText>
                      Purpose: These Cookies allow us to remember choices You
                      make when You use the Website, such as remembering your
                      login details or language preference. The purpose of these
                      Cookies is to provide You with a more personal experience
                      and to avoid You having to re-enter your preferences every
                      time You use the Website.
                    </ZIonText>
                  </li>
                </ul>
                <ZIonText>
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of our Privacy Policy.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Use of Your Personal Data
                </ZIonTitle>
                <ZIonText>
                  The Company may use Personal Data for the following purposes:
                </ZIonText>
                <ul>
                  <li>
                    <ZIonText>
                      <strong>To provide and maintain our Service</strong>,
                      including to monitor the usage of our Service.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>To manage Your Account:</strong> to manage Your
                      registration as a user of the Service. The Personal Data
                      You provide can give You access to different
                      functionalities of the Service that are available to You
                      as a registered user.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>For the performance of a contract:</strong> the
                      development, compliance and undertaking of the purchase
                      contract for the products, items or services You have
                      purchased or of any other contract with Us through the
                      Service.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>To contact You:</strong> To contact You by email,
                      telephone calls, SMS, or other equivalent forms of
                      electronic communication, such as a mobile application's
                      push notifications regarding updates or informative
                      communications related to the functionalities, products or
                      contracted services, including the security updates, when
                      necessary or reasonable for their implementation.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>To provide You</strong> with news, special offers
                      and general information about other goods, services and
                      events which we offer that are similar to those that you
                      have already purchased or enquired about unless You have
                      opted not to receive such information.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>To manage Your requests:</strong> To attend and
                      manage Your requests to Us.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>For business transfers:</strong> We may use Your
                      information to evaluate or conduct a merger, divestiture,
                      restructuring, reorganization, dissolution, or other sale
                      or transfer of some or all of Our assets, whether as a
                      going concern or as part of bankruptcy, liquidation, or
                      similar proceeding, in which Personal Data held by Us
                      about our Service users is among the assets transferred.
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>For other purposes</strong>: We may use Your
                      information for other purposes, such as data analysis,
                      identifying usage trends, determining the effectiveness of
                      our promotional campaigns and to evaluate and improve our
                      Service, products, services, marketing and your
                      experience.
                    </ZIonText>
                  </li>
                </ul>
                <ZIonText>
                  We may share Your personal information in the following
                  situations:
                </ZIonText>
                <ul>
                  <li>
                    <strong>With Service Providers:</strong> We may share Your
                    personal information with Service Providers to monitor and
                    analyze the use of our Service, to contact You.
                  </li>
                  <li>
                    <strong>For business transfers:</strong> We may share or
                    transfer Your personal information in connection with, or
                    during negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                  </li>
                  <li>
                    <strong>With Affiliates:</strong> We may share Your
                    information with Our affiliates, in which case we will
                    require those affiliates to honor this Privacy Policy.
                    Affiliates include Our parent company and any other
                    subsidiaries, joint venture partners or other companies that
                    We control or that are under common control with Us.
                  </li>
                  <li>
                    <strong>With business partners:</strong> We may share Your
                    information with Our business partners to offer You certain
                    products, services or promotions.
                  </li>
                  <li>
                    <strong>With other users:</strong> when You share personal
                    information or otherwise interact in the public areas with
                    other users, such information may be viewed by all users and
                    may be publicly distributed outside. If You interact with
                    other users or register through a Third-Party Social Media
                    Service, Your contacts on the Third-Party Social Media
                    Service may see Your name, profile, pictures and description
                    of Your activity. Similarly, other users will be able to
                    view descriptions of Your activity, communicate with You and
                    view Your profile.
                  </li>
                  <li>
                    <strong>With Your consent</strong>: We may disclose Your
                    personal information for any other purpose with Your
                    consent.
                  </li>
                </ul>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Retention of Your Personal Data
                </ZIonTitle>
                <ZIonText>
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </ZIonText>
                <ZIonText>
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Transfer of Your Personal Data
                </ZIonTitle>
                <ZIonText>
                  Your information, including Personal Data, is processed at the
                  Company's operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to — and maintained on —
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ than those from Your jurisdiction.
                </ZIonText>
                <ZIonText>
                  Your consent to this Privacy Policy followed by Your
                  submission of such information represents Your agreement to
                  that transfer.
                </ZIonText>
                <ZIonText>
                  The Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Delete Your Personal Data
                </ZIonTitle>
                <ZIonText>
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                </ZIonText>
                <ZIonText>
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
                </ZIonText>
                <ZIonText>
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if you have one, and visiting
                  the account settings section that allows you to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any personal information that
                  You have provided to Us.
                </ZIonText>
                <ZIonText>
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Disclosure of Your Personal Data
                </ZIonTitle>
                <h4>Business Transactions</h4>
                <ZIonText>
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                </ZIonText>
                <h4>Law enforcement</h4>
                <ZIonText>
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                </ZIonText>
                <h4>Other legal requirements</h4>
                <ZIonText>
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </ZIonText>
                <ul>
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of the Company
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Security of Your Personal Data
                </ZIonTitle>
                <ZIonText>
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Detailed Information on the Processing of Your Personal Data
                </ZIonTitle>
                <ZIonText>
                  The Service Providers We use may have access to Your Personal
                  Data. These third-party vendors collect, store, use, process
                  and transfer information about Your activity on Our Service in
                  accordance with their Privacy Policies.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Usage, Performance and Miscellaneous
                </ZIonTitle>
                <ZIonText>
                  We may use third-party Service Providers to maintain and
                  improve our Service.
                </ZIonText>
                <ul>
                  <li>
                    <ZIonText>
                      <strong>Mouseflow</strong>
                    </ZIonText>
                    <ZIonText>
                      Mouseflow is a session replay and heatmap tool that shows
                      how visitors click, move, scroll, browse, and pay
                      attention on websites. The service is operated by ApS.
                    </ZIonText>
                    <ZIonText>
                      Mouseflow service may collect information from Your
                      device.
                    </ZIonText>
                    <ZIonText>
                      The information gathered by Mouseflow is held in
                      accordance with its Privacy Policy:{" "}
                      <a
                        href="https://mouseflow.com/privacy/"
                        rel="external nofollow noopener"
                        target="_blank"
                      >
                        https://mouseflow.com/privacy/
                      </a>
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>FreshDesk</strong>
                    </ZIonText>
                    <ZIonText>
                      FreshDesk is a customer support software. The service is
                      operated by Freshworks, Inc.
                    </ZIonText>
                    <ZIonText>
                      FreshDesk service may collect information from Your
                      Device.
                    </ZIonText>
                    <ZIonText>
                      The information gathered by FreshDesk is held in
                      accordance with its Privacy Policy:{" "}
                      <a
                        href="https://www.freshworks.com/privacy/"
                        rel="external nofollow noopener"
                        target="_blank"
                      >
                        https://www.freshworks.com/privacy/
                      </a>
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      <strong>Google Places</strong>
                    </ZIonText>
                    <ZIonText>
                      Google Places is a service that returns information about
                      places using HTTP requests. It is operated by Google
                    </ZIonText>
                    <ZIonText>
                      Google Places service may collect information from You and
                      from Your Device for security purposes.
                    </ZIonText>
                    <ZIonText>
                      The information gathered by Google Places is held in
                      accordance with the Privacy Policy of Google:{" "}
                      <a
                        href="https://www.google.com/intl/en/policies/privacy/"
                        rel="external nofollow noopener"
                        target="_blank"
                      >
                        https://www.google.com/intl/en/policies/privacy/
                      </a>
                    </ZIonText>
                  </li>
                </ul>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Children's Privacy
                </ZIonTitle>
                <ZIonText>
                  Our Service does not address anyone under the age of 13. We do
                  not knowingly collect personally identifiable information from
                  anyone under the age of 13. If You are a parent or guardian
                  and You are aware that Your child has provided Us with
                  Personal Data, please contact Us. If We become aware that We
                  have collected Personal Data from anyone under the age of 13
                  without verification of parental consent, We take steps to
                  remove that information from Our servers.
                </ZIonText>
                <ZIonText>
                  If We need to rely on consent as a legal basis for processing
                  Your information and Your country requires consent from a
                  parent, We may require Your parent's consent before We collect
                  and use that information.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Links to Other Websites
                </ZIonTitle>
                <ZIonText>
                  Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party's site. We strongly advise You
                  to review the Privacy Policy of every site You visit.
                </ZIonText>
                <ZIonText>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Changes to this Privacy Policy
                </ZIonTitle>
                <ZIonText>
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page.
                </ZIonText>
                <ZIonText>
                  We will let You know via email and/or a prominent notice on
                  Our Service, prior to the change becoming effective and update
                  the "Last updated" date at the top of this Privacy Policy.
                </ZIonText>
                <ZIonText>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </ZIonText>
                <ZIonTitle className="mt-4 ion-no-padding">
                  Contact Us
                </ZIonTitle>
                <ZIonText>
                  If you have any questions about this Privacy Policy, You can
                  contact us:
                </ZIonText>
                <ul>
                  <li>
                    <ZIonText>
                      By email:{" "}
                      <ZIonRouterLink
                        href={`mailto:${CONSTANTS.COMPANY_DETAILS.ADDRESS_LINK}`}
                        rel="external nofollow noopener"
                        target="_blank"
                      >
                        {CONSTANTS.COMPANY_DETAILS.EMAIL}
                      </ZIonRouterLink>
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      By visiting this page on our website:{" "}
                      <ZIonRouterLink
                        href={CONSTANTS.COMPANY_DETAILS.CONTACT_LINK}
                        rel="external nofollow noopener"
                        target="_blank"
                      >
                        {CONSTANTS.COMPANY_DETAILS.CONTACT_LINK}
                      </ZIonRouterLink>
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      By phone number: {CONSTANTS.COMPANY_DETAILS.NUMBER}
                    </ZIonText>
                  </li>
                  <li>
                    <ZIonText>
                      By mail:{" "}
                      <ZIonRouterLink
                        href={CONSTANTS.COMPANY_DETAILS.ADDRESS_LINK}
                        rel="external nofollow noopener"
                        target="_blank"
                      >
                        {CONSTANTS.COMPANY_DETAILS.ADDRESS_LINK}
                      </ZIonRouterLink>
                    </ZIonText>
                  </li>
                </ul>
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

export default ZPrivacyPolicy;
