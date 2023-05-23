import { prisma } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const { userId, garageId, name, weight, durability } = req.body;

  const createItem = await prisma.items
    .create({
      data: {
        userId: userId,
        garageId: garageId,
        name: name,
        weight: weight,
        durability: durability,
      },
    })
    .catch((err) => {
      res.status(404).send(err);
    });

  res.status(200).send('Item Created!');
});

export default router.handler({
  onError(err, req, res) {
    console.log(err);
    res.status(500).send('');
  },
});
