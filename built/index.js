"use strict";
const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);
(() => {
    buildSetup();
    startCreating();
})();
//# sourceMappingURL=index.js.map