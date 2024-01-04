import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "azyj2mfs",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});
