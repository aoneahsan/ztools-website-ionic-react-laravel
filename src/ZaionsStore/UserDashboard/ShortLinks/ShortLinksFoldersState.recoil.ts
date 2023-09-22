import { FolderInterface } from 'types/AdminPanel/linksType/index';
// Packages Imports
import { atom } from 'recoil';

// Custom
// Type
import { LinkFolderType } from '@/types/AdminPanel/linksType';

// Data

// Recoil state for storing short links folder data.
export const ShortLinksFolderRStateAtom = atom<LinkFolderType[]>({
	key: 'ShortLinksFolderRStateAtom_key',
	default: [],
});
