import { create } from 'zustand';

interface CompanyDetailsState {
  companyInfo: any;
  saveCompayInfo: (details:any) => void;
  companyInfoClear:() => void;
}

export const useCompanyDetailsStore = create<CompanyDetailsState>((set) => ({
  companyInfo: null,
  saveCompayInfo: (_companyInfo) => set(() => ({ companyInfo: _companyInfo  })),
  companyInfoClear: () => set(() => ({ companyInfo: null  }))
}));
