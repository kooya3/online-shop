import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from "./schemas/schema"

export default defineConfig({
  name: 'default',
  title: 'e-commerce',

  projectId: 'shfoncgj',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
