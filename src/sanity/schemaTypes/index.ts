import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'HeroSection',
      type: 'document',
      title: 'Hero Section',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        }
      ],
    },
  ],
  
}
