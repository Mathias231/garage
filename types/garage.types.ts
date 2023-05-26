export interface IGarage {
  id: string;
  userId: string;
  name: string;
  items: IItems[];
  vehicle: IVehicle[];
}

interface IItems {
  id: string;
  userId: string;
  garageId: string;
  image: {
    internalName: string;
  };
  category: string;
  name: string;
  weight: string;
  durability: number;
}

interface IVehicle {
  id: string;
  userId: string;
  garageId: string;
  category: string;
  name: string;
  color: string;
  model: string;
  distanceDriven: number;
}
