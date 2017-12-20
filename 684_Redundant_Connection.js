

var findRedundantConnection = function(edges) {
    var parent = [];
    for(var i =0 ;i<2001;++i) parent.push(i);
    for(var j =0 ;j<edges.length;++j){
        var f = edges[j][0], t = edges[j][1];
        if(find(parent,f) == find(parent,t)) return edges[j];
        else parent[find(parent,f)] = find(parent, t);
    }
    return [];
};
var find = function(parent, f){
    if(f != parent[f]){
        parent[f] = find(parent,parent[f]);
    }
    return parent[f];
}