import { create } from 'zustand';

interface UserState {
  userInfo: any;
  save: (details:any) => void;
  userInfoClear: () => void;
}

export const useInfoStore = create<UserState>((set) => ({
  userInfo: null,
  save: (details) => set(() => ({ userInfo: details  })),
  userInfoClear: () => set(() => ({ userInfo: null  }))
}));
