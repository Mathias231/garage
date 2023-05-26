import { prisma } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import formidable from 'formidable';
import { formidableParseAsync } from '@/util/formidable-async';
const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir: 'public/img',
    keepExtensions: true,
  });

  let { files } = await formidableParseAsync(req, form);
  let file: formidable.File;

  if (Array.isArray(files.image)) {
    file = files.image[0];
  } else {
    file = files.image;
  }

  if (!file.mimetype?.startsWith('image')) {
    return res.status(400).send('Invalid file type');
  }

  const response = await prisma.image.create({
    data: {
      name: file.originalFilename || file.newFilename,
      internalName: file.newFilename,
      path: file.filepath,
    },
  });

  res.status(200).send({
    imageId: response.id,
  });
});

export default router.handler({
  onError(err, req, res) {
    console.log(err);
    res.status(500).send('');
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};
