const path = require('path');
const { override,  addBabelPlugins } = require('customize-cra');
module.exports = override(
    ...addBabelPlugins(
        [
            'module-resolver',
            {
                root: ["./src"],
                alias: {
                    "@helpers": "./src/helpers",
                    "@pages": "./src/pages",
                    "@static": "./src/static",
                    "@widgets": "./src/widgets",
                    "@testUtils": './src/tests/utils',
                }
            }
        ],
    ),
);
