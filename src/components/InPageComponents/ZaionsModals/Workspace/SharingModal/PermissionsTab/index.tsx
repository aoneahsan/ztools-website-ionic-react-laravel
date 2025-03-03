/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from 'react';

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import {
  ZIonBadge,
  ZIonButton,
  ZIonCheckbox,
  ZIonCol,
  ZIonIcon,
  ZIonLabel,
  ZIonRow,
  ZIonText
} from '@/components/ZIonComponents';
import ZUserAvatarButton from '@/components/WorkspacesComponents/UserButton';
import { ProductLogo } from '@/assets/images';
import {
  checkmarkOutline,
  ellipsisHorizontalOutline,
  eyeOutline,
  pencilOutline,
  peopleOutline,
  sendOutline
} from 'ionicons/icons';
import { useZMediaQueryScale } from '@/ZaionsHooks/ZGenericHooks';
import classNames from 'classnames';

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
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

const ZPermissionsTab: React.FC = () => {
  const { isLgScale, isSmScale } = useZMediaQueryScale();
  return (
    <>
      <ZIonRow
        className={classNames({
          'mt-3 ion-align-items-center': true,
          'ps-3 pe-1': isLgScale,
          'px-1': !isLgScale
        })}>
        <ZIonCol
          sizeXl='6'
          sizeLg='6'
          sizeMd='5'
          sizeSm='5'
          sizeXs='4'>
          <ZIonLabel>Permissions</ZIonLabel>
        </ZIonCol>

        <ZIonCol>
          <ZIonRow>
            <ZIonCol>
              <ZIonIcon
                icon={eyeOutline}
                className='block mx-auto'
              />
              <ZIonText className='block ion-text-center text-sm'>
                View
              </ZIonText>
            </ZIonCol>
            <ZIonCol>
              <ZIonIcon
                icon={checkmarkOutline}
                className='block mx-auto'
              />
              <ZIonText className='block ion-text-center text-sm'>
                Approve
              </ZIonText>
            </ZIonCol>
            <ZIonCol>
              <ZIonIcon
                icon={pencilOutline}
                className='block mx-auto'
              />
              <ZIonText className='block ion-text-center text-sm'>
                Edit
              </ZIonText>
            </ZIonCol>
            <ZIonCol>
              <ZIonIcon
                icon={sendOutline}
                className='block mx-auto'
              />
              <ZIonText className='block ion-text-center text-sm'>
                Publish
              </ZIonText>
            </ZIonCol>
            <ZIonCol>
              <ZIonIcon
                icon={peopleOutline}
                className='block mx-auto'
              />
              <ZIonText className='block ion-text-center text-sm'>
                Admin
              </ZIonText>
            </ZIonCol>
          </ZIonRow>
        </ZIonCol>
      </ZIonRow>

      {/*  */}
      <ZIonRow
        className={classNames({
          'mt-1 ion-align-items-center': true,
          'ps-3 pe-1': isLgScale,
          'px-1': !isLgScale
        })}>
        <ZIonCol
          sizeXl='6'
          sizeLg='6'
          sizeMd='5'
          sizeSm='5'
          sizeXs='4'
          className='flex ion-align-items-center'>
          {isSmScale && (
            <ZUserAvatarButton
              className={classNames({
                'w-[10px] h-[10px]': true,
                'me-3': isLgScale,
                'me-1': !isLgScale
              })}
              userAvatar={ProductLogo}
              style={{ height: '35px', width: '35px' }}
            />
          )}

          <div className=''>
            <ZIonText
              className={classNames({
                flex: true,
                'ion-align-items-center': isLgScale,
                'flex-col ion-align-items-start': !isLgScale
              })}>
              <ZIonLabel className='text-sm font-bold'>
                Muhammad talha Irshad (you)
              </ZIonLabel>
              <ZIonBadge
                className={classNames({
                  'ms-2': isLgScale,
                  'ms-0': !isLgScale
                })}>
                TEAM
              </ZIonBadge>
            </ZIonText>
            <ZIonLabel
              className='block text-sm'
              color='medium'>
              talhaarshaad5@gmail.com
            </ZIonLabel>
          </div>
        </ZIonCol>

        <ZIonCol>
          <ZIonRow>
            <ZIonCol className='ion-text-center'>
              <ZIonCheckbox />
            </ZIonCol>
            <ZIonCol className='ion-text-center'>
              <ZIonCheckbox />
            </ZIonCol>
            <ZIonCol className='ion-text-center'>
              <ZIonCheckbox />
            </ZIonCol>
            <ZIonCol className='ion-text-center'>
              <ZIonCheckbox />
            </ZIonCol>
            <ZIonCol className='ion-text-center'>
              <ZIonCheckbox />
            </ZIonCol>
          </ZIonRow>
        </ZIonCol>
      </ZIonRow>
    </>
  );
};

export default ZPermissionsTab;
