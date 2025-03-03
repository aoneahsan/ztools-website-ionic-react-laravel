/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from 'react';

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */
import { menuController } from '@ionic/core/components';
import { useRouteMatch } from 'react-router';
import classNames from 'classnames';
import {
  calculatorOutline,
  chevronForwardOutline,
  closeOutline,
  documentTextOutline,
  logoCss3,
  textOutline
} from 'ionicons/icons';

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import {
  ZIonButton,
  ZIonContent,
  ZIonGrid,
  ZIonHeader,
  ZIonIcon,
  ZIonImg,
  ZIonItem,
  ZIonList,
  ZIonMenu,
  ZIonRouterLink,
  ZIonText
} from '@/components/ZIonComponents';

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */
import { useZMediaQueryScale } from '@/ZaionsHooks/ZGenericHooks';

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */
import CONSTANTS from '@/utils/constants';
import ZaionsRoutes from '@/utils/constants/RoutesConstants';

/**
 * Style files Imports go down
 * ? Import of style sheet is a style import
 * */

/**
 * Images Imports go down
 * ? Import of images like png,jpg,jpeg,gif,svg etc. is a Images Imports import
 * */
import { ProductLogoPng2 } from '@/assets/images';

/**
 * Component props type go down
 * ? Like if you have a type for props it should be please Down
 * */

/**
 * Functional Component
 * About: (Info of component here...)
 * @type {*}
 * */

const ZAppSideMenu: React.FC<{
  pageId: string;
}> = ({ pageId }) => {
  // #region custom hooks
  const {
    isAboveXlScale,
    isAboveLgScale,
    isXlScale,
    isLgScale,
    isMdScale,
    isSmScale
  } = useZMediaQueryScale();
  // #endregion

  // #region checking the route.
  const isPercentageCalculatorPage = useRouteMatch(
    ZaionsRoutes.percentageCalculator
  )?.isExact;

  const isWordCounterPage = useRouteMatch(ZaionsRoutes.wordCounter)?.isExact;

  const isCSSpecificityCalculatorPage = useRouteMatch(
    ZaionsRoutes.cssSpecificityCalculator
  )?.isExact;
  // #endregion

  return (
    <ZIonMenu
      side='start'
      contentId={pageId}
      menuId={CONSTANTS.MENU_IDS.APP_SIDE_MENU_ID}
      style={
        !isMdScale && isSmScale
          ? {}
          : {
              '--width': isAboveXlScale
                ? '25%'
                : !isAboveXlScale && isXlScale && !isMdScale
                  ? '23rem'
                  : isMdScale && !isSmScale
                    ? '45%'
                    : isSmScale
                      ? '339px'
                      : ''
            }
      }>
      <ZIonHeader>
        <div className='flex py-2 ion-align-items-center ion-justify-content-between pe-1'>
          <ZIonRouterLink routerLink={ZaionsRoutes.HomeRoute}>
            <ZIonImg
              src={ProductLogoPng2}
              className='w-[10.5rem] ms-1'
            />
          </ZIonRouterLink>

          <ZIonButton
            fill='clear'
            className='overflow-hidden rounded-full ion-no-margin ion-no-padding w-9 h-7'
            onClick={async () => {
              await menuController.close(CONSTANTS.MENU_IDS.APP_SIDE_MENU_ID);
            }}>
            <ZIonIcon
              icon={closeOutline}
              className='w-7 h-7'
            />
          </ZIonButton>
        </div>
      </ZIonHeader>

      <ZIonContent>
        <ZIonGrid
          className={classNames({
            'py-3': true,
            'px-0': isLgScale
          })}>
          <ZIonList
            lines='none'
            className={classNames({
              'px-1': isAboveLgScale
            })}>
            {/* Percentage calculator */}
            <ZIonItem
              className='cursor-pointer ion-activatable'
              color={isPercentageCalculatorPage ? 'light' : undefined}
              routerLink={ZaionsRoutes.percentageCalculator}>
              <ZIonIcon
                slot='start'
                icon={calculatorOutline}
                className='me-1'
                color='primary'
              />
              <ZIonText
                className='mt-1 tracking-wider'
                color={isPercentageCalculatorPage ? 'primary' : undefined}>
                Percentage Calculator
              </ZIonText>

              <ZIonIcon
                slot='end'
                icon={chevronForwardOutline}
              />
            </ZIonItem>

            {/* Word counter */}
            <ZIonItem
              className='cursor-pointer ion-activatable'
              color={isWordCounterPage ? 'light' : undefined}
              routerLink={ZaionsRoutes.wordCounter}>
              <ZIonIcon
                slot='start'
                icon={textOutline}
                className='me-2'
                color='primary'
              />
              <ZIonText
                className='mt-1 tracking-wider'
                color={isWordCounterPage ? 'primary' : undefined}>
                Word counter
              </ZIonText>

              <ZIonIcon
                slot='end'
                icon={chevronForwardOutline}
              />
            </ZIonItem>

            {/* Css Specificity Calculator */}
            <ZIonItem
              className='cursor-pointer ion-activatable'
              color={isCSSpecificityCalculatorPage ? 'light' : undefined}
              routerLink={ZaionsRoutes.cssSpecificityCalculator}>
              <ZIonIcon
                slot='start'
                icon={logoCss3}
                className='me-2'
                color='primary'
              />
              <ZIonText
                className='mt-1 tracking-wider'
                color={isCSSpecificityCalculatorPage ? 'primary' : undefined}>
                Css Specificity Calculator
              </ZIonText>

              <ZIonIcon
                slot='end'
                icon={chevronForwardOutline}
              />
            </ZIonItem>

            {/*  Lorem Ipsum Generator  */}
            <ZIonItem
              className='cursor-pointer ion-activatable'
              color={isCSSpecificityCalculatorPage ? 'light' : undefined}
              routerLink={ZaionsRoutes.loremIpsumGenerator}>
              <ZIonIcon
                slot='start'
                icon={documentTextOutline}
                className='me-2'
                color='primary'
              />
              <ZIonText
                className='mt-1 tracking-wider'
                color={isCSSpecificityCalculatorPage ? 'primary' : undefined}>
                Lorem Ipsum Generator
              </ZIonText>

              <ZIonIcon
                slot='end'
                icon={chevronForwardOutline}
              />
            </ZIonItem>
          </ZIonList>
        </ZIonGrid>
      </ZIonContent>
    </ZIonMenu>
  );
};

export default ZAppSideMenu;
