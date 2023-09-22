import {
	PixelAccountType,
	PixelPlatformsEnum,
} from '@/types/AdminPanel/linksType';

export const PixelAccountsData: PixelAccountType[] = [
	{
		id: '1',
		pixelId: 'facebook34343323',
		platform: PixelPlatformsEnum.facebook,
		title: 'facebook',
		createAt: 'Nov 29, 2022',
		updatedAt: undefined,
	},
	{
		id: '2',
		pixelId: 'google_ads',
		platform: PixelPlatformsEnum.google_ads,
		title: 'google_ads',
		createAt: 'Nov 2, 2022',
		updatedAt: 'Nov 29, 2022',
	},
];
