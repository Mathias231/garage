import { prisma } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
  const { garageId } = req.query;

  if (typeof garageId !== 'string')
    return res.status(400).send('postId is not a string.');

  const getGarage = prisma.garage
    .findFirst({
      where: {
        id: garageId,
      },
      include: {
        items: {
          select: {
            id: true,
            name: true,
            durability: true,
            weight: true,
            dateCreated: true,
            dateUpdated: true,
          },
        },
      },
    })
    .then((garage) => {
      res.status(200).send(garage);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

export default router.handler({
  onError(err, req, res) {
    console.log(err);
    res.status(500).send('');
  },
});
