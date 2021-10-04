const sharp = require('sharp');
const fs = require('fs');
const path =  require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images/');

if(! fs.existsSync(destination)) {
    fs.mkdirSync(destination, {recursive : true});
}

// fs.readdirSync(target).forEach(image => {

    
//     sharp(`${target}/${image}`)
//         .resize(800)
//         .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
//             .slice(0, -1)
//             .join('.')}-large.jpg`));
    
//     sharp(`${target}/${image}`)
//         .resize(480)
//         .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
//             .slice(0, -1)
//             .join('.')}-small.jpg`));

// })

_getAllFilesFromFolder = function(dir) {

    var results = [];
    
    fs.readdirSync(dir).forEach(function(file) {
        
        file = dir+'/'+file;
        var stat = fs.statSync(file);
        
        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);
        
    });
    
    return results;
    
};

_getAllFilesFromFolder(target).forEach(file => {
    filepath = file.split('\\').slice(-1).join().split('/').slice(-2).join("/");
    fileName = filepath.split('.')
        .slice(0, -1)
        .join('.');
    sharp(file)
        .resize(800)
        .toFile(path.resolve(__dirname, `${destination}/${fileName}-large.jpg`));
    
    sharp(file)
        .resize(480)
        .toFile(path.resolve(__dirname, `${destination}/${fileName}-small.jpg`));
});