// Core Imports

// Packages Imports
import { atom } from "recoil";

// Data

// Custom Imports
import { ZaionsHpCPDataType } from "@/types/ZaionsHPBCPType";

export const ZaionsHpCPData = atom<ZaionsHpCPDataType[]>({
  key: "ZaionsHpCPData_Key",
  default: [],
});
