import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "pmh9856y",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skSJYr3rAww5i7tjKJlhy5xZczeroIuHawde4iDXpJ3tTtI5RKTBeQcwCCFOLy67vVPHwbTkSaYnCaDTNdppDuKxhZzqmo2IAi52B1h1D7xTfRBBFzhaNOzhLoZnAi1fZ1GTVM5DzB6OTRq4mZhC1Rp05pLzvAKQYMhYVBa38txmPxDzd3Li",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
