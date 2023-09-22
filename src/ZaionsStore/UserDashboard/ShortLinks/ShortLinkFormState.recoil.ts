import CONSTANTS from '@/utils/constants';
import { atom } from 'recoil';
import { ShortLinkType } from '@/types/AdminPanel/linksType';
import {
	FormMode,
	messengerPlatformsBlockEnum,
} from '@/types/AdminPanel/index.type';

export const NewShortLinkFormState = atom<ShortLinkType>({
	key: 'NewShortLinkFormState_key',
	default: {
		folderId: CONSTANTS.DEFAULT_VALUES.DEFAULT_FOLDER,
		shortUrl: {
			domain: CONSTANTS.DEFAULT_VALUES.DEFAULT_CUSTOM_DOMAIN,
		},
		type: messengerPlatformsBlockEnum.link,
		pixelIds: [],
		tags: [],
		formMode: FormMode.ADD,
	},
});
