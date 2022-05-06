import { client } from './client';

export default async function getCryptids() {
  const response = await client
    .from('cryptiddetails')
    .select('*');

  return response.body;
}
