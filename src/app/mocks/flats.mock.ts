import { IFlat } from '../interfaces/flat.interface';

export const mockFlats: IFlat[] = [
  {
    id: 0,
    adress: '17 rue d\' Ormesson Epinay sur Seine',
    x: 2.3079464,
    y: 48.9610279,
    easeWheelChair: true,
    easeBlind: true,
    easePartiallyBlind: true,
    easeDeaf: false,
    easeMental: false,
    easeElderlyPeople: false,
    easeAmputee: false,
    easeCare: false,
    description: 'Rampe d\'accès au batiment, ascenseur 4 personnes 200Kg.'
  },
  {
    id: 1,
    adress: '20 Bd de Beaublanc Limoges',
    x: 1.2417343,
    y: 45.8451011,
    easeWheelChair: false,
    easeBlind: false,
    easePartiallyBlind: false,
    easeDeaf: false,
    easeMental: true,
    easeElderlyPeople: false,
    easeAmputee: false,
    easeCare: false,
    description: 'Quartier calme avec de nombreux espace vert.'
  },
  {
    id: 2,
    adress: '293 rue garibaldi lyon',
    x: 2.2824057,
    y: 45.6859824,
    easeWheelChair: false,
    easeBlind: false,
    easePartiallyBlind: false,
    easeDeaf: false,
    easeMental: true,
    easeElderlyPeople: false,
    easeAmputee: false,
    easeCare: false,
    description: 'RDC accès directe par double portes depuis le hall, sas glissant.'
  },
  {
    id: 3,
    adress: '1 Place Saint-Pierre Le Mans',
    x: 0.1969619,
    y: 48.0076931,
    easeWheelChair: false,
    easeBlind: false,
    easePartiallyBlind: false,
    easeDeaf: false,
    easeMental: true,
    easeElderlyPeople: false,
    easeAmputee: false,
    easeCare: false,
    description: 'Apport domotique, douche orienté faible mobilité, présence médical proche.'
  },
  {
    id: 4,
    adress: '44 Av. Chomedey de Maisonneuve Troyes',
    x: 4.008928970922865,
    y: 48.298625556618376,
    easeWheelChair: false,
    easeBlind: false,
    easePartiallyBlind: false,
    easeDeaf: false,
    easeMental: true,
    easeElderlyPeople: false,
    easeAmputee: false,
    easeCare: false,
    description: 'Monte charge et accès dédier fautieuls de grande tailles / motorisés.'
  }
];