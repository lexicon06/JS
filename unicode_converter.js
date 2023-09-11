//Created by Pablo Ignacio Santillan

String.prototype.style=function(code=4){
const tx = this.toLowerCase();
const abc="abcdefghijklmnopqrstuvwxyz";
const unicode=["ΛBÇĐΣFĠĦĮJҚŁMИΘPQЯŞŦU√ШXYZ",
"ลвсอεғgнเјκℓмหσρφяธтนงฬҳчż",
"ΛЪČĐΞҒĜĦΪĴЌĿMИΦPQЯŜŤŮ√ЩЖЧŻ",
"αвс∂εғgнιјκłмησρqяѕтυνωxчz",
"άвçđэƒģђıĵĸłмήǿρףяşтц√ώжγź",
"ลвς๔єŦgђเןкℓ๓ภσקгรՇยשฬאץչ",
"ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
"卂乃匚刀乇下厶卄工丁长乚从𠘨口尸㔿尺丂丅凵リ山乂"];
var id = -1;
   while(id++<abc.length){
    tx = tx.replace(eval("/"+abc[id]+"/gi"), unicode[code][id]);
  }
return tx;
}
