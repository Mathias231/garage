import { prisma } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { z } from 'zod';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.delete(async (req, res) => {
  const vehicleId = z.string().parse(req.query.vehicleId);

  if (typeof vehicleId !== 'string')
    return res.status(400).send('VehicleId is not a string.');

  const deleteVehicle = await prisma.vehicle.delete({
    where: {
      id: vehicleId,
    },
  });

  res.status(200).send('Success!');
});

export default router.handler({
  onError(err, req, res) {
    console.log(err);
    res.status(500).send('');
  },
});
