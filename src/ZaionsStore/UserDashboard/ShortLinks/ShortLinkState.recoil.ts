import { atom, atomFamily, selector } from 'recoil';

// Data
// import { ZaionsShortLinkData } from '@/data/UserDashboard/ShortLinksData';

import { ShortLinkType } from '@/types/AdminPanel/linksType';

// Recoil state for storing all the short links fetch from backend.
export const ShortLinksRStateAtom = atom<ShortLinkType[] | undefined>({
	key: 'ShortLinksRStateAtom_key',
	default: [],
});

// export const ShortLinkRStateAtomFamily = atomFamily<ShortLinkType, string>({
// 	key: 'ShortLink_key',
// 	default: {},
// });
