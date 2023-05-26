import { prisma } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const { userId, garageName } = req.body;
  console.log(userId, garageName);
  const createGarage = await prisma.garage.create({
    data: {
      userId: userId,
      name: garageName,
      dateCreated: new Date(),
      dateUpdated: new Date(),
    },
  });

  res.status(200).send('Garage Created!');
});

router.get(async (req, res) => {
  const getGarage = await prisma.garage
    .findFirst({
      include: {
        items: {
          select: {
            id: true,
            userId: true,
            garageId: true,
            imageId: true,
            image: {
              select: {
                internalName: true,
              },
            },
            name: true,
            category: true,
            durability: true,
            weight: true,
            dateCreated: true,
            dateUpdated: true,
          },
        },
        Vehicle: {
          select: {
            id: true,
            garageId: true,
            userId: true,
            name: true,
            category: true,
            color: true,
            dateCreated: true,
            dateUpdated: true,
          },
        },
      },
    })
    .catch((err) => {
      res.status(404).send(err);
    });

  res.status(200).send(getGarage);
});

export default router.handler({
  onError(err, req, res) {
    console.log(err);
    res.status(500).send('');
  },
});
