export interface IGarage {
  userId: string;
  name: string;
  garageColor: string;
  items: IItems[];
}

interface IItems {
  userId: string;
  garageId: string;
  category: string;
  name: string;
  weight: string;
  durability: number;
}
