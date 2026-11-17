(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="170",_f=0,$c=1,gf=2,gh=1,vf=2,qn=3,Ai=0,Vt=1,Kn=2,xi=0,Nr=1,Kc=2,Zc=3,jc=4,xf=5,Yi=100,yf=101,Sf=102,Mf=103,bf=104,Ef=200,Tf=201,Af=202,wf=203,Ko=204,Zo=205,Rf=206,Cf=207,Pf=208,Df=209,Lf=210,If=211,Uf=212,Nf=213,Ff=214,jo=0,Jo=1,Qo=2,Hr=3,el=4,tl=5,nl=6,il=7,vh=0,Of=1,Bf=2,yi=0,kf=1,zf=2,Vf=3,Gf=4,Hf=5,Wf=6,Xf=7,xh=300,Wr=301,Xr=302,rl=303,sl=304,Za=306,al=1e3,Ki=1001,ol=1002,bn=1003,qf=1004,Zs=1005,Pn=1006,so=1007,Zi=1008,ei=1009,yh=1010,Sh=1011,Ts=1012,rc=1013,sr=1014,Zn=1015,Bs=1016,sc=1017,ac=1018,qr=1020,Mh=35902,bh=1021,Eh=1022,Mn=1023,Th=1024,Ah=1025,Fr=1026,Yr=1027,wh=1028,oc=1029,Rh=1030,lc=1031,cc=1033,Ma=33776,ba=33777,Ea=33778,Ta=33779,ll=35840,cl=35841,ul=35842,hl=35843,dl=36196,fl=37492,pl=37496,ml=37808,_l=37809,gl=37810,vl=37811,xl=37812,yl=37813,Sl=37814,Ml=37815,bl=37816,El=37817,Tl=37818,Al=37819,wl=37820,Rl=37821,Aa=36492,Cl=36494,Pl=36495,Ch=36283,Dl=36284,Ll=36285,Il=36286,Yf=3200,$f=3201,Kf=0,Zf=1,fi="",Bt="srgb",es="srgb-linear",ja="linear",Ke="srgb",hr=7680,Jc=519,jf=512,Jf=513,Qf=514,Ph=515,ep=516,tp=517,np=518,ip=519,Ul=35044,Qc="300 es",jn=2e3,Ia=2001;class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,Nl=180/Math.PI;function Si(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function kt(r,e,t){return Math.max(e,Math.min(t,r))}function rp(r,e){return(r%e+e)%e}function oo(r,e,t){return(1-t)*r+t*e}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,i,s,a,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],b=i[1],x=i[4],v=i[7],A=i[2],C=i[5],T=i[8];return s[0]=a*_+o*b+l*A,s[3]=a*f+o*x+l*C,s[6]=a*p+o*v+l*T,s[1]=c*_+u*b+h*A,s[4]=c*f+u*x+h*C,s[7]=c*p+u*v+h*T,s[2]=d*_+m*b+g*A,s[5]=d*f+m*x+g*C,s[8]=d*p+m*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lo.makeScale(e,t)),this}rotate(e){return this.premultiply(lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new Pe;function Dh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ua(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sp(){const r=Ua("canvas");return r.style.display="block",r}const eu={};function ms(r){r in eu||(eu[r]=!0,console.warn(r))}function ap(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function op(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ge={enabled:!0,workingColorSpace:es,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ke&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ke&&(r.r=Or(r.r),r.g=Or(r.g),r.b=Or(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?ja:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const tu=[.64,.33,.3,.6,.15,.06],nu=[.2126,.7152,.0722],iu=[.3127,.329],ru=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ge.define({[es]:{primaries:tu,whitePoint:iu,transfer:ja,toXYZ:ru,fromXYZ:su,luminanceCoefficients:nu,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:tu,whitePoint:iu,transfer:Ke,toXYZ:ru,fromXYZ:su,luminanceCoefficients:nu,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}});let dr;class cp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dr===void 0&&(dr=Ua("canvas")),dr.width=e.width,dr.height=e.height;const n=dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let up=0;class Lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(co(i[a].image)):s.push(co(i[a]))}else s=co(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function co(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hp=0;class Nt extends ts{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Ki,i=Ki,s=Pn,a=Zi,o=Mn,l=ei,c=Nt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Si(),this.name="",this.source=new Lh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case al:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case al:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=xh;Nt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(m+1)/2,A=(p+1)/2,C=(u+d)/4,T=(h+_)/4,R=(g+f)/4;return x>v&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=T/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=R/s),this.set(n,i,s,t),this}let b=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dp extends ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends dp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ih extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fp extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==m||u!==g){let f=1-o;const p=l*d+c*m+u*g+h*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,p*b);f=Math.sin(f*C)/A,o=Math.sin(o*C)/A}const v=o*b;if(l=l*f+d*v,c=c*f+m*v,u=u*f+g*v,h=h*f+_*v,f===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uo.copy(this).projectOnVector(e),this.sub(uo)}reflect(e){return this.sub(uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new B,au=new ks;class zs{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Js.subVectors(this.max,ss),fr.subVectors(e.a,ss),pr.subVectors(e.b,ss),mr.subVectors(e.c,ss),oi.subVectors(pr,fr),li.subVectors(mr,pr),Fi.subVectors(fr,mr);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Fi.z,Fi.y,oi.z,0,-oi.x,li.z,0,-li.x,Fi.z,0,-Fi.x,-oi.y,oi.x,0,-li.y,li.x,0,-Fi.y,Fi.x,0];return!ho(t,fr,pr,mr,Js)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,fr,pr,mr,Js))?!1:(Qs.crossVectors(oi,li),t=[Qs.x,Qs.y,Qs.z],ho(t,fr,pr,mr,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new B,new B,new B,new B,new B,new B,new B,new B],gn=new B,js=new zs,fr=new B,pr=new B,mr=new B,oi=new B,li=new B,Fi=new B,ss=new B,Js=new B,Qs=new B,Oi=new B;function ho(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Oi.fromArray(r,s);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const pp=new zs,as=new B,fo=new B;class uc{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(fo)),this.expandByPoint(as.copy(e.center).sub(fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new B,po=new B,ea=new B,ci=new B,mo=new B,ta=new B,_o=new B;class Uh{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){po.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=ci.dot(this.direction),l=-ci.dot(ea),c=ci.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(po).addScaledVector(ea,d),m}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,s){mo.subVectors(t,e),ta.subVectors(n,e),_o.crossVectors(mo,ta);let a=this.direction.dot(_o),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(ta.crossVectors(ci,ta));if(l<0)return null;const c=o*this.direction.dot(mo.cross(ci));if(c<0||l+c>a)return null;const u=-o*ci.dot(_o);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,i,s,a,o,l,c,u,h,d,m,g,_,f){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,m,g,_,f)}set(e,t,n,i,s,a,o,l,c,u,h,d,m,g,_,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,_p)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ui.crossVectors(n,Kt),ui.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ui.crossVectors(n,Kt)),ui.normalize(),na.crossVectors(Kt,ui),i[0]=ui.x,i[4]=na.x,i[8]=Kt.x,i[1]=ui.y,i[5]=na.y,i[9]=Kt.y,i[2]=ui.z,i[6]=na.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],b=n[3],x=n[7],v=n[11],A=n[15],C=i[0],T=i[4],R=i[8],y=i[12],S=i[1],P=i[5],F=i[9],U=i[13],H=i[2],q=i[6],G=i[10],Y=i[14],V=i[3],te=i[7],ae=i[11],fe=i[15];return s[0]=a*C+o*S+l*H+c*V,s[4]=a*T+o*P+l*q+c*te,s[8]=a*R+o*F+l*G+c*ae,s[12]=a*y+o*U+l*Y+c*fe,s[1]=u*C+h*S+d*H+m*V,s[5]=u*T+h*P+d*q+m*te,s[9]=u*R+h*F+d*G+m*ae,s[13]=u*y+h*U+d*Y+m*fe,s[2]=g*C+_*S+f*H+p*V,s[6]=g*T+_*P+f*q+p*te,s[10]=g*R+_*F+f*G+p*ae,s[14]=g*y+_*U+f*Y+p*fe,s[3]=b*C+x*S+v*H+A*V,s[7]=b*T+x*P+v*q+A*te,s[11]=b*R+x*F+v*G+A*ae,s[15]=b*y+x*U+v*Y+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],f=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*m-n*l*m)+_*(+t*l*m-t*c*d+s*a*d-i*a*m+i*c*u-s*l*u)+f*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],f=e[14],p=e[15],b=h*f*c-_*d*c+_*l*m-o*f*m-h*l*p+o*d*p,x=g*d*c-u*f*c-g*l*m+a*f*m+u*l*p-a*d*p,v=u*_*c-g*h*c+g*o*m-a*_*m-u*o*p+a*h*p,A=g*h*l-u*_*l-g*o*d+a*_*d+u*o*f-a*h*f,C=t*b+n*x+i*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=b*T,e[1]=(_*d*s-h*f*s-_*i*m+n*f*m+h*i*p-n*d*p)*T,e[2]=(o*f*s-_*l*s+_*i*c-n*f*c-o*i*p+n*l*p)*T,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*m-n*l*m)*T,e[4]=x*T,e[5]=(u*f*s-g*d*s+g*i*m-t*f*m-u*i*p+t*d*p)*T,e[6]=(g*l*s-a*f*s-g*i*c+t*f*c+a*i*p-t*l*p)*T,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*m+t*l*m)*T,e[8]=v*T,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*p-t*h*p)*T,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*T,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*T,e[12]=A*T,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*f+t*h*f)*T,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*f-t*o*f)*T,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,g=s*h,_=a*u,f=a*h,p=o*h,b=l*c,x=l*u,v=l*h,A=n.x,C=n.y,T=n.z;return i[0]=(1-(_+p))*A,i[1]=(m+v)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(m-v)*C,i[5]=(1-(d+p))*C,i[6]=(f+b)*C,i[7]=0,i[8]=(g+x)*T,i[9]=(f-b)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=_r.set(i[0],i[1],i[2]).length();const a=_r.set(i[4],i[5],i[6]).length(),o=_r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const c=1/s,u=1/a,h=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=jn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let m,g;if(o===jn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ia)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=jn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,m=(n+i)*u;let g,_;if(o===jn)g=(a+s)*h,_=-2*h;else if(o===Ia)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _r=new B,vn=new mt,mp=new B(0,0,0),_p=new B(1,1,1),ui=new B,na=new B,Kt=new B,ou=new mt,lu=new ks;class ti{constructor(e=0,t=0,n=0,i=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gp=0;const cu=new B,gr=new ks,Hn=new mt,ia=new B,os=new B,vp=new B,xp=new ks,uu=new B(1,0,0),hu=new B(0,1,0),du=new B(0,0,1),fu={type:"added"},yp={type:"removed"},vr={type:"childadded",child:null},go={type:"childremoved",child:null};class Gt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new B,t=new ti,n=new ks,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Pe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(os,ia,this.up):Hn.lookAt(ia,os,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),gr.setFromRotationMatrix(Hn),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp),go.child=e,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new B,Wn=new B,vo=new B,Xn=new B,xr=new B,yr=new B,pu=new B,xo=new B,yo=new B,So=new B,Mo=new vt,bo=new vt,Eo=new vt;class hn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xn.subVectors(i,t),Wn.subVectors(n,t),vo.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Wn),l=xn.dot(vo),c=Wn.dot(Wn),u=Wn.dot(vo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Mo.setScalar(0),bo.setScalar(0),Eo.setScalar(0),Mo.fromBufferAttribute(e,t),bo.fromBufferAttribute(e,n),Eo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Mo,s.x),a.addScaledVector(bo,s.y),a.addScaledVector(Eo,s.z),a}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),Wn.subVectors(e,t),xn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;xr.subVectors(i,n),yr.subVectors(s,n),xo.subVectors(e,n);const l=xr.dot(xo),c=yr.dot(xo);if(l<=0&&c<=0)return t.copy(n);yo.subVectors(e,i);const u=xr.dot(yo),h=yr.dot(yo);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xr,a);So.subVectors(e,s);const m=xr.dot(So),g=yr.dot(So);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(yr,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return pu.subVectors(s,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(pu,o);const p=1/(f+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(xr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function To(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=rp(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=To(a,s,e+1/3),this.g=To(a,s,e),this.b=To(a,s,e-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ge.fromWorkingColorSpace(Pt.copy(this),e),Math.round(kt(Pt.r*255,0,255))*65536+Math.round(kt(Pt.g*255,0,255))*256+Math.round(kt(Pt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,s=Pt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Bt){Ge.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(ra);const n=oo(hi.h,ra.h,t),i=oo(hi.s,ra.s,t),s=oo(hi.l,ra.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new $e;$e.NAMES=Nh;let Sp=0;class Vs extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Si(),this.name="",this.blending=Nr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Zo,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Na extends Vs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new B,sa=new Ne;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}}class Fh extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oh extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Un extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mp=0;const on=new mt,Ao=new Gt,Sr=new B,Zt=new zs,ls=new zs,Et=new B;class ri extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Oh:Fh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Un(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Zt.min,ls.min),Zt.expandByPoint(Et),Et.addVectors(Zt.max,ls.max),Zt.expandByPoint(Et)):(Zt.expandByPoint(ls.min),Zt.expandByPoint(ls.max))}Zt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(e,c),Et.add(Sr)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new B,l[R]=new B;const c=new B,u=new B,h=new B,d=new Ne,m=new Ne,g=new Ne,_=new B,f=new B;function p(R,y,S){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(P),o[R].add(_),o[y].add(_),o[S].add(_),l[R].add(f),l[y].add(f),l[S].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,y=b.length;R<y;++R){const S=b[R],P=S.start,F=S.count;for(let U=P,H=P+F;U<H;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new B,v=new B,A=new B,C=new B;function T(R){A.fromBufferAttribute(i,R),C.copy(A);const y=o[R];x.copy(y),x.sub(A.multiplyScalar(A.dot(y))).normalize(),v.crossVectors(C,y);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,y=b.length;R<y;++R){const S=b[R],P=S.start,F=S.count;for(let U=P,H=P+F;U<H;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[m++]}return new En(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new mt,Bi=new Uh,aa=new uc,_u=new B,oa=new B,la=new B,ca=new B,wo=new B,ua=new B,gu=new B,ha=new B;class Dn extends Gt{constructor(e=new ri,t=new Na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(wo.fromBufferAttribute(h,e),a?ua.addScaledVector(wo,u):ua.addScaledVector(wo.sub(t),u))}t.add(ua)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(aa.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(aa,_u)===null||Bi.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(mu.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(mu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],b=Math.max(f.start,m.start),x=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let v=b,A=x;v<A;v+=3){const C=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);i=da(this,p,e,n,c,u,h,C,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const b=o.getX(f),x=o.getX(f+1),v=o.getX(f+2);i=da(this,a,e,n,c,u,h,b,x,v),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],b=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let v=b,A=x;v<A;v+=3){const C=v,T=v+1,R=v+2;i=da(this,p,e,n,c,u,h,C,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const b=f,x=f+1,v=f+2;i=da(this,a,e,n,c,u,h,b,x,v),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function bp(r,e,t,n,i,s,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ai,o),l===null)return null;ha.copy(o),ha.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:r}}function da(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,oa),r.getVertexPosition(l,la),r.getVertexPosition(c,ca);const u=bp(r,e,t,n,oa,la,ca,gu);if(u){const h=new B;hn.getBarycoord(gu,oa,la,ca,h),i&&(u.uv=hn.getInterpolatedAttribute(i,o,l,c,h,new Ne)),s&&(u.uv1=hn.getInterpolatedAttribute(s,o,l,c,h,new Ne)),a&&(u.normal=hn.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};hn.getNormal(oa,la,ca,d.normal),u.face=d,u.barycoord=h}return u}class Gs extends ri{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(h,2));function g(_,f,p,b,x,v,A,C,T,R,y){const S=v/T,P=A/R,F=v/2,U=A/2,H=C/2,q=T+1,G=R+1;let Y=0,V=0;const te=new B;for(let ae=0;ae<G;ae++){const fe=ae*P-U;for(let Ee=0;Ee<q;Ee++){const We=Ee*S-F;te[_]=We*b,te[f]=fe*x,te[p]=H,c.push(te.x,te.y,te.z),te[_]=0,te[f]=0,te[p]=C>0?1:-1,u.push(te.x,te.y,te.z),h.push(Ee/T),h.push(1-ae/R),Y+=1}}for(let ae=0;ae<R;ae++)for(let fe=0;fe<T;fe++){const Ee=d+fe+q*ae,We=d+fe+q*(ae+1),X=d+(fe+1)+q*(ae+1),J=d+(fe+1)+q*ae;l.push(Ee,We,J),l.push(We,X,J),V+=6}o.addGroup(m,V,y),m+=V,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(r){const e={};for(let t=0;t<r.length;t++){const n=$r(r[t]);for(const i in n)e[i]=n[i]}return e}function Ep(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Bh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Tp={clone:$r,merge:Ut};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Vs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=Ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kh extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new B,vu=new Ne,xu=new Ne;class yn extends kh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,vu,xu),t.subVectors(xu,vu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mr=-90,br=1;class Rp extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(Mr,br,e,t);i.layers=this.layers,this.add(i);const s=new yn(Mr,br,e,t);s.layers=this.layers,this.add(s);const a=new yn(Mr,br,e,t);a.layers=this.layers,this.add(a);const o=new yn(Mr,br,e,t);o.layers=this.layers,this.add(o);const l=new yn(Mr,br,e,t);l.layers=this.layers,this.add(l);const c=new yn(Mr,br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zh extends Nt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cp extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gs(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:xi});s.uniforms.tEquirect.value=t;const a=new Dn(i,s),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Pn),new Rp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ro=new B,Pp=new B,Dp=new Pe;class Wi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ro.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dp.getNormalMatrix(e),i=this.coplanarPoint(Ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new uc,fa=new B;class Vh{constructor(e=new Wi,t=new Wi,n=new Wi,i=new Wi,s=new Wi,a=new Wi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],b=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,f-m,v-p).normalize(),n[1].setComponents(l+s,d+c,f+m,v+p).normalize(),n[2].setComponents(l+a,d+u,f+g,v+b).normalize(),n[3].setComponents(l-a,d-u,f-g,v-b).normalize(),n[4].setComponents(l-o,d-h,f-_,v-x).normalize(),t===jn)n[5].setComponents(l+o,d+h,f+_,v+x).normalize();else if(t===Ia)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Lp(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Ja extends ri{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const b=p*d-a;for(let x=0;x<c;x++){const v=x*h-s;g.push(v,-b,0),_.push(0,0,1),f.push(x/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const x=b+c*p,v=b+c*(p+1),A=b+1+c*(p+1),C=b+1+c*p;m.push(x,v,C),m.push(v,A,C)}this.setIndex(m),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,n_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,__=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,g_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,z_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:Ip,alphahash_pars_fragment:Up,alphamap_fragment:Np,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Bp,aomap_fragment:kp,aomap_pars_fragment:zp,batching_pars_vertex:Vp,batching_vertex:Gp,begin_vertex:Hp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:jp,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:rm,displacementmap_pars_vertex:sm,displacementmap_vertex:am,emissivemap_fragment:om,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:um,envmap_fragment:hm,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Tm,envmap_vertex:mm,fog_vertex:_m,fog_pars_vertex:gm,fog_fragment:vm,fog_pars_fragment:xm,gradientmap_pars_fragment:ym,lightmap_pars_fragment:Sm,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:bm,lights_pars_begin:Em,lights_toon_fragment:Am,lights_toon_pars_fragment:wm,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Lm,lights_fragment_maps:Im,lights_fragment_end:Um,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Bm,map_fragment:km,map_pars_fragment:zm,map_particle_fragment:Vm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:$m,morphtarget_vertex:Km,normal_fragment_begin:Zm,normal_fragment_maps:jm,normal_pars_fragment:Jm,normal_pars_vertex:Qm,normal_vertex:e_,normalmap_pars_fragment:t_,clearcoat_normal_fragment_begin:n_,clearcoat_normal_fragment_maps:i_,clearcoat_pars_fragment:r_,iridescence_pars_fragment:s_,opaque_fragment:a_,packing:o_,premultiplied_alpha_fragment:l_,project_vertex:c_,dithering_fragment:u_,dithering_pars_fragment:h_,roughnessmap_fragment:d_,roughnessmap_pars_fragment:f_,shadowmap_pars_fragment:p_,shadowmap_pars_vertex:m_,shadowmap_vertex:__,shadowmask_pars_fragment:g_,skinbase_vertex:v_,skinning_pars_vertex:x_,skinning_vertex:y_,skinnormal_vertex:S_,specularmap_fragment:M_,specularmap_pars_fragment:b_,tonemapping_fragment:E_,tonemapping_pars_fragment:T_,transmission_fragment:A_,transmission_pars_fragment:w_,uv_pars_fragment:R_,uv_pars_vertex:C_,uv_vertex:P_,worldpos_vertex:D_,background_vert:L_,background_frag:I_,backgroundCube_vert:U_,backgroundCube_frag:N_,cube_vert:F_,cube_frag:O_,depth_vert:B_,depth_frag:k_,distanceRGBA_vert:z_,distanceRGBA_frag:V_,equirect_vert:G_,equirect_frag:H_,linedashed_vert:W_,linedashed_frag:X_,meshbasic_vert:q_,meshbasic_frag:Y_,meshlambert_vert:$_,meshlambert_frag:K_,meshmatcap_vert:Z_,meshmatcap_frag:j_,meshnormal_vert:J_,meshnormal_frag:Q_,meshphong_vert:eg,meshphong_frag:tg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:rg,meshtoon_frag:sg,points_vert:ag,points_frag:og,shadow_vert:lg,shadow_frag:cg,sprite_vert:ug,sprite_frag:hg},ne={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},wn={basic:{uniforms:Ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new $e(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ut([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ut([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new $e(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ut([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ut([ne.points,ne.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ut([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ut([ne.common,ne.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ut([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ut([ne.sprite,ne.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ut([ne.common,ne.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ut([ne.lights,ne.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};wn.physical={uniforms:Ut([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const pa={r:0,b:0,g:0},zi=new ti,dg=new mt;function fg(r,e,t,n,i,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const v=g(b);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(b,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Za)?(u===void 0&&(u=new Dn(new Gs(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:$r(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),zi.copy(x.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(zi)),u.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Ke,(h!==v||d!==v.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Dn(new Ja(2,2),new wi({name:"BackgroundMaterial",uniforms:$r(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(pa,Bh(r)),n.buffers.color.setClear(pa.r,pa.g,pa.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:f}}function pg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,P,F,U,H){let q=!1;const G=h(U,F,P);s!==G&&(s=G,c(s.object)),q=m(S,U,F,H),q&&g(S,U,F,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(S,P,F,U),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,P,F){const U=F.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let q=H[P.id];q===void 0&&(q={},H[P.id]=q);let G=q[U];return G===void 0&&(G=d(l()),q[U]=G),G}function d(S){const P=[],F=[],U=[];for(let H=0;H<t;H++)P[H]=0,F[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:U,object:S,attributes:{},index:null}}function m(S,P,F,U){const H=s.attributes,q=P.attributes;let G=0;const Y=F.getAttributes();for(const V in Y)if(Y[V].location>=0){const ae=H[V];let fe=q[V];if(fe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;G++}return s.attributesNum!==G||s.index!==U}function g(S,P,F,U){const H={},q=P.attributes;let G=0;const Y=F.getAttributes();for(const V in Y)if(Y[V].location>=0){let ae=q[V];ae===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),H[V]=fe,G++}s.attributes=H,s.attributesNum=G,s.index=U}function _(){const S=s.newAttributes;for(let P=0,F=S.length;P<F;P++)S[P]=0}function f(S){p(S,0)}function p(S,P){const F=s.newAttributes,U=s.enabledAttributes,H=s.attributeDivisors;F[S]=1,U[S]===0&&(r.enableVertexAttribArray(S),U[S]=1),H[S]!==P&&(r.vertexAttribDivisor(S,P),H[S]=P)}function b(){const S=s.newAttributes,P=s.enabledAttributes;for(let F=0,U=P.length;F<U;F++)P[F]!==S[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function x(S,P,F,U,H,q,G){G===!0?r.vertexAttribIPointer(S,P,F,H,q):r.vertexAttribPointer(S,P,F,U,H,q)}function v(S,P,F,U){_();const H=U.attributes,q=F.getAttributes(),G=P.defaultAttributeValues;for(const Y in q){const V=q[Y];if(V.location>=0){let te=H[Y];if(te===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const ae=te.normalized,fe=te.itemSize,Ee=e.get(te);if(Ee===void 0)continue;const We=Ee.buffer,X=Ee.type,J=Ee.bytesPerElement,ge=X===r.INT||X===r.UNSIGNED_INT||te.gpuType===rc;if(te.isInterleavedBufferAttribute){const re=te.data,be=re.stride,we=te.offset;if(re.isInstancedInterleavedBuffer){for(let Ue=0;Ue<V.locationSize;Ue++)p(V.location+Ue,re.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<V.locationSize;Ue++)f(V.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Ue=0;Ue<V.locationSize;Ue++)x(V.location+Ue,fe/V.locationSize,X,ae,be*J,(we+fe/V.locationSize*Ue)*J,ge)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)p(V.location+re,te.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<V.locationSize;re++)f(V.location+re);r.bindBuffer(r.ARRAY_BUFFER,We);for(let re=0;re<V.locationSize;re++)x(V.location+re,fe/V.locationSize,X,ae,fe*J,fe/V.locationSize*re*J,ge)}}else if(G!==void 0){const ae=G[Y];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(V.location,ae);break;case 3:r.vertexAttrib3fv(V.location,ae);break;case 4:r.vertexAttrib4fv(V.location,ae);break;default:r.vertexAttrib1fv(V.location,ae)}}}}b()}function A(){R();for(const S in n){const P=n[S];for(const F in P){const U=P[F];for(const H in U)u(U[H].object),delete U[H];delete P[F]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const F in P){const U=P[F];for(const H in U)u(U[H].object),delete U[H];delete P[F]}delete n[S.id]}function T(S){for(const P in n){const F=n[P];if(F[S.id]===void 0)continue;const U=F[S.id];for(const H in U)u(U[H].object),delete U[H];delete F[S.id]}}function R(){y(),a=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:f,disableUnusedAttributes:b}}function mg(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _g(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Mn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ei&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Zn&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function gg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Wi,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!f)s?u(null):c();else{const b=s?0:n,x=b*4;let v=p.clippingState||null;l.value=v,v=u(g,d,x,m);for(let A=0;A!==x;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,v=m;x!==_;++x,v+=4)a.copy(h[x]).applyMatrix4(b,o),a.normal.toArray(f,v),f[v+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function vg(r){let e=new WeakMap;function t(a,o){return o===rl?a.mapping=Wr:o===sl&&(a.mapping=Xr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===rl||o===sl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cp(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Hh extends kh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Dr=4,yu=[.125,.215,.35,.446,.526,.582],$i=20,Co=new Hh,Su=new $e;let Po=null,Do=0,Lo=0,Io=!1;const Xi=(1+Math.sqrt(5))/2,Er=1/Xi,Mu=[new B(-Xi,Er,0),new B(Xi,Er,0),new B(-Er,0,Xi),new B(Er,0,Xi),new B(0,Xi,-Er),new B(0,Xi,Er),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Do,Lo),this._renderer.xr.enabled=Io,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Bs,format:Mn,colorSpace:es,depthBuffer:!1},i=Eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(s)),this._blurMaterial=yg(s,e,t)}return i}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,n,i){const o=new yn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Su),u.toneMapping=yi,u.autoClear=!1;const m=new Na({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Dn(new Gs,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(Su),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ma(i,b*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wr||e.mapping===Xr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Dn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Mu[(i-s-1)%Mu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Dn(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$i-1),_=s/g,f=isFinite(s)?1+Math.floor(u*_):$i;f>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${$i}`);const p=[];let b=0;for(let T=0;T<$i;++T){const R=T/_,y=Math.exp(-R*R/2);p.push(y),T===0?b+=y:T<f&&(b+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],A=3*v*(i>x-Dr?i-x+Dr:0),C=4*(this._cubeSize-v);ma(t,A,C,3*v,2*v),l.setRenderTarget(t),l.render(h,Co)}}function xg(r){const e=[],t=[],n=[];let i=r;const s=r-Dr+1+yu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Dr?l=yu[a-r+Dr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,p=1,b=new Float32Array(_*g*m),x=new Float32Array(f*g*m),v=new Float32Array(p*g*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,R=C>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(y,_*g*C),x.set(d,f*g*C);const S=[C,C,C,C,C,C];v.set(S,p*g*C)}const A=new ri;A.setAttribute("position",new En(b,_)),A.setAttribute("uv",new En(x,f)),A.setAttribute("faceIndex",new En(v,p)),e.push(A),i>Dr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eu(r,e,t){const n=new ar(r,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function yg(r,e,t){const n=new Float32Array($i),i=new B(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Tu(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Au(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===rl||l===sl,u=l===Wr||l===Xr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new bu(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&i(m)?(t===null&&(t=new bu(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bg(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)e.remove(_[f])}d.removeEventListener("dispose",a),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)e.update(_[f],r.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let x=0,v=b.length;x<v;x+=3){const A=b[x+0],C=b[x+1],T=b[x+2];d.push(A,C,C,T,T,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const A=x+0,C=x+1,T=x+2;d.push(A,C,C,T,T,A)}}else return;const f=new(Dh(d)?Oh:Fh)(d,1);f.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Eg(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){r.drawElements(n,m,s,d*a),t.update(m,n,1)}function c(d,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,d*a,g),t.update(m,n,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];t.update(f,n,1)}function h(d,m,g,_){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/a,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=m[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ag(r,e,t){const n=new WeakMap,i=new vt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),f===!0&&(v=3);let A=o.attributes.position.count*v,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*C*4*h),R=new Ih(T,A,C,h);R.type=Zn,R.needsUpdate=!0;const y=v*4;for(let P=0;P<h;P++){const F=p[P],U=b[P],H=x[P],q=A*C*4*P;for(let G=0;G<F.count;G++){const Y=G*y;g===!0&&(i.fromBufferAttribute(F,G),T[q+Y+0]=i.x,T[q+Y+1]=i.y,T[q+Y+2]=i.z,T[q+Y+3]=0),_===!0&&(i.fromBufferAttribute(U,G),T[q+Y+4]=i.x,T[q+Y+5]=i.y,T[q+Y+6]=i.z,T[q+Y+7]=0),f===!0&&(i.fromBufferAttribute(H,G),T[q+Y+8]=i.x,T[q+Y+9]=i.y,T[q+Y+10]=i.z,T[q+Y+11]=H.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new Ne(A,C)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function wg(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Wh extends Nt{constructor(e,t,n,i,s,a,o,l,c,u=Fr){if(u!==Fr&&u!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fr&&(n=sr),n===void 0&&u===Yr&&(n=qr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xh=new Nt,wu=new Wh(1,1),qh=new Ih,Yh=new fp,$h=new zh,Ru=[],Cu=[],Pu=new Float32Array(16),Du=new Float32Array(9),Lu=new Float32Array(4);function ns(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ru[i];if(s===void 0&&(s=new Float32Array(i),Ru[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Qa(r,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Rg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2fv(this.addr,e),bt(t,e)}}function Pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;r.uniform3fv(this.addr,e),bt(t,e)}}function Dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4fv(this.addr,e),bt(t,e)}}function Lg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Lu.set(n),r.uniformMatrix2fv(this.addr,!1,Lu),bt(t,n)}}function Ig(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Du.set(n),r.uniformMatrix3fv(this.addr,!1,Du),bt(t,n)}}function Ug(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Pu.set(n),r.uniformMatrix4fv(this.addr,!1,Pu),bt(t,n)}}function Ng(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2iv(this.addr,e),bt(t,e)}}function Og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3iv(this.addr,e),bt(t,e)}}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4iv(this.addr,e),bt(t,e)}}function kg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2uiv(this.addr,e),bt(t,e)}}function Vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3uiv(this.addr,e),bt(t,e)}}function Gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4uiv(this.addr,e),bt(t,e)}}function Hg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(wu.compareFunction=Ph,s=wu):s=Xh,t.setTexture2D(e||s,i)}function Wg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yh,i)}function Xg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$h,i)}function qg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qh,i)}function Yg(r){switch(r){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Dg;case 35674:return Lg;case 35675:return Ig;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return kg;case 36294:return zg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}function $g(r,e){r.uniform1fv(this.addr,e)}function Kg(r,e){const t=ns(e,this.size,2);r.uniform2fv(this.addr,t)}function Zg(r,e){const t=ns(e,this.size,3);r.uniform3fv(this.addr,t)}function jg(r,e){const t=ns(e,this.size,4);r.uniform4fv(this.addr,t)}function Jg(r,e){const t=ns(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Qg(r,e){const t=ns(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function e0(r,e){const t=ns(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function t0(r,e){r.uniform1iv(this.addr,e)}function n0(r,e){r.uniform2iv(this.addr,e)}function i0(r,e){r.uniform3iv(this.addr,e)}function r0(r,e){r.uniform4iv(this.addr,e)}function s0(r,e){r.uniform1uiv(this.addr,e)}function a0(r,e){r.uniform2uiv(this.addr,e)}function o0(r,e){r.uniform3uiv(this.addr,e)}function l0(r,e){r.uniform4uiv(this.addr,e)}function c0(r,e,t){const n=this.cache,i=e.length,s=Qa(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Xh,s[a])}function u0(r,e,t){const n=this.cache,i=e.length,s=Qa(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yh,s[a])}function h0(r,e,t){const n=this.cache,i=e.length,s=Qa(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||$h,s[a])}function d0(r,e,t){const n=this.cache,i=e.length,s=Qa(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qh,s[a])}function f0(r){switch(r){case 5126:return $g;case 35664:return Kg;case 35665:return Zg;case 35666:return jg;case 35674:return Jg;case 35675:return Qg;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yg(t.type)}}class m0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f0(t.type)}}class _0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Iu(r,e){r.seq.push(e),r.map[e.id]=e}function g0(r,e,t){const n=r.name,i=n.length;for(Uo.lastIndex=0;;){const s=Uo.exec(n),a=Uo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Iu(t,c===void 0?new p0(o,r,e):new m0(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new _0(o),Iu(t,h)),t=h}}}class wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);g0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Uu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const v0=37297;let x0=0;function y0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Nu=new Pe;function S0(r){Ge._getMatrix(Nu,Ge.workingColorSpace,r);const e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(r)){case ja:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Fu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+y0(r.getShaderSource(e),a)}else return i}function M0(r,e){const t=S0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function b0(r,e){let t;switch(e){case kf:t="Linear";break;case zf:t="Reinhard";break;case Vf:t="Cineon";break;case Gf:t="ACESFilmic";break;case Wf:t="AgX";break;case Xf:t="Neutral";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new B;function E0(){Ge.getLuminanceCoefficients(_a);const r=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function A0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function _s(r){return r!==""}function Ou(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(r){return r.replace(R0,P0)}const C0=new Map;function P0(r,e){let t=Le[e];if(t===void 0){const n=C0.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fl(t)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(r){return r.replace(D0,L0)}function L0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===gh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function U0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function F0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Of:e="ENVMAP_BLENDING_MIX";break;case Bf:e="ENVMAP_BLENDING_ADD";break}return e}function O0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function B0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=I0(t),c=U0(t),u=N0(t),h=F0(t),d=O0(t),m=T0(t),g=A0(s),_=i.createProgram();let f,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(f=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Le.tonemapping_pars_fragment:"",t.toneMapping!==yi?b0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,M0("linearToOutputTexel",t.outputColorSpace),E0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),a=Fl(a),a=Ou(a,t),a=Bu(a,t),o=Fl(o),o=Ou(o,t),o=Bu(o,t),a=ku(a),o=ku(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+f+a,v=b+p+o,A=Uu(i,i.VERTEX_SHADER,x),C=Uu(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(C).trim();let q=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,C);else{const Y=Fu(i,A,"vertex"),V=Fu(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Y+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||H==="")&&(G=!1);G&&(P.diagnostics={runnable:q,programLog:F,vertexShader:{log:U,prefix:f},fragmentShader:{log:H,prefix:p}})}i.deleteShader(A),i.deleteShader(C),R=new wa(i,_),y=w0(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,v0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let k0=0;class z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new V0(e),t.set(e,n)),n}}class V0{constructor(e){this.id=k0++,this.code=e,this.usedTimes=0}}function G0(r,e,t,n,i,s,a){const o=new hc,l=new z0,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,S,P,F,U){const H=F.fog,q=U.geometry,G=y.isMeshStandardMaterial?F.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),V=Y&&Y.mapping===Za?Y.image.height:null,te=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=ae!==void 0?ae.length:0;let Ee=0;q.morphAttributes.position!==void 0&&(Ee=1),q.morphAttributes.normal!==void 0&&(Ee=2),q.morphAttributes.color!==void 0&&(Ee=3);let We,X,J,ge;if(te){const Ye=wn[te];We=Ye.vertexShader,X=Ye.fragmentShader}else We=y.vertexShader,X=y.fragmentShader,l.update(y),J=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const re=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),we=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,ot=!!y.map,ze=!!y.matcap,_t=!!Y,N=!!y.aoMap,sn=!!y.lightMap,Oe=!!y.bumpMap,Be=!!y.normalMap,Se=!!y.displacementMap,it=!!y.emissiveMap,ye=!!y.metalnessMap,w=!!y.roughnessMap,M=y.anisotropy>0,O=y.clearcoat>0,K=y.dispersion>0,j=y.iridescence>0,$=y.sheen>0,ve=y.transmission>0,se=M&&!!y.anisotropyMap,ue=O&&!!y.clearcoatMap,Ve=O&&!!y.clearcoatNormalMap,Q=O&&!!y.clearcoatRoughnessMap,he=j&&!!y.iridescenceMap,Me=j&&!!y.iridescenceThicknessMap,Te=$&&!!y.sheenColorMap,de=$&&!!y.sheenRoughnessMap,ke=!!y.specularMap,De=!!y.specularColorMap,tt=!!y.specularIntensityMap,D=ve&&!!y.transmissionMap,ie=ve&&!!y.thicknessMap,W=!!y.gradientMap,Z=!!y.alphaMap,ce=y.alphaTest>0,oe=!!y.alphaHash,Re=!!y.extensions;let dt=yi;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(dt=r.toneMapping);const Rt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:X,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:we,instancingColor:we&&U.instanceColor!==null,instancingMorph:we&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:es,alphaToCoverage:!!y.alphaToCoverage,map:ot,matcap:ze,envMap:_t,envMapMode:_t&&Y.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:sn,bumpMap:Oe,normalMap:Be,displacementMap:d&&Se,emissiveMap:it,normalMapObjectSpace:Be&&y.normalMapType===Zf,normalMapTangentSpace:Be&&y.normalMapType===Kf,metalnessMap:ye,roughnessMap:w,anisotropy:M,anisotropyMap:se,clearcoat:O,clearcoatMap:ue,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Q,dispersion:K,iridescence:j,iridescenceMap:he,iridescenceThicknessMap:Me,sheen:$,sheenColorMap:Te,sheenRoughnessMap:de,specularMap:ke,specularColorMap:De,specularIntensityMap:tt,transmission:ve,transmissionMap:D,thicknessMap:ie,gradientMap:W,opaque:y.transparent===!1&&y.blending===Nr&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:oe,combine:y.combine,mapUv:ot&&_(y.map.channel),aoMapUv:N&&_(y.aoMap.channel),lightMapUv:sn&&_(y.lightMap.channel),bumpMapUv:Oe&&_(y.bumpMap.channel),normalMapUv:Be&&_(y.normalMap.channel),displacementMapUv:Se&&_(y.displacementMap.channel),emissiveMapUv:it&&_(y.emissiveMap.channel),metalnessMapUv:ye&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:se&&_(y.anisotropyMap.channel),clearcoatMapUv:ue&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(y.sheenRoughnessMap.channel),specularMapUv:ke&&_(y.specularMap.channel),specularColorMapUv:De&&_(y.specularColorMap.channel),specularIntensityMapUv:tt&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:ie&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Be||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(ot||Z),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,decodeVideoTexture:ot&&y.map.isVideoTexture===!0&&Ge.getTransfer(y.map.colorSpace)===Ke,decodeVideoTextureEmissive:it&&y.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(y.emissiveMap.colorSpace)===Ke,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(b(S,y),x(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const S=g[y.type];let P;if(S){const F=wn[S];P=Tp.clone(F.uniforms)}else P=y.uniforms;return P}function A(y,S){let P;for(let F=0,U=u.length;F<U;F++){const H=u[F];if(H.cacheKey===S){P=H,++P.usedTimes;break}}return P===void 0&&(P=new B0(r,S,y,s),u.push(P)),P}function C(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:R}}function H0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function W0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Gu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,g,_,f){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=f),e++,p}function o(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||W0),n.length>1&&n.sort(d||Vu),i.length>1&&i.sort(d||Vu)}function u(){for(let h=e,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function X0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Gu,r.set(n,[a])):i>=s.length?(a=new Gu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function q0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function Y0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $0=0;function K0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Z0(r){const e=new q0,t=Y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new mt,a=new mt;function o(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,b=0,x=0,v=0,A=0,C=0,T=0;c.sort(K0);for(let y=0,S=c.length;y<S;y++){const P=c[y],F=P.color,U=P.intensity,H=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*U,h+=F.g*U,d+=F.b*U;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],U);T++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,V=t.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=G,m++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(F).multiplyScalar(U),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,v++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(F).multiplyScalar(U),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=G,f++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Y=P.shadow,V=t.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(U),G.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=G,p++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==f||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=f,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=T,n.version=$0++)}function l(c,u){let h=0,d=0,m=0,g=0,_=0;const f=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),h++}else if(x.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),m++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:n}}function Hu(r){const e=new Z0(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function j0(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Hu(r),e.set(i,[o])):s>=a.length?(o=new Hu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class J0 extends Vs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q0 extends Vs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nv(r,e,t){let n=new Vh;const i=new Ne,s=new Ne,a=new vt,o=new J0({depthPacking:$f}),l=new Q0,c={},u=t.maxTextureSize,h={[Ai]:Vt,[Vt]:Ai,[Kn]:Kn},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:ev,fragmentShader:tv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ri;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dn(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let p=this.type;this.render=function(C,T,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const y=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==qn&&this.type===qn,H=p===qn&&this.type!==qn;for(let q=0,G=C.length;q<G;q++){const Y=C[q],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const te=V.getFrameExtents();if(i.multiply(te),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,V.mapSize.y=s.y)),V.map===null||U===!0||H===!0){const fe=this.type!==qn?{minFilter:bn,magFilter:bn}:{};V.map!==null&&V.map.dispose(),V.map=new ar(i.x,i.y,fe),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const ae=V.getViewportCount();for(let fe=0;fe<ae;fe++){const Ee=V.getViewport(fe);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),F.viewport(a),V.updateMatrices(Y,fe),n=V.getFrustum(),v(T,R,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===qn&&b(V,R),V.needsUpdate=!1}p=this.type,f.needsUpdate=!1,r.setRenderTarget(y,S,P)};function b(C,T){const R=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ar(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(T,null,R,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(T,null,R,m,_,null)}function x(C,T,R,y){let S=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=S.uuid,U=T.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let q=H[U];q===void 0&&(q=S.clone(),H[U]=q,T.addEventListener("dispose",A)),S=q}if(S.visible=T.visible,S.wireframe=T.wireframe,y===qn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=r.properties.get(S);F.light=R}return S}function v(C,T,R,y,S){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===qn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const U=e.update(C),H=C.material;if(Array.isArray(H)){const q=U.groups;for(let G=0,Y=q.length;G<Y;G++){const V=q[G],te=H[V.materialIndex];if(te&&te.visible){const ae=x(C,te,y,S);C.onBeforeShadow(r,C,T,R,U,ae,V),r.renderBufferDirect(R,null,U,ae,C,V),C.onAfterShadow(r,C,T,R,U,ae,V)}}}else if(H.visible){const q=x(C,H,y,S);C.onBeforeShadow(r,C,T,R,U,q,null),r.renderBufferDirect(R,null,U,q,C,null),C.onAfterShadow(r,C,T,R,U,q,null)}}const F=C.children;for(let U=0,H=F.length;U<H;U++)v(F[U],T,R,y,S)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const y=c[R],S=C.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const iv={[jo]:Jo,[Qo]:nl,[el]:il,[Hr]:tl,[Jo]:jo,[nl]:Qo,[il]:el,[tl]:Hr};function rv(r,e){function t(){let D=!1;const ie=new vt;let W=null;const Z=new vt(0,0,0,0);return{setMask:function(ce){W!==ce&&!D&&(r.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){D=ce},setClear:function(ce,oe,Re,dt,Rt){Rt===!0&&(ce*=dt,oe*=dt,Re*=dt),ie.set(ce,oe,Re,dt),Z.equals(ie)===!1&&(r.clearColor(ce,oe,Re,dt),Z.copy(ie))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,W=null,Z=null,ce=null;return{setReversed:function(oe){if(ie!==oe){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT);const dt=ce;ce=null,this.setClear(dt)}ie=oe},getReversed:function(){return ie},setTest:function(oe){oe?re(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(oe){W!==oe&&!D&&(r.depthMask(oe),W=oe)},setFunc:function(oe){if(ie&&(oe=iv[oe]),Z!==oe){switch(oe){case jo:r.depthFunc(r.NEVER);break;case Jo:r.depthFunc(r.ALWAYS);break;case Qo:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case el:r.depthFunc(r.EQUAL);break;case tl:r.depthFunc(r.GEQUAL);break;case nl:r.depthFunc(r.GREATER);break;case il:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=oe}},setLocked:function(oe){D=oe},setClear:function(oe){ce!==oe&&(ie&&(oe=1-oe),r.clearDepth(oe),ce=oe)},reset:function(){D=!1,W=null,Z=null,ce=null,ie=!1}}}function i(){let D=!1,ie=null,W=null,Z=null,ce=null,oe=null,Re=null,dt=null,Rt=null;return{setTest:function(Ye){D||(Ye?re(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(Ye){ie!==Ye&&!D&&(r.stencilMask(Ye),ie=Ye)},setFunc:function(Ye,mn,kn){(W!==Ye||Z!==mn||ce!==kn)&&(r.stencilFunc(Ye,mn,kn),W=Ye,Z=mn,ce=kn)},setOp:function(Ye,mn,kn){(oe!==Ye||Re!==mn||dt!==kn)&&(r.stencilOp(Ye,mn,kn),oe=Ye,Re=mn,dt=kn)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Rt!==Ye&&(r.clearStencil(Ye),Rt=Ye)},reset:function(){D=!1,ie=null,W=null,Z=null,ce=null,oe=null,Re=null,dt=null,Rt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],g=null,_=!1,f=null,p=null,b=null,x=null,v=null,A=null,C=null,T=new $e(0,0,0),R=0,y=!1,S=null,P=null,F=null,U=null,H=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Y>=2);let te=null,ae={};const fe=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),We=new vt().fromArray(fe),X=new vt().fromArray(Ee);function J(D,ie,W,Z){const ce=new Uint8Array(4),oe=r.createTexture();r.bindTexture(D,oe),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<W;Re++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(ie+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return oe}const ge={};ge[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(r.DEPTH_TEST),a.setFunc(Hr),Oe(!1),Be($c),re(r.CULL_FACE),N(xi);function re(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function be(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function we(D,ie){return h[D]!==ie?(r.bindFramebuffer(D,ie),h[D]=ie,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ie),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ue(D,ie){let W=m,Z=!1;if(D){W=d.get(ie),W===void 0&&(W=[],d.set(ie,W));const ce=D.textures;if(W.length!==ce.length||W[0]!==r.COLOR_ATTACHMENT0){for(let oe=0,Re=ce.length;oe<Re;oe++)W[oe]=r.COLOR_ATTACHMENT0+oe;W.length=ce.length,Z=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,Z=!0);Z&&r.drawBuffers(W)}function ot(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const ze={[Yi]:r.FUNC_ADD,[yf]:r.FUNC_SUBTRACT,[Sf]:r.FUNC_REVERSE_SUBTRACT};ze[Mf]=r.MIN,ze[bf]=r.MAX;const _t={[Ef]:r.ZERO,[Tf]:r.ONE,[Af]:r.SRC_COLOR,[Ko]:r.SRC_ALPHA,[Lf]:r.SRC_ALPHA_SATURATE,[Pf]:r.DST_COLOR,[Rf]:r.DST_ALPHA,[wf]:r.ONE_MINUS_SRC_COLOR,[Zo]:r.ONE_MINUS_SRC_ALPHA,[Df]:r.ONE_MINUS_DST_COLOR,[Cf]:r.ONE_MINUS_DST_ALPHA,[If]:r.CONSTANT_COLOR,[Uf]:r.ONE_MINUS_CONSTANT_COLOR,[Nf]:r.CONSTANT_ALPHA,[Ff]:r.ONE_MINUS_CONSTANT_ALPHA};function N(D,ie,W,Z,ce,oe,Re,dt,Rt,Ye){if(D===xi){_===!0&&(be(r.BLEND),_=!1);return}if(_===!1&&(re(r.BLEND),_=!0),D!==xf){if(D!==f||Ye!==y){if((p!==Yi||v!==Yi)&&(r.blendEquation(r.FUNC_ADD),p=Yi,v=Yi),Ye)switch(D){case Nr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kc:r.blendFunc(r.ONE,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,x=null,A=null,C=null,T.set(0,0,0),R=0,f=D,y=Ye}return}ce=ce||ie,oe=oe||W,Re=Re||Z,(ie!==p||ce!==v)&&(r.blendEquationSeparate(ze[ie],ze[ce]),p=ie,v=ce),(W!==b||Z!==x||oe!==A||Re!==C)&&(r.blendFuncSeparate(_t[W],_t[Z],_t[oe],_t[Re]),b=W,x=Z,A=oe,C=Re),(dt.equals(T)===!1||Rt!==R)&&(r.blendColor(dt.r,dt.g,dt.b,Rt),T.copy(dt),R=Rt),f=D,y=!1}function sn(D,ie){D.side===Kn?be(r.CULL_FACE):re(r.CULL_FACE);let W=D.side===Vt;ie&&(W=!W),Oe(W),D.blending===Nr&&D.transparent===!1?N(xi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),it(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){S!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),S=D)}function Be(D){D!==_f?(re(r.CULL_FACE),D!==P&&(D===$c?r.cullFace(r.BACK):D===gf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),P=D}function Se(D){D!==F&&(G&&r.lineWidth(D),F=D)}function it(D,ie,W){D?(re(r.POLYGON_OFFSET_FILL),(U!==ie||H!==W)&&(r.polygonOffset(ie,W),U=ie,H=W)):be(r.POLYGON_OFFSET_FILL)}function ye(D){D?re(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function w(D){D===void 0&&(D=r.TEXTURE0+q-1),te!==D&&(r.activeTexture(D),te=D)}function M(D,ie,W){W===void 0&&(te===null?W=r.TEXTURE0+q-1:W=te);let Z=ae[W];Z===void 0&&(Z={type:void 0,texture:void 0},ae[W]=Z),(Z.type!==D||Z.texture!==ie)&&(te!==W&&(r.activeTexture(W),te=W),r.bindTexture(D,ie||ge[D]),Z.type=D,Z.texture=ie)}function O(){const D=ae[te];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(D){We.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),We.copy(D))}function de(D){X.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function ke(D,ie){let W=c.get(ie);W===void 0&&(W=new WeakMap,c.set(ie,W));let Z=W.get(D);Z===void 0&&(Z=r.getUniformBlockIndex(ie,D.name),W.set(D,Z))}function De(D,ie){const Z=c.get(ie).get(D);l.get(ie)!==Z&&(r.uniformBlockBinding(ie,Z,D.__bindingPointIndex),l.set(ie,Z))}function tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},te=null,ae={},h={},d=new WeakMap,m=[],g=null,_=!1,f=null,p=null,b=null,x=null,v=null,A=null,C=null,T=new $e(0,0,0),R=0,y=!1,S=null,P=null,F=null,U=null,H=null,We.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:be,bindFramebuffer:we,drawBuffers:Ue,useProgram:ot,setBlending:N,setMaterial:sn,setFlipSided:Oe,setCullFace:Be,setLineWidth:Se,setPolygonOffset:it,setScissorTest:ye,activeTexture:w,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:he,texImage3D:Me,updateUBOMapping:ke,uniformBlockBinding:De,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:$,texSubImage3D:ve,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:Te,viewport:de,reset:tt}}function Wu(r,e,t,n){const i=sv(n);switch(t){case bh:return r*e;case Th:return r*e;case Ah:return r*e*2;case wh:return r*e/i.components*i.byteLength;case oc:return r*e/i.components*i.byteLength;case Rh:return r*e*2/i.components*i.byteLength;case lc:return r*e*2/i.components*i.byteLength;case Eh:return r*e*3/i.components*i.byteLength;case Mn:return r*e*4/i.components*i.byteLength;case cc:return r*e*4/i.components*i.byteLength;case Ma:case ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Ta:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cl:case hl:return Math.max(r,16)*Math.max(e,8)/4;case ll:case ul:return Math.max(r,8)*Math.max(e,8)/2;case dl:case fl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Aa:case Cl:case Pl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ch:case Dl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ll:case Il:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sv(r){switch(r){case ei:case yh:return{byteLength:1,components:1};case Ts:case Sh:case Bs:return{byteLength:2,components:1};case sc:case ac:return{byteLength:2,components:4};case sr:case rc:case Zn:return{byteLength:4,components:1};case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function av(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return m?new OffscreenCanvas(w,M):Ua("canvas")}function _(w,M,O){let K=1;const j=ye(w);if((j.width>O||j.height>O)&&(K=O/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(K*j.width),ve=Math.floor(K*j.height);h===void 0&&(h=g($,ve));const se=M?g($,ve):h;return se.width=$,se.height=ve,se.getContext("2d").drawImage(w,0,0,$,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+ve+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function f(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(w,M,O,K,j=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=M;if(M===r.RED&&(O===r.FLOAT&&($=r.R32F),O===r.HALF_FLOAT&&($=r.R16F),O===r.UNSIGNED_BYTE&&($=r.R8)),M===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.R8UI),O===r.UNSIGNED_SHORT&&($=r.R16UI),O===r.UNSIGNED_INT&&($=r.R32UI),O===r.BYTE&&($=r.R8I),O===r.SHORT&&($=r.R16I),O===r.INT&&($=r.R32I)),M===r.RG&&(O===r.FLOAT&&($=r.RG32F),O===r.HALF_FLOAT&&($=r.RG16F),O===r.UNSIGNED_BYTE&&($=r.RG8)),M===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.RG8UI),O===r.UNSIGNED_SHORT&&($=r.RG16UI),O===r.UNSIGNED_INT&&($=r.RG32UI),O===r.BYTE&&($=r.RG8I),O===r.SHORT&&($=r.RG16I),O===r.INT&&($=r.RG32I)),M===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.RGB8UI),O===r.UNSIGNED_SHORT&&($=r.RGB16UI),O===r.UNSIGNED_INT&&($=r.RGB32UI),O===r.BYTE&&($=r.RGB8I),O===r.SHORT&&($=r.RGB16I),O===r.INT&&($=r.RGB32I)),M===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.RGBA8UI),O===r.UNSIGNED_SHORT&&($=r.RGBA16UI),O===r.UNSIGNED_INT&&($=r.RGBA32UI),O===r.BYTE&&($=r.RGBA8I),O===r.SHORT&&($=r.RGBA16I),O===r.INT&&($=r.RGBA32I)),M===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),M===r.RGBA){const ve=j?ja:Ge.getTransfer(K);O===r.FLOAT&&($=r.RGBA32F),O===r.HALF_FLOAT&&($=r.RGBA16F),O===r.UNSIGNED_BYTE&&($=ve===Ke?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(w,M){let O;return w?M===null||M===sr||M===qr?O=r.DEPTH24_STENCIL8:M===Zn?O=r.DEPTH32F_STENCIL8:M===Ts&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sr||M===qr?O=r.DEPTH_COMPONENT24:M===Zn?O=r.DEPTH_COMPONENT32F:M===Ts&&(O=r.DEPTH_COMPONENT16),O}function A(w,M){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==bn&&w.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function C(w){const M=w.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&u.delete(M)}function T(w){const M=w.target;M.removeEventListener("dispose",T),S(M)}function R(w){const M=n.get(w);if(M.__webglInit===void 0)return;const O=w.source,K=d.get(O);if(K){const j=K[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(w),Object.keys(K).length===0&&d.delete(O)}n.remove(w)}function y(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const O=w.source,K=d.get(O);delete K[M.__cacheKey],a.memory.textures--}function S(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let j=0;j<M.__webglFramebuffer[K].length;j++)r.deleteFramebuffer(M.__webglFramebuffer[K][j]);else r.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)r.deleteFramebuffer(M.__webglFramebuffer[K]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,j=O.length;K<j;K++){const $=n.get(O[K]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(w)}let P=0;function F(){P=0}function U(){const w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function H(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function q(w,M){const O=n.get(w);if(w.isVideoTexture&&Se(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,w,M);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+M)}function G(w,M){const O=n.get(w);if(w.version>0&&O.__version!==w.version){X(O,w,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+M)}function Y(w,M){const O=n.get(w);if(w.version>0&&O.__version!==w.version){X(O,w,M);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+M)}function V(w,M){const O=n.get(w);if(w.version>0&&O.__version!==w.version){J(O,w,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+M)}const te={[al]:r.REPEAT,[Ki]:r.CLAMP_TO_EDGE,[ol]:r.MIRRORED_REPEAT},ae={[bn]:r.NEAREST,[qf]:r.NEAREST_MIPMAP_NEAREST,[Zs]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[so]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},fe={[jf]:r.NEVER,[ip]:r.ALWAYS,[Jf]:r.LESS,[Ph]:r.LEQUAL,[Qf]:r.EQUAL,[np]:r.GEQUAL,[ep]:r.GREATER,[tp]:r.NOTEQUAL};function Ee(w,M){if(M.type===Zn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===so||M.magFilter===Zs||M.magFilter===Zi||M.minFilter===Pn||M.minFilter===so||M.minFilter===Zs||M.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,te[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,te[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,te[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ae[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ae[M.minFilter]),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bn||M.minFilter!==Zs&&M.minFilter!==Zi||M.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function We(w,M){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",C));const K=M.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const $=H(M);if($!==w.__cacheKey){j[$]===void 0&&(j[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[$].usedTimes++;const ve=j[w.__cacheKey];ve!==void 0&&(j[w.__cacheKey].usedTimes--,ve.usedTimes===0&&y(M)),w.__cacheKey=$,w.__webglTexture=j[$].texture}return O}function X(w,M,O){let K=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=r.TEXTURE_3D);const j=We(w,M),$=M.source;t.bindTexture(K,w.__webglTexture,r.TEXTURE0+O);const ve=n.get($);if($.version!==ve.__version||j===!0){t.activeTexture(r.TEXTURE0+O);const se=Ge.getPrimaries(Ge.workingColorSpace),ue=M.colorSpace===fi?null:Ge.getPrimaries(M.colorSpace),Ve=M.colorSpace===fi||se===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=_(M.image,!1,i.maxTextureSize);Q=it(M,Q);const he=s.convert(M.format,M.colorSpace),Me=s.convert(M.type);let Te=x(M.internalFormat,he,Me,M.colorSpace,M.isVideoTexture);Ee(K,M);let de;const ke=M.mipmaps,De=M.isVideoTexture!==!0,tt=ve.__version===void 0||j===!0,D=$.dataReady,ie=A(M,Q);if(M.isDepthTexture)Te=v(M.format===Yr,M.type),tt&&(De?t.texStorage2D(r.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Te,Q.width,Q.height,0,he,Me,null));else if(M.isDataTexture)if(ke.length>0){De&&tt&&t.texStorage2D(r.TEXTURE_2D,ie,Te,ke[0].width,ke[0].height);for(let W=0,Z=ke.length;W<Z;W++)de=ke[W],De?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,de.width,de.height,he,Me,de.data):t.texImage2D(r.TEXTURE_2D,W,Te,de.width,de.height,0,he,Me,de.data);M.generateMipmaps=!1}else De?(tt&&t.texStorage2D(r.TEXTURE_2D,ie,Te,Q.width,Q.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Me,Q.data)):t.texImage2D(r.TEXTURE_2D,0,Te,Q.width,Q.height,0,he,Me,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){De&&tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Te,ke[0].width,ke[0].height,Q.depth);for(let W=0,Z=ke.length;W<Z;W++)if(de=ke[W],M.format!==Mn)if(he!==null)if(De){if(D)if(M.layerUpdates.size>0){const ce=Wu(de.width,de.height,M.format,M.type);for(const oe of M.layerUpdates){const Re=de.data.subarray(oe*ce/de.data.BYTES_PER_ELEMENT,(oe+1)*ce/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,oe,de.width,de.height,1,he,Re)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,Q.depth,he,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Te,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,Q.depth,he,Me,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,Te,de.width,de.height,Q.depth,0,he,Me,de.data)}else{De&&tt&&t.texStorage2D(r.TEXTURE_2D,ie,Te,ke[0].width,ke[0].height);for(let W=0,Z=ke.length;W<Z;W++)de=ke[W],M.format!==Mn?he!==null?De?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(r.TEXTURE_2D,W,Te,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,de.width,de.height,he,Me,de.data):t.texImage2D(r.TEXTURE_2D,W,Te,de.width,de.height,0,he,Me,de.data)}else if(M.isDataArrayTexture)if(De){if(tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Te,Q.width,Q.height,Q.depth),D)if(M.layerUpdates.size>0){const W=Wu(Q.width,Q.height,M.format,M.type);for(const Z of M.layerUpdates){const ce=Q.data.subarray(Z*W/Q.data.BYTES_PER_ELEMENT,(Z+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,he,Me,ce)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Me,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,he,Me,Q.data);else if(M.isData3DTexture)De?(tt&&t.texStorage3D(r.TEXTURE_3D,ie,Te,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Me,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,he,Me,Q.data);else if(M.isFramebufferTexture){if(tt)if(De)t.texStorage2D(r.TEXTURE_2D,ie,Te,Q.width,Q.height);else{let W=Q.width,Z=Q.height;for(let ce=0;ce<ie;ce++)t.texImage2D(r.TEXTURE_2D,ce,Te,W,Z,0,he,Me,null),W>>=1,Z>>=1}}else if(ke.length>0){if(De&&tt){const W=ye(ke[0]);t.texStorage2D(r.TEXTURE_2D,ie,Te,W.width,W.height)}for(let W=0,Z=ke.length;W<Z;W++)de=ke[W],De?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,he,Me,de):t.texImage2D(r.TEXTURE_2D,W,Te,he,Me,de);M.generateMipmaps=!1}else if(De){if(tt){const W=ye(Q);t.texStorage2D(r.TEXTURE_2D,ie,Te,W.width,W.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Me,Q)}else t.texImage2D(r.TEXTURE_2D,0,Te,he,Me,Q);f(M)&&p(K),ve.__version=$.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function J(w,M,O){if(M.image.length!==6)return;const K=We(w,M),j=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+O);const $=n.get(j);if(j.version!==$.__version||K===!0){t.activeTexture(r.TEXTURE0+O);const ve=Ge.getPrimaries(Ge.workingColorSpace),se=M.colorSpace===fi?null:Ge.getPrimaries(M.colorSpace),ue=M.colorSpace===fi||ve===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!Ve&&!Q?he[Z]=_(M.image[Z],!0,i.maxCubemapSize):he[Z]=Q?M.image[Z].image:M.image[Z],he[Z]=it(M,he[Z]);const Me=he[0],Te=s.convert(M.format,M.colorSpace),de=s.convert(M.type),ke=x(M.internalFormat,Te,de,M.colorSpace),De=M.isVideoTexture!==!0,tt=$.__version===void 0||K===!0,D=j.dataReady;let ie=A(M,Me);Ee(r.TEXTURE_CUBE_MAP,M);let W;if(Ve){De&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,ke,Me.width,Me.height);for(let Z=0;Z<6;Z++){W=he[Z].mipmaps;for(let ce=0;ce<W.length;ce++){const oe=W[ce];M.format!==Mn?Te!==null?De?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,oe.width,oe.height,Te,oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,ke,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,oe.width,oe.height,Te,de,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,ke,oe.width,oe.height,0,Te,de,oe.data)}}}else{if(W=M.mipmaps,De&&tt){W.length>0&&ie++;const Z=ye(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Te,de,he[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,he[Z].width,he[Z].height,0,Te,de,he[Z].data);for(let ce=0;ce<W.length;ce++){const Re=W[ce].image[Z].image;De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Re.width,Re.height,Te,de,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,ke,Re.width,Re.height,0,Te,de,Re.data)}}else{De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,de,he[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,Te,de,he[Z]);for(let ce=0;ce<W.length;ce++){const oe=W[ce];De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Te,de,oe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,ke,Te,de,oe.image[Z])}}}f(M)&&p(r.TEXTURE_CUBE_MAP),$.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ge(w,M,O,K,j,$){const ve=s.convert(O.format,O.colorSpace),se=s.convert(O.type),ue=x(O.internalFormat,ve,se,O.colorSpace),Ve=n.get(M),Q=n.get(O);if(Q.__renderTarget=M,!Ve.__hasExternalTextures){const he=Math.max(1,M.width>>$),Me=Math.max(1,M.height>>$);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,$,ue,he,Me,M.depth,0,ve,se,null):t.texImage2D(j,$,ue,he,Me,0,ve,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,j,Q.__webglTexture,0,Oe(M)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,j,Q.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(w,M,O){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer){const K=M.depthTexture,j=K&&K.isDepthTexture?K.type:null,$=v(M.stencilBuffer,j),ve=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=Oe(M);Be(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,$,M.width,M.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,$,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,$,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,w)}else{const K=M.textures;for(let j=0;j<K.length;j++){const $=K[j],ve=s.convert($.format,$.colorSpace),se=s.convert($.type),ue=x($.internalFormat,ve,se,$.colorSpace),Ve=Oe(M);O&&Be(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,ue,M.width,M.height):Be(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve,ue,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ue,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const j=K.__webglTexture,$=Oe(M);if(M.depthTexture.format===Fr)Be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(M.depthTexture.format===Yr)Be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function we(w){const M=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=K}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,w)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=r.createRenderbuffer(),re(M.__webglDepthbuffer[K],w,!1);else{const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),re(M.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(w,M,O){const K=n.get(w);M!==void 0&&ge(K.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&we(w)}function ot(w){const M=w.texture,O=n.get(w),K=n.get(M);w.addEventListener("dispose",T);const j=w.textures,$=w.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=M.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let ue=0;ue<M.mipmaps.length;ue++)O.__webglFramebuffer[se][ue]=r.createFramebuffer()}else O.__webglFramebuffer[se]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)O.__webglFramebuffer[se]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ve)for(let se=0,ue=j.length;se<ue;se++){const Ve=n.get(j[se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&Be(w)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const ue=j[se];O.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const Ve=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),he=x(ue.internalFormat,Ve,Q,ue.colorSpace,w.isXRRenderTarget===!0),Me=Oe(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,he,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,O.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),re(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ge(O.__webglFramebuffer[se][ue],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else ge(O.__webglFramebuffer[se],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);f(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,ue=j.length;se<ue;se++){const Ve=j[se],Q=n.get(Ve);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Ee(r.TEXTURE_2D,Ve),ge(O.__webglFramebuffer,w,Ve,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),f(Ve)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,K.__webglTexture),Ee(se,M),M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ge(O.__webglFramebuffer[ue],w,M,r.COLOR_ATTACHMENT0,se,ue);else ge(O.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,se,0);f(M)&&p(se),t.unbindTexture()}w.depthBuffer&&we(w)}function ze(w){const M=w.textures;for(let O=0,K=M.length;O<K;O++){const j=M[O];if(f(j)){const $=b(w),ve=n.get(j).__webglTexture;t.bindTexture($,ve),p($),t.unbindTexture()}}}const _t=[],N=[];function sn(w){if(w.samples>0){if(Be(w)===!1){const M=w.textures,O=w.width,K=w.height;let j=r.COLOR_BUFFER_BIT;const $=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(w),se=M.length>1;if(se)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const Ve=n.get(M[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,O,K,0,0,O,K,j,r.NEAREST),l===!0&&(_t.length=0,N.length=0,_t.push(r.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(_t.push($),N.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const Ve=n.get(M[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Oe(w){return Math.min(i.maxSamples,w.samples)}function Be(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Se(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function it(w,M){const O=w.colorSpace,K=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==es&&O!==fi&&(Ge.getTransfer(O)===Ke?(K!==Mn||j!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function ye(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ue,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Be}function ov(r,e){function t(n,i=fi){let s;const a=Ge.getTransfer(i);if(n===ei)return r.UNSIGNED_BYTE;if(n===sc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Mh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return r.BYTE;if(n===Sh)return r.SHORT;if(n===Ts)return r.UNSIGNED_SHORT;if(n===rc)return r.INT;if(n===sr)return r.UNSIGNED_INT;if(n===Zn)return r.FLOAT;if(n===Bs)return r.HALF_FLOAT;if(n===bh)return r.ALPHA;if(n===Eh)return r.RGB;if(n===Mn)return r.RGBA;if(n===Th)return r.LUMINANCE;if(n===Ah)return r.LUMINANCE_ALPHA;if(n===Fr)return r.DEPTH_COMPONENT;if(n===Yr)return r.DEPTH_STENCIL;if(n===wh)return r.RED;if(n===oc)return r.RED_INTEGER;if(n===Rh)return r.RG;if(n===lc)return r.RG_INTEGER;if(n===cc)return r.RGBA_INTEGER;if(n===Ma||n===ba||n===Ea||n===Ta)if(a===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===ul||n===hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dl||n===fl)return a===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===_l||n===gl||n===vl||n===xl||n===yl||n===Sl||n===Ml||n===bl||n===El||n===Tl||n===Al||n===wl||n===Rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ml)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Cl||n===Pl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Aa)return a===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ch||n===Dl||n===Ll||n===Il)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class lv extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cv={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Nt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wi({vertexShader:uv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new Ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fv extends ts{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const _=new dv,f=t.getContextAttributes();let p=null,b=null;const x=[],v=[],A=new Ne;let C=null;const T=new yn;T.viewport=new vt;const R=new yn;R.viewport=new vt;const y=[T,R],S=new lv;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=x[X];return J===void 0&&(J=new No,x[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=x[X];return J===void 0&&(J=new No,x[X]=J),J.getGripSpace()},this.getHand=function(X){let J=x[X];return J===void 0&&(J=new No,x[X]=J),J.getHandSpace()};function U(X){const J=v.indexOf(X.inputSource);if(J===-1)return;const ge=x[J];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||a),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",q);for(let X=0;X<x.length;X++){const J=v[X];J!==null&&(v[X]=null,x[X].disconnect(J))}P=null,F=null,_.reset(),e.setRenderTarget(p),m=null,d=null,h=null,i=null,b=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",H),i.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ar(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,ge=null,re=null;f.depth&&(re=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=f.stencil?Yr:Fr,ge=f.stencil?qr:sr);const be={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ar(d.textureWidth,d.textureHeight,{format:Mn,type:ei,depthTexture:new Wh(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let J=0;J<X.removed.length;J++){const ge=X.removed[J],re=v.indexOf(ge);re>=0&&(v[re]=null,x[re].disconnect(ge))}for(let J=0;J<X.added.length;J++){const ge=X.added[J];let re=v.indexOf(ge);if(re===-1){for(let we=0;we<x.length;we++)if(we>=v.length){v.push(ge),re=we;break}else if(v[we]===null){v[we]=ge,re=we;break}if(re===-1)break}const be=x[re];be&&be.connect(ge)}}const G=new B,Y=new B;function V(X,J,ge){G.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(ge.matrixWorld);const re=G.distanceTo(Y),be=J.projectionMatrix.elements,we=ge.projectionMatrix.elements,Ue=be[14]/(be[10]-1),ot=be[14]/(be[10]+1),ze=(be[9]+1)/be[5],_t=(be[9]-1)/be[5],N=(be[8]-1)/be[0],sn=(we[8]+1)/we[0],Oe=Ue*N,Be=Ue*sn,Se=re/(-N+sn),it=Se*-N;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(it),X.translateZ(Se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ye=Ue+Se,w=ot+Se,M=Oe-it,O=Be+(re-it),K=ze*ot/w*ye,j=_t*ot/w*ye;X.projectionMatrix.makePerspective(M,O,K,j,ye,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let J=X.near,ge=X.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),S.near=R.near=T.near=J,S.far=R.far=T.far=ge,(P!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,F=S.far),T.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,S.layers.mask=T.layers.mask|R.layers.mask;const re=X.parent,be=S.cameras;te(S,re);for(let we=0;we<be.length;we++)te(be[we],re);be.length===2?V(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),ae(X,S,re)};function ae(X,J,ge){ge===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Nl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let fe=null;function Ee(X,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let re=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let we=0;we<ge.length;we++){const Ue=ge[we];let ot=null;if(m!==null)ot=m.getViewport(Ue);else{const _t=h.getViewSubImage(d,Ue);ot=_t.viewport,we===0&&(e.setRenderTargetTextures(b,_t.colorTexture,d.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(b))}let ze=y[we];ze===void 0&&(ze=new yn,ze.layers.enable(we),ze.viewport=new vt,y[we]=ze),ze.matrix.fromArray(Ue.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ue.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ot.x,ot.y,ot.width,ot.height),we===0&&(S.matrix.copy(ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(ze)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const we=h.getDepthInformation(ge[0]);we&&we.isValid&&we.texture&&_.init(e,we,i.renderState)}}for(let ge=0;ge<x.length;ge++){const re=v[ge],be=x[ge];re!==null&&be!==void 0&&be.update(re,J,c||a)}fe&&fe(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const We=new Gh;We.setAnimationLoop(Ee),this.setAnimationLoop=function(X){fe=X},this.dispose=function(){}}}const Vi=new ti,pv=new mt;function mv(r,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Bh(r)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,b,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,v)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,b,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Vt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Vt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const b=e.get(p),x=b.envMap,v=b.envMapRotation;x&&(f.envMap.value=x,Vi.copy(v),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),f.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Vi)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,b,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,b){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const b=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _v(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=i[b.id];v===void 0&&(g(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",f));const A=x.program;n.updateUBOMapping(b,A);const C=e.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function u(b){const x=h();b.__bindingPointIndex=x;const v=r.createBuffer(),A=b.__size,C=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],v=b.uniforms,A=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,T=v.length;C<T;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,S=R.length;y<S;y++){const P=R[y];if(m(P,C,y,A)===!0){const F=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let q=0;q<U.length;q++){const G=U[q],Y=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,F+H,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(b,x,v,A){const C=b.value,T=x+"_"+v;if(A[T]===void 0)return typeof C=="number"||typeof C=="boolean"?A[T]=C:A[T]=C.clone(),!0;{const R=A[T];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[T]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(b){const x=b.uniforms;let v=0;const A=16;for(let T=0,R=x.length;T<R;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,P=y.length;S<P;S++){const F=y[S],U=Array.isArray(F.value)?F.value:[F.value];for(let H=0,q=U.length;H<q;H++){const G=U[H],Y=_(G),V=v%A,te=V%Y.boundary,ae=V+te;v+=te,ae!==0&&A-ae<Y.storage&&(v+=A-ae),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Y.storage}}}const C=v%A;return C>0&&(v+=A-C),b.__size=v,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function f(b){const x=b.target;x.removeEventListener("dispose",f);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class gv{constructor(e={}){const{canvas:t=sp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,p=null;const b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=yi,this.toneMappingExposure=1;const v=this;let A=!1,C=0,T=0,R=null,y=-1,S=null;const P=new vt,F=new vt;let U=null;const H=new $e(0);let q=0,G=t.width,Y=t.height,V=1,te=null,ae=null;const fe=new vt(0,0,G,Y),Ee=new vt(0,0,G,Y);let We=!1;const X=new Vh;let J=!1,ge=!1;const re=new mt,be=new mt,we=new B,Ue=new vt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function _t(){return R===null?V:1}let N=n;function sn(E,L){return t.getContext(E,L)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),N===null){const L="webgl2";if(N=sn(L,E),N===null)throw sn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,Be,Se,it,ye,w,M,O,K,j,$,ve,se,ue,Ve,Q,he,Me,Te,de,ke,De,tt,D;function ie(){Oe=new Mg(N),Oe.init(),De=new ov(N,Oe),Be=new _g(N,Oe,e,De),Se=new rv(N,Oe),Be.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),it=new Tg(N),ye=new H0,w=new av(N,Oe,Se,ye,Be,De,it),M=new vg(v),O=new Sg(v),K=new Lp(N),tt=new pg(N,K),j=new bg(N,K,it,tt),$=new wg(N,j,K,it),Te=new Ag(N,Be,w),Q=new gg(ye),ve=new G0(v,M,O,Oe,Be,tt,Q),se=new mv(v,ye),ue=new X0,Ve=new j0(Oe),Me=new fg(v,M,O,Se,$,m,l),he=new nv(v,$,Be),D=new _v(N,it,Be,Se),de=new mg(N,Oe,it),ke=new Eg(N,Oe,it),it.programs=ve.programs,v.capabilities=Be,v.extensions=Oe,v.properties=ye,v.renderLists=ue,v.shadowMap=he,v.state=Se,v.info=it}ie();const W=new fv(v,N);this.xr=W,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,Y,!1))},this.getSize=function(E){return E.set(G,Y)},this.setSize=function(E,L,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Y=L,t.width=Math.floor(E*V),t.height=Math.floor(L*V),k===!0&&(t.style.width=E+"px",t.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(G*V,Y*V).floor()},this.setDrawingBufferSize=function(E,L,k){G=E,Y=L,V=k,t.width=Math.floor(E*k),t.height=Math.floor(L*k),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(fe)},this.setViewport=function(E,L,k,z){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,L,k,z),Se.viewport(P.copy(fe).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,L,k,z){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,L,k,z),Se.scissor(F.copy(Ee).multiplyScalar(V).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(E){Se.setScissorTest(We=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(E=!0,L=!0,k=!0){let z=0;if(E){let I=!1;if(R!==null){const ee=R.texture.format;I=ee===cc||ee===lc||ee===oc}if(I){const ee=R.texture.type,le=ee===ei||ee===sr||ee===Ts||ee===qr||ee===sc||ee===ac,pe=Me.getClearColor(),me=Me.getClearAlpha(),Ae=pe.r,Ce=pe.g,_e=pe.b;le?(g[0]=Ae,g[1]=Ce,g[2]=_e,g[3]=me,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ae,_[1]=Ce,_[2]=_e,_[3]=me,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}L&&(z|=N.DEPTH_BUFFER_BIT),k&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),Ve.dispose(),ye.dispose(),M.dispose(),O.dispose(),$.dispose(),tt.dispose(),D.dispose(),ve.dispose(),W.dispose(),W.removeEventListener("sessionstart",zc),W.removeEventListener("sessionend",Vc),Ni.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=it.autoReset,L=he.enabled,k=he.autoUpdate,z=he.needsUpdate,I=he.type;ie(),it.autoReset=E,he.enabled=L,he.autoUpdate=k,he.needsUpdate=z,he.type=I}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const L=E.target;L.removeEventListener("dispose",Re),dt(L)}function dt(E){Rt(E),ye.remove(E)}function Rt(E){const L=ye.get(E).programs;L!==void 0&&(L.forEach(function(k){ve.releaseProgram(k)}),E.isShaderMaterial&&ve.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,k,z,I,ee){L===null&&(L=ot);const le=I.isMesh&&I.matrixWorld.determinant()<0,pe=ff(E,L,k,z,I);Se.setMaterial(z,le);let me=k.index,Ae=1;if(z.wireframe===!0){if(me=j.getWireframeAttribute(k),me===void 0)return;Ae=2}const Ce=k.drawRange,_e=k.attributes.position;let He=Ce.start*Ae,nt=(Ce.start+Ce.count)*Ae;ee!==null&&(He=Math.max(He,ee.start*Ae),nt=Math.min(nt,(ee.start+ee.count)*Ae)),me!==null?(He=Math.max(He,0),nt=Math.min(nt,me.count)):_e!=null&&(He=Math.max(He,0),nt=Math.min(nt,_e.count));const rt=nt-He;if(rt<0||rt===1/0)return;tt.setup(I,z,pe,k,me);let Ft,Xe=de;if(me!==null&&(Ft=K.get(me),Xe=ke,Xe.setIndex(Ft)),I.isMesh)z.wireframe===!0?(Se.setLineWidth(z.wireframeLinewidth*_t()),Xe.setMode(N.LINES)):Xe.setMode(N.TRIANGLES);else if(I.isLine){let xe=z.linewidth;xe===void 0&&(xe=1),Se.setLineWidth(xe*_t()),I.isLineSegments?Xe.setMode(N.LINES):I.isLineLoop?Xe.setMode(N.LINE_LOOP):Xe.setMode(N.LINE_STRIP)}else I.isPoints?Xe.setMode(N.POINTS):I.isSprite&&Xe.setMode(N.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Xe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Xe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const xe=I._multiDrawStarts,zn=I._multiDrawCounts,qe=I._multiDrawCount,_n=me?K.get(me).bytesPerElement:1,ur=ye.get(z).currentProgram.getUniforms();for(let $t=0;$t<qe;$t++)ur.setValue(N,"_gl_DrawID",$t),Xe.render(xe[$t]/_n,zn[$t])}else if(I.isInstancedMesh)Xe.renderInstances(He,rt,I.count);else if(k.isInstancedBufferGeometry){const xe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,zn=Math.min(k.instanceCount,xe);Xe.renderInstances(He,rt,zn)}else Xe.render(He,rt)};function Ye(E,L,k){E.transparent===!0&&E.side===Kn&&E.forceSinglePass===!1?(E.side=Vt,E.needsUpdate=!0,Ks(E,L,k),E.side=Ai,E.needsUpdate=!0,Ks(E,L,k),E.side=Kn):Ks(E,L,k)}this.compile=function(E,L,k=null){k===null&&(k=E),p=Ve.get(k),p.init(L),x.push(p),k.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),E!==k&&E.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const z=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ee=I.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const pe=ee[le];Ye(pe,k,I),z.add(pe)}else Ye(ee,k,I),z.add(ee)}),x.pop(),p=null,z},this.compileAsync=function(E,L,k=null){const z=this.compile(E,L,k);return new Promise(I=>{function ee(){if(z.forEach(function(le){ye.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){I(E);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let mn=null;function kn(E){mn&&mn(E)}function zc(){Ni.stop()}function Vc(){Ni.start()}const Ni=new Gh;Ni.setAnimationLoop(kn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(E){mn=E,W.setAnimationLoop(E),E===null?Ni.stop():Ni.start()},W.addEventListener("sessionstart",zc),W.addEventListener("sessionend",Vc),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,L,R),p=Ve.get(E,x.length),p.init(L),x.push(p),be.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(be),ge=this.localClippingEnabled,J=Q.init(this.clippingPlanes,ge),f=ue.get(E,b.length),f.init(),b.push(f),W.enabled===!0&&W.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&ro(ee,L,-1/0,v.sortObjects)}ro(E,L,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(te,ae),ze=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ze&&Me.addToRenderList(f,E),this.info.render.frame++,J===!0&&Q.beginShadows();const k=p.state.shadowsArray;he.render(k,E,L),J===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=f.opaque,I=f.transmissive;if(p.setupLights(),L.isArrayCamera){const ee=L.cameras;if(I.length>0)for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];Hc(z,I,E,me)}ze&&Me.render(E);for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];Gc(f,E,me,me.viewport)}}else I.length>0&&Hc(z,I,E,L),ze&&Me.render(E),Gc(f,E,L);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,L),tt.resetDefaultState(),y=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],J===!0&&Q.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?f=b[b.length-1]:f=null};function ro(E,L,k,z){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){z&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const le=$.update(E),pe=E.material;pe.visible&&f.push(E,le,pe,k,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const le=$.update(E),pe=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ue.copy(le.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(pe)){const me=le.groups;for(let Ae=0,Ce=me.length;Ae<Ce;Ae++){const _e=me[Ae],He=pe[_e.materialIndex];He&&He.visible&&f.push(E,le,He,k,Ue.z,_e)}}else pe.visible&&f.push(E,le,pe,k,Ue.z,null)}}const ee=E.children;for(let le=0,pe=ee.length;le<pe;le++)ro(ee[le],L,k,z)}function Gc(E,L,k,z){const I=E.opaque,ee=E.transmissive,le=E.transparent;p.setupLightsView(k),J===!0&&Q.setGlobalState(v.clippingPlanes,k),z&&Se.viewport(P.copy(z)),I.length>0&&$s(I,L,k),ee.length>0&&$s(ee,L,k),le.length>0&&$s(le,L,k),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Hc(E,L,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ar(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Bs:ei,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const ee=p.state.transmissionRenderTarget[z.id],le=z.viewport||P;ee.setSize(le.z,le.w);const pe=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(H),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),ze&&Me.render(k);const me=v.toneMapping;v.toneMapping=yi;const Ae=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),J===!0&&Q.setGlobalState(v.clippingPlanes,z),$s(E,k,z),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let _e=0,He=L.length;_e<He;_e++){const nt=L[_e],rt=nt.object,Ft=nt.geometry,Xe=nt.material,xe=nt.group;if(Xe.side===Kn&&rt.layers.test(z.layers)){const zn=Xe.side;Xe.side=Vt,Xe.needsUpdate=!0,Wc(rt,k,z,Ft,Xe,xe),Xe.side=zn,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}v.setRenderTarget(pe),v.setClearColor(H,q),Ae!==void 0&&(z.viewport=Ae),v.toneMapping=me}function $s(E,L,k){const z=L.isScene===!0?L.overrideMaterial:null;for(let I=0,ee=E.length;I<ee;I++){const le=E[I],pe=le.object,me=le.geometry,Ae=z===null?le.material:z,Ce=le.group;pe.layers.test(k.layers)&&Wc(pe,L,k,me,Ae,Ce)}}function Wc(E,L,k,z,I,ee){E.onBeforeRender(v,L,k,z,I,ee),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(v,L,k,z,E,ee),I.transparent===!0&&I.side===Kn&&I.forceSinglePass===!1?(I.side=Vt,I.needsUpdate=!0,v.renderBufferDirect(k,L,z,I,E,ee),I.side=Ai,I.needsUpdate=!0,v.renderBufferDirect(k,L,z,I,E,ee),I.side=Kn):v.renderBufferDirect(k,L,z,I,E,ee),E.onAfterRender(v,L,k,z,I,ee)}function Ks(E,L,k){L.isScene!==!0&&(L=ot);const z=ye.get(E),I=p.state.lights,ee=p.state.shadowsArray,le=I.state.version,pe=ve.getParameters(E,I.state,ee,L,k),me=ve.getProgramCacheKey(pe);let Ae=z.programs;z.environment=E.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",Re),Ae=new Map,z.programs=Ae);let Ce=Ae.get(me);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===le)return qc(E,pe),Ce}else pe.uniforms=ve.getUniforms(E),E.onBeforeCompile(pe,v),Ce=ve.acquireProgram(pe,me),Ae.set(me,Ce),z.uniforms=pe.uniforms;const _e=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(_e.clippingPlanes=Q.uniform),qc(E,pe),z.needsLights=mf(E),z.lightsStateVersion=le,z.needsLights&&(_e.ambientLightColor.value=I.state.ambient,_e.lightProbe.value=I.state.probe,_e.directionalLights.value=I.state.directional,_e.directionalLightShadows.value=I.state.directionalShadow,_e.spotLights.value=I.state.spot,_e.spotLightShadows.value=I.state.spotShadow,_e.rectAreaLights.value=I.state.rectArea,_e.ltc_1.value=I.state.rectAreaLTC1,_e.ltc_2.value=I.state.rectAreaLTC2,_e.pointLights.value=I.state.point,_e.pointLightShadows.value=I.state.pointShadow,_e.hemisphereLights.value=I.state.hemi,_e.directionalShadowMap.value=I.state.directionalShadowMap,_e.directionalShadowMatrix.value=I.state.directionalShadowMatrix,_e.spotShadowMap.value=I.state.spotShadowMap,_e.spotLightMatrix.value=I.state.spotLightMatrix,_e.spotLightMap.value=I.state.spotLightMap,_e.pointShadowMap.value=I.state.pointShadowMap,_e.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Ce,z.uniformsList=null,Ce}function Xc(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=wa.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function qc(E,L){const k=ye.get(E);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function ff(E,L,k,z,I){L.isScene!==!0&&(L=ot),w.resetTextureUnits();const ee=L.fog,le=z.isMeshStandardMaterial?L.environment:null,pe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:es,me=(z.isMeshStandardMaterial?O:M).get(z.envMap||le),Ae=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_e=!!k.morphAttributes.position,He=!!k.morphAttributes.normal,nt=!!k.morphAttributes.color;let rt=yi;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(rt=v.toneMapping);const Ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Xe=Ft!==void 0?Ft.length:0,xe=ye.get(z),zn=p.state.lights;if(J===!0&&(ge===!0||E!==S)){const an=E===S&&z.id===y;Q.setState(z,E,an)}let qe=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==zn.state.version||xe.outputColorSpace!==pe||I.isBatchedMesh&&xe.batching===!1||!I.isBatchedMesh&&xe.batching===!0||I.isBatchedMesh&&xe.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&xe.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&xe.instancing===!1||!I.isInstancedMesh&&xe.instancing===!0||I.isSkinnedMesh&&xe.skinning===!1||!I.isSkinnedMesh&&xe.skinning===!0||I.isInstancedMesh&&xe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&xe.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&xe.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&xe.instancingMorph===!1&&I.morphTexture!==null||xe.envMap!==me||z.fog===!0&&xe.fog!==ee||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Q.numPlanes||xe.numIntersection!==Q.numIntersection)||xe.vertexAlphas!==Ae||xe.vertexTangents!==Ce||xe.morphTargets!==_e||xe.morphNormals!==He||xe.morphColors!==nt||xe.toneMapping!==rt||xe.morphTargetsCount!==Xe)&&(qe=!0):(qe=!0,xe.__version=z.version);let _n=xe.currentProgram;qe===!0&&(_n=Ks(z,L,I));let ur=!1,$t=!1,is=!1;const st=_n.getUniforms(),Tn=xe.uniforms;if(Se.useProgram(_n.program)&&(ur=!0,$t=!0,is=!0),z.id!==y&&(y=z.id,$t=!0),ur||S!==E){Se.buffers.depth.getReversed()?(re.copy(E.projectionMatrix),op(re),lp(re),st.setValue(N,"projectionMatrix",re)):st.setValue(N,"projectionMatrix",E.projectionMatrix),st.setValue(N,"viewMatrix",E.matrixWorldInverse);const si=st.map.cameraPosition;si!==void 0&&si.setValue(N,we.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&st.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,$t=!0,is=!0)}if(I.isSkinnedMesh){st.setOptional(N,I,"bindMatrix"),st.setOptional(N,I,"bindMatrixInverse");const an=I.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),st.setValue(N,"boneTexture",an.boneTexture,w))}I.isBatchedMesh&&(st.setOptional(N,I,"batchingTexture"),st.setValue(N,"batchingTexture",I._matricesTexture,w),st.setOptional(N,I,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",I._indirectTexture,w),st.setOptional(N,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",I._colorsTexture,w));const rs=k.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&Te.update(I,k,_n),($t||xe.receiveShadow!==I.receiveShadow)&&(xe.receiveShadow=I.receiveShadow,st.setValue(N,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Tn.envMap.value=me,Tn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(Tn.envMapIntensity.value=L.environmentIntensity),$t&&(st.setValue(N,"toneMappingExposure",v.toneMappingExposure),xe.needsLights&&pf(Tn,is),ee&&z.fog===!0&&se.refreshFogUniforms(Tn,ee),se.refreshMaterialUniforms(Tn,z,V,Y,p.state.transmissionRenderTarget[E.id]),wa.upload(N,Xc(xe),Tn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(wa.upload(N,Xc(xe),Tn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&st.setValue(N,"center",I.center),st.setValue(N,"modelViewMatrix",I.modelViewMatrix),st.setValue(N,"normalMatrix",I.normalMatrix),st.setValue(N,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const an=z.uniformsGroups;for(let si=0,ai=an.length;si<ai;si++){const Yc=an[si];D.update(Yc,_n),D.bind(Yc,_n)}}return _n}function pf(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function mf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,L,k){ye.get(E.texture).__webglTexture=L,ye.get(E.depthTexture).__webglTexture=k;const z=ye.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){const k=ye.get(E);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,k=0){R=E,C=L,T=k;let z=!0,I=null,ee=!1,le=!1;if(E){const me=ye.get(E);if(me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(me.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(me.__hasExternalTextures)w.rebindTextures(E,ye.get(E.texture).__webglTexture,ye.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const _e=E.depthTexture;if(me.__boundDepthTexture!==_e){if(_e!==null&&ye.has(_e)&&(E.width!==_e.image.width||E.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);const Ce=ye.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?I=Ce[L][k]:I=Ce[L],ee=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?I=ye.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[k]:I=Ce,P.copy(E.viewport),F.copy(E.scissor),U=E.scissorTest}else P.copy(fe).multiplyScalar(V).floor(),F.copy(Ee).multiplyScalar(V).floor(),U=We;if(Se.bindFramebuffer(N.FRAMEBUFFER,I)&&z&&Se.drawBuffers(E,I),Se.viewport(P),Se.scissor(F),Se.setScissorTest(U),ee){const me=ye.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,k)}else if(le){const me=ye.get(E.texture),Ae=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.__webglTexture,k||0,Ae)}y=-1},this.readRenderTargetPixels=function(E,L,k,z,I,ee,le){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){Se.bindFramebuffer(N.FRAMEBUFFER,pe);try{const me=E.texture,Ae=me.format,Ce=me.type;if(!Be.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-z&&k>=0&&k<=E.height-I&&N.readPixels(L,k,z,I,De.convert(Ae),De.convert(Ce),ee)}finally{const me=R!==null?ye.get(R).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(E,L,k,z,I,ee,le){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){const me=E.texture,Ae=me.format,Ce=me.type;if(!Be.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-z&&k>=0&&k<=E.height-I){Se.bindFramebuffer(N.FRAMEBUFFER,pe);const _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,ee.byteLength,N.STREAM_READ),N.readPixels(L,k,z,I,De.convert(Ae),De.convert(Ce),0);const He=R!==null?ye.get(R).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,He);const nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ap(N,nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ee),N.deleteBuffer(_e),N.deleteSync(nt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,L=null,k=0){E.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-k),I=Math.floor(E.image.width*z),ee=Math.floor(E.image.height*z),le=L!==null?L.x:0,pe=L!==null?L.y:0;w.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,le,pe,I,ee),Se.unbindTexture()},this.copyTextureToTexture=function(E,L,k=null,z=null,I=0){E.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],L=arguments[2],I=arguments[3]||0,k=null);let ee,le,pe,me,Ae,Ce,_e,He,nt;const rt=E.isCompressedTexture?E.mipmaps[I]:E.image;k!==null?(ee=k.max.x-k.min.x,le=k.max.y-k.min.y,pe=k.isBox3?k.max.z-k.min.z:1,me=k.min.x,Ae=k.min.y,Ce=k.isBox3?k.min.z:0):(ee=rt.width,le=rt.height,pe=rt.depth||1,me=0,Ae=0,Ce=0),z!==null?(_e=z.x,He=z.y,nt=z.z):(_e=0,He=0,nt=0);const Ft=De.convert(L.format),Xe=De.convert(L.type);let xe;L.isData3DTexture?(w.setTexture3D(L,0),xe=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(w.setTexture2DArray(L,0),xe=N.TEXTURE_2D_ARRAY):(w.setTexture2D(L,0),xe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const zn=N.getParameter(N.UNPACK_ROW_LENGTH),qe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_n=N.getParameter(N.UNPACK_SKIP_PIXELS),ur=N.getParameter(N.UNPACK_SKIP_ROWS),$t=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,me),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ae),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce);const is=E.isDataArrayTexture||E.isData3DTexture,st=L.isDataArrayTexture||L.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Tn=ye.get(E),rs=ye.get(L),an=ye.get(Tn.__renderTarget),si=ye.get(rs.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,an.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ai=0;ai<pe;ai++)is&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.get(E).__webglTexture,I,Ce+ai),E.isDepthTexture?(st&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.get(L).__webglTexture,I,nt+ai),N.blitFramebuffer(me,Ae,ee,le,_e,He,ee,le,N.DEPTH_BUFFER_BIT,N.NEAREST)):st?N.copyTexSubImage3D(xe,I,_e,He,nt+ai,me,Ae,ee,le):N.copyTexSubImage2D(xe,I,_e,He,nt+ai,me,Ae,ee,le);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else st?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(xe,I,_e,He,nt,ee,le,pe,Ft,Xe,rt.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,I,_e,He,nt,ee,le,pe,Ft,rt.data):N.texSubImage3D(xe,I,_e,He,nt,ee,le,pe,Ft,Xe,rt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,I,_e,He,ee,le,Ft,Xe,rt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,I,_e,He,rt.width,rt.height,Ft,rt.data):N.texSubImage2D(N.TEXTURE_2D,I,_e,He,ee,le,Ft,Xe,rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,zn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_n),N.pixelStorei(N.UNPACK_SKIP_ROWS,ur),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$t),I===0&&L.generateMipmaps&&N.generateMipmap(xe),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,L,k=null,z=null,I=0){return E.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],L=arguments[3],I=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,L,k,z,I)},this.initRenderTarget=function(E){ye.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Se.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}class vv extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ul,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new B;class Fa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ol extends Vs{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Tr;const cs=new B,Ar=new B,wr=new B,Rr=new Ne,us=new Ne,Kh=new mt,ga=new B,hs=new B,va=new B,Xu=new Ne,Fo=new Ne,qu=new Ne;class yv extends Gt{constructor(e=new Ol){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new ri;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xv(t,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new Fa(n,3,0,!1)),Tr.setAttribute("uv",new Fa(n,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),Kh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-wr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;xa(ga.set(-.5,-.5,0),wr,a,Ar,i,s),xa(hs.set(.5,-.5,0),wr,a,Ar,i,s),xa(va.set(.5,.5,0),wr,a,Ar,i,s),Xu.set(0,0),Fo.set(1,0),qu.set(1,1);let o=e.ray.intersectTriangle(ga,hs,va,!1,cs);if(o===null&&(xa(hs.set(-.5,.5,0),wr,a,Ar,i,s),Fo.set(0,1),o=e.ray.intersectTriangle(ga,va,hs,!1,cs),o===null))return;const l=e.ray.origin.distanceTo(cs);l<e.near||l>e.far||t.push({distance:l,point:cs.clone(),uv:hn.getInterpolation(cs,ga,hs,va,Xu,Fo,qu,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xa(r,e,t,n,i,s){Rr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(us.x=s*Rr.x-i*Rr.y,us.y=i*Rr.x+s*Rr.y):us.copy(Rr),r.copy(e),r.x+=us.x,r.y+=us.y,r.applyMatrix4(Kh)}class Zh extends Nt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fc extends ri{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new B,u=new Ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const m=n+h/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Un(a,3)),this.setAttribute("normal",new Un(o,3)),this.setAttribute("uv",new Un(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Yu=new mt;class Sv{constructor(e,t,n=0,i=1/0){this.ray=new Uh(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yu),this}intersectObject(e,t=!0,n=[]){return Bl(e,this,n,t),n.sort($u),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Bl(e[i],this,n,t);return n.sort($u),n}}function $u(r,e){return r.distance-e.distance}function Bl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Bl(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);function Yn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function jh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},As={duration:.5,overwrite:!1,delay:0},pc,wt,at,dn=1e8,je=1/dn,kl=Math.PI*2,Mv=kl/4,bv=0,Jh=Math.sqrt,Ev=Math.cos,Tv=Math.sin,At=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},ni=function(e){return typeof e=="number"},mc=function(e){return typeof e>"u"},On=function(e){return typeof e=="object"},Ht=function(e){return e!==!1},_c=function(){return typeof window<"u"},ya=function(e){return pt(e)||At(e)},Qh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Lt=Array.isArray,Av=/random\([^)]+\)/g,wv=/,\s*/g,Ku=/(?:-?\.?\d|\.)+/gi,ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,td=/[+-]=-?[.\d]+/,Rv=/[^,'"\[\]\s]+/gi,Cv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ct,An,zl,gc,nn={},Oa={},nd,id=function(e){return(Oa=Kr(e,nn))&&Yt},vc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ws=function(e,t){return!t&&console.warn(e)},rd=function(e,t){return e&&(nn[e]=t)&&Oa&&(Oa[e]=t)||nn},Rs=function(){return 0},Pv={suppressEvents:!0,isStart:!0,kill:!1},Ra={suppressEvents:!0,kill:!1},Dv={suppressEvents:!0},xc={},Mi=[],Vl={},sd,jt={},Bo={},Zu=30,Ca=[],yc="",Sc=function(e){var t=e[0],n,i;if(On(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ca.length;i--&&!Ca[i].targetTest(t););n=Ca[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new wd(e[i],n)))||e.splice(i,1);return e},Ji=function(e){return e._gsap||Sc(fn(e))[0]._gsap},ad=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():mc(n)&&e.getAttribute&&e.getAttribute(t)||n},Wt=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},lt=function(e){return Math.round(e*1e7)/1e7||0},Br=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Lv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ba=function(){var e=Mi.length,t=Mi.slice(0),n,i;for(Vl={},Mi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Mc=function(e){return!!(e._initted||e._startAt||e.add)},od=function(e,t,n,i){Mi.length&&!wt&&Ba(),e.render(t,n,!!(wt&&t<0&&Mc(e))),Mi.length&&!wt&&Ba()},ld=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rv).length<2?t:At(e)?e.trim():e},cd=function(e){return e},rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Iv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Kr=function(e,t){for(var n in t)e[n]=t[n];return e},ju=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=On(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ka=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ys=function(e){var t=e.parent||ct,n=e.keyframes?Iv(Lt(e.keyframes)):rn;if(Ht(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Uv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ud=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},eo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ri=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Nv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gl=function(e,t,n,i){return e._startAt&&(wt?e._startAt.revert(Ra):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Fv=function r(e){return!e||e._ts&&r(e.parent)},Ju=function(e){return e._repeat?Zr(e._tTime,e=e.duration()+e._rDelay)*e:0},Zr=function(e,t){var n=Math.floor(e=lt(e/t));return e&&n===e?n-1:n},za=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},to=function(e){return e._end=lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||je)||0))},no=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),to(e),n._dirty||Qi(n,e)),e},hd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=za(e.rawTime(),t),(!t._dur||Hs(0,t.totalDuration(),n)-t._tTime>je)&&t.render(n,!0)),Qi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-je}},Cn=function(e,t,n,i){return t.parent&&Ri(t),t._start=lt((ni(n)?n:!n&&Va(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==ct?cn(e,n,t):e._time)+t._delay),t._end=lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ud(e,t,"_first","_last",e._sort?"_start":0),Va(t)||(e._recent=t),i||hd(e,t),e._ts<0&&no(e,e._tTime),e},dd=function(e,t){return(nn.ScrollTrigger||vc("scrollTrigger",t))&&nn.ScrollTrigger.create(t,e)},fd=function(e,t,n,i,s){if(Ec(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sd!==Jt.frame)return Mi.push(e),e._lazy=[s,i],1},Ov=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Va=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Bv=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Ov(e)&&!(!e._initted&&Va(e))||(e._ts<0||e._dp._ts<0)&&!Va(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Hs(0,e._tDur,t),u=Zr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Zr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||wt||i||e._zTime===je||!t&&e._zTime){if(!e._initted&&fd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?je:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Gl(e,t,n,!0),e._onUpdate&&!n&&Qt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Qt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ri(e,1),!n&&!wt&&(Qt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},jr=function(e,t,n,i){var s=e._repeat,a=lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:lt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&no(e,e._tTime=e._tDur*o),e.parent&&to(e),n||Qi(e.parent,e),e},Qu=function(e){return e instanceof zt?Qi(e):jr(e,e._dur)},zv={_start:0,endTime:Rs,totalDuration:Rs},cn=function r(e,t,n){var i=e.labels,s=e._recent||zv,a=e.duration()>=dn?s.endTime(!1):e._dur,o,l,c;return At(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Lt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ss=function(e,t,n){var i=ni(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ht(l.vars.inherit)&&l.parent;a.immediateRender=Ht(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new yt(t[0],a,t[s+1])},Ii=function(e,t){return e||e===0?t(e):t},Hs=function(e,t,n){return n<e?e:n>t?t:n},Dt=function(e,t){return!At(e)||!(t=Cv.exec(e))?"":t[1]},Vv=function(e,t,n){return Ii(n,function(i){return Hs(e,t,i)})},Hl=[].slice,pd=function(e,t){return e&&On(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&On(e[0]))&&!e.nodeType&&e!==An},Gv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return At(i)&&!t||pd(i,1)?(s=n).push.apply(s,fn(i)):n.push(i)})||n},fn=function(e,t,n){return at&&!t&&at.selector?at.selector(e):At(e)&&!n&&(zl||!Jr())?Hl.call((t||gc).querySelectorAll(e),0):Lt(e)?Gv(e,n):pd(e)?Hl.call(e,0):e?[e]:[]},Wl=function(e){return e=fn(e)[0]||ws("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fn(t,n.querySelectorAll?n:n===e?ws("Invalid scope")||gc.createElement("div"):e)}},md=function(e){return e.sort(function(){return .5-Math.random()})},_d=function(e){if(pt(e))return e;var t=On(e)?e:{each:e},n=er(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return At(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,m,g){var _=(g||t).length,f=a[_],p,b,x,v,A,C,T,R,y;if(!f){if(y=t.grid==="auto"?0:(t.grid||[1,dn])[1],!y){for(T=-dn;T<(T=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(f=a[_]=[],p=l?Math.min(y,_)*u-.5:i%y,b=y===dn?0:l?_*h/y-.5:i/y|0,T=0,R=dn,C=0;C<_;C++)x=C%y-p,v=b-(C/y|0),f[C]=A=c?Math.abs(c==="y"?v:x):Jh(x*x+v*v),A>T&&(T=A),A<R&&(R=A);i==="random"&&md(f),f.max=T-R,f.min=R,f.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),f.b=_<0?s-_:s,f.u=Dt(t.amount||t.each)||0,n=n&&_<0?tx(n):n}return _=(f[d]-f.min)/f.max||0,lt(f.b+(n?n(_):_)*f.v)+f.u}},Xl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ni(n)?0:Dt(n))}},gd=function(e,t){var n=Lt(e),i,s;return!n&&On(e)&&(i=n=e.radius||dn,e.values?(e=fn(e.values),(s=!ni(e[0]))&&(i*=i)):e=Xl(e.increment)),Ii(t,n?pt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=dn,u=0,h=e.length,d,m;h--;)s?(d=e[h].x-o,m=e[h].y-l,d=d*d+m*m):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||ni(a)?u:u+Dt(a)}:Xl(e))},vd=function(e,t,n,i){return Ii(Lt(e)?!t:n===!0?!!(n=0):!i,function(){return Lt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Hv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Wv=function(e,t){return function(n){return e(parseFloat(n))+(t||Dt(n))}},Xv=function(e,t,n){return yd(e,t,0,1,n)},xd=function(e,t,n){return Ii(n,function(i){return e[~~t(i)]})},qv=function r(e,t,n){var i=t-e;return Lt(e)?xd(e,r(0,e.length),t):Ii(n,function(s){return(i+(s-e)%i)%i+e})},Yv=function r(e,t,n){var i=t-e,s=i*2;return Lt(e)?xd(e,r(0,e.length-1),t):Ii(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Cs=function(e){return e.replace(Av,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(wv);return vd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},yd=function(e,t,n,i,s){var a=t-e,o=i-n;return Ii(s,function(l){return n+((l-e)/a*o||0)})},$v=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=At(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Lt(e)&&!Lt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Kr(Lt(e)?[]:{},e));if(!u){for(l in t)bc.call(o,e,l,"get",t[l]);s=function(g){return wc(g,o)||(a?e.p:e)}}}return Ii(n,s)},eh=function(e,t,n){var i=e.labels,s=dn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Qt=function(e,t,n){var i=e.vars,s=i[t],a=at,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Mi.length&&Ba(),o&&(at=o),u=l?s.apply(c,l):s.call(c),at=a,u},vs=function(e){return Ri(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wt),e.progress()<1&&Qt(e,"onInterrupt"),e},Ir,Sd=[],Md=function(e){if(e)if(e=!e.name&&e.default||e,_c()||e.headless){var t=e.name,n=pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Rs,render:wc,add:bc,kill:hx,modifier:ux,rawVars:0},a={targetTest:0,get:0,getSetter:Ac,aliases:{},register:0};if(Jr(),e!==i){if(jt[t])return;rn(i,rn(ka(e,s),a)),Kr(i.prototype,Kr(s,ka(e,a))),jt[i.prop=t]=i,e.targetTest&&(Ca.push(i),xc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rd(t,i),e.register&&e.register(Yt,i,Xt)}else Sd.push(e)},Qe=255,xs={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},ko=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},bd=function(e,t,n){var i=e?ni(e)?[e>>16,e>>8&Qe,e&Qe]:0:xs.black,s,a,o,l,c,u,h,d,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xs[e])i=xs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ku),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ko(l+1/3,s,a),i[1]=ko(l,s,a),i[2]=ko(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(ed),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ku)||xs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Qe,a=i[1]/Qe,o=i[2]/Qe,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ed=function(e){var t=[],n=[],i=-1;return e.split(bi).forEach(function(s){var a=s.match(Lr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},th=function(e,t,n){var i="",s=(e+i).match(bi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=bd(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Ed(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(bi,"1").split(Lr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(bi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},bi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xs)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Kv=/hsl[a]?\(/,Td=function(e){var t=e.join(" "),n;if(bi.lastIndex=0,bi.test(t))return n=Kv.test(t),e[1]=th(e[1],n),e[0]=th(e[0],n,Ed(e[1])),!0},Ps,Jt=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,m,g=function _(f){var p=r()-i,b=f===!0,x,v,A,C;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,x=A-a,(x>0||b)&&(C=++h.frame,d=A-h.time*1e3,h.time=A=A/1e3,a+=x+(x>=s?0:s-x),v=1),b||(l=c(_)),v)for(m=0;m<o.length;m++)o[m](A,d,C,f)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){nd&&(!zl&&_c()&&(An=zl=window,gc=An.document||{},nn.gsap=Yt,(An.gsapVersions||(An.gsapVersions=[])).push(Yt.version),id(Oa||An.GreenSockGlobals||!An.gsap&&An||{}),Sd.forEach(Md)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(f){return setTimeout(f,a-h.time*1e3+1|0)},Ps=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ps=0,c=Rs},lagSmoothing:function(f,p){e=f||1/0,t=Math.min(p||33,e)},fps:function(f){s=1e3/(f||240),a=h.time*1e3+s},add:function(f,p,b){var x=p?function(v,A,C,T){f(v,A,C,T),h.remove(x)}:f;return h.remove(f),o[b?"unshift":"push"](x),Jr(),x},remove:function(f,p){~(p=o.indexOf(f))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},h})(),Jr=function(){return!Ps&&Jt.wake()},Fe={},Zv=/^[\d.\-M][\d.\-,\s]/,jv=/["']/g,Jv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(jv,"").trim():+c,i=l.substr(o+1).trim();return t},Qv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ex=function(e){var t=(e+"").split("("),n=Fe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Jv(t[1])]:Qv(e).split(",").map(ld)):Fe._CE&&Zv.test(e)?Fe._CE("",e):n},tx=function(e){return function(t){return 1-e(1-t)}},er=function(e,t){return e&&(pt(e)?e:Fe[e]||ex(e))||t},cr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Wt(e,function(o){Fe[o]=nn[o]=s,Fe[a=o.toLowerCase()]=n;for(var l in s)Fe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Fe[o+"."+l]=s[l]}),s},Ad=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/kl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Tv((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Ad(o);return s=kl/s,l.config=function(c,u){return r(e,c,u)},l},Vo=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ad(n);return i.config=function(s){return r(e,s)},i};Wt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;cr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Fe.Linear.easeNone=Fe.none=Fe.Linear.easeIn;cr("Elastic",zo("in"),zo("out"),zo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};cr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);cr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});cr("Circ",function(r){return-(Jh(1-r*r)-1)});cr("Sine",function(r){return r===1?1:-Ev(r*Mv)+1});cr("Back",Vo("in"),Vo("out"),Vo());Fe.SteppedEase=Fe.steps=nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-je;return function(o){return((i*Hs(0,a,o)|0)+s)*n}}};As.ease=Fe["quad.out"];Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yc+=r+","+r+"Params,"});var wd=function(e,t){this.id=bv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ad,this.set=t?t.getSetter:Ac},Ds=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,jr(this,+t.duration,1,1),this.data=t.data,at&&(this._ctx=at,at.data.push(this)),Ps||Jt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,jr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Jr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(no(this,n),!s._dp||s.parent||hd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===je||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),od(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ju(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ju(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Zr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-je?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?za(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-je?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Hs(-Math.abs(this._delay),o,s),i!==!1),to(this),Nv(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Jr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==je,a;if(s)for(this._tTime-=je,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+je){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Cn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ht(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?za(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Dv);var i=wt;return wt=n,Mc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(cn(this,n),Ht(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ht(i)),this._dur||(this._zTime=-je),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-je:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-je,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-je)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=pt(n)?n:cd,l=function(){var u=i.then;i.then=null,s&&s(),pt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){vs(this)},r})();rn(Ds.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-je,_prom:0,_ps:!1,_rts:1});var zt=(function(r){jh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ht(n.sortChildren),ct&&Cn(n.parent||ct,Yn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&dd(Yn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ss(0,arguments,this),this},t.from=function(i,s,a){return Ss(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ss(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ys(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new yt(i,s,cn(this,a),1),this},t.call=function(i,s,a){return Cn(this,yt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new yt(i,a,cn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ys(a).immediateRender=Ht(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ys(o).immediateRender=Ht(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:lt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,m,g,_,f,p,b,x,v,A,C,T;if(this!==ct&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,x=this._ts,p=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,f=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,s,a);if(d=lt(u%f),u===l?(_=this._repeat,d=c):(A=lt(u/f),_=~~A,_&&_===A&&(d=c,_--),d>c&&(d=c)),A=Zr(this._tTime,f),!o&&this._tTime&&A!==_&&this._tTime-A*f-this._dur<=0&&(A=_),C&&_&1&&(d=c-d,T=1),_!==A&&!this._lock){var R=C&&A&1,y=R===(C&&_&1);if(_<A&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(T?0:lt(_*f)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Qt(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=kv(this,lt(o),lt(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!A&&(Qt(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,a),d!==this._time||!this._ts&&!p){b=0,g&&(u+=this._zTime=-je);break}}m=g}else{m=this._last;for(var S=i<0?i:d;m;){if(g=m._prev,(m._act||S<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(S-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(S-m._start)*m._ts,s,a||wt&&Mc(m)),d!==this._time||!this._ts&&!p){b=0,g&&(u+=this._zTime=S?-je:je);break}}m=g}}if(b&&!s&&(this.pause(),b.render(d>=o?0:-je)._zTime=d>=o?1:-1,this._ts))return this._start=v,to(this),this.render(i,s,a);this._onUpdate&&!s&&Qt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ri(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Qt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ni(s)||(s=cn(this,s,i)),!(i instanceof Ds)){if(Lt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(At(i))return this.addLabel(i,s);if(pt(i))i=yt.delayedCall(0,i);else return this}return this!==i?Cn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-dn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof yt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return At(i)?this.removeLabel(i):pt(i)?this.killTweensOf(i):(i.parent===this&&eo(this,i),i===this._recent&&(this._recent=this._last),Qi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=lt(Jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=yt.delayedCall(0,s||Rs,a);return o.data="isPause",this._hasPause=1,Cn(this,o,cn(this,i))},t.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&Ri(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)mi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=fn(i),l=this._first,c=ni(s),u;l;)l instanceof yt?Lv(l._targets,o)&&(c?(!mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=cn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,g=yt.to(a,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||je,onStart:function(){if(a.pause(),!m){var f=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==f&&jr(g,f,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,rn({startAt:{time:cn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),eh(this,cn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),eh(this,cn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+je)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=lt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qi(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=dn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Cn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=lt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;jr(a,a===ct&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ct._ts&&(od(ct,za(i,ct)),sd=Jt.frame),Jt.frame>=Zu){Zu+=tn.autoSleep||120;var s=ct._first;if((!s||!s._ts)&&tn.autoSleep&&Jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jt.sleep()}}},e})(Ds);rn(zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var nx=function(e,t,n,i,s,a,o){var l=new Xt(this._pt,e,t,0,1,Ld,null,s),c=0,u=0,h,d,m,g,_,f,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Cs(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),d=n.match(Oo)||[];h=Oo.exec(i);)g=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(f=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:f,c:g.charAt(1)==="="?Br(f,g)-f:parseFloat(g)-f,m:m&&m<4?Math.round:0},c=Oo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(td.test(i)||p)&&(l.e=0),this._pt=l,l},bc=function(e,t,n,i,s,a,o,l,c,u){pt(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:pt(h)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=pt(h)?c?ox:Pd:Tc,g;if(At(i)&&(~i.indexOf("random(")&&(i=Cs(i)),i.charAt(1)==="="&&(g=Br(d,i)+(Dt(d)||0),(g||g===0)&&(i=g))),!u||d!==i||ql)return!isNaN(d*i)&&i!==""?(g=new Xt(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?cx:Dd,0,m),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&vc(t,i),nx.call(this,e,t,d,i,m,l||tn.stringFilter,c))},ix=function(e,t,n,i,s){if(pt(e)&&(e=Ms(e,s,t,n,i)),!On(e)||e.style&&e.nodeType||Lt(e)||Qh(e))return At(e)?Ms(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ms(e[o],s,t,n,i);return a},Rd=function(e,t,n,i,s,a){var o,l,c,u;if(jt[e]&&(o=new jt[e]).init(s,o.rawVars?t[e]:ix(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Xt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ir))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},mi,ql,Ec=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,m=i.autoRevert,g=e._dur,_=e._startAt,f=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:f,x=e._overwrite==="auto"&&!pc,v=e.timeline,A=i.easeReverse||h,C,T,R,y,S,P,F,U,H,q,G,Y,V;if(v&&(!d||!s)&&(s="none"),e._ease=er(s,As.ease),e._rEase=A&&(er(A)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(U=f[0]?Ji(f[0]).harness:0,Y=U&&i[U.prop],C=ka(i,xc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&g?Ra:Pv),_._lazy=0),a){if(Ri(e._startAt=yt.set(f,rn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ht(l),startAt:null,delay:0,onUpdate:c&&function(){return Qt(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wt||!o&&!m)&&e._startAt.revert(Ra),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),R=rn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ht(l),immediateRender:o,stagger:0,parent:p},C),Y&&(R[U.prop]=Y),Ri(e._startAt=yt.set(f,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wt?e._startAt.revert(Ra):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,je,je);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ht(l)||l&&!g,T=0;T<f.length;T++){if(S=f[T],F=S._gsap||Sc(f)[T]._gsap,e._ptLookup[T]=q={},Vl[F.id]&&Mi.length&&Ba(),G=b===f?T:b.indexOf(S),U&&(H=new U).init(S,Y||C,e,G,b)!==!1&&(e._pt=y=new Xt(e._pt,S,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(te){q[te]=y}),H.priority&&(P=1)),!U||Y)for(R in C)jt[R]&&(H=Rd(R,C,e,G,S,b))?H.priority&&(P=1):q[R]=y=bc.call(e,S,R,"get",C[R],G,b,0,i.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),x&&e._pt&&(mi=e,ct.killTweensOf(S,q,e.globalTime(t)),V=!e.parent,mi=0),e._pt&&l&&(Vl[F.id]=1)}P&&Id(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,d&&t<=0&&v.render(dn,!0,!0)},rx=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,m;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(u=d[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ql=1,e.vars[t]="+=0",Ec(e,o),ql=0,l?ws(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=gt(n)+Dt(h.e)),h.b&&(h.b=u.s+Dt(h.b))},sx=function(e,t){var n=e[0]?Ji(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Kr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ax=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Lt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ms=function(e,t,n,i,s){return pt(e)?e.call(t,n,i,s):At(e)&&~e.indexOf("random(")?Cs(e):e},Ga=yc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Cd={};Wt(Ga+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Cd[r]=1});Ga=Ga.split(",");var yt=(function(r){jh(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ys(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,f=l.scrollTrigger,p=i.parent||ct,b=(Lt(n)||Qh(n)?ni(n[0]):"length"in i)?[n]:fn(n),x,v,A,C,T,R,y,S;if(o._targets=b.length?Sc(b):ws("GSAP target "+n+" not found. https://gsap.com",!tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||d||ya(c)||ya(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(x=o.timeline=new zt({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:b}),x.kill(),x.parent=x._dp=Yn(o),x._start=0,d||ya(c)||ya(u)){if(C=b.length,y=d&&_d(d),On(d))for(T in d)~Ga.indexOf(T)&&(S||(S={}),S[T]=d[T]);for(v=0;v<C;v++)A=ka(i,Cd),A.stagger=0,P&&(A.easeReverse=P),S&&Kr(A,S),R=b[v],A.duration=+Ms(c,Yn(o),v,R,b),A.delay=(+Ms(u,Yn(o),v,R,b)||0)-o._delay,!d&&C===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(R,A,y?y(v,R,b):0),x._ease=Fe.none;x.duration()?c=u=0:o.timeline=0}else if(g){ys(rn(x.vars.defaults,{ease:"none"})),x._ease=er(g.ease||i.ease||"none");var F=0,U,H,q;if(Lt(g))g.forEach(function(G){return x.to(b,G,">")}),x.duration();else{A={};for(T in g)T==="ease"||T==="easeEach"||ax(T,g[T],A,g.easeEach);for(T in A)for(U=A[T].sort(function(G,Y){return G.t-Y.t}),F=0,v=0;v<U.length;v++)H=U[v],q={ease:H.e,duration:(H.t-(v?U[v-1].t:0))/100*c},q[T]=H.v,x.to(b,q,F),F+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return m===!0&&!pc&&(mi=Yn(o),ct.killTweensOf(b),mi=0),Cn(p,Yn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===lt(p._time)&&Ht(h)&&Fv(Yn(o))&&p.data!=="nested")&&(o._tTime=-je,o.render(Math.max(0,-u)||0)),f&&dd(Yn(o),f),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-je&&!u?l:i<je?0:i,d,m,g,_,f,p,b,x;if(!c)Bv(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=lt(h%_),h===l?(g=this._repeat,d=c):(f=lt(h/_),g=~~f,g&&g===f?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),f=Zr(this._tTime,_),d===o&&!a&&this._initted&&g===f)return this._tTime=h,this;g!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(lt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(fd(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==f))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var A=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!f&&(Qt(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Gl(this,i,s,a),Qt(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!s&&this.parent&&Qt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Gl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ri(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Qt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ps||Jt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ec(this,c),u=this._ease(c/this._dur),rx(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(no(this,0),this.parent||ud(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?vs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mi&&mi.vars.overwrite!==!0)._first||vs(this),this.parent&&a!==this.timeline.totalDuration()&&jr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?fn(i):o,c=this._ptLookup,u=this._pt,h,d,m,g,_,f,p;if((!s||s==="all")&&Uv(o,l))return s==="all"&&(this._pt=0),vs(this);for(h=this._op=this._op||[],s!=="all"&&(At(s)&&(_={},Wt(s,function(b){return _[b]=1}),s=_),s=sx(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,g=d,m={}):(m=h[p]=h[p]||{},g=s);for(_ in g)f=d&&d[_],f&&((!("kill"in f.d)||f.d.kill(_)===!0)&&eo(this,f,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&vs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ss(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ss(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ct.killTweensOf(i,s,a)},e})(Ds);rn(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wt("staggerTo,staggerFrom,staggerFromTo",function(r){yt[r]=function(){var e=new zt,t=Hl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Tc=function(e,t,n){return e[t]=n},Pd=function(e,t,n){return e[t](n)},ox=function(e,t,n,i){return e[t](i.fp,n)},lx=function(e,t,n){return e.setAttribute(t,n)},Ac=function(e,t){return pt(e[t])?Pd:mc(e[t])&&e.setAttribute?lx:Tc},Dd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ld=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},wc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ux=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},hx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?eo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},dx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Id=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Xt=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Dd,this.d=l||this,this.set=c||Tc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=dx,this.m=n,this.mt=s,this.tween=i},r})();Wt(yc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return xc[r]=1});nn.TweenMax=nn.TweenLite=yt;nn.TimelineLite=nn.TimelineMax=zt;ct=new zt({sortChildren:!1,defaults:As,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=Td;var tr=[],Pa={},fx=[],nh=0,px=0,Go=function(e){return(Pa[e]||fx).map(function(t){return t()})},Ls=function(){var e=Date.now(),t=[];e-nh>2&&(Go("matchMediaInit"),tr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=An.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Go("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),nh=e,Go("matchMedia"))},Ud=(function(){function r(t,n){this.selector=n&&Wl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=px++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){pt(n)&&(s=i,i=n,n=pt);var a=this,o=function(){var c=at,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Wl(s)),at=a,h=i.apply(a,arguments),pt(h)&&a._r.push(h),at=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===pt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=at;at=null,n(this),at=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof yt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=tr.length;a--;)tr[a].id===this.id&&tr.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Ls):o.removeEventListener("change",Ls)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),mx=(function(){function r(t){this.contexts=[],this.scope=t,at&&at.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){On(n)||(n={matches:n});var a=new Ud(0,s||this.scope),o=a.conditions={},l,c,u;at&&!a.selector&&(a.selector=at.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=An.matchMedia(n[c]),l&&(tr.indexOf(a)<0&&tr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ls):l.addEventListener("change",Ls),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ha={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Md(i)})},timeline:function(e){return new zt(e)},getTweensOf:function(e,t){return ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){At(e)&&(e=fn(e)[0]);var s=Ji(e||{}).get,a=n?cd:ld;return n==="native"&&(n=""),e&&(t?a((jt[t]&&jt[t].get||s)(e,t,n,i)):function(o,l,c){return a((jt[o]&&jt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=fn(e),e.length>1){var i=e.map(function(u){return Yt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=jt[t],o=Ji(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Ir._pt=0,h.init(e,n?u+n:u,Ir,0,[e]),h.render(1,h),Ir._pt&&wc(1,Ir)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Yt.to(e,rn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=er(e.ease,As.ease)),ju(As,e||{})},config:function(e){return ju(tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!jt[o]&&!nn[o]&&ws(t+" effect requires "+o+" plugin.")}),Bo[t]=function(o,l,c){return n(fn(o),rn(l||{},s),c)},a&&(zt.prototype[t]=function(o,l,c){return this.add(Bo[t](o,On(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Fe[e]=er(t)},parseEase:function(e,t){return arguments.length?er(e,t):Fe},getById:function(e){return ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new zt(e),i,s;for(n.smoothChildTiming=Ht(e.smoothChildTiming),ct.remove(n),n._dp=0,n._time=n._tTime=ct._time,i=ct._first;i;)s=i._next,(t||!(!i._dur&&i instanceof yt&&i.vars.onComplete===i._targets[0]))&&Cn(n,i,i._start-i._delay),i=s;return Cn(ct,n,0),n},context:function(e,t){return e?new Ud(e,t):at},matchMedia:function(e){return new mx(e)},matchMediaRefresh:function(){return tr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ls()},addEventListener:function(e,t){var n=Pa[e]||(Pa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Pa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:qv,wrapYoyo:Yv,distribute:_d,random:vd,snap:gd,normalize:Xv,getUnit:Dt,clamp:Vv,splitColor:bd,toArray:fn,selector:Wl,mapRange:yd,pipe:Hv,unitize:Wv,interpolate:$v,shuffle:md},install:id,effects:Bo,ticker:Jt,updateRoot:zt.updateRoot,plugins:jt,globalTimeline:ct,core:{PropTween:Xt,globals:rd,Tween:yt,Timeline:zt,Animation:Ds,getCache:Ji,_removeLinkedListItem:eo,reverting:function(){return wt},context:function(e){return e&&at&&(at.data.push(e),e._ctx=at),at},suppressOverwrites:function(e){return pc=e}}};Wt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ha[r]=yt[r]});Jt.add(zt.updateRoot);Ir=Ha.to({},{duration:0});var _x=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},gx=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=_x(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ho=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(At(s)&&(l={},Wt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}gx(o,s)}}}},Yt=Ha.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ho("roundProps",Xl),Ho("modifiers"),Ho("snap",gd))||Ha;yt.version=zt.version=Yt.version="3.15.1";nd=1;_c()&&Jr();Fe.Power0;Fe.Power1;Fe.Power2;Fe.Power3;Fe.Power4;Fe.Linear;Fe.Quad;Fe.Cubic;Fe.Quart;Fe.Quint;Fe.Strong;Fe.Elastic;Fe.Back;Fe.SteppedEase;Fe.Bounce;Fe.Sine;Fe.Expo;Fe.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ih,_i,kr,Rc,ji,rh,Cc,vx=function(){return typeof window<"u"},ii={},qi=180/Math.PI,zr=Math.PI/180,Cr=Math.atan2,sh=1e8,Pc=/([A-Z])/g,xx=/(left|right|width|margin|padding|x)/i,yx=/[\s,\(]\S/,Ln={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Mx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ex=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Nd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Fd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Tx=function(e,t,n){return e.style[t]=n},Ax=function(e,t,n){return e.style.setProperty(t,n)},wx=function(e,t,n){return e._gsap[t]=n},Rx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Cx=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Px=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},ut="transform",qt=ut+"Origin",Dx=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ii&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ln[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=$n(i,o)}):this.tfm[e]=a.x?a[e]:$n(i,e),e===qt&&(this.tfm.zOrigin=a.zOrigin);else return Ln.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qt,t,"")),e=ut}(s||t)&&this.props.push(e,t,s[e])},Od=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Lx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cc(),(!s||!s.isStart)&&!n[ut]&&(Od(n),i.zOrigin&&n[qt]&&(n[qt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bd=function(e,t){var n={target:e,props:[],revert:Lx,save:Dx};return e._gsap||Yt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},kd,$l=function(e,t){var n=_i.createElementNS?_i.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_i.createElement(e);return n&&n.style?n:_i.createElement(e)},en=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Qr(t)||t,1)||""},ah="O,Moz,ms,Ms,Webkit".split(","),Qr=function(e,t,n){var i=t||ji,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ah[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ah[a]:"")+e},Kl=function(){vx()&&window.document&&(ih=window,_i=ih.document,kr=_i.documentElement,ji=$l("div")||{style:{}},$l("div"),ut=Qr(ut),qt=ut+"Origin",ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kd=!!Qr("perspective"),Cc=Yt.core.reverting,Rc=1)},oh=function(e){var t=e.ownerSVGElement,n=$l("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),kr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),kr.removeChild(n),s},lh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zd=function(e){var t,n;try{t=e.getBBox()}catch{t=oh(e),n=1}return t&&(t.width||t.height)||n||(t=oh(e)),t&&!t.width&&!t.x&&!t.y?{x:+lh(e,["x","cx","x1"])||0,y:+lh(e,["y","cy","y1"])||0,width:0,height:0}:t},Vd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zd(e))},Ci=function(e,t){if(t){var n=e.style,i;t in ii&&t!==qt&&(t=ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Pc,"-$1").toLowerCase())):n.removeAttribute(t)}},gi=function(e,t,n,i,s,a){var o=new Xt(e._pt,t,n,0,1,a?Fd:Nd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},ch={deg:1,rad:1,turn:1},Ix={grid:1,flex:1},Pi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ji.style,l=xx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",m=i==="%",g,_,f,p;if(i===a||!s||ch[i]||ch[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&Vd(e),(m||a==="%")&&(ii[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],gt(m?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_i||!_.appendChild)&&(_=_i.body),f=_._gsap,f&&m&&f.width&&l&&f.time===Jt.time&&!f.uncache)return gt(s/f.width*h);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+i,g=e[u],b?e.style[t]=b:Ci(e,t)}else(m||a==="%")&&!Ix[en(_,"display")]&&(o.position=en(e,"position")),_===e&&(o.position="static"),_.appendChild(ji),g=ji[u],_.removeChild(ji),o.position="absolute";return l&&m&&(f=Ji(_),f.time=Jt.time,f.width=_[u]),gt(d?g*s/h:g&&s?h/g*s:0)},$n=function(e,t,n,i){var s;return Rc||Kl(),t in Ln&&t!=="transform"&&(t=Ln[t],~t.indexOf(",")&&(t=t.split(",")[0])),ii[t]&&t!=="transform"?(s=Us(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xa(en(e,qt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wa[t]&&Wa[t](e,t,n)||en(e,t)||ad(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Pi(e,t,s,n)+n:s},Ux=function(e,t,n,i){if(!n||n==="none"){var s=Qr(t,e,1),a=s&&en(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=en(e,"borderTopColor"))}var o=new Xt(this._pt,e.style,t,0,1,Ld),l=0,c=0,u,h,d,m,g,_,f,p,b,x,v,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=en(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=en(e,t)||i,_?e.style[t]=_:Ci(e,t)),u=[n,i],Td(u),n=u[0],i=u[1],d=n.match(Lr)||[],A=i.match(Lr)||[],A.length){for(;h=Lr.exec(i);)f=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),f!==(_=d[c++]||"")&&(m=parseFloat(_)||0,v=_.substr((m+"").length),f.charAt(1)==="="&&(f=Br(m,f)+v),p=parseFloat(f),x=f.substr((p+"").length),l=Lr.lastIndex-x.length,x||(x=x||tn.units[t]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(m=Pi(e,t,_,x)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:m,c:p-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Fd:Nd;return td.test(i)&&(o.e=0),this._pt=o,o},uh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Nx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=uh[n]||n,t[1]=uh[i]||i,t.join(" ")},Fx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ii[o]&&(l=1,o=o==="transformOrigin"?qt:ut),Ci(n,o);l&&(Ci(n,ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Us(n,1),a.uncache=1,Od(i)))}},Wa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Xt(e._pt,t,n,0,0,Fx);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Is=[1,0,0,1,0,0],Gd={},Hd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},hh=function(e){var t=en(e,ut);return Hd(t)?Is:t.substr(7).match(ed).map(gt)},Dc=function(e,t){var n=e._gsap||Ji(e),i=e.style,s=hh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Is:s):(s===Is&&!e.offsetParent&&e!==kr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,kr.appendChild(e)),s=hh(e),l?i.display=l:Ci(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):kr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zl=function(e,t,n,i,s,a){var o=e._gsap,l=s||Dc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],g=l[1],_=l[2],f=l[3],p=l[4],b=l[5],x=t.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,C,T,R,y;n?l!==Is&&(T=m*f-g*_)&&(R=v*(f/T)+A*(-_/T)+(_*b-f*p)/T,y=v*(-g/T)+A*(m/T)-(m*b-g*p)/T,v=R,A=y):(C=zd(e),v=C.x+(~x[0].indexOf("%")?v/100*C.width:v),A=C.y+(~(x[1]||x[0]).indexOf("%")?A/100*C.height:A)),i||i!==!1&&o.smooth?(p=v-c,b=A-u,o.xOffset=h+(p*m+b*_)-p,o.yOffset=d+(p*g+b*f)-b):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[qt]="0px 0px",a&&(gi(a,o,"xOrigin",c,v),gi(a,o,"yOrigin",u,A),gi(a,o,"xOffset",h,o.xOffset),gi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},Us=function(e,t){var n=e._gsap||new wd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=en(e,qt)||"0",u,h,d,m,g,_,f,p,b,x,v,A,C,T,R,y,S,P,F,U,H,q,G,Y,V,te,ae,fe,Ee,We,X,J;return u=h=d=_=f=p=b=x=v=0,m=g=1,n.svg=!!(e.getCTM&&Vd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ut]!=="none"?l[ut]:"")),i.scale=i.rotate=i.translate="none"),T=Dc(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Zl(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,C=n.yOrigin||0,T!==Is&&(P=T[0],F=T[1],U=T[2],H=T[3],u=q=T[4],h=G=T[5],T.length===6?(m=Math.sqrt(P*P+F*F),g=Math.sqrt(H*H+U*U),_=P||F?Cr(F,P)*qi:0,b=U||H?Cr(U,H)*qi+_:0,b&&(g*=Math.abs(Math.cos(b*zr))),n.svg&&(u-=A-(A*P+C*U),h-=C-(A*F+C*H))):(J=T[6],We=T[7],ae=T[8],fe=T[9],Ee=T[10],X=T[11],u=T[12],h=T[13],d=T[14],R=Cr(J,Ee),f=R*qi,R&&(y=Math.cos(-R),S=Math.sin(-R),Y=q*y+ae*S,V=G*y+fe*S,te=J*y+Ee*S,ae=q*-S+ae*y,fe=G*-S+fe*y,Ee=J*-S+Ee*y,X=We*-S+X*y,q=Y,G=V,J=te),R=Cr(-U,Ee),p=R*qi,R&&(y=Math.cos(-R),S=Math.sin(-R),Y=P*y-ae*S,V=F*y-fe*S,te=U*y-Ee*S,X=H*S+X*y,P=Y,F=V,U=te),R=Cr(F,P),_=R*qi,R&&(y=Math.cos(R),S=Math.sin(R),Y=P*y+F*S,V=q*y+G*S,F=F*y-P*S,G=G*y-q*S,P=Y,q=V),f&&Math.abs(f)+Math.abs(_)>359.9&&(f=_=0,p=180-p),m=gt(Math.sqrt(P*P+F*F+U*U)),g=gt(Math.sqrt(G*G+J*J)),R=Cr(q,G),b=Math.abs(R)>2e-4?R*qi:0,v=X?1/(X<0?-X:X):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Hd(en(e,ut)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(m*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=gt(m),n.scaleY=gt(g),n.rotation=gt(_)+o,n.rotationX=gt(f)+o,n.rotationY=gt(p)+o,n.skewX=b+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[qt]=Xa(c)),n.xOffset=n.yOffset=0,n.force3D=tn.force3D,n.renderTransform=n.svg?Bx:kd?Wd:Ox,n.uncache=0,n},Xa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wo=function(e,t,n){var i=Dt(t);return gt(parseFloat(t)+parseFloat(Pi(e,"x",n+"px",i)))+i},Ox=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Wd(e,t)},Gi="0deg",ds="0px",Hi=") ",Wd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,f=n.transformPerspective,p=n.force3D,b=n.target,x=n.zOrigin,v="",A=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Gi||u!==Gi)){var C=parseFloat(u)*zr,T=Math.sin(C),R=Math.cos(C),y;C=parseFloat(h)*zr,y=Math.cos(C),a=Wo(b,a,T*y*-x),o=Wo(b,o,-Math.sin(C)*-x),l=Wo(b,l,R*y*-x+x)}f!==ds&&(v+="perspective("+f+Hi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||a!==ds||o!==ds||l!==ds)&&(v+=l!==ds||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Hi),c!==Gi&&(v+="rotate("+c+Hi),u!==Gi&&(v+="rotateY("+u+Hi),h!==Gi&&(v+="rotateX("+h+Hi),(d!==Gi||m!==Gi)&&(v+="skew("+d+", "+m+Hi),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Hi),b.style[ut]=v||"translate(0, 0)"},Bx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,f=n.xOffset,p=n.yOffset,b=n.forceCSS,x=parseFloat(a),v=parseFloat(o),A,C,T,R,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zr,c*=zr,A=Math.cos(l)*h,C=Math.sin(l)*h,T=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=zr,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,R*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,C*=y)),A=gt(A),C=gt(C),T=gt(T),R=gt(R)):(A=h,R=d,C=T=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Pi(m,"x",a,"px"),v=Pi(m,"y",o,"px")),(g||_||f||p)&&(x=gt(x+g-(g*A+_*T)+f),v=gt(v+_-(g*C+_*R)+p)),(i||s)&&(y=m.getBBox(),x=gt(x+i/100*y.width),v=gt(v+s/100*y.height)),y="matrix("+A+","+C+","+T+","+R+","+x+","+v+")",m.setAttribute("transform",y),b&&(m.style[ut]=y)},kx=function(e,t,n,i,s){var a=360,o=At(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?qi:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*sh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*sh)%a-~~(c/a)*a)),e._pt=d=new Xt(e._pt,t,n,i,c,Sx),d.e=u,d.u="deg",e._props.push(n),d},dh=function(e,t){for(var n in t)e[n]=t[n];return e},zx=function(e,t,n){var i=dh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ut]=t,o=Us(n,1),Ci(n,ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ut],a[ut]=t,o=Us(n,1),a[ut]=c);for(l in ii)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Dt(c),g=Dt(u),h=m!==g?Pi(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Xt(e._pt,o,l,h,d-h,Yl),e._pt.u=g||0,e._props.push(l));dh(o,i)};Wt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Wa[e>1?"border"+r:r]=function(o,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(g){return $n(o,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,m,h)}});var Xd={name:"css",register:Kl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,m,g,_,f,p,b,x,v,A,C,T,R,y;Rc||Kl(),this.styles=this.styles||Bd(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(jt[_]&&Rd(_,t,n,i,e,s)))){if(m=typeof u,g=Wa[_],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Cs(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",bi.lastIndex=0,bi.test(c)||(f=Dt(c),p=Dt(u),p?f!==p&&(c=Pi(e,_,c,p)+p):f&&(u+=f)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],At(c)&&~c.indexOf("random(")&&(c=Cs(c)),Dt(c+"")||c==="auto"||(c+=tn.units[_]||Dt($n(e,_))||""),(c+"").charAt(1)==="="&&(c=$n(e,_))):c=$n(e,_),d=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),_ in Ln&&(_==="autoAlpha"&&(d===1&&$n(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,o.visibility),gi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ln[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in ii,x){if(this.styles.save(_),y=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=en(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=en(e,"perspective"),S?e.style.perspective=S:Ci(e,"perspective")}h=parseFloat(u)}if(v||(A=e._gsap,A.renderTransform&&!t.parseTransform||Us(e,t.parseTransform),C=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new Xt(this._pt,o,ut,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Xt(this._pt,A,"scaleY",A.scaleY,(b?Br(A.scaleY,b+h):h)-A.scaleY||0,Yl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(qt,0,o[qt]),u=Nx(u),A.svg?Zl(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&gi(this,A,"zOrigin",A.zOrigin,p),gi(this,o,_,Xa(c),Xa(u)));continue}else if(_==="svgOrigin"){Zl(e,u,1,C,0,this);continue}else if(_ in Gd){kx(this,A,_,d,b?Br(d,b+u):u);continue}else if(_==="smoothOrigin"){gi(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){zx(this,u,e);continue}}else _ in o||(_=Qr(_)||_);if(x||(h||h===0)&&(d||d===0)&&!yx.test(u)&&_ in o)f=(c+"").substr((d+"").length),h||(h=0),p=Dt(u)||(_ in tn.units?tn.units[_]:f),f!==p&&(d=Pi(e,_,c,p)),this._pt=new Xt(this._pt,x?A:o,_,d,(b?Br(d,b+h):h)-d,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Ex:Yl),this._pt.u=p||0,x&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=bx):f!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Mx);else if(_ in o)Ux.call(this,e,_,c,b?b+u:u);else if(_ in e)this.add(e,_,c||e[_],b?b+u:u,i,s);else if(_!=="parseTransform"){vc(_,u);continue}x||(_ in o?R.push(_,0,o[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),a.push(_)}}T&&Id(this)},render:function(e,t){if(t.tween._time||!Cc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:$n,aliases:Ln,getSetter:function(e,t,n){var i=Ln[t];return i&&i.indexOf(",")<0&&(t=i),t in ii&&t!==qt&&(e._gsap.x||$n(e,"x"))?n&&rh===n?t==="scale"?Rx:wx:(rh=n||{})&&(t==="scale"?Cx:Px):e.style&&!mc(e.style[t])?Tx:~t.indexOf("-")?Ax:Ac(e,t)},core:{_removeProperty:Ci,_getMatrix:Dc}};Yt.utils.checkPrefix=Qr;Yt.core.getStyleSaver=Bd;(function(r,e,t,n){var i=Wt(r+","+e+","+t,function(s){ii[s]=1});Wt(e,function(s){tn.units[s]="deg",Gd[s]=1}),Ln[i[13]]=r+","+e,Wt(n,function(s){var a=s.split(":");Ln[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){tn.units[r]="px"});Yt.registerPlugin(Xd);var Lc=Yt.registerPlugin(Xd)||Yt;Lc.core.Tween;const or={outline:"#6d6875",fruit:["#ffb5a7","#b5ead7","#fff1a8","#cdb4db","#a0d8f1","#ffc8dd"],bomb:"#5c5f7a",fruitHalo:"#8ee3c2",bombHalo:"#ff8a8a"},Vx=new fc(.34,24),Gx=or.fruit.map((r,e)=>qx(r,e)),Hx=Yx(),Wx={fruit:new Na({color:or.fruitHalo,transparent:!0,opacity:.55}),bomb:new Na({color:or.bombHalo,transparent:!0,opacity:.62})},Xo={fruit:Gx.map(r=>new Ol({map:r,transparent:!0,depthTest:!1})),bomb:new Ol({map:Hx,transparent:!0,depthTest:!1})};function Xx(r){const e=new vv,t=r.getBoundingClientRect(),n=t.width||innerWidth,i=t.height||innerHeight,s=new Hh(-(n/i)*3.2,n/i*3.2,3.2,-3.2,.1,100);s.position.set(0,0,12);const a=new gv({canvas:r,alpha:!0,antialias:!0});a.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),a.setSize(n,i,!1);const o=[];function l(d,m){const g=new gs,_=d.fruit?"fruit":"bomb",f=new Dn(Vx,Wx[_]);f.position.z=-.2,f.scale.set(1.45,1.45,1),g.add(f);const p=new yv(d.fruit?Xo.fruit[m%Xo.fruit.length]:Xo.bomb);return p.scale.set(.82,.82,1),p.position.z=.15,p.userData.hitShape=!0,g.add(p),e.add(g),g.userData={...d,halo:f,sprite:p,alive:!0},o.push(g),g}function c(){a.render(e,s)}function u(){const d=r.getBoundingClientRect(),m=Math.max(d.width,1),g=Math.max(d.height,1);s.left=-m/g*3.2,s.right=m/g*3.2,s.top=3.2,s.bottom=-3.2,s.updateProjectionMatrix(),a.setSize(m,g,!1),c()}return addEventListener("resize",u),new ResizeObserver(u).observe(r.parentElement),{scene:e,camera:s,renderer:a,objects:o,makeFruit:l,render:c,resize:u}}function qx(r,e){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");if(n.lineWidth=6,n.lineJoin="round",n.strokeStyle=or.outline,n.fillStyle=r,e===2)n.beginPath(),n.moveTo(28,48),n.quadraticCurveTo(64,34,100,48),n.lineTo(91,78),n.quadraticCurveTo(64,112,37,78),n.closePath(),n.fill(),n.stroke();else if(e===3)for(const[s,a,o]of[[48,54,18],[75,52,18],[38,77,18],[64,78,19],[88,77,17],[51,99,17],[75,99,17]])n.beginPath(),n.arc(s,a,o,0,Math.PI*2),n.fill(),n.stroke();else e===5?(n.beginPath(),n.moveTo(64,108),n.bezierCurveTo(43,89,26,67,34,49),n.bezierCurveTo(42,31,56,42,64,48),n.bezierCurveTo(75,38,91,34,98,51),n.bezierCurveTo(108,74,81,99,64,108),n.closePath(),n.fill(),n.stroke()):(n.beginPath(),n.moveTo(64,45),n.bezierCurveTo(52,31,30,39,29,62),n.bezierCurveTo(27,86,47,105,64,108),n.bezierCurveTo(82,105,101,85,99,61),n.bezierCurveTo(97,39,76,31,64,45),n.closePath(),n.fill(),n.stroke());n.fillStyle="#85b978",n.beginPath(),n.ellipse(70,34,15,7,-.55,0,Math.PI*2),n.fill(),n.strokeStyle=or.outline,n.lineWidth=4,n.stroke(),n.beginPath(),n.moveTo(64,47),n.quadraticCurveTo(65,35,70,28),n.stroke(),n.fillStyle="#35364c",n.beginPath(),n.arc(50,69,4.5,0,Math.PI*2),n.arc(78,69,4.5,0,Math.PI*2),n.fill(),n.strokeStyle="#35364c",n.lineWidth=4,n.beginPath(),n.arc(64,70,13,.25,Math.PI-.25),n.stroke();const i=new Zh(t);return i.colorSpace=Bt,i}function Yx(){const r=document.createElement("canvas");r.width=128,r.height=128;const e=r.getContext("2d");e.fillStyle=or.bomb,e.strokeStyle=or.outline,e.lineWidth=7,e.beginPath(),e.arc(60,76,42,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle="#b8a5c8",e.lineWidth=9,e.beginPath(),e.moveTo(81,42),e.quadraticCurveTo(94,27,101,15),e.stroke(),e.fillStyle="#ff8fab",e.beginPath(),e.moveTo(102,3),e.lineTo(108,13),e.lineTo(120,13),e.lineTo(112,21),e.lineTo(116,32),e.lineTo(103,27),e.lineTo(94,35),e.lineTo(95,22),e.lineTo(86,16),e.lineTo(99,13),e.closePath(),e.fill(),e.fillStyle="#fff5e9",e.beginPath(),e.arc(47,70,4,0,Math.PI*2),e.arc(73,70,4,0,Math.PI*2),e.fill(),e.strokeStyle="#fff5e9",e.lineWidth=4,e.beginPath(),e.moveTo(47,94),e.lineTo(56,88),e.lineTo(64,94),e.lineTo(72,88),e.lineTo(80,94),e.stroke();const t=new Zh(r);return t.colorSpace=Bt,t}const $x=12,Ic=10;function Ws(r=42){let e=r>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Da=["Separable blobs","Overlapping blobs","XOR","Two moons","Circles","Spirals","Correlated blobs","Unequal-variance blobs","Outlier blobs","Checkerboard (3x3)"];function Kx(r="Separable blobs",e=180,t=12,n={}){typeof n=="number"&&(n={noise:n});const i=Ws(t),s=[],a=Math.max(0,Math.min(.5,Number(n.noise??.2))),o=Math.max(0,Math.min(.5,Number(n.labelNoise??n.flipNoise??0))),l=()=>Math.sqrt(-2*Math.log(Math.max(i(),1e-9)))*Math.cos(2*Math.PI*i());for(let c=0;c<e;c++){let u=c%2?1:-1,h,d,m=l(),g=l();switch(r){case"XOR":{const _=i()<.5?-1:1,f=_*u;h=_*.65+m*(.08+a*.5),d=f*.65+g*(.08+a*.5);break}case"Two moons":{const _=i()*Math.PI;u>0?(h=Math.cos(_),d=Math.sin(_)):(h=1-Math.cos(_),d=.5-Math.sin(_)),h+=m*(a*.4),d+=g*(a*.4);break}case"Circles":{const _=i()*Math.PI*2,f=u>0?.42:.95;h=Math.cos(_)*f+m*(a*.25),d=Math.sin(_)*f+g*(a*.25);break}case"Spirals":{const _=i()*Math.PI*3,f=.12+_*.1,p=_+(u>0?0:Math.PI);h=f*Math.cos(p)+m*(a*.2),d=f*Math.sin(p)+g*(a*.2);break}case"Correlated blobs":{const _=m*(.22+a*.15),f=m*(.7+a*.15)+g*(.16+a*.08);h=u*.12+_,d=f;break}case"Unequal-variance blobs":{const _=u===1?.1:.72;h=(u===1?-.2:.18)+m*(_+a*.18),d=(u===1?-.12:.18)+g*(_*.82+a*.16);break}case"Outlier blobs":{i()<.09?(h=-u*(.75+i()*.55)+m*.08,d=g*.85):(h=u*.8+m*(.13+a*.18),d=u*.12+g*(.17+a*.18));break}case"Checkerboard (3x3)":{let _,f;do _=Math.floor(i()*3),f=Math.floor(i()*3);while((_+f)%2===1&&_===2&&f===2);u=(_+f)%2===0?1:-1,h=_-1+(i()-.5)*.84+m*a*.08,d=f-1+(i()-.5)*.84+g*a*.08;break}default:h=u*(r==="Overlapping blobs"?.3:.8)+m*(r==="Overlapping blobs"?.42+a*.2:.22+a*.3),d=u*.25+g*(r==="Overlapping blobs"?.42+a*.2:.22+a*.3)}i()<o&&(u=-u),s.push({x:[h,d],y:u})}return s}function Ns(r="Separable blobs",e=16,t=Date.now(),n={}){const i=Ws(t),s=Kx(r,e,t,n).map((a,o)=>({...a,id:o,fruit:a.y===1}));for(let a=s.length-1;a>0;a--){const o=Math.floor(i()*(a+1));[s[a],s[o]]=[s[o],s[a]]}return s}const Ur={"Separable blobs":"Two round-ish clouds sit apart, so a straight boundary is enough. Linear models shine; curved models can still work but add little.","Overlapping blobs":"Two noisy clouds overlap, making some labels ambiguous. Regularized linear models are a good baseline; deep trees and tiny-k neighbors can chase noise.",XOR:"Classes occupy alternating diagonal corners. No straight line can separate them; RBF SVM, neighbors, trees, and forests can learn the nonlinear split.","Two moons":"Two crescent-shaped groups interlock. Kernel SVM and k-NN can follow the curved gap; a line underfits and a single tree may need many boxes.",Circles:"One class forms a disk and the other a surrounding ring. Radial kernels and neighbors fit this closed boundary; linear models cannot.",Spirals:"Two classes wind around the center in alternating arms. Kernel SVM and k-NN can follow local curves; linear models fail and trees need many small regions.","Correlated blobs":"Two tilted clouds share a correlated covariance but have different means. LDA uses the shared full covariance; diagonal Naive Bayes ignores the tilt.","Unequal-variance blobs":"The classes have different spreads. QDA models each covariance separately; LDA and other linear models must compromise with one line.","Outlier blobs":"Mostly separated groups include a few extreme, mislabeled points. Logistic regression and SVM regularization can resist them; Perceptron and k=1 may react strongly.","Checkerboard (3x3)":"Alternating axis-aligned squares make a 3-by-3 checkerboard. Trees and forests match its boxy edges; linear models cannot represent the pattern."},Tt=1e-9,io=r=>r>=0?1:-1,lr=(r,e)=>r.reduce((t,n,i)=>t+n*e[i],0),Fs=r=>1/(1+Math.exp(-Math.max(-35,Math.min(35,r)))),jl=(r,e)=>{for(let t=r.length-1;t>0;t--){const n=Math.floor(e()*(t+1));[r[t],r[n]]=[r[n],r[t]]}return r};function Xs(r){const e=[0,1].map(n=>r.reduce((i,s)=>i+s[n],0)/Math.max(r.length,1)),t=[0,1].map(n=>Math.sqrt(r.reduce((i,s)=>i+(s[n]-e[n])**2,0)/Math.max(r.length,1))||1);return{mean:e,scale:t,transform:n=>n.map((i,s)=>(i-e[s])/t[s])}}function qd(r,e,t=0){let n=0,i=0,s=0;for(const o of r){const l=o[0]-e[0],c=o[1]-e[1];n+=l*l,i+=l*c,s+=c*c}const a=Math.max(r.length-1,1);return[[n/a+t,i/a],[i/a,s/a+t]]}function Yd(r){const[[e,t],[n,i]]=r,s=e*i-t*n;return Math.abs(s)<Tt?[[1/Tt,0],[0,1/Tt]]:[[i/s,-t/s],[-n/s,e/s]]}function $d(r,e,t){const n=[r[0]-e[0],r[1]-e[1]],i=[t[0][0]*n[0]+t[0][1]*n[1],t[1][0]*n[0]+t[1][1]*n[1]];return lr(n,i)}function Zx(r,e,t,n,i){return{name:r,family:e,boundaryShape:t,hyperparams:n,explanation:i}}class Bn{constructor(e,t,n,i,s){this.name=e,this.metadata=Zx(e,t,n,{...i},s),this.hyperparams={...i},this.supportVectors=[]}setParams(e={}){return this.hyperparams={...this.metadata.hyperparams,...e},this}}class Kd extends Bn{constructor(e={}){super("Perceptron","linear","line",{epochs:120,learningRate:.08},"Updates a weighted straight line only when it misclassifies an example. It is simple and fast, but outliers and overlapping classes can make its final line depend on presentation order."),this.setParams(e)}fit(e,t,n=null){n&&this.setParams(n),this.X=e.map(o=>[...o]),this.y=[...t],this.scaler=Xs(e);const i=e.map(o=>this.scaler.transform(o));this.w=[0,0],this.b=0;const s=Ws(this.hyperparams.seed??17),a=e.map((o,l)=>l);for(let o=0;o<this.hyperparams.epochs;o++){let l=0;for(const c of jl([...a],s))t[c]*(lr(this.w,i[c])+this.b)<=0&&(this.w=this.w.map((u,h)=>u+this.hyperparams.learningRate*t[c]*i[c][h]),this.b+=this.hyperparams.learningRate*t[c],l++);if(this.epochsRun=o+1,l===0)break}return this.supportVectors=[],this}score(e){return lr(this.w,this.scaler.transform(e))+this.b}predict(e){return io(this.score(e))}predictProba(e){return Fs(this.score(e))}*fitSteps(){yield this}}class jx extends Bn{constructor(e={}){super("Logistic Regression","linear","line",{epochs:220,learningRate:.04,l2:.015},"Optimizes logistic log-loss with a sigmoid probability and a small L2 penalty. It gives smooth confidence estimates, but a single straight line cannot follow curved patterns."),this.setParams(e)}fit(e,t,n=null){n&&this.setParams(n),this.X=e.map(a=>[...a]),this.y=[...t],this.scaler=Xs(e);const i=e.map(a=>this.scaler.transform(a));this.w=[0,0],this.b=0;const s=Math.max(e.length,1);for(let a=0;a<this.hyperparams.epochs;a++){const o=[this.hyperparams.l2*this.w[0],this.hyperparams.l2*this.w[1]];let l=0;for(let c=0;c<s;c++){const u=Fs(lr(this.w,i[c])+this.b)-(t[c]===1?1:0);o[0]+=u*i[c][0]/s,o[1]+=u*i[c][1]/s,l+=u/s}this.w[0]-=this.hyperparams.learningRate*o[0],this.w[1]-=this.hyperparams.learningRate*o[1],this.b-=this.hyperparams.learningRate*l}return this.supportVectors=[],this}score(e){return lr(this.w,this.scaler.transform(e))+this.b}predict(e){return this.score(e)>=0?1:-1}predictProba(e){return Fs(this.score(e))}*fitSteps(){yield this}}class Jx extends Bn{constructor(e={}){super("Linear SVM","linear","line",{epochs:260,learningRate:.035,C:1},"Minimizes L2 weight cost plus hinge loss. The margin focuses training on difficult points; a straight boundary still fails on XOR-like shapes."),this.setParams(e)}fit(e,t,n=null){n&&this.setParams(n),this.X=e.map(o=>[...o]),this.y=[...t],this.scaler=Xs(e);const i=e.map(o=>this.scaler.transform(o));this.w=[0,0],this.b=0;const s=Math.max(e.length,1),a=1/Math.max(this.hyperparams.C,Tt);for(let o=0;o<this.hyperparams.epochs;o++){let l=[a*this.w[0],a*this.w[1]],c=0;for(let u=0;u<s;u++)t[u]*(lr(this.w,i[u])+this.b)<1&&(l[0]-=this.hyperparams.C*t[u]*i[u][0]/s,l[1]-=this.hyperparams.C*t[u]*i[u][1]/s,c-=this.hyperparams.C*t[u]/s);this.w[0]-=this.hyperparams.learningRate*l[0],this.w[1]-=this.hyperparams.learningRate*l[1],this.b-=this.hyperparams.learningRate*c}return this.supportVectors=e.flatMap((o,l)=>t[l]*this.score(o)<=1.05?[{x:[...o],y:t[l]}]:[]),this}score(e){return lr(this.w,this.scaler.transform(e))+this.b}predict(e){return io(this.score(e))}predictProba(e){return Fs(this.score(e))}*fitSteps(){yield this}}class Qx extends Bn{constructor(e={}){super("Kernel SVM","nonlinear","smooth",{C:4,gamma:1.2,maxIterations:2400},"Fits a binary RBF-kernel support vector machine with a deterministic simplified SMO solver. Similarity kernels let its boundary bend; large C or gamma can overfit."),this.setParams(e)}fit(e,t,n=null){n&&this.setParams(n),this.X=e.map(m=>[...m]),this.y=[...t],this.scaler=Xs(e),this.Z=e.map(m=>this.scaler.transform(m));const i=e.length,s=this.hyperparams.C,a=this.hyperparams.gamma,o=Array(i).fill(0),l=Array.from({length:i},(m,g)=>Array.from({length:i},(_,f)=>fh(this.Z[g],this.Z[f],a)));let c=0,u=0,h=0,d=Array(i).fill(0);for(;u<8&&h<this.hyperparams.maxIterations;){let m=0;for(let g=0;g<i&&h<this.hyperparams.maxIterations;g++,h++){const _=d[g]-t[g];if(!(t[g]*_<-.001&&o[g]<s-Tt||t[g]*_>.001&&o[g]>Tt))continue;let f=(g+1+Math.floor((g*1103515245+12345)%Math.max(i-1,1)))%i;f===g&&(f=(f+1)%i);const p=d[f]-t[f],b=o[g],x=o[f];let v,A;if(t[g]!==t[f]?(v=Math.max(0,x-b),A=Math.min(s,s+x-b)):(v=Math.max(0,b+x-s),A=Math.min(s,b+x)),A-v<Tt)continue;const C=2*l[g][f]-l[g][g]-l[f][f];if(C>=-Tt)continue;if(o[f]=x-t[f]*(_-p)/C,o[f]=Math.max(v,Math.min(A,o[f])),Math.abs(o[f]-x)<1e-5){o[f]=x;continue}o[g]=b+t[g]*t[f]*(x-o[f]);const T=c-_-t[g]*(o[g]-b)*l[g][g]-t[f]*(o[f]-x)*l[g][f],R=c-p-t[g]*(o[g]-b)*l[g][f]-t[f]*(o[f]-x)*l[f][f],y=c;c=o[g]>Tt&&o[g]<s-Tt?T:o[f]>Tt&&o[f]<s-Tt?R:(T+R)/2;const S=o[g]-b,P=o[f]-x,F=c-y;for(let U=0;U<i;U++)d[U]+=t[g]*S*l[g][U]+t[f]*P*l[f][U]+F;m++}u=m===0?u+1:0}return this.alpha=o,this.b=c,this.supportVectors=e.flatMap((m,g)=>o[g]>1e-5?[{x:[...m],y:t[g],alpha:o[g]}]:[]),this.iterations=h,this}score(e){const t=this.scaler.transform(e);return this.alpha.reduce((n,i,s)=>n+(i>Tt?i*this.y[s]*fh(t,this.Z[s],this.hyperparams.gamma):0),this.b)}predict(e){return io(this.score(e))}predictProba(e){return Fs(this.score(e))}*fitSteps(){yield this}}function fh(r,e,t){const n=(r[0]-e[0])**2+(r[1]-e[1])**2;return Math.exp(-t*n)}class ey extends Bn{constructor(e={}){super("k-NN","nonlinear","jagged",{k:7},"Stores the training points and asks the k nearest standardized neighbors to vote. Small k follows local detail and noise; large k smooths the boundary."),this.setParams(e)}fit(e,t,n=null){return n&&this.setParams(n),this.X=e.map(i=>[...i]),this.y=[...t],this.scaler=Xs(e),this.Z=e.map(i=>this.scaler.transform(i)),this.k=Math.max(1,Math.min(this.hyperparams.k,e.length)),this.supportVectors=[],this}neighborVotes(e){const t=this.scaler.transform(e);return this.Z.map((i,s)=>({d:(i[0]-t[0])**2+(i[1]-t[1])**2,index:s,y:this.y[s]})).sort((i,s)=>i.d-s.d||i.index-s.index).slice(0,this.k).reduce((i,s)=>i+s.y,0)}predict(e){return io(this.neighborVotes(e))}predictProba(e){return(this.neighborVotes(e)/this.k+1)/2}*fitSteps(){yield this}}class ty extends Bn{constructor(e={}){super("Gaussian Naive Bayes","probabilistic","axis-aligned-quadratic",{varianceFloor:.015},"Fits a Gaussian to each feature within each class, with class priors, and multiplies the feature likelihoods. Its diagonal-covariance assumption ignores correlated features."),this.setParams(e)}fit(e,t,n=null){return n&&this.setParams(n),this.X=e.map(i=>[...i]),this.y=[...t],this.classes=[-1,1].map(i=>{const s=e.filter((l,c)=>t[c]===i),a=[0,1].map(l=>s.reduce((c,u)=>c+u[l],0)/Math.max(s.length,1)),o=[0,1].map(l=>s.reduce((c,u)=>c+(u[l]-a[l])**2,0)/Math.max(s.length,1)+this.hyperparams.varianceFloor);return{label:i,mean:a,variance:o,prior:s.length/Math.max(t.length,1)}}),this}logScores(e){return this.classes.map(t=>Math.log(Math.max(t.prior,Tt))-.5*t.variance.reduce((n,i,s)=>n+Math.log(2*Math.PI*i)+(e[s]-t.mean[s])**2/i,0))}predict(e){const t=this.logScores(e);return t[1]>t[0]?1:-1}predictProba(e){const t=this.logScores(e),n=Math.max(...t),i=t.map(s=>Math.exp(s-n));return i[1]/(i[0]+i[1])}*fitSteps(){yield this}}class ny extends Bn{constructor(e={}){super("LDA","probabilistic","line",{ridge:.02},"Fits class means with one shared full covariance matrix and class priors. Its linear boundary uses feature correlation, unlike diagonal Naive Bayes; it struggles when classes have different covariance shapes."),this.setParams(e)}fit(e,t,n=null){n&&this.setParams(n),this.X=e.map(a=>[...a]),this.y=[...t],this.classes=[-1,1].map(a=>{const o=e.filter((c,u)=>t[u]===a),l=[0,1].map(c=>o.reduce((u,h)=>u+h[c],0)/Math.max(o.length,1));return{label:a,rows:o,mean:l,prior:o.length/Math.max(t.length,1)}});const i=[[0,0],[0,0]];let s=0;for(const a of this.classes){const o=qd(a.rows,a.mean,0),l=Math.max(a.rows.length-1,0);for(let c=0;c<2;c++)for(let u=0;u<2;u++)i[c][u]+=o[c][u]*l;s+=l}for(let a=0;a<2;a++)for(let o=0;o<2;o++)i[a][o]=i[a][o]/Math.max(s,1)+(a===o?this.hyperparams.ridge:0);return this.inv=Yd(i),this.logDet=Math.log(Math.max(i[0][0]*i[1][1]-i[0][1]*i[1][0],Tt)),this}logScores(e){return this.classes.map(t=>Math.log(Math.max(t.prior,Tt))-.5*$d(e,t.mean,this.inv)-.5*this.logDet)}predict(e){const t=this.logScores(e);return t[1]>t[0]?1:-1}predictProba(e){const t=this.logScores(e),n=Math.max(...t),i=t.map(s=>Math.exp(s-n));return i[1]/(i[0]+i[1])}*fitSteps(){yield this}}class iy extends Bn{constructor(e={}){super("QDA","probabilistic","quadratic",{ridge:.04},"Fits a separate full covariance matrix and prior for each class, producing a quadratic boundary. It handles unequal class shapes but can be unstable with small or outlier-heavy samples."),this.setParams(e)}fit(e,t,n=null){return n&&this.setParams(n),this.X=e.map(i=>[...i]),this.y=[...t],this.classes=[-1,1].map(i=>{const s=e.filter((c,u)=>t[u]===i),a=[0,1].map(c=>s.reduce((u,h)=>u+h[c],0)/Math.max(s.length,1)),o=qd(s,a,this.hyperparams.ridge),l=Math.max(o[0][0]*o[1][1]-o[0][1]*o[1][0],Tt);return{label:i,mean:a,cov:o,inv:Yd(o),logDet:Math.log(l),prior:s.length/Math.max(t.length,1)}}),this}logScores(e){return this.classes.map(t=>Math.log(Math.max(t.prior,Tt))-.5*$d(e,t.mean,t.inv)-.5*t.logDet)}predict(e){const t=this.logScores(e);return t[1]>t[0]?1:-1}predictProba(e){const t=this.logScores(e),n=Math.max(...t),i=t.map(s=>Math.exp(s-n));return i[1]/(i[0]+i[1])}*fitSteps(){yield this}}function qa(r,e,t,n,i,s=0){const a=t.reduce((h,d)=>h+(e[d]===1),0),o=a/Math.max(t.length,1);if(s>=n.maxDepth||t.length<n.minSamples||o===0||o===1)return{leaf:!0,p:o,label:o>=.5?1:-1};let l=n.featureSubset?jl([0,1],i).slice(0,n.featureSubset):n.features?jl([...n.features],i):[0,1],c=null,u=2;for(const h of l){const d=[...new Set(t.map(g=>r[g][h]))].sort((g,_)=>g-_),m=d.slice(0,-1).map((g,_)=>(g+d[_+1])/2);for(const g of m){const _=t.filter(x=>r[x][h]<=g),f=t.filter(x=>r[x][h]>g);if(_.length<n.minLeaf||f.length<n.minLeaf)continue;const p=x=>{const v=x.reduce((A,C)=>A+(e[C]===1),0)/x.length;return 2*v*(1-v)},b=(_.length*p(_)+f.length*p(f))/t.length;b<u&&(u=b,c={feature:h,threshold:g,left:_,right:f})}}return c?{leaf:!1,...c,leftNode:qa(r,e,c.left,n,i,s+1),rightNode:qa(r,e,c.right,n,i,s+1)}:{leaf:!0,p:o,label:o>=.5?1:-1}}function Jl(r,e){let t=r;for(;!t.leaf;)t=e[t.feature]<=t.threshold?t.leftNode:t.rightNode;return t}class ry extends Bn{constructor(e={}){super("Decision Tree","tree","axis-aligned",{maxDepth:6,minSamples:3,minLeaf:1},"Greedily chooses Gini-reducing feature thresholds. The result is a set of axis-aligned boxes; deep trees can memorize noise and outliers."),this.setParams(e)}fit(e,t,n=null){return n&&this.setParams(n),this.X=e.map(i=>[...i]),this.y=[...t],this.tree=qa(this.X,this.y,this.X.map((i,s)=>s),this.hyperparams,Ws(this.hyperparams.seed??31)),this.splitCount=Ya(this.tree),this}predict(e){return Jl(this.tree,e).label}predictProba(e){return Jl(this.tree,e).p}*fitSteps(){yield this}}function Ya(r){return r.leaf?0:1+Ya(r.leftNode)+Ya(r.rightNode)}class sy extends Bn{constructor(e={}){super("Random Forest","ensemble","blocky",{trees:25,maxDepth:5,minSamples:3,minLeaf:1},"Bootstraps many trees and samples one random feature at every split, then averages their fruit probabilities. Voting reduces the variance of one tree but cannot make the boundary smooth."),this.setParams(e)}fit(e,t,n=null){var a;n&&this.setParams(n),this.X=e.map(o=>[...o]),this.y=[...t];const i=Ws(this.hyperparams.seed??47),s=Math.max(1,Math.floor(Math.sqrt(((a=e[0])==null?void 0:a.length)??2)));return this.trees=Array.from({length:this.hyperparams.trees},()=>{const o=e.map(()=>Math.floor(i()*e.length));return qa(e,t,o,{...this.hyperparams,featureSubset:s},i)}),this.splitCount=this.trees.reduce((o,l)=>o+Ya(l),0),this}predictProba(e){return this.trees.reduce((t,n)=>t+Jl(n,e).p,0)/Math.max(this.trees.length,1)}predict(e){return this.predictProba(e)>=.5?1:-1}*fitSteps(){yield this}}const Di=["Perceptron","Logistic Regression","Linear SVM","Kernel SVM","k-NN","Gaussian Naive Bayes","LDA","QDA","Decision Tree","Random Forest"],Zd={Perceptron:Kd,"Logistic Regression":jx,"Linear SVM":Jx,"Kernel SVM":Qx,"k-NN":ey,"Gaussian Naive Bayes":ty,LDA:ny,QDA:iy,"Decision Tree":ry,"Random Forest":sy},$a=Object.fromEntries(Di.map(r=>{const e=new Zd[r];e.metadata.hyperparams;const t=r==="Perceptron"?"w · x + b = 0":r==="Logistic Regression"?"p(y=1) = σ(w · x + b)":r.includes("SVM")?"max margin / kernel boundary":r==="k-NN"?"majority of k standardized neighbors":r.includes("Bayes")?"P(x|y) = ∏ P(xᵢ|y)":r==="LDA"?"shared full covariance":r==="QDA"?"class-specific covariance":"feature threshold rules";return[r,[e.metadata.boundaryShape,e.metadata.explanation,"May struggle when its assumptions do not fit the dataset.",t]]}));function qs(r,e={},t=31){const n=Zd[r]??Kd;return new n({...e,seed:t})}function ay(r,e){const t=[[0,0],[0,0]];return r.forEach((n,i)=>t[n===1?0:1][e[i]===1?0:1]++),t}const ln=64;function jd(){return{sliced:0,bombsHit:0,score:0,userBoundary:null,points:[],userAccuracy:0,modelAccuracy:0,modelAgreement:0,agreementScore:0,confusionMatrix:{tn:0,fp:0,fn:0,tp:0},modelPredictionGrid:[],total:0,verdict:"Missed the mark",flipped:!1,boundaryDrawn:!1,finalized:!1}}function oy(r,e){if(r.finalized)throw new Error("Cannot record a hit after the round is finalized");if(e===1)r.sliced+=1,r.score+=10;else if(e===-1)r.bombsHit+=1,r.score-=8;else throw new TypeError(`Unknown point label: ${e}`);return r}function ly(r){if(!r)return!1;if(r.type==="line"){const[e,t]=r.points??[];return!!(e&&t&&Math.hypot(t.x-e.x,t.y-e.y)>.05)}return(r.strokes??[]).some(e=>{if(e.length<2)return!1;let t=0;for(let n=1;n<e.length;n++)t+=Math.hypot(e[n].x-e[n-1].x,e[n].y-e[n-1].y);return t>.05})}function cy(r,{points:e,model:t,playerPredict:n,userBoundary:i}){var C,T;if(r.finalized)return r;const s=(e??[]).map(R=>({id:R.id,x:[...R.x],y:R.y})),a=s.map(R=>R.y),o=s.map(R=>t.predict(R.x)),l=ay(a,o),c={tp:l[0][0],fn:l[0][1],fp:l[1][0],tn:l[1][1]},u=a.length,h=c.tp+c.tn+c.fp+c.fn,d=h===0?0:(c.tp+c.tn)/h,m=i?structuredClone(i):null,g=ly(m);let _={accuracy:0,flipped:!1,predictions:[]};if(g)for(const R of[!1,!0]){const y=s.map(F=>n(F.x,R)),S=a.reduce((F,U,H)=>F+ +(y[H]===U),0),P=u===0?0:S/u;P>_.accuracy&&(_={accuracy:P,flipped:R,predictions:y})}else _={accuracy:0,flipped:!1,predictions:s.map(R=>n(R.x,!1))};const f=Array.from({length:ln},(R,y)=>Array.from({length:ln},(S,P)=>{const F=P/(ln-1)*4-2,U=2-y/(ln-1)*4;return t.predict([F,U])})),p=g?_.predictions.reduce((R,y,S)=>R+ +(y===o[S]),0):0,b=u===0?0:p/u,x=Math.round(b*100),v=((C=t.metadata)==null?void 0:C.name)==="Kernel SVM"&&typeof t.score=="function"?Array.from({length:ln},(R,y)=>Array.from({length:ln},(S,P)=>{const F=P/(ln-1)*4-2,U=2-y/(ln-1)*4;return t.score([F,U])})):[],A=typeof t.predictProba=="function"?Array.from({length:ln},(R,y)=>Array.from({length:ln},(S,P)=>{const F=P/(ln-1)*4-2,U=2-y/(ln-1)*4;return t.predictProba([F,U])})):[];return Object.assign(r,{userBoundary:m,points:s,userAccuracy:_.accuracy,modelAccuracy:d,modelPredictions:o,modelAgreement:b,agreementScore:x,score:r.score+x,confusionMatrix:c,modelPredictionGrid:f,modelProbabilityGrid:A,modelScoreGrid:v,modelSupportVectors:(t.supportVectors??[]).map(R=>({x:[...R.x],y:R.y})),modelLinearSvm:((T=t.metadata)==null?void 0:T.name)==="Linear SVM"&&t.w&&t.scaler?{w:[...t.w],b:t.b,mean:[...t.scaler.mean],scale:[...t.scaler.scale]}:null,total:u,flipped:_.flipped,boundaryDrawn:g,verdict:g?_.accuracy>=.9||_.accuracy>=d-.05?"Nice cut!":_.accuracy>=.75?"Almost there!":"Missed the mark":"No boundary drawn",finalized:!0}),r}function uy(r,e,t){return(e.x-r.x)*(t.y-r.y)-(e.y-r.y)*(t.x-r.x)>=0?1:-1}function hy(r,e){let t=!1,n=null;for(const i of r??[]){if(!i||i.length<2)continue;const s=i[0],a=i.at(-1);if(i.length>=3&&Math.hypot(a.x-s.x,a.y-s.y)<=.24){for(let l=0,c=i.length-1;l<i.length;c=l++){const u=i[l],h=i[c];u.y>e.y!=h.y>e.y&&e.x<(h.x-u.x)*(e.y-u.y)/(h.y-u.y)+u.x&&(t=!t)}continue}for(let l=1;l<i.length;l++){const c=i[l-1],u=i[l],h=u.x-c.x,d=u.y-c.y,m=h*h+d*d;if(m===0)continue;const g=Math.max(0,Math.min(1,((e.x-c.x)*h+(e.y-c.y)*d)/m)),_=Math.hypot(e.x-(c.x+g*h),e.y-(c.y+g*d));(!n||_<n.distance)&&(n={distance:_,side:h*(e.y-c.y)-d*(e.x-c.x)})}}return t||n&&n.side>=0?1:-1}const et={IDLE:"IDLE",LAUNCH:"LAUNCH",DRAW:"DRAW",JUDGE:"JUDGE",RESULT:"RESULT"};class dy{constructor(e=()=>{}){this.state=et.IDLE,this.onChange=e}go(e){this.state=e,this.onChange(e)}is(e){return this.state===e}}let fs=null;function fy(r="tick",e=!1){if(e)return;fs??(fs=new AudioContext);const t=fs.createOscillator(),n=fs.createGain(),i=fs.currentTime,s={slice:[620,.08,"triangle"],splat:[180,.12,"sine"],bomb:[90,.25,"sawtooth"],tick:[820,.04,"sine"],success:[720,.22,"triangle"]},[a,o,l]=s[r]||s.tick;t.type=l,t.frequency.setValueAtTime(a,i),r==="success"&&t.frequency.exponentialRampToValueAtTime(1120,i+o),r==="bomb"&&t.frequency.exponentialRampToValueAtTime(35,i+o),n.gain.setValueAtTime(.06,i),n.gain.exponentialRampToValueAtTime(.001,i+o),t.connect(n),n.connect(fs.destination),t.start(i),t.stop(i+o)}function py(r,e){const t=r.getContext("2d"),n=r.width=180,i=r.height=130;t.clearRect(0,0,n,i),t.font="12px system-ui",t.fillStyle="#3e4058",t.fillText("predicted →",55,14),t.fillText("true",5,72);for(let s=0;s<2;s++)for(let a=0;a<2;a++)t.fillStyle=s===a?"#b5ead7":"#ffc8dd",t.fillRect(62+a*52,24+s*48,48,44),t.fillStyle="#3e4058",t.fillText(String(e[s][a]||0),82+a*52,51+s*48)}const un=2;function Uc(r,e){var h,d,m,g,_,f,p,b;const t=r.getContext("2d"),n=r.width,i=r.height,s=document.body.classList.contains("colorblind-mode");t.clearRect(0,0,n,i);const a=e.modelPredictionGrid,o=a.length;for(let x=0;x<o;x++)for(let v=0;v<o;v++){const A=(h=e.graphOptions)!=null&&h.probability?(m=(d=e.modelProbabilityGrid)==null?void 0:d[x])==null?void 0:m[v]:null,T=.2+(A==null?1:Math.min(1,Math.abs(A-.5)*2))*.62;t.fillStyle=a[x][v]===1?`rgba(${s?"86,180,233":"142,227,194"},${T})`:`rgba(${s?"230,159,0":"255,138,138"},${T})`,t.fillRect(v*n/o,x*i/o,n/o+1,i/o+1)}const l=x=>(x+un)/(un*2)*n,c=x=>(un-x)/(un*2)*i;if(e.classifierName==="Linear SVM"&&e.modelLinearSvm&&_y(t,e.modelLinearSvm,l,c),e.classifierName==="Kernel SVM"&&((g=e.modelScoreGrid)!=null&&g.length)&&my(t,e.modelScoreGrid,n,i),(_=e.graphOptions)!=null&&_.training&&e.trainingPoints)for(const x of e.trainingPoints)t.beginPath(),t.moveTo(l(x.x[0]),c(x.x[1])-3),t.lineTo(l(x.x[0])-3,c(x.x[1])+3),t.lineTo(l(x.x[0])+3,c(x.x[1])+3),t.closePath(),t.fillStyle=x.y===1?"#147c5b":"#ae4351",t.fill();for(const[x,v]of e.points.entries()){t.beginPath();const A=l(v.x[0]),C=c(v.x[1]);v.y===1?t.arc(A,C,4,0,Math.PI*2):(t.moveTo(A,C-5),t.lineTo(A+5,C),t.lineTo(A,C+5),t.lineTo(A-5,C),t.closePath()),t.fillStyle=v.y===1?s?"#0072b2":"#4d9b7c":s?"#b87500":"#c16a72",t.fill(),t.strokeStyle="#fff",t.lineWidth=1.5,t.stroke(),e.modelPredictions&&e.modelPredictions[x]!==v.y&&(t.beginPath(),t.arc(A,C,9,0,Math.PI*2),t.strokeStyle="#e49b16",t.lineWidth=2.5,t.stroke())}if(["Linear SVM","Kernel SVM"].includes(e.classifierName))for(const x of e.modelSupportVectors??[]){const v=l(x.x[0]),A=c(x.x[1]);t.beginPath(),t.arc(v,A,9,0,Math.PI*2),t.fillStyle="rgba(255,241,168,.8)",t.fill(),t.strokeStyle="#33264a",t.lineWidth=2.5,t.stroke(),t.beginPath(),x.y===1?t.arc(v,A,4,0,Math.PI*2):(t.moveTo(v,A-4),t.lineTo(v+4,A),t.lineTo(v,A+4),t.lineTo(v-4,A),t.closePath()),t.fillStyle=x.y===1?"#4d9b7c":"#c16a72",t.fill(),t.strokeStyle="#fff",t.lineWidth=1.2,t.stroke()}else if((f=e.graphOptions)!=null&&f.supportVectors)for(const x of e.modelSupportVectors??[])t.beginPath(),t.arc(l(x.x[0]),c(x.x[1]),7,0,Math.PI*2),t.strokeStyle="#25243a",t.lineWidth=2,t.stroke();if((p=e.graphOptions)!=null&&p.margins&&((b=e.modelProbabilityGrid)!=null&&b.length)){t.strokeStyle="rgba(35,35,55,.6)",t.lineWidth=1;for(const x of[.35,.65])for(let v=1;v<o-1;v++)for(let A=1;A<o-1;A++){const C=e.modelProbabilityGrid[v][A];Math.abs(C-x)<.012&&(t.beginPath(),t.arc((A+.5)*n/o,(v+.5)*i/o,1.1,0,Math.PI*2),t.stroke())}}const u=e.userBoundary;if((u==null?void 0:u.type)==="line")ph(t,u.points,l,c,e.displayTransform);else for(const x of(u==null?void 0:u.strokes)??[])ph(t,x,l,c,e.displayTransform);t.strokeStyle="#6d6875",t.lineWidth=1,t.strokeRect(.5,.5,n-1,i-1)}function my(r,e,t,n){var o;const i=e.length,s=((o=e[0])==null?void 0:o.length)??0;if(i<2||s<2)return;const a=(l,c,u)=>{r.beginPath(),r.strokeStyle=c,r.lineWidth=u,r.setLineDash([]);const h=[[0,1],[1,2],[2,3],[3,0]],d=l!==0;for(let m=0;m<i-1;m++)for(let g=0;g<s-1;g++){if(d&&(m+g)%3!==0)continue;const _=[{x:g,y:m,v:e[m][g]},{x:g+1,y:m,v:e[m][g+1]},{x:g+1,y:m+1,v:e[m+1][g+1]},{x:g,y:m+1,v:e[m+1][g]}],f=[];for(const[p,b]of h){const x=_[p],v=_[b];if(x.v<l&&v.v>=l||v.v<l&&x.v>=l){const A=(l-x.v)/(v.v-x.v);f.push({x:x.x+(v.x-x.x)*A,y:x.y+(v.y-x.y)*A})}}for(let p=0;p+1<f.length;p+=2){const b=f[p],x=f[p+1];r.moveTo(b.x/(s-1)*t,b.y/(i-1)*n),r.lineTo(x.x/(s-1)*t,x.y/(i-1)*n)}}r.stroke()};a(-1,"#27334f",1.5),a(1,"#27334f",1.5),a(0,"#302243",2.5)}function _y(r,{w:e,b:t,mean:n,scale:i},s,a){const o=e[0]/i[0],l=e[1]/i[1],c=t-o*n[0]-l*n[1],u=d=>{const m=[],g=(_,f)=>{_>=-un-1e-7&&_<=un+1e-7&&f>=-un-1e-7&&f<=un+1e-7&&!m.some(p=>Math.hypot(p.x-_,p.y-f)<1e-5)&&m.push({x:_,y:f})};if(Math.abs(l)>1e-9)for(const _ of[-un,un])g(_,(d-c-o*_)/l);if(Math.abs(o)>1e-9)for(const _ of[-un,un])g((d-c-l*_)/o,_);return m};for(const d of[-1,1]){const m=u(d);m.length<2||(r.beginPath(),r.moveTo(s(m[0].x),a(m[0].y)),r.lineTo(s(m[1].x),a(m[1].y)),r.strokeStyle="#27334f",r.lineWidth=1.6,r.setLineDash([6,5]),r.stroke())}r.setLineDash([]);const h=u(0);h.length>=2&&(r.beginPath(),r.moveTo(s(h[0].x),a(h[0].y)),r.lineTo(s(h[1].x),a(h[1].y)),r.strokeStyle="#302243",r.lineWidth=2.5,r.stroke())}function ph(r,e,t,n,i={cx:0,cy:0,sx:1.6,sy:1.05}){if(!(!e||e.length<2)){r.beginPath(),r.moveTo(t(e[0].x/i.sx+i.cx),n(e[0].y/i.sy+i.cy));for(const s of e.slice(1))r.lineTo(t(s.x/i.sx+i.cx),n(s.y/i.sy+i.cy));r.strokeStyle="#fff",r.lineWidth=3.5,r.lineCap="round",r.lineJoin="round",r.stroke()}}const Pr=[{icon:"🥷",section:"START HERE",title:"Welcome to your ML experiment",body:"ML Ninja turns classification into a game. Each fruit or bomb is an example with two position features. Fruit is class +1; bombs are class −1. Your job is to draw a boundary that predicts the labels.",location:"The center play field is the dataset shown as moving objects.",points:["A model learns a rule from known examples, then predicts labels for new points.","There is no single best classifier for every pattern."]},{icon:"🧠",section:"YOUR LAB · MODEL",title:"Choose a classifier",body:"The Model section on the left lets you pick the learning method and adjust the controls that method supports. The short explanation changes with your choice.",location:"Your lab → Model. On a narrow screen, tap Lab to open it.",points:["Start with a simple model, then compare it with methods that can draw curved or more detailed regions.","Challenge mode changes what you are asked to predict. Guided lesson loads a short model-and-dataset activity.","Use the model’s assumptions to explain why it succeeds or struggles."]},{icon:"🧪",section:"YOUR LAB · DATA",title:"Understand the data first",body:"Choose a dataset pattern before choosing a complicated model. The “About this dataset” note describes its structure and what makes it different.",location:"Your lab → Data, then Wave settings.",points:["The size readout tells you how many fruit and bomb examples are in the upcoming wave.","The classifier learns from 100 separate training examples; the wave is held out to check its predictions.","Wave size changes how many examples are scored. Feature noise spreads points; label flips deliberately change some labels.","Change one setting at a time so you can explain what caused a boundary or score to change."]},{icon:"🎨",section:"YOUR LAB · DISPLAY",title:"Make the game comfortable to use",body:"Display controls adjust how the game looks and moves. They do not change the classifier or its predictions.",location:"Your lab → Display.",points:["Colorblind palette changes the plot colors and point shapes.","Reduce motion shortens visual transitions; Low quality can help on slower devices.","The game uses generated synthetic data. It is useful for learning boundaries, but it does not demonstrate sourcing or cleaning a real-world dataset."]},{icon:"🍉",section:"PLAY FIELD",title:"Draw, slice, and submit",body:"Start a wave with the button or Space. Watch the points settle, then use the 10-second drawing window to show how you would separate the classes.",location:"The center of the screen; the bottom buttons start, submit, switch to Slice mode, and control sound.",points:["Perceptron, Logistic Regression, and Linear SVM use a straight line. Other models let you draw a freehand boundary.","In Slice mode, swipe through objects to hit fruit and avoid bombs. Press Submit or Enter to finish early.","Fruit hits add score, bomb hits subtract score, and agreement with the trained model adds a bonus."]},{icon:"💡",section:"HOW IT WORKS",title:"Use the live explanation",body:"The right panel follows your selected classifier and dataset. It explains the model’s idea, the data pattern, and one experiment you can try.",location:"How it works on the right; on a narrow screen, tap the How it works button.",points:["The small plot previews the model’s predicted regions for the current settings.","Read “When it struggles” to understand which assumptions may not fit your data.","Use the suggested experiment to compare a specific pair of models or settings."]},{icon:"📊",section:"ROUND RESULTS",title:"Explain the result, not just the score",body:"Your accuracy evaluates the boundary you drew. Model accuracy evaluates the classifier on this wave after it learned from separate training examples. The confusion matrix shows the model’s correct predictions and mistakes.",location:"The results card appears when the round ends.",points:["Precision, recall, and F1 describe fruit predictions from different angles; accuracy alone can hide which class is being missed.","Inspect the decision-region graph and the points marked as mistakes. Compare all classifiers to see how their boundaries differ on the same wave.","A wave is small, so one point can noticeably change its percentage. Repeat the experiment before making a broad claim.","Round score is a game score. It includes slicing and boundary agreement, so it is not the same thing as model accuracy."]},{icon:"📝",section:"MINI PROJECT CHECKLIST",title:"Turn play into sound analysis",body:"A strong data-science project earns credit for justified choices and interpretation, not for using the most complex model. Try this sequence and record what you observe.",location:"Use this checklist after a few rounds or before presenting your findings.",points:["Ask a measurable question, such as: “Which classifier best separates the two moons at this noise level?” Explain why this dataset is suitable for that question.","Compare a simple baseline with at least two alternatives on the same dataset and settings. Use Compare all, then inspect the confusion matrix and errors.","Report the wave size, noise, label flips, classifier, and hyperparameters. Retry same data to repeat the current wave.","Discuss limitations and next steps. This game uses synthetic data and a simple holdout wave, not cross-validation. A full real-data project still needs a justified source, preparation/EDA, missing-value or duplicate handling, and a validation plan.","Before presenting, be ready to explain your question, why you chose the data and methods, what evidence supports your conclusion, and what you would investigate next."]}],ps=r=>r.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function gy(){try{return localStorage.getItem("mlninja.guideSeen")!=="true"}catch{return!0}}function Jd(r){let e=0,t=!0;const n=()=>{var a;if(t){t=!1,r.innerHTML="",document.removeEventListener("keydown",s);try{localStorage.setItem("mlninja.guideSeen","true")}catch{}(a=document.querySelector("#guideButton"))==null||a.focus()}},i=()=>{var l;const a=Pr[e],o=Math.round((e+1)/Pr.length*100);r.innerHTML=`<div class="overlay guide-overlay"><section class="guide-dialog" role="dialog" aria-modal="true" aria-labelledby="gameGuideTitle" aria-describedby="gameGuideBody"><div class="guide-heading"><span>ML NINJA · QUICK GUIDE</span><button type="button" class="guide-close" data-guide-close aria-label="Close guide">×</button></div><div class="guide-progress"><div class="guide-progress-label"><span>${ps(a.section)}</span><span>Step ${e+1} of ${Pr.length}</span></div><div class="guide-progress-track" role="progressbar" aria-label="Guide progress" aria-valuemin="1" aria-valuemax="${Pr.length}" aria-valuenow="${e+1}"><span style="width:${o}%"></span></div></div><div class="guide-content"><div class="guide-icon" aria-hidden="true">${a.icon}</div><h1 id="gameGuideTitle">${ps(a.title)}</h1><p id="gameGuideBody" class="guide-body-copy">${ps(a.body)}</p><div class="guide-location"><b>Where to look</b><span>${ps(a.location)}</span></div><ul>${a.points.map(c=>`<li>${ps(c)}</li>`).join("")}</ul></div><footer class="guide-actions"><button type="button" data-guide-skip class="guide-skip">Skip guide</button><div class="guide-nav">${e>0?'<button type="button" data-guide-back>Back</button>':""}<button type="button" class="primary" data-guide-next>${e===Pr.length-1?"Start exploring":"Next"}</button></div></footer></section></div>`,r.querySelector("[data-guide-close]").addEventListener("click",n),r.querySelector("[data-guide-skip]").addEventListener("click",n),(l=r.querySelector("[data-guide-back]"))==null||l.addEventListener("click",()=>{e=Math.max(0,e-1),i()}),r.querySelector("[data-guide-next]").addEventListener("click",()=>{if(e===Pr.length-1){n();return}e+=1,i()}),r.querySelector(".guide-overlay").addEventListener("click",c=>{c.target===c.currentTarget&&n()}),r.querySelector("[data-guide-next]").focus()};function s(a){var o,l;if(t)if(a.stopPropagation(),a.key==="Tab"){const c=[...r.querySelectorAll(".guide-dialog button:not(:disabled)")],u=c[0],h=c.at(-1);c.includes(document.activeElement)?a.shiftKey&&document.activeElement===u?(a.preventDefault(),h==null||h.focus()):!a.shiftKey&&document.activeElement===h&&(a.preventDefault(),u==null||u.focus()):(a.preventDefault(),u==null||u.focus())}else a.key==="Escape"?(a.preventDefault(),n()):a.key==="ArrowRight"?(a.preventDefault(),(o=r.querySelector("[data-guide-next]"))==null||o.click()):a.key==="ArrowLeft"&&(a.preventDefault(),(l=r.querySelector("[data-guide-back]"))==null||l.click())}document.addEventListener("keydown",s),i()}const vy=document.querySelector("#app");vy.innerHTML=`<div class="canvas-wrap"><canvas id="scene"></canvas></div><button class="drawer-toggle lab-toggle" id="toggleLab" aria-expanded="false" aria-controls="labPanel">Lab</button><button class="drawer-toggle how-toggle" id="toggleHow" aria-expanded="false" aria-controls="howPanel" aria-label="How it works">How it works</button><header class="topbar"><div class="brand">🍉 ML NINJA</div><button id="guideButton" class="guide-open" type="button" aria-label="Open the ML Ninja guide">📘 Guide</button><div class="chip">⭐ <span id="score">0</span></div><div class="chip">🔥 <span id="streak">0</span></div><div class="chip" id="modelTag">Perceptron</div></header><div class="layout"><aside class="card left" id="labPanel"><h3>🧠 Your lab</h3>
<details class="panel-section" open><summary>Model</summary><label for="classifier">Classifier</label><select id="classifier">${Di.map(r=>`<option>${r}</option>`).join("")}</select><div id="hyperControls"></div><p id="classifierExplanation" class="panel-copy"></p><label for="challengeMode">Challenge mode</label><select id="challengeMode"><option>Practice</option><option>Pick the model</option><option>Mystery model</option></select><button id="lessonButton" class="full-button">🎓 Guided lesson</button></details>
<details class="panel-section" open><summary>Data</summary><label for="dataset">Dataset</label><select id="dataset">${Da.map(r=>`<option>${r}</option>`).join("")}</select><div class="lab-explain"><b>About this dataset</b><p id="datasetExplanation"></p><b>Dataset size</b><p id="datasetItemCount"></p></div><b class="panel-subtitle">Boundary style</b><p id="styleNote" class="panel-copy">Draw a straight line through the scatter.</p></details>
<details class="panel-section"><summary>Display</summary><label class="check-label"><input id="colorblindMode" type="checkbox"> Colorblind palette</label><label class="check-label"><input id="reducedMotion" type="checkbox"> Reduce motion</label><button id="lowQuality" class="full-button">⚙ Low quality: off</button></details>
<details class="panel-section"><summary>Wave settings</summary><label for="waveSize">Points in each wave</label><input id="waveSize" type="range" min="8" max="24" step="2" value="12" aria-label="Points in each wave"><div class="range-readout"><span id="waveSizeValue">12</span> points</div><label for="noise">Feature noise</label><input id="noise" type="range" min="0" max="0.5" step="0.05" value="0.2"><div class="range-readout"><span id="noiseValue">0.20</span></div><label for="labelNoise">Label flips</label><input id="labelNoise" type="range" min="0" max="0.5" step="0.05" value="0"><div class="range-readout"><span id="labelNoiseValue">0%</span></div></details>
<small class="panel-footnote">Keys 1–9 choose a classifier<br>D changes the dataset</small></aside><aside class="card right" id="howPanel"><h3>💡 How it works</h3><b id="howTitle">A simple linear separator</b><p id="howText">Updates its line when it makes a mistake.</p><div class="formula" id="formula">w · x + b = 0</div><section class="logistic-lesson" id="logisticLesson" hidden><h4>How logistic regression decides</h4><p><b>1. Look at the clues.</b> Each point has two features. The model learns how much each clue matters for deciding fruit or bomb.</p><p><b>2. Estimate a chance.</b> It adds the clues into an internal score, then turns that score into a fruit probability from 0% to 100%.</p><p><b>3. Make a choice.</b> At 50% it draws the decision line: above that, predict fruit; below it, predict bomb.</p><canvas id="logisticPlot" width="280" height="160" aria-label="Logistic regression probability curve with fruit and bomb examples"></canvas><small>The curve shows how the model changes its fruit estimate. Green dots are fruit examples; coral dots are bomb examples. The dashed line marks the 50% cutoff.</small></section><section class="knn-lesson" id="knnLesson" hidden><h4>k-Nearest Neighbors: nearby points vote</h4><p><b>Feature:</b> one of a point’s coordinates. <b>Training data:</b> known fruit and bomb examples the model remembers.</p><p><b>k:</b> how many nearby examples get a vote. Small k follows local detail; large k smooths the boundary. Current k: <strong id="knnKValue">7</strong>.</p><p><b>Distance:</b> this game uses Euclidean (straight-line) distance after scaling both features to comparable ranges. Manhattan distance adds coordinate differences, like moving along city blocks; it is an alternative, not a setting in this game.</p><p><b>Majority vote:</b> the most common label among the k neighbors becomes the prediction. The plotted regions show which label wins at each location.</p></section><canvas id="previewGraph" width="180" height="130" aria-label="Live preview of the selected classifier and dataset"></canvas><small>Live classifier preview · updates with your settings</small><section class="learning-note"><h4>🧠 Classifier idea</h4><p id="modelLesson">How the selected model learns and makes decisions.</p><h4>🧪 Dataset pattern</h4><p id="datasetLesson">What makes this dataset distinctive.</p><h4>🔎 Try this</h4><p id="experimentTip">Compare models to see how their boundaries differ.</p></section><section class="kernel-lesson" id="kernelLesson" hidden><h4>Kernel SVM: the key ideas</h4><p><b>Feature:</b> a point’s two coordinates. <b>Class:</b> fruit (+1) or bomb (−1).</p><p><b>Decision boundary:</b> the curve separating the predicted classes. <b>Support vectors:</b> influential training points near that boundary.</p><p><b>Maximum margin:</b> SVM seeks the widest safe gap between classes. In the transformed feature space, its separator is a hyperplane; mapped back to this graph, it can curve.</p><p><b>Margin and hinge loss:</b> the margin is the buffer around the separator. Hinge loss penalizes wrong guesses and points inside that buffer. The dashed curves show the ±1 score margins.</p><p><b>Kernel trick:</b> compare points by similarity without explicitly building the higher-dimensional space. <b>RBF:</b> nearby points influence each other most; gamma sets how local that influence is.</p><p><b>C:</b> sets how strongly training errors are penalized. High C pushes harder to fit training examples; high gamma can make a wiggly, overfit boundary.</p><small><b>Kernel choices:</b> Linear makes a straight boundary; RBF makes flexible curves (used here); Polynomial models feature combinations; Sigmoid gives sigmoid-shaped similarity. This game currently implements RBF only.</small></section><p><b>When it struggles</b></p><p id="fails">Fails when classes cannot be split by one straight line.</p></aside></div><div class="message" id="message">Ready? Press start and meet your data.</div><div class="countdown" id="timer" hidden><svg viewBox="0 0 60 60" width="68" height="68"><circle cx="30" cy="30" r="26"/><circle class="progress" cx="30" cy="30" r="26"/></svg><b id="seconds">10</b></div><div class="hud"><button class="primary" id="start">🍓 Start wave <small>(Space)</small></button><button id="submit" hidden>Submit ↵</button><button id="sliceMode" hidden>🔪 Slice mode</button><button id="sound">🔊 Sound on</button></div><div class="corner">Fruit = +1 class · Bomb = −1 class · Draw the boundary that separates them</div><div id="modal"></div>`;const pn=document.querySelector("#scene"),ht=Xx(pn),St=new dy(yy);let Ie="Perceptron",Je="Separable blobs",Sn=[],Ei=[],bs=0,qo=$x,Nc=100,nr=.2,ir=0,ft=jd(),Nn=null,Li=[],Fc=!1,Oc=null,Os=0,Yo=0,Jn=!1,La=!1,Qd=0,ef=0,Ot=[],Ql=!1,Fn={},Vr="Practice",rr=null,tf=null,Sa=0;const mh=new Sv;let Bc=!1,Ka=null,Ti=!1,pi=0,Gr=0,vi=0,ec=null;try{if(location.hash.startsWith("#challenge=")){const r=JSON.parse(decodeURIComponent(location.hash.slice(11)));Ie=r.classifier??Ie,Je=r.dataset??Je,Fn={...r.params??{}},delete Fn.epochs,ec=r.seed??null,document.querySelector("#classifier").value=Ie,document.querySelector("#dataset").value=Je,r.waveSize&&(document.querySelector("#waveSize").value=r.waveSize),r.noise!==void 0&&(document.querySelector("#noise").value=r.noise),r.labelNoise!==void 0&&(document.querySelector("#labelNoise").value=r.labelNoise)}}catch{}function kc(r){document.querySelector("#message").textContent=r}function Ui(){const r=$a[Ie],e=qs(Ie).metadata,t={k:["k",1,31,2,"Number of neighbors voting on a label."],maxDepth:["max depth",1,12,1,"Maximum tree depth; deeper trees can memorize noise."],trees:["trees",5,75,5,"Number of bootstrapped trees whose votes are averaged."],C:["C",.1,10,.1,"Penalty strength for margin violations."],gamma:["gamma",.1,4,.1,"RBF similarity scale; larger values make smaller, curvier regions."],learningRate:["learning rate",.005,.2,.005,"Step size used by gradient or mistake updates."],ridge:["ridge",.005,.2,.005,"Stability regularization added to covariance estimates."],varianceFloor:["variance floor",.005,.1,.005,"Minimum class variance to keep likelihoods stable."]},n=e.hyperparams;document.querySelector("#hyperControls").innerHTML=Object.entries(n).filter(([u])=>t[u]).map(([u,h])=>{const[d,m,g,_,f]=t[u],p=Fn[u]??h;return`<label title="${f}">${d}: <span>${p}</span></label><input data-param="${u}" title="${f}" type="range" min="${m}" max="${g}" step="${_}" value="${p}">`}).join(""),document.querySelectorAll("#hyperControls input").forEach(u=>u.oninput=()=>{Fn[u.dataset.param]=Number(u.value),u.previousElementSibling.querySelector("span").textContent=u.value,u.dataset.param==="k"&&(document.querySelector("#knnKValue").textContent=u.value),_h()}),document.querySelector("#classifierExplanation").textContent=`${r[1]} ${r[2]}`,document.querySelector("#datasetExplanation").textContent=Ur[Je];const i=Number(document.querySelector("#waveSize").value);Nc=100,nr=Number(document.querySelector("#noise").value),ir=Number(document.querySelector("#labelNoise").value),document.querySelector("#waveSizeValue").textContent=i,document.querySelector("#noiseValue").textContent=nr.toFixed(2),document.querySelector("#labelNoiseValue").textContent=`${Math.round(ir*100)}%`;const s=Ns(Je,i,321,{noise:nr,labelNoise:ir});document.querySelector("#datasetItemCount").textContent=`Next wave: ${i} points — ${s.filter(u=>u.y===1).length} fruit and ${s.filter(u=>u.y===-1).length} bombs.`,document.querySelector("#modelTag").textContent=Ie,document.querySelector("#howTitle").textContent=`${Ie} · ${r[0]} boundary`,document.querySelector("#howText").textContent=Ie==="Logistic Regression"?"Learns how strongly each clue points toward fruit or bomb, then estimates a fruit chance.":r[1],document.querySelector("#fails").textContent=r[2],document.querySelector("#kernelLesson").hidden=Ie!=="Kernel SVM",document.querySelector("#knnLesson").hidden=Ie!=="k-NN",document.querySelector("#knnKValue").textContent=Fn.k??e.hyperparams.k,document.querySelector("#formula").textContent=Ie==="Logistic Regression"?"Clues → score → chance of fruit":r[3];const a={Perceptron:"It starts with a straight line and nudges its weights only after a mistake. On overlapping data it can keep moving instead of settling on one best fit.","Logistic Regression":"It learns how much each clue matters, combines the clues, and estimates the chance that a point is fruit. It draws a straight decision line at a 50% fruit chance.","Linear SVM":"It places a line to leave the widest gap between classes. Points nearest the gap (support vectors) matter most; the boundary is still linear.","Kernel SVM":"An RBF kernel compares points by distance and lets the margin bend around clusters. C controls tolerance for mistakes; gamma controls how local the curve can become.","k-NN":"It stores examples instead of fitting one equation. Nearby training points vote; a small k makes a detailed boundary, while a larger k smooths it.","Gaussian Naive Bayes":"It estimates a bell-shaped distribution for each feature in each class, then combines their likelihoods. It assumes the features are independent once the class is known.",LDA:"It estimates a center for each class and one shared full covariance matrix. The shared covariance makes the boundary linear while still accounting for feature correlation.",QDA:"It estimates a separate full covariance matrix for each class. The boundary can curve to match different spreads, but small samples make those estimates noisy.","Decision Tree":"It repeatedly splits one feature at a threshold to reduce Gini impurity. The resulting rectangles are easy to inspect but can memorize noise when the tree is deep.","Random Forest":"It averages votes from bootstrapped trees that consider random features at each split. Averaging stabilizes individual trees while keeping a block-shaped boundary."},o={"Separable blobs":"Two compact groups have a clean gap. A straight line should generalize well, so compare the linear models before choosing a more flexible one.","Overlapping blobs":"Some examples sit in a shared region, so even a well-fit model will make mistakes. Try more training points, then add label flips to see how noise changes the boundary.",XOR:"Each class occupies alternating corners. A straight line cannot separate the labels; compare a linear model with an RBF kernel or tree.","Two moons":"The classes wrap around each other. Watch whether a smooth kernel or local neighbors follow the curved gap without making a jagged fit.",Circles:"One class surrounds the other. Look for a closed region; a single straight line cannot put the center inside while leaving the ring outside.",Spirals:"The classes twist around one another several times. Compare a local model with a linear model and adjust gamma or k to see how much detail each can follow.","Correlated blobs":"The clouds are tilted. LDA uses their shared feature correlation; diagonal Naive Bayes ignores it, which can shift its separating line.","Unequal-variance blobs":"One group is tighter than the other. Compare LDA’s shared-shape assumption with QDA’s separate covariance estimates.","Outlier blobs":"A few mislabeled points sit away from their groups. Compare Perceptron and small-k neighbors with regularized logistic regression or SVM.","Checkerboard (3x3)":"The labels alternate across axis-aligned squares. Trees can express these box-shaped rules; linear models cannot."},l={"Correlated blobs":"Select LDA, then Gaussian Naive Bayes. Compare how the two boundaries treat the same tilted clouds.","Unequal-variance blobs":"Switch between LDA and QDA to see the effect of giving each class its own covariance.",XOR:"Compare Perceptron with Kernel SVM; the data do not have one straight separating line.","Two moons":"Compare k-NN at small and large k, then compare its local boundary with the Kernel SVM curve.",Spirals:"Adjust gamma for Kernel SVM or k for k-NN, then use Compare all to see which regions change.","Outlier blobs":"Raise the label-flip setting and compare Perceptron with a regularized model.","Checkerboard (3x3)":"Compare Decision Tree and Random Forest with a linear model; inspect their box-shaped regions."};document.querySelector("#modelLesson").textContent=a[Ie]??r[1],document.querySelector("#datasetLesson").textContent=o[Je]??Ur[Je],document.querySelector("#experimentTip").textContent=l[Je]??`Keep ${Je} selected and compare ${Ie} with another model using Compare all after a round.`;const c=["Perceptron","Logistic Regression","Linear SVM"].includes(Ie);document.querySelector("#styleNote").textContent=c?"Draw a straight line through the scatter.":"Draw a curved line to split the scatter, or close the stroke to mark an inside region.",_h()}function nf(r,e,t){if(!r||!(e!=null&&e.w)||!(e!=null&&e.scaler))return;const n=r.getContext("2d"),i=r.width,s=r.height,a=36,o=i-12,l=12,c=116;n.clearRect(0,0,i,s),n.font="11px system-ui",n.fillStyle="#4d5067",n.strokeStyle="#aaa6b4",n.lineWidth=1,n.beginPath(),n.moveTo(a,l),n.lineTo(a,c),n.lineTo(o,c),n.stroke();for(const u of[0,.5,1]){const h=c-u*(c-l);n.fillText(`${Math.round(u*100)}%`,2,h+4),n.strokeStyle=u===.5?"#757086":"#e2deea",n.setLineDash(u===.5?[4,3]:[]),n.beginPath(),n.moveTo(a,h),n.lineTo(o,h),n.stroke()}n.setLineDash([]),n.fillStyle="#4d5067",n.fillText("Evidence for bomb",a,s-6),n.fillText("Evidence for fruit",o-91,s-6),n.strokeStyle="#48a889",n.lineWidth=3,n.beginPath();for(let u=0;u<=120;u++){const h=-6+12*u/120,d=1/(1+Math.exp(-h)),m=a+(o-a)*u/120,g=c-d*(c-l);u===0?n.moveTo(m,g):n.lineTo(m,g)}n.stroke();for(const u of(t??[]).filter((h,d)=>d%6===0)){const h=Math.max(-6,Math.min(6,e.score(u.x))),d=e.predictProba(u.x),m=a+(h+6)/12*(o-a),g=c-d*(c-l);n.beginPath(),n.arc(m,g,3.4,0,Math.PI*2),n.fillStyle=u.y===1?"#369b78":"#d56f78",n.fill(),n.strokeStyle="#fff",n.lineWidth=1,n.stroke()}}function xy(r,e){const t=document.querySelector("#logisticLesson");t&&(t.hidden=Ie!=="Logistic Regression",t.hidden||nf(document.querySelector("#logisticPlot"),r,e))}function _h(){const r=document.querySelector("#previewGraph");if(!r)return;const e=Ns(Je,Nc,189,{noise:nr,labelNoise:ir}),t=Ns(Je,22,891,{noise:nr,labelNoise:ir}),n=qs(Ie,Fn,189).fit(e.map(a=>a.x),e.map(a=>a.y));xy(n,e);const i=28,s=Array.from({length:i},(a,o)=>Array.from({length:i},(l,c)=>n.predict([c/(i-1)*4-2,2-o/(i-1)*4])));Uc(r,{modelPredictionGrid:s,points:t,userBoundary:null})}function yy(r){document.querySelector("#start").hidden=![et.IDLE,et.RESULT].includes(r),document.querySelector("#submit").hidden=r!==et.DRAW,document.querySelector("#sliceMode").hidden=r!==et.DRAW,document.querySelector("#timer").hidden=r!==et.DRAW,r===et.DRAW&&(Ti=!1,document.querySelector("#sliceMode").textContent="🔪 Slice mode",kc(`Draw your boundary, or switch to Slice mode. ${Ic} seconds!`)),ht.render()}function Sy(r){const e=pn.getBoundingClientRect(),t=e.width/Math.max(e.height,1),n=r.map(u=>u.x[0]),i=r.map(u=>u.x[1]),s=(Math.min(...n)+Math.max(...n))/2,a=(Math.min(...i)+Math.max(...i))/2,o=Math.max(...n.map(u=>Math.abs(u-s)),.12),l=Math.max(...i.map(u=>Math.abs(u-a)),.12),c=Math.max(.2,Math.min(t*3.2*.72/o,3.2*.72/l));return{cx:s,cy:a,sx:c,sy:c}}function rf(r,e=Oc){return{x:(r[0]-e.cx)*e.sx,y:(r[1]-e.cy)*e.sy}}function My(r){return rf(r.x)}function In(r=!1,e=!1){if(!r&&!e&&St.is(et.RESULT)&&(rr=null),Vr==="Pick the model"&&!r&&!e&&!rr){Ey();return}ft=jd(),document.querySelector("#modal").innerHTML="",Ie=document.querySelector("#classifier").value,Je=document.querySelector("#dataset").value,qo=Number(document.querySelector("#waveSize").value),Ui(),r||(bs=ec??Math.floor(Math.random()*1e6),ec=null),Sn=Ns(Je,qo,bs,{noise:nr,labelNoise:ir}),Oc=Sy(Sn),document.querySelector("#datasetItemCount").textContent=`This wave: ${qo} points — ${Sn.filter(o=>o.y===1).length} fruit and ${Sn.filter(o=>o.y===-1).length} bombs.`;const t=Ns(Je,Nc,189,{noise:nr,labelNoise:ir});Ei=t;const n=qs(Ie,Fn,bs);n.fit(t.map(o=>o.x),t.map(o=>o.y)),Ot=n,Li=[],Nn=null,ht.objects.splice(0).forEach(o=>{ht.scene.remove(o)});const i=performance.now(),s=2.5,a=1.45;Sn.forEach((o,l)=>{const c=ht.makeFruit(o,l),u=My(o),h=l%4*.04,d=a-h,m=-4.2+Math.random()*8.4,g=u.y-.5*s*d*d;c.position.set(m,g,0),c.userData.flight={startX:m,startY:g,targetX:u.x,targetY:u.y,start:i+h*1e3,T:d,g:s},c.userData.apex=!1}),Qd=i+a*1e3,Ql=!1,St.go(et.LAUNCH),kc("Wave incoming — watch the data fly!"),requestAnimationFrame(tc)}function tc(r){if(pi||(pi=r),Gr++,r-pi>1e3&&(Gr*1e3/(r-pi)<45?(vi||(vi=r),r-vi>2e3&&!Jn&&(Jn=!0,document.querySelector("#lowQuality").textContent="⚙ Low quality: on",ht.renderer.setPixelRatio(1),ht.resize())):vi=0,pi=r,Gr=0),document.hidden){requestAnimationFrame(tc);return}if(!(St.is(et.IDLE)||St.is(et.RESULT))){for(const e of ht.objects){const t=e.userData.flight;if(!t)continue;const n=Math.max(0,(r-t.start)/1e3);n<t.T?(e.position.x=t.startX+(t.targetX-t.startX)*Math.min(1,n/t.T),e.position.y=t.startY+t.g*t.T*n-.5*t.g*n*n,e.rotation.z=Math.sin(n*4+e.userData.id)*.08):(e.position.set(t.targetX,t.targetY,0),e.userData.apex=!0)}ht.render(),r>=Qd&&!Ql&&(Ql=!0,St.go(et.DRAW),ef=Date.now()+Ic*1e3,Jn||Lc.to({v:1},{v:.03,duration:.3,onUpdate:()=>{}}),requestAnimationFrame(nc)),St.is(et.DRAW)||requestAnimationFrame(tc)}}function nc(){if(!St.is(et.DRAW))return;if(document.hidden){requestAnimationFrame(nc);return}const r=performance.now();Gr++,r-pi>1e3&&(Gr*1e3/(r-pi)<45?(vi||(vi=r),r-vi>2e3&&!Jn&&(Jn=!0,document.querySelector("#lowQuality").textContent="⚙ Low quality: on",ht.renderer.setPixelRatio(1),ht.resize())):vi=0,pi=r,Gr=0);const e=Math.max(0,(ef-Date.now())/1e3);if(document.querySelector("#seconds").textContent=Math.ceil(e),document.querySelector(".progress").style.strokeDashoffset=163*(1-e/Ic),ht.render(),e<=0){of(!0);return}requestAnimationFrame(nc)}function sf(r){const e=pn.getBoundingClientRect();return{x:((r.clientX-e.left)/e.width-.5)*2*(e.width/e.height*3.2),y:(.5-(r.clientY-e.top)/e.height)*6.4}}function $o(r,e=!1){const t=rf(r);let n;if(["Perceptron","Logistic Regression","Linear SVM"].includes(Ie)){if(!Nn||Nn.length<2)return-1;const[i,s]=Nn;n=uy(i,s,t)}else{if(Li.length===0)return-1;n=hy(Li,t)}return(e?-n:n)>=0?1:-1}function af(){St.is(et.DRAW)&&of(!1)}function of(r=!1){var t,n;if(!St.is(et.DRAW))return;St.go(et.JUDGE);const e=Py();if(ft.displayTransform=Oc,ft.trainingPoints=Ei.map(i=>({x:[...i.x],y:i.y})),ft.graphOptions={probability:!1,supportVectors:!1,margins:!1,training:!1},ft=cy(ft,{points:Sn,model:Ot,playerPredict:$o,userBoundary:e}),ft.timedOut=r&&!ft.boundaryDrawn,ft.classifierName=Vr==="Mystery model"?tf:Ie,ft.challengeMode=Vr,Vr==="Pick the model"&&rr){const s=Di.map(a=>{const o=qs(a,{},bs).fit(Ei.map(l=>l.x),Ei.map(l=>l.y));return{name:a,accuracy:by(o,Sn)}}).sort((a,o)=>o.accuracy-a.accuracy)[0];ft.challengeResult=`You picked ${rr}; ${s.name} scored highest at ${Number((s.accuracy*100).toFixed(1))}%.`,s.name===rr?(ft.score+=25,ft.challengeResult+=" +25 bonus points!"):ft.challengeResult+=" Try another pattern to improve your guess."}ft.classifierSummary=$a[Ie][1],Os+=ft.score,Yo=ft.bombsHit?0:Yo+1,document.querySelector("#score").textContent=Os,document.querySelector("#streak").textContent=Yo;for(const i of ht.objects)i.userData.fruit&&((t=Sn[i.userData.id])==null?void 0:t.y)===1&&$o(Sn[i.userData.id].x,ft.flipped)===1&&i.scale.setScalar(1.3),!i.userData.fruit&&((n=Sn[i.userData.id])==null?void 0:n.y)===-1&&$o(Sn[i.userData.id].x,ft.flipped)===1&&(i.rotation.z+=.5);ht.render(),lf(ft)}function by(r,e){return e.length===0?0:e.reduce((t,n)=>t+ +(r.predict(n.x)===n.y),0)/e.length}function Ey(){document.querySelector("#modal").innerHTML=`<div class="overlay"><section class="dialog"><h1>Pick the model</h1><p>Which classifier do you think will score highest on <b>${Je}</b>? A correct prediction earns 25 bonus points.</p><div class="picker">${Di.map(r=>`<button data-guess="${r}">${r}</button>`).join("")}</div></section></div>`,document.querySelectorAll("[data-guess]").forEach(r=>r.onclick=()=>{rr=r.dataset.guess,In(!1,!0)})}function Ty(){const r=[["XOR","Perceptron","No straight line can divide diagonal XOR classes; try a kernel or tree model."],["Correlated blobs","LDA","LDA uses feature correlation; diagonal Naive Bayes ignores it."],["Two moons","Decision Tree","A forest averages many boxy trees to reduce the variance of one tree."],["Overlapping blobs","k-NN","Small k follows local noise; larger k smooths ambiguous overlap."]],[e,t,n]=r[Sa%r.length];Sa++,document.querySelector("#dataset").value=e,Je=e,document.querySelector("#classifier").value=t,Ie=t,Fn={},Ui(),kc(`Lesson ${Sa}: ${n}`),document.querySelector("#lessonButton").textContent=`🎓 Lesson ${Sa%r.length+1}: ${n}`}const Ay={"Separable blobs":{models:["Linear SVM","Logistic Regression","Perceptron"],reason:"These compact groups are usually separable with a straight boundary."},"Overlapping blobs":{models:["Linear SVM","Logistic Regression","k-NN"],reason:"The classes overlap, so some errors are unavoidable. A regularized linear model is a sensible baseline."},XOR:{models:["Kernel SVM","Decision Tree","Random Forest"],reason:"Alternating XOR corners need a nonlinear or split-based boundary."},"Two moons":{models:["Kernel SVM","k-NN","Random Forest"],reason:"The two curved bands need a boundary that can bend with them."},Circles:{models:["Kernel SVM","k-NN","QDA"],reason:"A curved model can represent one class surrounding the other."},Spirals:{models:["Kernel SVM","k-NN","Random Forest"],reason:"The winding classes need a flexible nonlinear boundary."},"Correlated blobs":{models:["LDA","Linear SVM","Logistic Regression"],reason:"LDA can use the shared correlation in the tilted groups."},"Unequal-variance blobs":{models:["QDA","Kernel SVM","Random Forest"],reason:"QDA can model a different covariance shape for each class."},"Outlier blobs":{models:["Random Forest","Logistic Regression","k-NN"],reason:"An ensemble or regularized model can be less sensitive to individual outliers."},"Checkerboard (3x3)":{models:["Decision Tree","Random Forest","Kernel SVM"],reason:"Alternating squares need multiple splits or a nonlinear boundary."}};function wy(r,e){const t=Ay[r];return t?{name:t.models.find(i=>i!==e)??t.models[0],reason:t.reason}:null}function lf(r){St.go(et.RESULT);const e=`${Number((r.userAccuracy*100).toFixed(2))}%`,t=`${Number((r.modelAccuracy*100).toFixed(2))}%`,n=r.challengeResult?`<p class="challenge-note">${r.challengeResult}</p>`:"",i=r.challengeMode==="Mystery model"?`<p class="challenge-note">Mystery model revealed: <b>${r.classifierName}</b> (${Ot.metadata.family}). Guess its family below for a +25 point bonus.</p><div class="family-guesses">${["linear","nonlinear","probabilistic","tree","ensemble"].map(P=>`<button data-family="${P}">${P}</button>`).join("")}</div>`:"",s=r.timedOut?"Time’s up!":r.verdict,a=r.boundaryDrawn?`${r.classifierSummary} Your boundary matched ${e} of ${r.total} points; the trained model reached ${t}.`:`No boundary drawn. Your accuracy is 0% across ${r.total} points; the trained model reached ${t}.`,o=r.modelAccuracy<.7?wy(Je,Ie):null,l=o?`<div class="model-note"><b>Model suggestion</b><p>${o.reason} Try <strong>${o.name}</strong> for this dataset.</p><button data-action="recommend" data-model="${o.name}">Try ${o.name}</button></div>`:"",c=Ie==="Logistic Regression"?'<section class="result-logistic"><h2>How the model estimated fruit probability</h2><p>Each dot is a point from this round. Its horizontal position shows the model’s evidence, and its height shows the estimated fruit chance. The 50% line marks where the prediction changes from bomb to fruit.</p><canvas id="resultLogisticPlot" width=280 height=160 aria-label="Logistic regression sigmoid with this round’s points"></canvas></section>':"",u=Ie==="k-NN"?`<section class="result-knn"><h2>k-NN settings and vote</h2><p><strong>k = ${Ot.k}</strong> of ${Ei.length} training examples. For each point, k-NN finds its nearest examples using scaled Euclidean distance, then predicts the class that gets the most votes. A larger k usually makes a smoother boundary.</p></section>`:"",h=Ie==="Gaussian Naive Bayes"?'<section class="result-gaussian"><h2>How Gaussian Naive Bayes decides</h2><p><b>1. Start with a prior:</b> how common fruit and bombs are in the training examples.</p><p><b>2. Check the likelihood:</b> for each feature, compare the point with that class’s Gaussian (bell-shaped) distribution. The <b>mean</b> is its center; the <b>variance</b> describes its spread.</p><p><b>3. Find the posterior:</b> combine the prior with the feature likelihoods using Bayes’ theorem. The class with the higher posterior probability wins.</p><p><b>Naive assumption:</b> it treats the features as independent within each class, so it multiplies their likelihoods. That can be inaccurate when the features are strongly correlated.</p></section>':"",d=r.points.filter(P=>P.y===1).length,m=r.points.filter(P=>P.y===-1).length,g=`<small class="point-legend">Background shows model predictions · ● ${d} fruit labels · ◆ ${m} bomb labels · gold outline marks a model error</small>`,_=["Linear SVM","Kernel SVM"].includes(Ie)?'<small class="svm-legend">Solid line: model boundary · dashed lines: ±1 margin · gold rings: support vectors</small>':"",f=r.confusionMatrix,p=(P,F)=>F===0?0:P/F,b=p(f.tp,f.tp+f.fp),x=p(f.tp,f.tp+f.fn),v=p(2*b*x,b+x),A=r.userAccuracy>=r.modelAccuracy?'<span class="beat-badge">🏆 Beat the model!</span>':"";let C={};try{C=JSON.parse(localStorage.getItem("mlninja.records")??"{}")}catch{}const T=`${Ie}|${Je}`,R=C[T]??{player:0,model:0};R.player=Math.max(R.player,r.userAccuracy),R.model=Math.max(R.model,r.modelAccuracy),C[T]=R;try{localStorage.setItem("mlninja.records",JSON.stringify(C))}catch{}const y=r.modelAccuracy>=.85?"Strong fit.":"This model struggled.",S=Ot.trees?`${y} The forest used ${Ot.trees.length} trees and ${Ot.splitCount} splits on ${Je}. ${Ur[Je]}`:Ot.splitCount!==void 0?`${y} The tree used ${Ot.splitCount} axis-aligned splits on ${Je}. ${Ur[Je]}`:Ot.metadata.name==="k-NN"?`${y} Used k=${Ot.k} of ${Ei.length} training examples with Euclidean distance after feature scaling. ${Ur[Je]}`:`${y} ${$a[Ie][0]} boundary against ${Je}. ${Ur[Je]}`;document.querySelector("#modal").innerHTML=`<div class="overlay"><section class="dialog"><div style="font-size:42px">${r.userAccuracy>=.9?"🎉":r.userAccuracy>=.75?"🌟":"🫣"}</div><h1>${s}</h1><div class="stats"><div class="stat"><b>${e}</b><small>Your accuracy</small></div><div class="stat"><b>${t}</b><small>Model accuracy</small></div><div class="stat"><b>${r.score}</b><small>Round score</small></div></div><p>${a}</p>${n}${i}<p class="metric-line">Fruit precision ${Number((b*100).toFixed(1))}% · recall ${Number((x*100).toFixed(1))}% · F1 ${Number((v*100).toFixed(1))}%</p><p class="metric-line">Your boundary matched the model on ${Number((r.modelAgreement*100).toFixed(1))}% of points: +${r.agreementScore} score points.</p>${A}<span class="shape-badge">Boundary: ${$a[Ie][0]}</span><p class="why-line">${S}</p><p class="record-line">Best across this model/dataset: you ${Number((R.player*100).toFixed(1))}% · model ${Number((R.model*100).toFixed(1))}%</p>${l}<div class="result-viz"><canvas id="boundaryPlot" width="220" height="220" aria-label="Model regions, data points, and your boundary"></canvas><canvas id="confusionPlot" width="180" height="130" aria-label="Model confusion matrix"></canvas></div>${g}${_}${c}${u}${h}<div class="toolbar"><button class="primary" data-action="retry">🔁 Retry same data</button><button data-action="next">Next wave →</button><button data-action="compare">Compare all classifiers</button><button data-action="picker">🧠 Change model</button><button data-action="dataset">🌈 Change dataset</button></div></section></div>`,Uc(document.querySelector("#boundaryPlot"),r),py(document.querySelector("#confusionPlot"),[[f.tp,f.fn],[f.fp,f.tn]]),Ie==="Logistic Regression"&&nf(document.querySelector("#resultLogisticPlot"),Ot,r.points),document.body.classList.contains("reduced-motion")||Lc.from(".dialog",{y:20,opacity:0,duration:.35,ease:"back.out(1.4)"}),document.querySelectorAll("[data-family]").forEach(P=>P.onclick=()=>{const F=P.dataset.family===Ot.metadata.family,U=F?25:0;Os+=U,r.score+=U,document.querySelector("#score").textContent=Os,document.querySelectorAll(".stat b")[2].textContent=r.score,document.querySelector(".challenge-note").textContent=F?"Correct family! +25 points.":`Not quite — this model is ${Ot.metadata.family}.`}),document.querySelectorAll("[data-action]").forEach(P=>P.onclick=()=>{const F=P.dataset.action;if(F==="picker")Cy();else if(F==="compare")Ry(r);else if(F==="recommend")document.querySelector("#classifier").value=P.dataset.model,Ie=P.dataset.model,Fn={},In();else if(F==="retry")In(!0);else if(F==="dataset"){const U=(Da.indexOf(Je)+1)%Da.length;document.querySelector("#dataset").value=Da[U],In()}else In()})}function Ry(r){document.querySelector("#modal").innerHTML='<div class="overlay"><section class="dialog compare-dialog"><h1>Compare all classifiers</h1><p>All ten models use the same training examples and this round’s points. Every graph uses the same fruit-circle and bomb-diamond markers, and shows your boundary. SVM graphs also show the model separator and margin lines.</p><div id="compareGrid" class="compare-grid"></div><button id="compareBack">Back to results</button></section></div>';const e=[];for(const s of Di){const a=qs(s,{},bs).fit(Ei.map(c=>c.x),Ei.map(c=>c.y)),o=r.points.reduce((c,u)=>c+ +(a.predict(u.x)===u.y),0),l=r.total===0?0:o/r.total;e.push({name:s,model:a,accuracy:l,predictions:r.points.map(c=>a.predict(c.x))})}const t=Math.max(...e.map(s=>s.accuracy)),n=Math.min(...e.map(s=>s.accuracy)),i=document.querySelector("#compareGrid");i.innerHTML=e.map((s,a)=>`<article class="compare-item ${s.accuracy===t?"best":""} ${s.accuracy===n?"worst":""}"><b>${s.name}</b><canvas width="144" height="112" id="compare-${a}" aria-label="${s.name} decision regions"></canvas><small>${Number((s.accuracy*100).toFixed(1))}%${s.accuracy===t?" · best":""}${s.accuracy===n?" · lowest":""}</small></article>`).join(""),e.forEach((s,a)=>{const l=Array.from({length:32},(c,u)=>Array.from({length:32},(h,d)=>s.model.predict([d/31*4-2,2-u/31*4])));Uc(document.querySelector(`#compare-${a}`),{...r,classifierName:s.name,modelLinearSvm:s.name==="Linear SVM"?{w:[...s.model.w],b:s.model.b,mean:[...s.model.scaler.mean],scale:[...s.model.scaler.scale]}:null,modelScoreGrid:s.name==="Kernel SVM"?Array.from({length:32},(c,u)=>Array.from({length:32},(h,d)=>s.model.score([d/31*4-2,2-u/31*4]))):[],modelSupportVectors:[],modelPredictionGrid:l,modelPredictions:s.predictions})}),document.querySelector("#compareBack").onclick=()=>lf(r)}function Cy(){document.querySelector("#modal").innerHTML=`<div class="overlay"><section class="dialog"><div style="font-size:32px">🧠</div><h1>Pick your next challenge</h1><p>Choose the kind of boundary you want to learn.</p><div class="picker">${Di.map((r,e)=>`<button data-model="${r}" class="${r===Ie?"active":""}">${e+1} · ${r}</button>`).join("")}</div><button data-close>Back</button></section></div>`,document.querySelectorAll("[data-model]").forEach(r=>r.onclick=()=>{document.querySelector("#classifier").value=r.dataset.model,In()}),document.querySelector("[data-close]").onclick=()=>document.querySelector("#modal").innerHTML=""}function Py(){return["Perceptron","Logistic Regression","Linear SVM"].includes(Ie)?Nn?{type:"line",points:Nn.map(r=>({x:r.x,y:r.y}))}:null:Li.length?{type:"freehand",strokes:Li.map(r=>r.map(e=>({x:e.x,y:e.y})))}:null}function Dy(r){const e=pn.getBoundingClientRect();return new Ne((r.clientX-e.left)/e.width*2-1,-((r.clientY-e.top)/e.height)*2+1)}function cf(r){var s;const e=Dy(r);mh.setFromCamera(e,ht.camera);const t=ht.objects.filter(a=>a.userData.alive);ht.scene.updateMatrixWorld(!0);const n=mh.intersectObjects(t,!0).find(a=>a.object.userData.hitShape);if(!n)return;let i=n.object;for(;i&&((s=i.userData)==null?void 0:s.id)===void 0;)i=i.parent;!i||!i.userData.alive||(i.userData.alive=!1,oy(ft,i.userData.y),document.querySelector("#score").textContent=Os+ft.score,fy(i.userData.y===1?"splat":"bomb",La),ht.scene.remove(i),ht.render())}function Ly(r,e){const t=e.clientX-r.clientX,n=e.clientY-r.clientY,i=Math.max(1,Math.ceil(Math.hypot(t,n)/12));for(let s=1;s<=i;s++)cf({clientX:r.clientX+t*s/i,clientY:r.clientY+n*s/i})}pn.addEventListener("contextmenu",r=>r.preventDefault());pn.addEventListener("pointerdown",r=>{const e=St.is(et.LAUNCH),t=St.is(et.DRAW)&&(Ti||r.shiftKey||r.button===2);if(e||t){r.preventDefault(),Bc=!0,Ka={clientX:r.clientX,clientY:r.clientY},pn.setPointerCapture(r.pointerId),cf(r);return}if(!St.is(et.DRAW))return;Fc=!0,pn.setPointerCapture(r.pointerId);const n=sf(r);["Perceptron","Logistic Regression","Linear SVM"].includes(Ie)?Nn=[n,n]:Li.push([n]),Ys(),ht.render()});pn.addEventListener("pointermove",r=>{if(Bc){const t={clientX:r.clientX,clientY:r.clientY};Ly(Ka,t),Ka=t;return}if(!Fc||!St.is(et.DRAW))return;const e=sf(r);["Perceptron","Logistic Regression","Linear SVM"].includes(Ie)?Nn[1]=e:Li.at(-1).push(e),Ys(),ht.render()});function uf(){Fc=!1,Bc=!1,Ka=null}pn.addEventListener("pointerup",uf);pn.addEventListener("pointercancel",uf);const Es=document.createElement("canvas");Es.style.cssText="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1";document.querySelector(".canvas-wrap").appendChild(Es);function Ys(){const r=pn.getBoundingClientRect();Es.width=r.width*devicePixelRatio,Es.height=r.height*devicePixelRatio;const e=Es.getContext("2d");e.scale(devicePixelRatio,devicePixelRatio);const t=r.width/r.height,n=i=>({x:(i.x/(t*3.2)+1)*r.width/2,y:(1-i.y/3.2)*r.height/2});e.lineWidth=8,e.lineCap="round",e.strokeStyle="white",e.shadowColor="#ffb5a7",e.shadowBlur=8;for(const i of Nn?[Nn]:Li)i.length<2||(e.beginPath(),i.forEach((s,a)=>{const o=n(s);a?e.lineTo(o.x,o.y):e.moveTo(o.x,o.y)}),e.stroke())}addEventListener("resize",Ys);document.querySelector("#toggleLab").onclick=()=>hf("labPanel","toggleLab");document.querySelector("#toggleHow").onclick=()=>hf("howPanel","toggleHow");document.querySelector("#start").onclick=In;document.querySelector("#submit").onclick=af;document.querySelector("#sliceMode").onclick=r=>{Ti=!Ti,r.currentTarget.textContent=Ti?"✏️ Drawing mode":"🔪 Slice mode"};document.querySelector("#classifier").onchange=()=>{Ie=document.querySelector("#classifier").value,Fn={},Ui()};document.querySelector("#challengeMode").onchange=r=>{Vr=r.target.value,rr=null,tf=null,document.querySelector("#classifier").disabled=Vr==="Mystery model"};document.querySelector("#lessonButton").onclick=Ty;document.querySelector("#colorblindMode").onchange=r=>{document.body.classList.toggle("colorblind-mode",r.target.checked);try{localStorage.setItem("mlninja.colorblind",String(r.target.checked))}catch{}Ys()};document.querySelector("#reducedMotion").onchange=r=>{document.body.classList.toggle("reduced-motion",r.target.checked);try{localStorage.setItem("mlninja.reducedMotion",String(r.target.checked))}catch{}};document.querySelector("#dataset").onchange=()=>{Je=document.querySelector("#dataset").value,Ui()};document.querySelector("#waveSize").oninput=Ui;document.querySelector("#noise").oninput=Ui;document.querySelector("#labelNoise").oninput=Ui;document.querySelector("#lowQuality").onclick=r=>{Jn=!Jn,r.currentTarget.textContent=`⚙ Low quality: ${Jn?"on":"off"}`,ht.renderer.setPixelRatio(Jn?1:Math.min(devicePixelRatio||1,1.5)),ht.resize()};document.querySelector("#sound").onclick=r=>{La=!La,r.currentTarget.textContent=La?"🔇 Sound off":"🔊 Sound on"};addEventListener("keydown",r=>{if(r.code==="Space"&&(St.is(et.IDLE)||St.is(et.RESULT))&&(r.preventDefault(),In()),r.key==="Enter"&&af(),r.key.toLowerCase()==="x"&&St.is(et.DRAW)&&(Ti=!Ti,document.querySelector("#sliceMode").textContent=Ti?"✏️ Drawing mode":"🔪 Slice mode"),r.key.toLowerCase()==="r"&&In(),r.key.toLowerCase()==="d"){const e=document.querySelector("#dataset");e.selectedIndex=(e.selectedIndex+1)%e.options.length,Je=e.value}r.key>="1"&&r.key<="9"&&St.is(et.RESULT)&&(document.querySelector("#classifier").value=Di[+r.key-1],Ie=Di[+r.key-1],In())});document.addEventListener("visibilitychange",()=>{document.hidden||ht.render()});function hf(r,e){const t=document.querySelector(`#${r}`),n=document.querySelector(`#${e}`);t.classList.toggle("drawer-open");const i=t.classList.contains("drawer-open");n.setAttribute("aria-expanded",String(i)),document.querySelectorAll(".drawer-open").forEach(s=>{s!==t&&s.classList.remove("drawer-open")}),document.querySelectorAll(".drawer-toggle").forEach(s=>{s!==n&&s.setAttribute("aria-expanded","false")})}try{const r=localStorage.getItem("mlninja.colorblind")==="true",e=localStorage.getItem("mlninja.reducedMotion")==="true";document.querySelector("#colorblindMode").checked=r,document.querySelector("#reducedMotion").checked=e,document.body.classList.toggle("colorblind-mode",r),document.body.classList.toggle("reduced-motion",e)}catch{}Ui();St.go(et.IDLE);Ys();const df=document.querySelector("#modal");document.querySelector("#guideButton").addEventListener("click",()=>Jd(df));gy()&&Jd(df);
