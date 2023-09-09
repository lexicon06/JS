String.prototype.style=function(code=6){
const tx = this.toLowerCase();
const abc="abcdefghijklmnopqrstuvwxyz";
const unicode=["ΛBÇĐΣFĠĦĮJҚŁMИΘPQЯŞŦU√ШXYZ",
"ลвсอεғgнเјκℓмหσρφяธтนงฬҳчż",
"ΛЪČĐΞҒĜĦΪĴЌĿMИΦPQЯŜŤŮ√ЩЖЧŻ",
"αвс∂εғgнιјκłмησρqяѕтυνωxчz",
"άвçđэƒģђıĵĸłмήǿρףяşтц√ώжγź",
"ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ"];
var id=-1;
   while(id++<abc.length){
    tx=tx.replace(eval("/"+abc[id]+"/gi"), unicode[code][id]);
  }
return tx;
}
