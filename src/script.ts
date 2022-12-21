import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const sampleData = {
  url: "http://example.com",
  description: "xxxxxx",
};

const main = async () => {
  const newLink = await prisma.link.create({
    data: {
      url: sampleData.url,
      description: sampleData.description,
    },
  });

  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
};

main()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    prisma.$disconnect;
  });
