import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const title = req.query.title;
  if (req.method === 'GET') {
    return handleGET(title as string, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

async function handleGET(title: string, res: NextApiResponse) {
  let result;
  try {
    result = await prisma.word.findUnique({
      where: { title },
    });
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json({ error: 'Error: Word not found' });
    }
  } catch (error) {
    return res.status(500).json({ error });
  } finally {
    prisma.$disconnect();
  }
}
