import { client } from './client';

export async function getCryptids() {
  const response = await client
    .from('cryptiddetails')
    .select('*');

  return response.body;
}

export async function getAliens() {
  const response = await client
    .from('Aliens')
    .select('*');

  return response.body;
}

export async function getShips() {
  const response = await client
    .from('spaceships')
    .select('*');

  return response.body;
}