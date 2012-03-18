/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20111220+DEV
 */
(function(H){function P(P,ca){function l(a){return function(c){var e=this._t;return!e||!e._a?null:a.call(this,c)}}this.flashVersion=8;this.debugFlash=this.debugMode=!1;this.consoleOnly=this.useConsole=!0;this.waitForWindowLoad=!1;this.bgColor="#ffffff";this.useHighPerformance=!1;this.html5PollingInterval=this.flashPollingInterval=null;this.flashLoadTimeout=1E3;this.wmode=null;this.allowScriptAccess="always";this.useFlashBlock=!1;this.useHTML5Audio=!0;this.html5Test=/^(probably|maybe)$/i;this.preferFlash=
!0;this.noSWFCache=!1;this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,
onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.movieID="sm2-container";this.id=ca||"sm2movie";
this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20111220+DEV";this.movieURL=this.version=null;this.url=P||null;this.altURL=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};var da;try{da="undefined"!==
typeof Audio&&"undefined"!==typeof(new Audio).canPlayType}catch(Wa){da=!1}this.hasHTML5=da;this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var ya,c=this,h=null,Q,n=navigator.userAgent,g=H,ea=g.location.href.toString(),k=document,fa,R,j,q=[],I=!1,J=!1,o=!1,v=!1,ga=!1,K,s,ha,A,B,S,za,ia,y,T,C,ja,ka,la,U,D,Aa,ma,Ba,V,Ca,L=null,na=null,E,oa,F,W,X,pa,p,Y=!1,qa=!1,Da,Ea,Fa,Z=0,M=null,$,t=null,Ga,aa,N,w,ra,sa,Ha,m,Qa=Array.prototype.slice,z=!1,r,ba,Ia,u,Ja,ta=n.match(/(ipad|iphone|ipod)/i),
Ra=n.match(/firefox/i),Sa=n.match(/droid/i),x=n.match(/msie/i),Ta=n.match(/webkit/i),O=n.match(/safari/i)&&!n.match(/chrome/i),Ua=n.match(/opera/i),ua=n.match(/(mobile|pre\/|xoom)/i)||ta,va=!ea.match(/usehtml5audio/i)&&!ea.match(/sm2\-ignorebadua/i)&&O&&!n.match(/silk/i)&&n.match(/OS X 10_6_([3-7])/i),wa="undefined"!==typeof k.hasFocus?k.hasFocus():null,G=O&&"undefined"===typeof k.hasFocus,Ka=!G,La=/(mp3|mp4|mpa)/i,xa=k.location?k.location.protocol.match(/http/i):null,Ma=!xa?"http://":"",Na=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|mp4v|3gp|3g2)\s*(?:$|;)/i,
Oa="mpeg4,aac,flv,mov,mp4,m4v,f4v,m4a,mp4v,3gp,3g2".split(","),Va=RegExp("\\.("+Oa.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!xa;this._global_a=null;if(ua&&(c.useHTML5Audio=!0,c.preferFlash=!1,ta))z=c.ignoreFlash=!0;this.supported=this.ok=function(){return t?o&&!v:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(a){return Q(a)||k[a]||g[a]};this.createSound=function(a){function d(){e=W(e);c.sounds[f.id]=new ya(f);c.soundIDs.push(f.id);
return c.sounds[f.id]}var e=null,b=null,f=null;if(!o||!c.ok())return pa(void 0),!1;2===arguments.length&&(a={id:arguments[0],url:arguments[1]});e=s(a);e.url=$(e.url);f=e;if(p(f.id,!0))return c.sounds[f.id];if(aa(f))b=d(),b._setup_html5(f);else{if(8<j){if(null===f.isMovieStar)f.isMovieStar=f.serverURL||(f.type?f.type.match(Na):!1)||f.url.match(Va);if(f.isMovieStar&&f.usePeakData)f.usePeakData=!1}f=X(f,void 0);b=d();if(8===j)h._createSound(f.id,f.loops||1,f.usePolicyFile);else if(h._createSound(f.id,
f.url,f.usePeakData,f.useWaveformData,f.useEQData,f.isMovieStar,f.isMovieStar?f.bufferTime:!1,f.loops||1,f.serverURL,f.duration||null,f.autoPlay,!0,f.autoLoad,f.usePolicyFile),!f.serverURL)b.connected=!0,f.onconnect&&f.onconnect.apply(b);!f.serverURL&&(f.autoLoad||f.autoPlay)&&b.load(f)}!f.serverURL&&f.autoPlay&&b.play();return b};this.destroySound=function(a,d){if(!p(a))return!1;var e=c.sounds[a],b;e._iO={};e.stop();e.unload();for(b=0;b<c.soundIDs.length;b++)if(c.soundIDs[b]===a){c.soundIDs.splice(b,
1);break}d||e.destruct(!0);delete c.sounds[a];return!0};this.load=function(a,d){return!p(a)?!1:c.sounds[a].load(d)};this.unload=function(a){return!p(a)?!1:c.sounds[a].unload()};this.onposition=this.onPosition=function(a,d,e,b){return!p(a)?!1:c.sounds[a].onposition(d,e,b)};this.clearOnPosition=function(a,d,e){return!p(a)?!1:c.sounds[a].clearOnPosition(d,e)};this.start=this.play=function(a,d){if(!o||!c.ok())return pa("soundManager.play(): "+E(!o?"notReady":"notOK")),!1;if(!p(a)){d instanceof Object||
(d={url:d});return d&&d.url?(d.id=a,c.createSound(d).play()):!1}return c.sounds[a].play(d)};this.setPosition=function(a,d){return!p(a)?!1:c.sounds[a].setPosition(d)};this.stop=function(a){return!p(a)?!1:c.sounds[a].stop()};this.stopAll=function(){for(var a in c.sounds)c.sounds.hasOwnProperty(a)&&c.sounds[a].stop()};this.pause=function(a){return!p(a)?!1:c.sounds[a].pause()};this.pauseAll=function(){var a;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].pause()};this.resume=function(a){return!p(a)?
!1:c.sounds[a].resume()};this.resumeAll=function(){var a;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].resume()};this.togglePause=function(a){return!p(a)?!1:c.sounds[a].togglePause()};this.setPan=function(a,d){return!p(a)?!1:c.sounds[a].setPan(d)};this.setVolume=function(a,d){return!p(a)?!1:c.sounds[a].setVolume(d)};this.mute=function(a){var d=0;"string"!==typeof a&&(a=null);if(a)return!p(a)?!1:c.sounds[a].mute();for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].mute();return c.muted=
!0};this.muteAll=function(){c.mute()};this.unmute=function(a){"string"!==typeof a&&(a=null);if(a)return!p(a)?!1:c.sounds[a].unmute();for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(a){return!p(a)?!1:c.sounds[a].toggleMute()};this.getMemoryUse=function(){var a=0;h&&8!==j&&(a=parseInt(h._getMemoryUse(),10));return a};this.disable=function(a){var d;"undefined"===typeof a&&(a=!1);if(v)return!1;v=!0;
for(d=c.soundIDs.length-1;0<=d;d--)Ba(c.sounds[c.soundIDs[d]]);K(a);m.remove(g,"load",B);return!0};this.canPlayMIME=function(a){var d;c.hasHTML5&&(d=N({type:a}));return!t||d?d:a&&c.ok()?!!(8<j&&a.match(Na)||a.match(c.mimePattern)):null};this.canPlayURL=function(a){var d;c.hasHTML5&&(d=N({url:a}));return!t||d?d:a&&c.ok()?!!a.match(c.filePattern):null};this.canPlayLink=function(a){return"undefined"!==typeof a.type&&a.type&&c.canPlayMIME(a.type)?!0:c.canPlayURL(a.href)};this.getSoundById=function(a){if(!a)throw Error("soundManager.getSoundById(): sID is null/undefined");
return c.sounds[a]};this.onready=function(a,c){if(a&&a instanceof Function)return c||(c=g),ha("onready",a,c),A(),!0;throw E("needFunction","onready");};this.ontimeout=function(a,c){if(a&&a instanceof Function)return c||(c=g),ha("ontimeout",a,c),A({type:"ontimeout"}),!0;throw E("needFunction","ontimeout");};this._wD=this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=function(){var a,d;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].destruct();try{if(x)na=h.innerHTML;
L=h.parentNode.removeChild(h)}catch(e){}na=L=t=null;c.enabled=ka=o=Y=qa=I=J=v=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};h=null;for(a in q)if(q.hasOwnProperty(a))for(d=q[a].length-1;0<=d;d--)q[a][d].fired=!1;g.setTimeout(c.beginDelayedInit,20)};this.getMoviePercent=function(){return h&&"undefined"!==typeof h.PercentLoaded?h.PercentLoaded():null};this.beginDelayedInit=function(){ga=!0;C();setTimeout(function(){if(qa)return!1;U();T();return qa=!0},20);S()};this.destruct=function(){c.disable(!0)};ya=function(a){var d,
e,b=this,f,i,Pa,g,k,m,l=!1,n=[],o=0,r,t,q=null;d=null;e=null;this.sID=a.id;this.url=a.url;this._iO=this.instanceOptions=this.options=s(a);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(a){var c=null;if("undefined"!==typeof a)b._iO=s(a,b.options),b.instanceOptions=b._iO;else if(a=b.options,b._iO=a,b.instanceOptions=b._iO,q&&q!==b.url)b._iO.url=b.url,b.url=null;if(!b._iO.url)b._iO.url=b.url;b._iO.url=$(b._iO.url);
if(b._iO.url===b.url&&0!==b.readyState&&2!==b.readyState)return 3===b.readyState&&b._iO.onload&&b._iO.onload.apply(b,[!!b.duration]),b;a=b._iO;q=b.url;b.loaded=!1;b.readyState=1;b.playState=0;if(aa(a)){if(c=b._setup_html5(a),!c._called_load)b._html5_canplay=!1,b._a.autobuffer="auto",b._a.preload="auto",c.load(),c._called_load=!0,a.autoPlay&&b.play()}else try{b.isHTML5=!1,b._iO=X(W(a)),a=b._iO,8===j?h._load(b.sID,a.url,a.stream,a.autoPlay,a.whileloading?1:0,a.loops||1,a.usePolicyFile):h._load(b.sID,
a.url,!!a.stream,!!a.autoPlay,a.loops||1,!!a.autoLoad,a.usePolicyFile)}catch(d){D({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}return b};this.unload=function(){0!==b.readyState&&(b.isHTML5?(g(),b._a&&(b._a.pause(),ra(b._a))):8===j?h._unload(b.sID,"about:blank"):h._unload(b.sID),f());return b};this.destruct=function(a){if(b.isHTML5){if(g(),b._a)b._a.pause(),ra(b._a),z||Pa(),b._a._t=null,b._a=null}else b._iO.onfailure=null,h._destroySound(b.sID);a||c.destroySound(b.sID,!0)};this.start=this.play=function(a,
c){var d,c=void 0===c?!0:c;a||(a={});b._iO=s(a,b._iO);b._iO=s(b._iO,b.options);b._iO.url=$(b._iO.url);b.instanceOptions=b._iO;if(b._iO.serverURL&&!b.connected)return b.getAutoPlay()||b.setAutoPlay(!0),b;aa(b._iO)&&(b._setup_html5(b._iO),k());if(1===b.playState&&!b.paused&&(d=b._iO.multiShot,!d))return b;if(!b.loaded)if(0===b.readyState){if(!b.isHTML5)b._iO.autoPlay=!0;b.load(b._iO)}else if(2===b.readyState)return b;if(!b.isHTML5&&9===j&&0<b.position&&b.position===b.duration)a.position=0;if(b.paused&&
b.position&&0<b.position)b.resume();else{b._iO=s(a,b._iO);if(null!==b._iO.from&&null!==b._iO.to&&0===b.instanceCount&&0===b.playState&&!b._iO.serverURL){d=function(){b._iO=s(a,b._iO);b.play(b._iO)};if(b.isHTML5&&!b._html5_canplay)return b.load({_oncanplay:d}),!1;if(!b.isHTML5&&!b.loaded&&(!b.readyState||2!==b.readyState))return b.load({onload:d}),!1;b._iO=t()}(!b.instanceCount||b._iO.multiShotEvents||!b.isHTML5&&8<j&&!b.getAutoPlay())&&b.instanceCount++;0===b.playState&&b._iO.onposition&&m(b);b.playState=
1;b.paused=!1;b.position="undefined"!==typeof b._iO.position&&!isNaN(b._iO.position)?b._iO.position:0;if(!b.isHTML5)b._iO=X(W(b._iO));b._iO.onplay&&c&&(b._iO.onplay.apply(b),l=!0);b.setVolume(b._iO.volume,!0);b.setPan(b._iO.pan,!0);b.isHTML5?(k(),d=b._setup_html5(),b.setPosition(b._iO.position),d.play()):h._start(b.sID,b._iO.loops||1,9===j?b._iO.position:b._iO.position/1E3)}return b};this.stop=function(a){var c=b._iO;if(1===b.playState){b._onbufferchange(0);b._resetOnPosition(0);b.paused=!1;if(!b.isHTML5)b.playState=
0;r();c.to&&b.clearOnPosition(c.to);if(b.isHTML5){if(b._a)a=b.position,b.setPosition(0),b.position=a,b._a.pause(),b.playState=0,b._onTimer(),g()}else h._stop(b.sID,a),c.serverURL&&b.unload();b.instanceCount=0;b._iO={};c.onstop&&c.onstop.apply(b)}return b};this.setAutoPlay=function(a){b._iO.autoPlay=a;b.isHTML5||(h._setAutoPlay(b.sID,a),a&&!b.instanceCount&&1===b.readyState&&b.instanceCount++)};this.getAutoPlay=function(){return b._iO.autoPlay};this.setPosition=function(a){void 0===a&&(a=0);var c=
b.isHTML5?Math.max(a,0):Math.min(b.duration||b._iO.duration,Math.max(a,0));b.position=c;a=b.position/1E3;b._resetOnPosition(b.position);b._iO.position=c;if(b.isHTML5){if(b._a&&b._html5_canplay&&b._a.currentTime!==a)try{b._a.currentTime=a,(0===b.playState||b.paused)&&b._a.pause()}catch(d){}}else a=9===j?b.position:a,b.readyState&&2!==b.readyState&&h._setPosition(b.sID,a,b.paused||!b.playState);b.isHTML5&&b.paused&&b._onTimer(!0);return b};this.pause=function(a){if(b.paused||0===b.playState&&1!==b.readyState)return b;
b.paused=!0;b.isHTML5?(b._setup_html5().pause(),g()):(a||void 0===a)&&h._pause(b.sID);b._iO.onpause&&b._iO.onpause.apply(b);return b};this.resume=function(){var a=b._iO;if(!b.paused)return b;b.paused=!1;b.playState=1;b.isHTML5?(b._setup_html5().play(),k()):(a.isMovieStar&&!a.serverURL&&b.setPosition(b.position),h._pause(b.sID));!l&&a.onplay?(a.onplay.apply(b),l=!0):a.onresume&&a.onresume.apply(b);return b};this.togglePause=function(){if(0===b.playState)return b.play({position:9===j&&!b.isHTML5?b.position:
b.position/1E3}),b;b.paused?b.resume():b.pause();return b};this.setPan=function(a,c){"undefined"===typeof a&&(a=0);"undefined"===typeof c&&(c=!1);b.isHTML5||h._setPan(b.sID,a);b._iO.pan=a;if(!c)b.pan=a,b.options.pan=a;return b};this.setVolume=function(a,d){"undefined"===typeof a&&(a=100);"undefined"===typeof d&&(d=!1);if(b.isHTML5){if(b._a)b._a.volume=Math.max(0,Math.min(1,a/100))}else h._setVolume(b.sID,c.muted&&!b.muted||b.muted?0:a);b._iO.volume=a;if(!d)b.volume=a,b.options.volume=a;return b};
this.mute=function(){b.muted=!0;if(b.isHTML5){if(b._a)b._a.muted=!0}else h._setVolume(b.sID,0);return b};this.unmute=function(){b.muted=!1;var a="undefined"!==typeof b._iO.volume;if(b.isHTML5){if(b._a)b._a.muted=!1}else h._setVolume(b.sID,a?b._iO.volume:b.options.volume);return b};this.toggleMute=function(){return b.muted?b.unmute():b.mute()};this.onposition=this.onPosition=function(a,c,d){n.push({position:parseInt(a,10),method:c,scope:"undefined"!==typeof d?d:b,fired:!1});return b};this.clearOnPosition=
function(b,a){var c,b=parseInt(b,10);if(isNaN(b))return!1;for(c=0;c<n.length;c++)if(b===n[c].position&&(!a||a===n[c].method))n[c].fired&&o--,n.splice(c,1)};this._processOnPosition=function(){var a,c;a=n.length;if(!a||!b.playState||o>=a)return!1;for(a-=1;0<=a;a--)if(c=n[a],!c.fired&&b.position>=c.position)c.fired=!0,o++,c.method.apply(c.scope,[c.position]);return!0};this._resetOnPosition=function(b){var a,c;a=n.length;if(!a)return!1;for(a-=1;0<=a;a--)if(c=n[a],c.fired&&b<=c.position)c.fired=!1,o--;
return!0};t=function(){var a=b._iO,c=a.from,d=a.to,f,e;e=function(){b.clearOnPosition(d,e);b.stop()};f=function(){if(null!==d&&!isNaN(d))b.onPosition(d,e)};if(null!==c&&!isNaN(c))a.position=c,a.multiShot=!1,f();return a};m=function(){var a,c=b._iO.onposition;if(c)for(a in c)if(c.hasOwnProperty(a))b.onPosition(parseInt(a,10),c[a])};r=function(){var a,c=b._iO.onposition;if(c)for(a in c)c.hasOwnProperty(a)&&b.clearOnPosition(parseInt(a,10))};k=function(){b.isHTML5&&Da(b)};g=function(){b.isHTML5&&Ea(b)};
f=function(){n=[];o=0;l=!1;b._hasTimer=null;b._a=null;b._html5_canplay=!1;b.bytesLoaded=null;b.bytesTotal=null;b.duration=b._iO&&b._iO.duration?b._iO.duration:null;b.durationEstimate=null;b.eqData=[];b.eqData.left=[];b.eqData.right=[];b.failures=0;b.isBuffering=!1;b.instanceOptions={};b.instanceCount=0;b.loaded=!1;b.metadata={};b.readyState=0;b.muted=!1;b.paused=!1;b.peakData={left:0,right:0};b.waveformData={left:[],right:[]};b.playState=0;b.position=null};f();this._onTimer=function(a){var c,f=!1,
i={};if(b._hasTimer||a){if(b._a&&(a||(0<b.playState||1===b.readyState)&&!b.paused)){c=b._get_html5_duration();if(c!==d)d=c,b.duration=c,f=!0;b.durationEstimate=b.duration;c=1E3*b._a.currentTime||0;c!==e&&(e=c,f=!0);(f||a)&&b._whileplaying(c,i,i,i,i);return f}return!1}};this._get_html5_duration=function(){var a=b._iO,c=b._a?1E3*b._a.duration:a?a.duration:void 0;return c&&!isNaN(c)&&Infinity!==c?c:a?a.duration:null};this._setup_html5=function(a){var a=s(b._iO,a),d=decodeURI,e=z?c._global_a:b._a,h=d(a.url),
g=e&&e._t?e._t.instanceOptions:null;if(e){if(e._t&&(!z&&h===d(q)||z&&g.url===a.url&&(!q||q===g.url)))return e;z&&e._t&&e._t.playState&&a.url!==g.url&&e._t.stop();f();e.src=a.url;q=b.url=a.url;e._called_load=!1}else{e=new Audio(a.url);e._called_load=!1;if(Sa)e._called_load=!0;if(z)c._global_a=e}b.isHTML5=!0;b._a=e;e._t=b;i();e.loop=1<a.loops?"loop":"";a.autoLoad||a.autoPlay?b.load():(e.autobuffer=!1,e.preload="none");e.loop=1<a.loops?"loop":"";return e};i=function(){if(b._a._added_events)return!1;
var a;b._a._added_events=!0;for(a in u)u.hasOwnProperty(a)&&b._a&&b._a.addEventListener(a,u[a],!1);return!0};Pa=function(){var a;b._a._added_events=!1;for(a in u)u.hasOwnProperty(a)&&b._a&&b._a.removeEventListener(a,u[a],!1)};this._onload=function(a){a=!!a;b.loaded=a;b.readyState=a?3:2;b._onbufferchange(0);b._iO.onload&&b._iO.onload.apply(b,[a]);return!0};this._onbufferchange=function(a){if(0===b.playState||a&&b.isBuffering||!a&&!b.isBuffering)return!1;b.isBuffering=1===a;b._iO.onbufferchange&&b._iO.onbufferchange.apply(b);
return!0};this._onsuspend=function(){b._iO.onsuspend&&b._iO.onsuspend.apply(b);return!0};this._onfailure=function(a,c,d){b.failures++;if(b._iO.onfailure&&1===b.failures)b._iO.onfailure(b,a,c,d)};this._onfinish=function(){var a=b._iO.onfinish;b._onbufferchange(0);b._resetOnPosition(0);if(b.instanceCount){b.instanceCount--;if(!b.instanceCount)r(),b.playState=0,b.paused=!1,b.instanceCount=0,b.instanceOptions={},b._iO={},g();(!b.instanceCount||b._iO.multiShotEvents)&&a&&a.apply(b)}};this._whileloading=
function(a,c,d,e){var f=b._iO;b.bytesLoaded=a;b.bytesTotal=c;b.duration=Math.floor(d);b.bufferLength=e;if(f.isMovieStar)b.durationEstimate=b.duration;else if(b.durationEstimate=f.duration?b.duration>f.duration?b.duration:f.duration:parseInt(b.bytesTotal/b.bytesLoaded*b.duration,10),void 0===b.durationEstimate)b.durationEstimate=b.duration;3!==b.readyState&&f.whileloading&&f.whileloading.apply(b)};this._whileplaying=function(a,c,d,e,f){var i=b._iO;if(isNaN(a)||null===a)return!1;b.position=a;b._processOnPosition();
if(!b.isHTML5&&8<j){if(i.usePeakData&&"undefined"!==typeof c&&c)b.peakData={left:c.leftPeak,right:c.rightPeak};if(i.useWaveformData&&"undefined"!==typeof d&&d)b.waveformData={left:d.split(","),right:e.split(",")};if(i.useEQData&&"undefined"!==typeof f&&f&&f.leftEQ&&(a=f.leftEQ.split(","),b.eqData=a,b.eqData.left=a,"undefined"!==typeof f.rightEQ&&f.rightEQ))b.eqData.right=f.rightEQ.split(",")}1===b.playState&&(!b.isHTML5&&8===j&&!b.position&&b.isBuffering&&b._onbufferchange(0),i.whileplaying&&i.whileplaying.apply(b));
return!0};this._onmetadata=function(a,c){var d={},f,e;for(f=0,e=a.length;f<e;f++)d[a[f]]=c[f];b.metadata=d;b._iO.onmetadata&&b._iO.onmetadata.apply(b)};this._onid3=function(a,c){var d=[],f,e;for(f=0,e=a.length;f<e;f++)d[a[f]]=c[f];b.id3=s(b.id3,d);b._iO.onid3&&b._iO.onid3.apply(b)};this._onconnect=function(a){a=1===a;if(b.connected=a)b.failures=0,p(b.sID)&&(b.getAutoPlay()?b.play(void 0,b.getAutoPlay()):b._iO.autoLoad&&b.load()),b._iO.onconnect&&b._iO.onconnect.apply(b,[a])};this._ondataerror=function(){0<
b.playState&&b._iO.ondataerror&&b._iO.ondataerror.apply(b)}};la=function(){return k.body||k._docElement||k.getElementsByTagName("div")[0]};Q=function(a){return k.getElementById(a)};s=function(a,d){var e={},b,f;for(b in a)a.hasOwnProperty(b)&&(e[b]=a[b]);b="undefined"===typeof d?c.defaultOptions:d;for(f in b)b.hasOwnProperty(f)&&"undefined"===typeof e[f]&&(e[f]=b[f]);return e};m=function(){function a(a){var a=Qa.call(a),b=a.length;e?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(a,
d){var g=a.shift(),h=[b[d]];if(e)g[h](a[0],a[1]);else g[h].apply(g,a)}var e=g.attachEvent,b={add:e?"attachEvent":"addEventListener",remove:e?"detachEvent":"removeEventListener"};return{add:function(){c(a(arguments),"add")},remove:function(){c(a(arguments),"remove")}}}();u={abort:l(function(){}),canplay:l(function(){var a=this._t,c;if(a._html5_canplay)return!0;a._html5_canplay=!0;a._onbufferchange(0);c=!isNaN(a.position)?a.position/1E3:null;if(a.position&&this.currentTime!==c)try{this.currentTime=
c}catch(e){}a._iO._oncanplay&&a._iO._oncanplay()}),load:l(function(){var a=this._t;a.loaded||(a._onbufferchange(0),a._whileloading(a.bytesTotal,a.bytesTotal,a._get_html5_duration()),a._onload(!0))}),ended:l(function(){this._t._onfinish()}),error:l(function(){this._t._onload(!1)}),loadeddata:l(function(){var a=this._t,c=a.bytesTotal||1;if(!a._loaded&&!O)a.duration=a._get_html5_duration(),a._whileloading(c,c,a._get_html5_duration()),a._onload(!0)}),loadedmetadata:l(function(){}),loadstart:l(function(){this._t._onbufferchange(1)}),
play:l(function(){this._t._onbufferchange(0)}),playing:l(function(){this._t._onbufferchange(0)}),progress:l(function(a){var c=this._t,e,b=0,f=a.target.buffered;e=a.loaded||0;var i=a.total||1;if(c.loaded)return!1;if(f&&f.length){for(e=f.length-1;0<=e;e--)b=f.end(e)-f.start(e);e=b/a.target.duration}isNaN(e)||(c._onbufferchange(0),c._whileloading(e,i,c._get_html5_duration()),e&&i&&e===i&&u.load.call(this,a))}),ratechange:l(function(){}),suspend:l(function(a){var c=this._t;u.progress.call(this,a);c._onsuspend()}),
stalled:l(function(){}),timeupdate:l(function(){this._t._onTimer()}),waiting:l(function(){this._t._onbufferchange(1)})};aa=function(a){return!a.serverURL&&(a.type?N({type:a.type}):N({url:a.url})||c.html5Only)};ra=function(a){if(a)a.src=Ra?"":"about:blank"};N=function(a){function d(a){return c.preferFlash&&r&&!c.ignoreFlash&&"undefined"!==typeof c.flash[a]&&c.flash[a]}if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=a.url||null,a=a.type||null,b=c.audioFormats,f;if(a&&"undefined"!==typeof c.html5[a])return c.html5[a]&&
!d(a);if(!w){w=[];for(f in b)b.hasOwnProperty(f)&&(w.push(f),b[f].related&&(w=w.concat(b[f].related)));w=RegExp("\\.("+w.join("|")+")(\\?.*)?$","i")}f=e?e.toLowerCase().match(w):null;if(!f||!f.length)if(a)e=a.indexOf(";"),f=(-1!==e?a.substr(0,e):a).substr(6);else return!1;else f=f[1];if(f&&"undefined"!==typeof c.html5[f])return c.html5[f]&&!d(f);a="audio/"+f;e=c.html5.canPlayType({type:a});return(c.html5[f]=e)&&c.html5[a]&&!d(a)};Ha=function(){function a(a){var b,e,f=!1;if(!d||"function"!==typeof d.canPlayType)return!1;
if(a instanceof Array){for(b=0,e=a.length;b<e&&!f;b++)if(c.html5[a[b]]||d.canPlayType(a[b]).match(c.html5Test))f=!0,c.html5[a[b]]=!0,c.flash[a[b]]=!(!c.preferFlash||!r||!a[b].match(La));return f}a=d&&"function"===typeof d.canPlayType?d.canPlayType(a):!1;return!(!a||!a.match(c.html5Test))}if(!c.useHTML5Audio||"undefined"===typeof Audio)return!1;var d="undefined"!==typeof Audio?Ua?new Audio(null):new Audio:null,e,b={},f,i;f=c.audioFormats;for(e in f)if(f.hasOwnProperty(e)&&(b[e]=a(f[e].type),b["audio/"+
e]=b[e],c.flash[e]=c.preferFlash&&!c.ignoreFlash&&e.match(La)?!0:!1,f[e]&&f[e].related))for(i=f[e].related.length-1;0<=i;i--)b["audio/"+f[e].related[i]]=b[e],c.html5[f[e].related[i]]=b[e],c.flash[f[e].related[i]]=b[e];b.canPlayType=d?a:null;c.html5=s(c.html5,b);return!0};E=function(){};W=function(a){if(8===j&&1<a.loops&&a.stream)a.stream=!1;return a};X=function(a){if(a&&!a.usePolicyFile&&(a.onid3||a.usePeakData||a.useWaveformData||a.useEQData))a.usePolicyFile=!0;return a};pa=function(){};fa=function(){return!1};
Ba=function(a){for(var c in a)a.hasOwnProperty(c)&&"function"===typeof a[c]&&(a[c]=fa)};V=function(a){"undefined"===typeof a&&(a=!1);(v||a)&&c.disable(a)};Ca=function(a){var d=null;if(a)if(a.match(/\.swf(\?.*)?$/i)){if(d=a.substr(a.toLowerCase().lastIndexOf(".swf?")+4))return a}else a.lastIndexOf("/")!==a.length-1&&(a+="/");a=(a&&-1!==a.lastIndexOf("/")?a.substr(0,a.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(a+="?ts="+(new Date).getTime());return a};ia=function(){j=parseInt(c.flashVersion,
10);if(8!==j&&9!==j)c.flashVersion=j=8;var a=c.debugMode||c.debugFlash?"_debug.swf":".swf";if(c.useHTML5Audio&&!c.html5Only&&c.audioFormats.mp4.required&&9>j)c.flashVersion=j=9;c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===j?" (AS3/Flash 9)":" (AS2/Flash 8)");8<j?(c.defaultOptions=s(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=s(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+Oa.join("|")+")(\\?.*)?$","i"),c.features.movieStar=
!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==j?"flash9":"flash8"];c.movieURL=(8===j?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",a);c.features.peakData=c.features.waveformData=c.features.eqData=8<j};Aa=function(a,c){if(!h)return!1;h._setPolling(a,c)};ma=function(){if(c.debugURLParam.test(ea))c.debugMode=!0};p=this.getSoundById;F=function(){var a=[];c.debugMode&&a.push("sm2_debug");c.debugFlash&&a.push("flash_debug");c.useHighPerformance&&a.push("high_performance");
return a.join(" ")};oa=function(){E("fbHandler");var a=c.getMoviePercent(),d={type:"FLASHBLOCK"};if(c.html5Only)return!1;if(c.ok()){if(c.oMC)c.oMC.className=[F(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")}else{if(t)c.oMC.className=F()+" movieContainer "+(null===a?"swf_timedout":"swf_error");c.didFlashBlock=!0;A({type:"ontimeout",ignoreInit:!0,error:d});D(d)}};ha=function(a,c,e){"undefined"===typeof q[a]&&(q[a]=[]);q[a].push({method:c,scope:e||null,fired:!1})};A=
function(a){a||(a={type:"onready"});if(!o&&a&&!a.ignoreInit||"ontimeout"===a.type&&c.ok())return!1;var d={success:a&&a.ignoreInit?c.ok():!v},e=a&&a.type?q[a.type]||[]:[],b=[],f,d=[d],i=t&&c.useFlashBlock&&!c.ok();if(a.error)d[0].error=a.error;for(a=0,f=e.length;a<f;a++)!0!==e[a].fired&&b.push(e[a]);if(b.length)for(a=0,f=b.length;a<f;a++)if(b[a].scope?b[a].method.apply(b[a].scope,d):b[a].method.apply(this,d),!i)b[a].fired=!0;return!0};B=function(){g.setTimeout(function(){c.useFlashBlock&&oa();A();
c.onload instanceof Function&&c.onload.apply(g);c.waitForWindowLoad&&m.add(g,"load",B)},1)};ba=function(){if(void 0!==r)return r;var a=!1,c=navigator,e=c.plugins,b,f=g.ActiveXObject;if(e&&e.length)(c=c.mimeTypes)&&c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description&&(a=!0);else if("undefined"!==typeof f){try{b=new f("ShockwaveFlash.ShockwaveFlash")}catch(i){}a=!!b}return r=a};Ga=function(){var a,d;if(ta&&
n.match(/os (1|2|3_0|3_1)/i)){c.hasHTML5=!1;c.html5Only=!0;if(c.oMC)c.oMC.style.display="none";return!1}if(c.useHTML5Audio){if(!c.html5||!c.html5.canPlayType)return c.hasHTML5=!1,!0;c.hasHTML5=!0;if(va&&ba())return!0}else return!0;for(d in c.audioFormats)if(c.audioFormats.hasOwnProperty(d)&&(c.audioFormats[d].required&&!c.html5.canPlayType(c.audioFormats[d].type)||c.flash[d]||c.flash[c.audioFormats[d].type]))a=!0;c.ignoreFlash&&(a=!1);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!a;return!c.html5Only};
$=function(a){var d,e,b=0;if(a instanceof Array){for(d=0,e=a.length;d<e;d++)if(a[d]instanceof Object){if(c.canPlayMIME(a[d].type)){b=d;break}}else if(c.canPlayURL(a[d])){b=d;break}if(a[b].url)a[b]=a[b].url;return a[b]}return a};Da=function(a){if(!a._hasTimer)a._hasTimer=!0,!ua&&c.html5PollingInterval&&(null===M&&0===Z&&(M=H.setInterval(Fa,c.html5PollingInterval)),Z++)};Ea=function(a){if(a._hasTimer)a._hasTimer=!1,!ua&&c.html5PollingInterval&&Z--};Fa=function(){var a;if(null!==M&&!Z)return H.clearInterval(M),
M=null,!1;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].isHTML5&&c.sounds[c.soundIDs[a]]._hasTimer&&c.sounds[c.soundIDs[a]]._onTimer()};D=function(a){a="undefined"!==typeof a?a:{};c.onerror instanceof Function&&c.onerror.apply(g,[{type:"undefined"!==typeof a.type?a.type:null}]);"undefined"!==typeof a.fatal&&a.fatal&&c.disable()};Ia=function(){if(!va||!ba())return!1;var a=c.audioFormats,d,e;for(e in a)if(a.hasOwnProperty(e)&&("mp3"===e||"mp4"===e))if(c.html5[e]=!1,a[e]&&a[e].related)for(d=
a[e].related.length-1;0<=d;d--)c.html5[a[e].related[d]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(c.swfLoaded)return!1;(new Date).getTime();c.swfLoaded=!0;G=!1;va&&Ia();x?setTimeout(R,100):R()};U=function(a,d){function e(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(I&&J)return!1;if(c.html5Only)return ia(),c.oMC=Q(c.movieID),R(),J=I=!0,!1;var b=d||c.url,f=c.altURL||b,i;i=la();var g,h,j=F(),l,m=null,m=(m=k.getElementsByTagName("html")[0])&&m.dir&&m.dir.match(/rtl/i),
a="undefined"===typeof a?c.id:a;ia();c.url=Ca(xa?b:f);d=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(n.match(/msie 8/i)||!x&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))c.wmode=null;i={name:a,id:a,src:d,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:Ma+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};
if(c.debugFlash)i.FlashVars="debug=1";c.wmode||delete i.wmode;if(x)b=k.createElement("div"),h=['<object id="'+a+'" data="'+d+'" type="'+i.type+'" title="'+i.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+Ma+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="'+i.width+'" height="'+i.height+'">',e("movie",d),e("AllowScriptAccess",c.allowScriptAccess),e("quality",i.quality),c.wmode?e("wmode",c.wmode):"",e("bgcolor",c.bgColor),e("hasPriority",
"true"),c.debugFlash?e("FlashVars",i.FlashVars):"","</object>"].join("");else for(g in b=k.createElement("embed"),i)i.hasOwnProperty(g)&&b.setAttribute(g,i[g]);ma();j=F();if(i=la())if(c.oMC=Q(c.movieID)||k.createElement("div"),c.oMC.id){l=c.oMC.className;c.oMC.className=(l?l+" ":"movieContainer")+(j?" "+j:"");c.oMC.appendChild(b);if(x)g=c.oMC.appendChild(k.createElement("div")),g.className="sm2-object-box",g.innerHTML=h;J=!0}else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+j;g=j=null;if(!c.useFlashBlock)if(c.useHighPerformance)j=
{position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else if(j={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},m)j.left=Math.abs(parseInt(j.left,10))+"px";if(Ta)c.oMC.style.zIndex=1E4;if(!c.debugFlash)for(l in j)j.hasOwnProperty(l)&&(c.oMC.style[l]=j[l]);try{x||c.oMC.appendChild(b);i.appendChild(c.oMC);if(x)g=c.oMC.appendChild(k.createElement("div")),g.className="sm2-object-box",g.innerHTML=h;J=!0}catch(o){throw Error(E("domError")+" \n"+
o.toString());}}return I=!0};T=function(){if(c.html5Only)return U(),!1;if(h)return!1;h=c.getMovie(c.id);if(!h)L?(x?c.oMC.innerHTML=na:c.oMC.appendChild(L),L=null,I=!0):U(c.id,c.url),h=c.getMovie(c.id);c.oninitmovie instanceof Function&&setTimeout(c.oninitmovie,1);return!0};S=function(){setTimeout(za,1E3)};za=function(){if(Y)return!1;Y=!0;m.remove(g,"load",S);if(G&&!wa)return!1;var a;o||(a=c.getMoviePercent());setTimeout(function(){a=c.getMoviePercent();!o&&Ka&&(null===a?c.useFlashBlock||0===c.flashLoadTimeout?
c.useFlashBlock&&oa():V(!0):0!==c.flashLoadTimeout&&V(!0))},c.flashLoadTimeout)};y=function(){function a(){m.remove(g,"focus",y);m.remove(g,"load",y)}if(wa||!G)return a(),!0;wa=Ka=!0;O&&G&&m.remove(g,"mousemove",y);Y=!1;a();return!0};Ja=function(){var a,d=[];if(c.useHTML5Audio&&c.hasHTML5)for(a in c.audioFormats)c.audioFormats.hasOwnProperty(a)&&d.push(a+": "+c.html5[a]+(!c.html5[a]&&r&&c.flash[a]?" (using flash)":c.preferFlash&&c.flash[a]&&r?" (preferring flash)":!c.html5[a]?" ("+(c.audioFormats[a].required?
"required, ":"")+"and no flash support)":""))};K=function(a){if(o)return!1;if(c.html5Only)return o=!0,B(),!0;var d;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())o=!0,v&&(d={type:!r&&t?"NO_FLASH":"INIT_TIMEOUT"});if(v||a){if(c.useFlashBlock&&c.oMC)c.oMC.className=F()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error");A({type:"ontimeout",error:d});D(d);return!1}if(c.waitForWindowLoad&&!ga)return m.add(g,"load",B),!1;B();return!0};R=function(){if(o)return!1;if(c.html5Only){if(!o)m.remove(g,
"load",c.beginDelayedInit),c.enabled=!0,K();return!0}T();try{h._externalInterfaceTest(!1),Aa(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||h._disableDebug(),c.enabled=!0,c.html5Only||m.add(g,"unload",fa)}catch(a){return D({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),V(!0),K(),!1}K();m.remove(g,"load",c.beginDelayedInit);return!0};C=function(){if(ka)return!1;ka=!0;ma();if(!r&&c.hasHTML5)c.useHTML5Audio=!0,c.preferFlash=!1;Ha();c.html5.usingFlash=Ga();t=c.html5.usingFlash;Ja();if(!r&&
t)c.flashLoadTimeout=1;k.removeEventListener&&k.removeEventListener("DOMContentLoaded",C,!1);T();return!0};sa=function(){"complete"===k.readyState&&(C(),k.detachEvent("onreadystatechange",sa));return!0};ja=function(){ga=!0;m.remove(g,"load",ja)};ba();m.add(g,"focus",y);m.add(g,"load",y);m.add(g,"load",S);m.add(g,"load",ja);O&&G&&m.add(g,"mousemove",y);k.addEventListener?k.addEventListener("DOMContentLoaded",C,!1):k.attachEvent?k.attachEvent("onreadystatechange",sa):D({type:"NO_DOM2_EVENTS",fatal:!0});
"complete"===k.readyState&&setTimeout(C,100)}var ca=null;if("undefined"===typeof SM2_DEFER||!SM2_DEFER)ca=new P;H.SoundManager=P;H.soundManager=ca})(window);