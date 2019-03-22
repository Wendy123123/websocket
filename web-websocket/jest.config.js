module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/",
  collectCoverage: true, //true 开启默认格式的测试覆盖率报告 - 会降低效率
  coverageDirectory: "<rootDir>/tests/unit/collectCoverage",
  coverageReporters: ["html", "text-summary"],
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/index.js",
    "!src/router/index.js",
    "!**/node_modules/**"
  ]
};
