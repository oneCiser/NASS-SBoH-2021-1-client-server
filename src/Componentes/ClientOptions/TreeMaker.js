function findWhere(array, key, value) {
    var t = 0; // t is used as a counter
    while (t < array.length && array[t][key] !== value) { t++; }; 

    if (t < array.length) {
        return array[t]
    } else {
        return false;
    }
}



export default function makeTree(_array){
    var tree = []
    for (let i = 0; i < _array.length; i++) {
        var path = _array[i].url.split('/');
        var currentLevel = tree;
        var parent = null
        for (let j = 0; j < path.length; j++) {
            var part = path[j];
            var tmpPart = findWhere(currentLevel, 'name', part);
            if (tmpPart) {
                currentLevel = tmpPart.children;
                
            } else {
                tmpPart = {
                    name: part,
                    children: [],
                    // files:[],
                    parent: null
                }
                currentLevel.push(tmpPart);
                currentLevel = tmpPart.children;
                tmpPart.parent = parent;
                
            }
            if(j == path.length - 1){
                tmpPart.children.push(_array[i]);
            }
            
            parent = tmpPart;
        }
        
    }
    return {
        name: "Home",
        children: tree
    };
}
