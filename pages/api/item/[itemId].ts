import { prisma } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { z } from 'zod';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.delete(async (req, res) => {
  const itemId = z.string().parse(req.query.itemId);

  if (typeof itemId !== 'string')
    return res.status(400).send('ItemId is not a string.');

  const deleteItem = await prisma.items.delete({
    where: {
      id: itemId,
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
