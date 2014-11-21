var path = require('path');
global.mrequire = function(filePath){
    return require(path.join(process.cwd(), 'js/' + filePath));
};
global.chai = require('chai');
global.expect = global.chai.expect;
global.chai.should();
