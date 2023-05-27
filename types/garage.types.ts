export interface IGarage {
  id: string;
  userId: string;
  name: string;
  items: IItems[];
  vehicle: IVehicle[];
}

export interface IItems {
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

export interface IVehicle {
  id: string;
  userId: string;
  garageId: string;
  image: {
    internalName: string;
  };
  category: string;
  name: string;
  color: string;
  model: string;
  distanceDriven: number;
}

export interface addToGarageProps {
  garageId: string;
  userId: string;
}
