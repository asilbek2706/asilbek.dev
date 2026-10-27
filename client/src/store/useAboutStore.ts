import { create } from 'zustand';
import type { AboutData } from '../types';

interface AboutStore {
    aboutInfo: AboutData | null;
    setAboutInfo: (info: AboutData) => void;
}

export const useAboutStore = create<AboutStore>((set) => ({
    aboutInfo: null,
    setAboutInfo: (info: AboutData) => set({ aboutInfo: info }),
}));