/* eslint-disable no-unused-vars */
function renameFiles(files) {
    let map ={};
    let n=0;
    for (let i=0; i<files.length; i++){
        if(!map[files[i]]){
            map[files[i]] =1;
            
        }
        else {
            n++
            
            let nam=files[i]+`(${n})`
            if(nam in map){
                n++;
                files[i]+=`(${n})`

            }
            else files[i] =nam
        }
    }
    return files;
}
console.log(renameFiles([
        'a(1)',
        'a(6)',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
      ]));