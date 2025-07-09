import { Rule } from '../types/types';

export const officialRules: Rule[] = [
  {
    id: 1,
    title: 'Audio obbligatorio',
    description: 'Il video deve avere l\'audio originale di Never Gonna Give You Up attivo e chiaramente udibile. Se è muto, disattivato o coperto da altri suoni, il rickroll è nullo.',
    icon: 'Volume2',
    examples: ['Audio originale chiaramente udibile', 'Volume adeguato per l\'ascolto'],
    forbidden: ['Video muto', 'Audio coperto da altri suoni', 'Volume troppo basso']
  },
  {
    id: 2,
    title: 'Video originale',
    description: 'È obbligatorio usare esclusivamente il video originale (1987) di Rick Astley. Sono vietati remix, parodie, tagli o versioni alternative.',
    icon: 'Play',
    examples: ['Video YouTube originale ufficiale', 'File .mp4 del video originale'],
    forbidden: ['Remix', 'Parodie', 'Versioni tagliate', 'Cover']
  },
  {
    id: 3,
    title: 'No Social Network',
    description: 'Rickroll eseguiti tramite video postati su TikTok, Instagram, Facebook, ecc. non sono validi. Sono ammessi solo link diretti.',
    icon: 'Ban',
    examples: ['Link diretto YouTube', 'File .mp4 diretto', 'Siti web personalizzati'],
    forbidden: ['Post TikTok', 'Stories Instagram', 'Post Facebook', 'Tweet con video']
  },
  {
    id: 4,
    title: 'Nessuna forzatura',
    description: 'Il bersaglio deve scegliere liberamente di cliccare: è vietato usare metodi coercitivi.',
    icon: 'Shield',
    examples: ['Click spontaneo su link', 'Apertura volontaria di file'],
    forbidden: ['Condivisione schermo forzata', 'Riproduzione automatica', 'Suoni fastidiosi']
  },
  {
    id: 5,
    title: 'Solo click volontario',
    description: 'È valido solo se il bersaglio clicca spontaneamente su un link, file o programma. Clic accidentali o forzati non contano.',
    icon: 'MousePointer',
    examples: ['Click intenzionale', 'Apertura consapevole'],
    forbidden: ['Click accidentali', 'Apertura forzata', 'Popup invasivi']
  },
  {
    id: 6,
    title: 'Modalità ammesse',
    description: 'Link camuffati, file eseguibili creativi, progetti apparentemente seri. Tutto ciò che induce volontariamente a cliccare.',
    icon: 'Zap',
    examples: ['Link camuffati via chat', 'File eseguibili creativi', 'Progetti seri camuffati'],
    forbidden: []
  },
  {
    id: 7,
    title: 'Vietati tentativi banali',
    description: 'Il rickroll deve essere intelligente e ben camuffato. Sono vietati nomi ovvi o link già visti.',
    icon: 'Brain',
    examples: ['Camuffamenti creativi', 'Nomi file convincenti', 'Link ben nascosti'],
    forbidden: ['rickroll.mp4', 'Link ovvi', 'Anteprime palesi']
  },
  {
    id: 8,
    title: 'Durata minima',
    description: 'Il bersaglio deve vedere/ascoltare almeno 1 secondo del video con audio attivo affinché sia valido.',
    icon: 'Clock',
    examples: ['Minimo 1 secondo di visione', 'Audio attivo durante la visione'],
    forbidden: ['Chiusura immediata', 'Skip istantaneo']
  },
  {
    id: 9,
    title: 'No spam di link',
    description: 'È vietato inviare più link casuali sperando che uno venga cliccato. Ogni rickroll deve essere studiato e unico.',
    icon: 'Target',
    examples: ['Approccio mirato', 'Link singolo ben studiato'],
    forbidden: ['Spam di link multipli', 'Tentativi casuali', 'Bombardamento di messaggi']
  },
  {
    id: 10,
    title: 'Fair Play obbligatorio',
    description: 'Nessun virus, malware, script invasivi o tecniche dannose. Il gioco deve rimanere sicuro, creativo e rispettoso.',
    icon: 'Heart',
    examples: ['Tecniche sicure', 'Creatività rispettosa', 'Gioco pulito'],
    forbidden: ['Virus', 'Malware', 'Script invasivi', 'Tecniche dannose']
  }
];