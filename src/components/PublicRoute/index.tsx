import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import ZFallbackIonSpinner from '@/components/CustomComponents/FallbackSpinner';
import { ZRoutesRedirects } from '@/utils/constants/RoutesConstants';
import { IsAuthenticatedRStateSelector } from '@/ZaionsStore/UserAccount/index.recoil';
import { IonRedirect, IonRoute } from '@ionic/react';

const PublicRoute = ({ Component, restricted = true, ...rest }: any) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Suspense fallback={<ZFallbackIonSpinner />}>
      <PublicRouteAsync
        Component={Component}
        restricted={restricted}
        {...rest}
      />
    </Suspense>
  );
};
const PublicRouteAsync = ({ Component, restricted, ...rest }: any) => {
  const loggedIn = useRecoilValue(IsAuthenticatedRStateSelector);

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <IonRoute
      {...rest}
      render={props =>
        loggedIn && restricted ? (
          <IonRedirect to={ZRoutesRedirects.AUTHENTICATED_USER_REDIRECT} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
