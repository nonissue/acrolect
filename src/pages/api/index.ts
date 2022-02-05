import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    return handleGET(res);
  } else if (req.method === 'POST') {
    return handlePOST(req, res);
  } else {
    return res.status(500).json({
      error: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};

async function handleGET(res: NextApiResponse) {
  let result;
  try {
    result = await prisma.word.findMany({});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }

  return res.status(200).json(result);
}

// - [ ] fetch definition IF MISSING after create, then update
// - [x] handle collision
async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { title, definition, published, publishedDate } = req.body;

  const formattedDate = publishedDate ? new Date(publishedDate) : new Date();

  let result;

  try {
    result = await prisma.word.create({
      data: {
        title: title.toLowerCase(),
        definition,
        published,
        publishedDate: formattedDate,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return res
          .status(422)
          .json({ code: 422, message: 'Error: Word already exists' });
      } else {
        console.log(error);
        return res.status(500).json(error);
      }
    } else {
      throw error;
    }
  }

  return res.status(201).json(result);
}

export default handler;
