export interface IFlat {
  address: string;
  lat: number;
  lng: number;
  easeWheelChair: boolean;
  easeBlind: boolean;
  easePartiallyBlind: boolean;
  easeDeaf: boolean;
  easeMental: boolean;
  easeElderlyPeople: boolean;
  easeAmputee: boolean;
  easeCare: boolean;
  easeDoctor: boolean;
  easeMarket: boolean;
  description: string;
  email: string;
  url?: string;
}
