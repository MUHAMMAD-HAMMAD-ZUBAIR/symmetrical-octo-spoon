import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '4bdbxde7',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
})