export interface IGarage {
  id: string;
  userId: string;
  name: string;
  items: IItems[];
}

interface IItems {
  id: string;
  userId: string;
  garageId: string;
  category: string;
  name: string;
  weight: string;
  durability: number;
}
