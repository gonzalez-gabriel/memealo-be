import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/tests/unit/**/*.test.ts']
  },
  resolve: {
    alias: {
      auth: '/src/auth',
      quotes: '/src/quotes',
      lib: '/src/lib'
    }
  }
})
