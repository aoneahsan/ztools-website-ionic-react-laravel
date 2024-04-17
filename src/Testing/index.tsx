// Core Import
import React from 'react';

// Packages Import
import { IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { chevronUpOutline, homeOutline } from 'ionicons/icons';

// Custom Import
import { ZIonIcon } from '@/components/ZIonComponents';
import ZaionsRoutes from '@/utils/constants/RoutesConstants';

const TestingPackagesAndLogic: React.FC = () => {
  return (
    <>
      <IonFab
        vertical='bottom'
        horizontal='end'>
        <IonFabButton>
          <ZIonIcon icon={chevronUpOutline} />
        </IonFabButton>
        <IonFabList side='top'>
          <IonFabButton
            routerLink={ZaionsRoutes.HomeRoute}
            color='primary'>
            <ZIonIcon icon={homeOutline} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  );
};

export default TestingPackagesAndLogic;
