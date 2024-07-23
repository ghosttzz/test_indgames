import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // e2e options here
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  },
})