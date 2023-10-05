import React from 'react';

import {
	ZIonButton,
	ZIonContent,
	ZIonFooter,
	ZIonHeader,
	ZIonTitle,
} from '@/components/ZIonComponents';
import ZIonPage from '@/components/ZIonPage';

const ChartsExamples: React.FC = () => {
	return (
		<ZIonPage>
			<>
				<ZIonHeader>
					<ZIonTitle>Charts</ZIonTitle>
				</ZIonHeader>
				<ZIonContent>
					<ZIonButton>View Chart</ZIonButton>
					<ZIonTitle>
						We will use tanstack react charts to display charts in our app.
					</ZIonTitle>
				</ZIonContent>
				<ZIonFooter>
					<ZIonTitle>Charts Okay :)</ZIonTitle>
				</ZIonFooter>
			</>
		</ZIonPage>
	);
};

export default ChartsExamples;
