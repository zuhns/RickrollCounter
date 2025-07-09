import { RickrollEntry } from '../types/types';

export const hallOfFameEntries: RickrollEntry[] = [
  {
    id: '1',
    perpetrator: 'Zuhns',
    victim: 'John',
    description: 'Creato un finto aggiornamento software che quando cliccato apriva il video di Rick Astley',
    date: '2024-01-15',
    method: 'File eseguibile camuffato',
    creativity: 5,
    timestamp: new Date('2024-01-15T14:30:00')
  },
  {
    id: '2',
    perpetrator: 'John',
    victim: 'Zuhns',
    description: 'Inviato un link apparentemente serio su un articolo di tecnologia che reindirizzava al video',
    date: '2024-01-20',
    method: 'Link camuffato',
    creativity: 4,
    timestamp: new Date('2024-01-20T10:15:00')
  },
  {
    id: '3',
    perpetrator: 'Zuhns',
    victim: 'John',
    description: 'Creato un QR code per un progetto di lavoro che portava al rickroll',
    date: '2024-01-25',
    method: 'QR Code camuffato',
    creativity: 5,
    timestamp: new Date('2024-01-25T16:45:00')
  },
  {
    id: '4',
    perpetrator: 'John',
    victim: 'Zuhns',
    description: 'Nascosto il video in una presentazione PowerPoint durante una demo',
    date: '2024-02-01',
    method: 'Presentazione camuffata',
    creativity: 4,
    timestamp: new Date('2024-02-01T11:20:00')
  },
  {
    id: '5',
    perpetrator: 'Zuhns',
    victim: 'John',
    description: 'Creato un finto sito di documentazione tecnica che dopo 3 secondi reindirizzava al video',
    date: '2024-02-10',
    method: 'Sito web camuffato',
    creativity: 5,
    timestamp: new Date('2024-02-10T09:30:00')
  }
];