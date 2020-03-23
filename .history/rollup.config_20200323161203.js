import { uglify } from "rollup-plugin-uglify"
// import eslint from "rollup-plugin-eslint"
import babel from "rollup-plugin-babel"

export default () => {
  return {
    input: './src/main.js',
    output: {
      file: './build/git-revision.min.js',
      format: 'umd',
      name: 'git-revision'
    },
    plugins: [
      // eslint({
      //   throwOnError: true,
      //   throwOnWarning: true,
      //   include: ["src/**"],
      //   exclude: ["node_modules/**"]
      // }),
      babel({
        exclude: "node_modules/**" // only transpile our source code
      }),
      uglify()
    ]
  }
}