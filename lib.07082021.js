/*******************[UP]******************/                                                                            
let UP = (doc) => {
  this.x = document.querySelector(doc);
  this.setC = (c) => { this.x.style.color = c; return this; };
  this.setBg = (bg) => { this.x.style.background = bg; return this; };
  this.setD = (d) => { this.x.style.display = d; return this; };
  this.setW = (w) => { this.x.style.width = w; return this; };
  this.setH = (h) => { this.x.style.height = h; return this; };
  this.setB = (b) => { this.x.style.border = b; return this; };
  this.setP = (p) => { this.x.style.padding = p; return this; };
  this.setM = (m) => { this.x.style.margin = m; return this; };
  this.setHTML = (txt) => { this.x.innerHTML = txt; return this; };
  this.setHTML_ = (txt) => { this.x.innerHTML += txt; return this; };
  this.setText = (txt) => { this.x.innerText = txt; return this; };
  this.setText_ = (txt) => { this.x.innerText += txt; return this; };
  this.setCss = (c) => { this.x.style.cssText = c; return this;};
  this.setCssP = (c) => { this.x.style.cssText = c; return this;};
  this.setVal = (v) => { this.x.value = v; return this;};
  this.setT = (t) => { this.x.style.transition = t; return this;};
  this.setTD = (td) => { this.x.style.transitionDuration = td; return this;};
  this.setFW = (fw) => { this.x.style.fontWeight = fw; return this;};
  this.setFZ = (fs) => { this.x.style.fontSize = fs; return this;};
  this.setFF = (ff) => { this.x.style.fontFamily = ff; return this;};
  this.setOC = (oc) => { this.x.style.opacity = oc; return this;};
  this.setOL = (ol) => { this.x.style.outline = ol; return this;};
  this.setOF = (_of) => { this.x.style.overflow = _of; return this;};
  
  //this.query = (func) => { this.x.onclick = func; return this;};
  
  this.getVal = () => { return this.x.value;};
  this.getC = () => { return this.x.style.color; };
  this.getBg = () => { return this.x.style.background; };
  this.getD = () => { return this.x.style.display; };
  this.getCss = () => { return this.x.style.cssText; };
  this.getB = () => { return this.x.style.border; };
  this.getH = () => { return this.x.style.height; };
  this.getW = () => { return this.x.style.width; };
  this.getP = () => { return this.x.style.padding; };
  this.getM = () => { return this.x.style.margin; };
  this.getHTML = () => { return this.x.innerHTML; };
  this.getText = () => { return this.x.innerText; };
  this.getQ = () => { return this.x.style; };
  this.getFZ = () => { return this.x.style.fontSize; };
  return this;
  
};

UP.name = "UP";
UP.version = "1.2.0";

UP.tools = {};
UP.text = {};
UP.url = {};
UP.math = {};
UP.fill = {};
//UP.$ = (doc)=> {return document.querySelector(doc);};       

  


UP.text.beforeDate = (txt,c) => {
  /*получить текст после последнего с*/
    let a = false;
    let b = '';
    for (var i = 0; i < txt.length; i++) {
      if(a == true){b += txt[i];}
      if(txt[i] == c){a = true;}
    }
    return b;
  };


UP.text.getText = (txt,q,w)=>{
      /*получить текст между q,w*/
      let x = false;
      let res = "";
      for (var i = 0; i < txt.length; i++) {
        if(w == txt[i]){x = false}
        if(x){res += txt[i];}
        if(q == txt[i]){x = true}
      }
      return res
    };


UP.text.multiArr = (txt,q,w,e,r,t) => {
  /*масив из разних разделителей*/
  txt = txt.split(q).join("&"+"["+q+"]");
  let arr = txt.split("&");
  if(w != undefined){
    txt = txt.split(w).join("&"+"["+w+"]");
    arr = txt.split("&");
  }
  if(e != undefined){
    txt = txt.split(e).join("&"+"["+e+"]");
    arr = txt.split("&");
  }
  if(r != undefined){
    txt = txt.split(r).join("&"+"["+q+"]");
    arr = txt.split("&");
  }
  if(t != undefined){
    txt = txt.split(t).join("&"+"["+q+"]");
    arr = txt.split("&");
  }
  return arr;
}



UP.url.search = (key)=> {
      /*вернуть значення GET*/
      let obj = [];
      let search = document.location.search;
      let arr = [];
      let arrs = [];
      for(let k = 0;k < search.length; k++){
        if(search[k] != '?' && search[k] != '=' && search[k] != '&'){
          arr[arr.length - 1] += search[k];
        }else{
          arr[arr.length] = search[k + 1];
        }
      }
      for(let j = 0;j < arr.length; j++){
        b = arr[j];
        arrs[j] = b[1];
        for(let i = 2;i < b.length; i++){
          arrs[j] += b[i];
        }
      }
      for(let p = 0;p < arrs.length / 2; p++){
        obj.push({"name":""+arrs[p * 2]+"","value":""+arrs[p * 2 + 1]+""});
      }
      for(let h = 0;h < obj.length; h++){
        if(key == obj[h].name){
          return obj[h].value;
        }
      }
      return null;
    };
UP.url.hesh = (x)=> {
      let a = document.documentURI;
      let b = false;
      let c = '';
      for (var i = 0; i < a.length; i++) {
        if(b == false && a[i] == '#'){b = true;}
        else if(b == true){c += a[i];}
      }
      if(c == ''){ return null;}
      if(x == false){ return c; }
      if(x == true){ return '#'+c; }
      return c;
    };

UP.fill.view = ($url,type)=> {
      let $txt = '';
      function readTextFile(url){
      var rawFile = new XMLHttpRequest();
      rawFile.open('GET', url, false);
      rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4){
          if(rawFile.status === 200 || rawFile.status == 0){
            $txt = rawFile.responseText;
          }
        }
      };
      rawFile.send(null);
      }
      readTextFile($url);
      switch (type) {
        case 'json': return JSON.parse($txt);
        case 'html': this.document.write($txt); return this;
        case 'script': this.eval($txt); return this;
        case 'txt': return $txt;
      }
      return $txt;
    };
UP.fill.viewAutoType = ($url)=> {
      let type = UP.text.beforeDate($url,'.');
      let $txt = '';
      function readTextFile(url){
          var rawFile = new XMLHttpRequest();
          rawFile.open('GET', url, false);
          rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4){
              if(rawFile.status === 200 || rawFile.status == 0){
                $txt = rawFile.responseText;
              }
            }
          };
          rawFile.send(null);
      }
      readTextFile($url);
      switch (type) {
        case 'json': return JSON.parse($txt);
        case 'html': this.document.write($txt); return this;
        case 'js': this.eval($txt); return this;
        case 'txt': return $txt;
      }
      return $txt;
    };


console.log(UP);
