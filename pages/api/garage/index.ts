import { prisma } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const { userId, garageName, color } = req.body;

  const createGarage = await prisma.garage
    .create({
      data: {
        userId: userId,
        name: garageName,
        garageColor: color,
      },
    })
    .catch((err) => {
      res.status(404).send(err);
    });

  res.status(200).send('Garage Created!');
});

export default router.handler({
  onError(err, req, res) {
    console.log(err);
    res.status(500).send('');
  },
});
