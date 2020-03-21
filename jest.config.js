// eslint-disable-next-line no-undef
module.exports = {
  roots: ["./src"],

  // Add TypeScript support
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  // Run special logic
  // setupFilesAfterEnv: [
  //   "@testing-library/react/cleanup-after-each",
  //   "@testing-library/jest-dom/extend-expect"
  // ],

  // Test files resolution pattern
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}