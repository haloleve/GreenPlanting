const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    configureWebpack: {
        devServer: {
            overlay: {
                warnings: false,
                errors: false
            }
        }
    },
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("network", resolve("src/network"))
            .set("plugin", resolve("src/plugin"))
            .set("views", resolve("src/views"))
            .set("store", resolve("src/store"));
    }
};