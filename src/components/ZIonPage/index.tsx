// Core Imports
import React, { ReactNode } from 'react';

// Packages Imports
import { IonPage } from '@ionic/react';
import classNames from 'classnames';

// Custom Imports

// Global Constants
import { CONTENT_ID } from '@/utils/constants';

// Types
type ZaionsIonPageType = {
	children: ReactNode | ReactNode[];
	className?: string;
	id?: string;
	pageTitle?: string;
};

// Functional Component
const ZIonPage: React.FC<ZaionsIonPageType> = ({
	id,
	children,
	className,
	pageTitle,
}) => {
	return (
		<>
			<IonPage
				id={id ? id : CONTENT_ID}
				// className={`${className}`}
				className={classNames(className)}
			>
				{/* <ZaionsRHelmet title={pageTitle} /> */}
				{children}
			</IonPage>
		</>
	);
};

export default ZIonPage;
