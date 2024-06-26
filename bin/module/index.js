const fs = require("fs");
const path = require("path");
const cwd = process.cwd();
const colours = require('../conlor.js');
const compile = require('./compile/index.js');
const addBlock = require('./add-block/index.js');
const addWidget = require('./add-widget/index.js');

var module_dirname = null;
var mode = null;

switch (process.argv[3]) {
    case ".":
    case "./": {
        module_dirname = path.resolve(cwd, process.argv[3]);
        break;
    }
    default: {

        const moduleName = process.argv[3];
        if (moduleName && !fs.existsSync(path.join(cwd, "include", "Module", moduleName))) {
            console.log("cant find module ", moduleName);
            process.exit(1);
        }

        module_dirname = moduleName ? path.join(cwd, "include", "Module", moduleName) : null;

        break;
    }
}


console.log(`Module directory: ${colours.fg.green} ${module_dirname} ${colours.reset}`);
let isCompile = false;




switch (process.argv[4]) {
    case "--watch": {
        mode = "watch";
        isCompile = true;
        break;
    }
    case "add-block": {
        isCompile = false;
        addBlock.start(module_dirname);
        break;
    }
    case "add-widget": {
        isCompile = false;
        addWidget.start(module_dirname);
        break;
    }
    default: {
        mode = "build";
        isCompile = true;
        break;
    }
}


if (isCompile) {

    console.log(`Compile Mode: ${colours.fg.green} ${mode} ${colours.reset}`);
    compile.passArgument(module_dirname, mode);
}