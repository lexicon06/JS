String.prototype.style=function(code=6){
tx = this.toLowerCase();
abc="abcdefghijklmnopqrstuvwxyz";
unicode=["ΛBÇĐΣFĠĦĮJҚŁMИΘPQЯŞŦU√ШXYZ",
"ลвсอεғgнเјκℓмหσρφяธтนงฬҳчż",
"ΛЪČĐΞҒĜĦΪĴЌĿMИΦPQЯŜŤŮ√ЩЖЧŻ",
"αвс∂εғgнιјκłмησρqяѕтυνωxчz",
"άвçđэƒģђıĵĸłмήǿρףяşтц√ώжγź",
"ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ"];
id=-1;while(id++<abc.length){ tx=tx.replace(eval("/"+abc[id]+"/gi"), unicode[code][id]);}return tx;}
