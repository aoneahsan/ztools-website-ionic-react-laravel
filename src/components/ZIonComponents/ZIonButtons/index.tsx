// Core Import
import React, { ReactNode } from 'react';

// Packages Import
import { IonButtons } from '@ionic/react';

// Type
import {
	ZIonColorType,
	ZIonModeType,
	ZIonTargetType,
} from '@/types/zaionsAppSettings.type';
type ZIonButtonType = {
	children?: ReactNode;
	className?: string;
	color?: ZIonColorType;
	disabled?: boolean;
	download?: string;
	expand?: 'block' | 'full';
	fill?: 'clear' | 'default' | 'outline' | 'solid';
	mode?: ZIonModeType;
	size?: 'default' | 'large' | 'small';
	type?: 'button' | 'reset' | 'submit';
	shape?: 'round';
	routerLink?: string;
	id?: string;
	slot?: 'end' | 'start' | string;
	title?: string;
	target?: ZIonTargetType;
	value?: string | number | string[] | number[];
	style?: {
		[key: string]: unknown;
	};
};
const ZIonButtons = (props: ZIonButtonType) => {
	return <IonButtons {...props}>{props.children}</IonButtons>;
};
export default ZIonButtons;
