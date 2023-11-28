import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
<<<<<<< HEAD
})
=======
})
>>>>>>> 18dc1b42682303513fdea878079ee71774801d9c
