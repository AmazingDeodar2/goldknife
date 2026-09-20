const ARG={
 key:"goldenknife_arg_v07",
 load(){try{let s=JSON.parse(localStorage.getItem(this.key)||"{}");return {flags:s.flags||{},visited:s.visited||{},searches:s.searches||[]}}catch(e){return {flags:{},visited:{},searches:[]}}},
 save(s){try{localStorage.setItem(this.key,JSON.stringify(s))}catch(e){}},
 flag(k,v=true){let s=this.load();s.flags[k]=v;this.save(s)},
 has(k){return !!this.load().flags[k]},
 visit(k){let s=this.load();s.visited[k]=(s.visited[k]||0)+1;this.save(s)},
 reset(){localStorage.removeItem(this.key)},
 searched(q){let s=this.load();s.searches.unshift(q);s.searches=[...new Set(s.searches)].slice(0,12);this.save(s)}
};