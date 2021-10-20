// Karma12 configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// used for ng test in headless chrome
const process = require("process");

let opsys = process.platform;
if (opsys !== "win32" && opsys !== "win64") {
  process.env.CHROME_BIN = require("puppeteer").executablePath();
}

console.log("Platform: [%s]", opsys);

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-junit-reporter"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage"),
      reports: [
        "html",
        "json",
        "json-summary",
        "cobertura",
        "text",
        "text-summary",
      ],
      fixWebpackSourcePaths: true,
    },
    junitReporter: {
      outputDir: "./../coverage",
      outputFile: "junit.xml",
      useBrowserName: false,
    },
    reporters: ["progress", "kjhtml", "coverage-istanbul", "junit"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome", "ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: [
          "--no-sandbox", // required to run without privileges in docker
          "--disable-web-security",
          "--disable-setuid-sandbox",
          "--disable-gpu",
        ],
      },
    },
    singleRun: false,
    restartOnFileChange: true,
  });
};
