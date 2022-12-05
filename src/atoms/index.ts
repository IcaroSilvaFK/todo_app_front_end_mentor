import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

type Todos = {
  id: string;
  content: string;
  active: boolean;
};

export const themeSelectedAtom = atom<'light' | 'dark'>('dark');

export const todosAtom = atomWithStorage<Todos[]>('@todos', []);

export const todosFiltredsAtom = atom<Todos[]>([]);
