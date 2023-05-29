import { prisma } from '@/lib/db';
import { IVehicle } from '@/types/garage.types';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const {
    userId,
    garageId,
    imageId,
    category,
    name,
    color,
    model,
    distanceDriven,
  } = req.body;

  const createVehicle = await prisma.vehicle
    .create({
      data: {
        userId: userId,
        garageId: garageId,
        imageId: imageId,
        category: category,
        name: name,
        color: color,
        model: model,
        distanceDriven: distanceDriven,
      },
    })
    .catch((err) => {
      res.status(404).send(err);
    });

  res.status(200).send('Vehicle Created!');
});

export default router.handler({
  onError(err, req, res) {
    console.log(err);
    res.status(500).send('');
  },
});
