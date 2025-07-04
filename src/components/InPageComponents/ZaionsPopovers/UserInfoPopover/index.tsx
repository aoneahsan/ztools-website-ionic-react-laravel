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
  ZIonCol,
  ZIonRow,
  ZIonText
} from '@/components/ZIonComponents';
import { ProductLogo } from '@/assets/images';
import ZUserAvatarButton from '@/components/WorkspacesComponents/UserButton';

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
interface ZUserInfoPopoverInterface {
  showBadges: boolean;
}

/**
 * Functional Component
 * About: (Info of component here...)
 * @type {*}
 * */

const ZUserInfoPopover: React.FC<ZUserInfoPopoverInterface> = ({
  showBadges = false
}) => {
  return (
    <ZIonRow className='px-2 my-2 ion-align-items-center'>
      {/* User avatar col */}
      <ZIonCol size='max-content'>
        <ZUserAvatarButton
          className='zaions__w50px zaions__h50px'
          userAvatar={ProductLogo}
        />
      </ZIonCol>

      {/* User info col */}
      <ZIonCol>
        <ZIonText className='block'>Muhammad Talha (you)</ZIonText>
        <ZIonText className='block zaions__fs_13'>
          talhaworking5@gmail.com
        </ZIonText>
      </ZIonCol>

      {showBadges && (
        <ZIonCol
          size='12'
          className='flex gap-2 ps-5'>
          <ZIonBadge className='ms-4'>Team</ZIonBadge>
          <ZIonBadge color='secondary'>Company owner</ZIonBadge>
        </ZIonCol>
      )}

      <ZIonCol
        size='12'
        className='px-3 py-3 mt-2 border-top'>
        <ZIonText className='block zaions__fs_13'>last seen: just now</ZIonText>
      </ZIonCol>
    </ZIonRow>
  );
};

export default ZUserInfoPopover;
