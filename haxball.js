// sha1 function
let shaFunction = document.createElement("script");
shaFunction.text = `!function(){"use strict";function t(t){t?(f[0]=f[16]=f[1]=f[2]=f[3]=f[4]=f[5]=f[6]=f[7]=f[8]=f[9]=f[10]=f[11]=f[12]=f[13]=f[14]=f[15]=0,this.blocks=f):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var h="object"==typeof window?window:{},s=!h.JS_SHA1_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;s&&(h=global);var i=!h.JS_SHA1_NO_COMMON_JS&&"object"==typeof module&&module.exports,e="function"==typeof define&&define.amd,r="0123456789abcdef".split(""),o=[-2147483648,8388608,32768,128],n=[24,16,8,0],a=["hex","array","digest","arrayBuffer"],f=[],u=function(h){return function(s){return new t(!0).update(s)[h]()}},c=function(){var h=u("hex");s&&(h=p(h)),h.create=function(){return new t},h.update=function(t){return h.create().update(t)};for(var i=0;i<a.length;++i){var e=a[i];h[e]=u(e)}return h},p=function(t){var h=eval("require('crypto')"),s=eval("require('buffer').Buffer"),i=function(i){if("string"==typeof i)return h.createHash("sha1").update(i,"utf8").digest("hex");if(i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(void 0===i.length)return t(i);return h.createHash("sha1").update(new s(i)).digest("hex")};return i};t.prototype.update=function(t){if(!this.finalized){var s="string"!=typeof t;s&&t.constructor===h.ArrayBuffer&&(t=new Uint8Array(t));for(var i,e,r=0,o=t.length||0,a=this.blocks;r<o;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),s)for(e=this.start;r<o&&e<64;++r)a[e>>2]|=t[r]<<n[3&e++];else for(e=this.start;r<o&&e<64;++r)(i=t.charCodeAt(r))<128?a[e>>2]|=i<<n[3&e++]:i<2048?(a[e>>2]|=(192|i>>6)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]):i<55296||i>=57344?(a[e>>2]|=(224|i>>12)<<n[3&e++],a[e>>2]|=(128|i>>6&63)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++r)),a[e>>2]|=(240|i>>18)<<n[3&e++],a[e>>2]|=(128|i>>12&63)<<n[3&e++],a[e>>2]|=(128|i>>6&63)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=a[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,h=this.lastByteIndex;t[16]=this.block,t[h>>2]|=o[3&h],this.block=t[16],h>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,h,s=this.h0,i=this.h1,e=this.h2,r=this.h3,o=this.h4,n=this.blocks;for(t=16;t<80;++t)h=n[t-3]^n[t-8]^n[t-14]^n[t-16],n[t]=h<<1|h>>>31;for(t=0;t<20;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i&e|~i&r)+o+1518500249+n[t]<<0)<<5|o>>>27)+(s&(i=i<<30|i>>>2)|~s&e)+r+1518500249+n[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|~o&i)+e+1518500249+n[t+2]<<0)<<5|e>>>27)+(r&(o=o<<30|o>>>2)|~r&s)+i+1518500249+n[t+3]<<0)<<5|i>>>27)+(e&(r=r<<30|r>>>2)|~e&o)+s+1518500249+n[t+4]<<0,e=e<<30|e>>>2;for(;t<40;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i^e^r)+o+1859775393+n[t]<<0)<<5|o>>>27)+(s^(i=i<<30|i>>>2)^e)+r+1859775393+n[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^i)+e+1859775393+n[t+2]<<0)<<5|e>>>27)+(r^(o=o<<30|o>>>2)^s)+i+1859775393+n[t+3]<<0)<<5|i>>>27)+(e^(r=r<<30|r>>>2)^o)+s+1859775393+n[t+4]<<0,e=e<<30|e>>>2;for(;t<60;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i&e|i&r|e&r)+o-1894007588+n[t]<<0)<<5|o>>>27)+(s&(i=i<<30|i>>>2)|s&e|i&e)+r-1894007588+n[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|o&i|s&i)+e-1894007588+n[t+2]<<0)<<5|e>>>27)+(r&(o=o<<30|o>>>2)|r&s|o&s)+i-1894007588+n[t+3]<<0)<<5|i>>>27)+(e&(r=r<<30|r>>>2)|e&o|r&o)+s-1894007588+n[t+4]<<0,e=e<<30|e>>>2;for(;t<80;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i^e^r)+o-899497514+n[t]<<0)<<5|o>>>27)+(s^(i=i<<30|i>>>2)^e)+r-899497514+n[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^i)+e-899497514+n[t+2]<<0)<<5|e>>>27)+(r^(o=o<<30|o>>>2)^s)+i-899497514+n[t+3]<<0)<<5|i>>>27)+(e^(r=r<<30|r>>>2)^o)+s-899497514+n[t+4]<<0,e=e<<30|e>>>2;this.h0=this.h0+s<<0,this.h1=this.h1+i<<0,this.h2=this.h2+e<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,i=this.h3,e=this.h4;return r[t>>28&15]+r[t>>24&15]+r[t>>20&15]+r[t>>16&15]+r[t>>12&15]+r[t>>8&15]+r[t>>4&15]+r[15&t]+r[h>>28&15]+r[h>>24&15]+r[h>>20&15]+r[h>>16&15]+r[h>>12&15]+r[h>>8&15]+r[h>>4&15]+r[15&h]+r[s>>28&15]+r[s>>24&15]+r[s>>20&15]+r[s>>16&15]+r[s>>12&15]+r[s>>8&15]+r[s>>4&15]+r[15&s]+r[i>>28&15]+r[i>>24&15]+r[i>>20&15]+r[i>>16&15]+r[i>>12&15]+r[i>>8&15]+r[i>>4&15]+r[15&i]+r[e>>28&15]+r[e>>24&15]+r[e>>20&15]+r[e>>16&15]+r[e>>12&15]+r[e>>8&15]+r[e>>4&15]+r[15&e]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,i=this.h3,e=this.h4;return[t>>24&255,t>>16&255,t>>8&255,255&t,h>>24&255,h>>16&255,h>>8&255,255&h,s>>24&255,s>>16&255,s>>8&255,255&s,i>>24&255,i>>16&255,i>>8&255,255&i,e>>24&255,e>>16&255,e>>8&255,255&e]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(20),h=new DataView(t);return h.setUint32(0,this.h0),h.setUint32(4,this.h1),h.setUint32(8,this.h2),h.setUint32(12,this.h3),h.setUint32(16,this.h4),t};var y=c();i?module.exports=y:(h.sha1=y,e&&define(function(){return y}))}();`;
document.head.appendChild(shaFunction);

// ------------------------


const game = {
  roomName: "Power Game 2v2 3v3",
  maxPlayers: 9,
  playerName: "Arbiter",
  public : true,
  geo: {
    code: "PL",
    lat: 52,
    lon: 19
  }
};

const config = {
  showGoalInfo: true,
  chatEnabled: true,
  muteNewPlayers: false,
  adminPassword: "1c703sd543ghgd7823hd8jhgjsdc01d98", //superadmin password sha1-encrypted, use !slogin
  oneTabOnly: true
};

const prefixes = {
  message: ">>>>> ",
  cmd: "!"
};

let superAdmins = [];
let mutedPlayers = [];
let noCmdPlayers = [];
let afkPlayers = [];

// use !alogin to authenticate using credentials given below
let adminAccess = {
  "nickname": "encrypted_password",
};

let authenticatedAdmins = [];
let playerKeys = {};

const maps = {
  powerClassic: `{"name":"Joe's power classic night edition","width":420,"height":200,"spawnDistance":170,"bg":{"type":"hockey","height":0,"width":0,"cornerRadius":0,"kickOffRadius":0},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.12,"kickingDamping":0.96,"kickStrength":11},"vertexes":[{"x":370,"y":-170,"trait":"ballAreaVertical"},{"x":370,"y":-64,"trait":"ballAreaVertical"},{"x":370,"y":64,"trait":"ballAreaVertical"},{"x":370,"y":170,"trait":"ballAreaHorizontal"},{"x":-370,"y":64,"trait":"ballAreaVertical"},{"x":-370,"y":170,"trait":"ballAreaHorizontal"},{"x":-370,"y":-170,"trait":"ballAreaVertical"},{"x":-370,"y":-64,"trait":"ballAreaVertical"},{"x":-400,"y":-54,"trait":"goalNet"},{"x":-400,"y":54,"trait":"goalNet"},{"x":400,"y":-54,"trait":"goalNet"},{"x":400,"y":54,"cMask":["ball"]},{"x":371,"y":-170,"bCoef":0,"cMask":["ball"],"trait":"ballAreaVertical"},{"x":371,"y":-64,"bCoef":0,"cMask":["ball"],"trait":"ballAreaVertical"},{"x":371,"y":170,"bCoef":0,"cMask":["ball"],"trait":"ballAreaVertical"},{"x":371,"y":64,"bCoef":0,"cMask":["ball"],"trait":"ballAreaVertical"},{"x":-371,"y":-170,"bCoef":1,"cMask":["ball"]},{"x":-371,"y":-64,"bCoef":1,"cMask":["ball"]},{"x":-371,"y":64,"bCoef":1,"cMask":["ball"]},{"x":-371,"y":170,"bCoef":1,"cMask":["ball"]},{"x":-371,"y":-171,"cMask":["ball"]},{"x":371,"y":-171,"cMask":["ball"]},{"x":-371,"y":171,"cMask":["ball"]},{"x":371,"y":171,"cMask":["ball"]},{"x":0,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":170,"trait":"kickOffBarrier"},{"x":0,"y":-170,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-383,"y":-170,"trait":"bugFix"},{"x":-383,"y":-64,"trait":"bugFix"},{"x":-383,"y":64,"trait":"bugFix"},{"x":-383,"y":170,"trait":"bugFix"},{"x":383,"y":-170,"trait":"bugFix"},{"x":383,"y":-64,"trait":"bugFix"},{"x":383,"y":64,"trait":"bugFix"},{"x":383,"y":170,"trait":"bugFix"}],"segments":[{"v0":0,"v1":1,"trait":"ballAreaVertical"},{"v0":2,"v1":3,"trait":"ballAreaVertical"},{"v0":4,"v1":5,"trait":"ballAreaVertical"},{"v0":6,"v1":7,"trait":"ballAreaVertical"},{"v0":12,"v1":13,"bCoef":0,"trait":"ballAreaVertical"},{"v0":14,"v1":15,"bCoef":0,"trait":"ballAreaVertical"},{"v0":16,"v1":17,"bCoef":0,"trait":"ballAreaVertical"},{"v0":18,"v1":19,"bCoef":0,"trait":"ballAreaVertical"},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":6,"v1":0,"trait":"ballAreaHorizontal"},{"v0":5,"v1":3,"trait":"ballAreaHorizontal"},{"v0":20,"v1":21,"trait":"ballAreaHorizontal"},{"v0":22,"v1":23,"trait":"ballAreaHorizontal"},{"v0":1,"v1":2,"trait":"goalLine"},{"v0":7,"v1":4,"trait":"goalLine"},{"v0":13,"v1":15,"trait":"goalLine"},{"v0":17,"v1":18,"trait":"goalLine"},{"v0":7,"v1":8,"trait":"goalNet"},{"v0":8,"v1":9,"trait":"goalNet"},{"v0":9,"v1":4,"trait":"goalNet"},{"v0":1,"v1":10,"trait":"goalNet"},{"v0":10,"v1":11,"trait":"goalNet"},{"v0":11,"v1":2,"trait":"goalNet"},{"v0":27,"v1":24,"color":"ffffff","trait":"line"},{"v0":27,"v1":24,"curve":180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":27,"v1":24,"curve":-180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":25,"v1":28,"vis":false,"trait":"kickOffBarrier"},{"v0":26,"v1":29,"vis":false,"trait":"kickOffBarrier"},{"v0":30,"v1":31,"trait":"bugFix"},{"v0":32,"v1":33,"trait":"bugFix"},{"v0":34,"v1":35,"trait":"bugFix"},{"v0":36,"v1":37,"trait":"bugFix"}],"goals":[{"p0":[-382,-64],"p1":[-382,64],"team":"red"},{"p0":[382,-64],"p1":[382,64],"team":"blue"}],"discs":[{"pos":[-370,-64],"trait":"goalPost"},{"pos":[-370,64],"trait":"goalPost"},{"pos":[370,-64],"trait":"goalPost"},{"pos":[370,64],"trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-200},{"normal":[0,-1],"dist":-200},{"normal":[-1,0],"dist":-420},{"normal":[1,0],"dist":-420},{"normal":[0,1],"dist":-170,"bCoef":1,"cMask":["ball"]},{"normal":[0,-1],"dist":-170,"bCoef":1,"cMask":["ball"]}],"traits":{"ballAreaVertical":{"vis":true,"color":"C7C730","bCoef":1,"cMask":["ball"]},"ballAreaHorizontal":{"vis":true,"color":"363333","bCoef":0,"cMask":["ball"]},"goalPost":{"radius":8,"color":"FFCCCC","invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"color":"363333","bCoef":0.1,"cMask":["ball"]},"goalLine":{"vis":true,"cMask":["wall"],"bCoef":0,"color":"ffffff"},"kickOffBarrier":{"vis":true,"color":"ffffff","bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":["wall"],"bCoef":0},"bugFix":{"vis":false,"cMask":["ball"],"bCoef":1}}}`,
  powerBig: `{"name":"Joe's power big night edition","width":600,"height":270,"spawnDistance":350,"bg":{"type":"hockey","height":0,"width":0,"cornerRadius":0,"kickOffRadius":0},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.12,"kickingDamping":0.96,"kickStrength":11},"vertexes":[{"x":-550,"y":240,"cMask":["ball"]},{"x":550,"y":240,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"cMask":["ball"]},{"x":-550,"y":-80,"cMask":["ball"],"trait":"ballArea","color":"363333"},{"x":-550,"y":80,"cMask":["ball"]},{"x":550,"y":-80,"cMask":["ball"],"pos":[550,-80]},{"x":550,"y":80,"cMask":["ball"]},{"x":0,"y":-240,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":240,"trait":"kickOffBarrier"},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":-580,"y":-70,"cMask":["ball"]},{"x":-580,"y":70,"cMask":["ball"]},{"x":580,"y":-70,"cMask":["ball"]},{"x":580,"y":70,"cMask":["ball"]},{"x":-551,"y":-241,"trait":"line"},{"x":551,"y":-241,"trait":"line"},{"x":-551,"y":241,"cMask":["ball"]},{"x":551,"y":241,"cMask":["ball"]},{"x":551,"y":-240,"cMask":["ball"]},{"x":551,"y":-80,"cMask":["ball"]},{"x":551,"y":80,"cMask":["ball"]},{"x":551,"y":240,"cMask":["ball"]},{"x":-551,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-551,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-551,"y":80,"cMask":["ball"]},{"x":-551,"y":240,"cMask":["ball"]},{"x":551,"y":-80,"cMask":["ball"]},{"x":551,"y":80,"cMask":["ball"]},{"x":-551,"y":-80,"cMask":["ball"]},{"x":-551,"y":80,"cMask":["ball"]},{"x":-563,"y":-240,"trait":"bugFix"},{"x":-563,"y":-80,"trait":"bugFix"},{"x":-563,"y":80,"trait":"bugFix"},{"x":-563,"y":240,"trait":"bugFix"},{"x":563,"y":80,"trait":"bugFix"},{"x":563,"y":240,"trait":"bugFix"},{"x":563,"y":-240,"trait":"bugFix"},{"x":563,"y":-80,"trait":"bugFix"}],"segments":[{"v0":2,"v1":4,"color":"C7C730","trait":"ballArea"},{"v0":0,"v1":5,"color":"C7C730","trait":"ballArea"},{"v0":3,"v1":6,"color":"C7C730","trait":"ballArea"},{"v0":1,"v1":7,"color":"C7C730","trait":"ballArea"},{"v0":22,"v1":23,"color":"C7C730","trait":"line"},{"v0":24,"v1":25,"color":"C7C730","trait":"line"},{"v0":26,"v1":27,"color":"C7C730","trait":"line"},{"v0":28,"v1":29,"color":"C7C730","trait":"line"},{"v0":6,"v1":7,"color":"ffffff","trait":"line"},{"v0":4,"v1":5,"color":"ffffff","trait":"line"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"color":"ffffff","trait":"line"},{"v0":8,"v1":12,"vis":false,"trait":"kickOffBarrier"},{"v0":11,"v1":13,"vis":false,"trait":"kickOffBarrier"},{"v0":0,"v1":1,"color":"363333","bCoef":0,"trait":"ballArea"},{"v0":2,"v1":3,"color":"363333","bCoef":0,"trait":"ballArea"},{"v0":18,"v1":19,"color":"363333","trait":"line"},{"v0":20,"v1":21,"color":"363333","trait":"line"},{"v0":4,"v1":14,"trait":"goalNet"},{"v0":5,"v1":15,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet"},{"v0":6,"v1":16,"trait":"goalNet"},{"v0":16,"v1":17,"trait":"goalNet"},{"v0":17,"v1":7,"trait":"goalNet"},{"v0":30,"v1":31,"color":"ffffff","trait":"line"},{"v0":32,"v1":33,"color":"ffffff","trait":"line"},{"v0":34,"v1":35,"trait":"bugFix"},{"v0":36,"v1":37,"trait":"bugFix"},{"v0":38,"v1":39,"trait":"bugFix"},{"v0":40,"v1":41,"trait":"bugFix"}],"goals":[{"p0":[-562,-80],"p1":[-562,80],"team":"red"},{"p0":[562,-80],"p1":[562,80],"team":"blue"}],"discs":[{"pos":[-550,-80],"trait":"goalPost"},{"pos":[-550,80],"trait":"goalPost"},{"pos":[550,-80],"trait":"goalPost"},{"pos":[550,80],"trait":"goalPost"}],"planes":[{"normal":[-1,0],"dist":-600},{"normal":[1,0],"dist":-600},{"normal":[0,1],"dist":-270},{"normal":[0,-1],"dist":-270},{"normal":[0,1],"dist":-240,"bCoef":1,"cMask":["ball"]},{"normal":[0,-1],"dist":-240,"bCoef":1,"cMask":["ball"]}],"traits":{"ballArea":{"vis":true,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"color":"FFCCCC","invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"color":"363333","bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":true,"color":"ffffff","bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":["wall"],"bCoef":0},"bugFix":{"vis":false,"cMask":["ball"],"bCoef":1}}}`
};

let ball = {
  kickedBy: {
    player: null,
    time: null,
  },
  touchedBy: {
    player: null,
    time: null
  },
  assistingPlayer: null
};

let cmdManager;
let stats = {};
let nextPauseAction = true;

const room = new HBInit(game);
let bans = {};

room.onPlayerBallKick = player => {
  updateAssistingPlayer(player);

  let time = Date.now();
  let kick = {time, player};
  ball.kickedBy = kick;
};

room.onTeamGoal = team => {
  let scorer;

  if (ball.kickedBy && ball.touchedBy) {
    if (ball.kickedBy.time > ball.touchedBy.time) {
      scorer = ball.kickedBy.player;
    } else {
      scorer = ball.touchedBy.player;
    }
  } else if (ball.kickedBy) {
    scorer = ball.kickedBy.player;
  } else if (ball.touchedBy) {
    scorer = ball.touchedBy.player;
  }

  if (scorer) {
    let ownGoal = scorer.team !== team;
    let assistOccured = ball.assistingPlayer && !ownGoal && ball.assistingPlayer.team === team && ball.assistingPlayer.id !== scorer.id;

    if (config.showGoalInfo) {
      let message = `Gola ${ownGoal ? "samobójczego" : ""} zdobył gracz ${scorer.name}`;
      if (assistOccured) {
        message += ` (${ball.assistingPlayer.name})`;
      }
      sendMessage(message);
    }

    const opposingTeam = room.getPlayerList().filter(p => p.team === 3 - scorer.team);
    if (opposingTeam.length > 0) {
      if (ownGoal) {
        incrementPlayerOwngoals(scorer);
      } else {
        incrementPlayerGoals(scorer);
      }

      if (assistOccured) {
        incrementPlayerAssists(ball.assistingPlayer);
      }
    }
  }

  ball.kickedBy = null;
  ball.touchedBy = null;
};

room.onPlayerChat = (player, message) => {
  message = message.replace(/^\s+/, '');
  if (message.startsWith(prefixes.cmd)) {
    if (!canPlayerInvokeCmd(player)) return false;

    let showMessage = parseCmd(player, message.substring(1));
    return showMessage && (!isPlayerMuted(player) && config.chatEnabled || isSuperAdmin(player));
  }

  if (!isPlayerMuted(player) && config.chatEnabled || isSuperAdmin(player)) {
    handleSmartCommand(player, message);
    return true;
  } else {
    return false;
  }
};

room.onPlayerKicked = (kickedPlayer, reason, ban, byPlayer) => {
  if (isSuperAdmin(kickedPlayer) || authenticatedAdmins.includes(kickedPlayer.id) && !isSuperAdmin(byPlayer)) {
    if (ban)
      room.clearBans();

    room.kickPlayer(byPlayer.id, "Tak się bawić nie będziemy", true);
  }

  let banInfo = {};
  banInfo.banned = kickedPlayer.name;
  banInfo.bannedId = kickedPlayer.id;
  banInfo.admin = byPlayer.name;
  banInfo.reason = reason;
  banInfo.isBan = ban;
  banInfo.time = new Date();

  if (!bans[byPlayer.id]) {
    bans[byPlayer.id] = [];
  }
  bans[byPlayer.id].unshift(banInfo);

  // Ban for not-authenicated admin who gives 5 bans during 5 minutes

  /*if (!authenticatedAdmins.includes(byPlayer.id) && !isSuperAdmin(byPlayer)) {
    let playerBans = bans[byPlayer.id].filter(ban => ban.isBan);

    if (playerBans.length >= 5) {
      let lastBan = playerBans[0];
      let banToCompare = playerBans[4];
      let dateDiff = lastBan.time - banToCompare.time;
      if (dateDiff <= 1000 * 60 * 5) {
        clearAllBans("Admina");
        room.kickPlayer(byPlayer.id, "żegnaj trollu", true);
      }
    }
  }*/
};

room.onPlayerAdminChange = (changedPlayer, byPlayer) => {
  if (!changedPlayer.admin && (isSuperAdmin(changedPlayer) || authenticatedAdmins.includes(changedPlayer.id) && !isSuperAdmin(byPlayer))) {
    if (byPlayer !== null && byPlayer.name !== game.playerName) {
      room.setPlayerAdmin(changedPlayer.id, true);
      room.setPlayerAdmin(byPlayer.id, false);

      sendMessage("Próba odebrania uprawnień adminowi wyższej rangi!");
    }
  }

  let regex = new RegExp("mrjoe", "i");
  if (regex.test(changedPlayer.name) && byPlayer && byPlayer.id !== 0) {
    room.setPlayerAdmin(changedPlayer.id, false);
    sendMessage("Nie dawaj admina nikomu o nicku mrJoe...");
  }
};

room.onStadiumChange = (stadiumName, byPlayer) => {
  if (byPlayer.id !== 0 && !isSuperAdmin(byPlayer)) {
    if (stadiumName === "Joe's power classic night edition") {
      room.setCustomStadium(maps.powerClassic);
    } else if (stadiumName === "Joe's power big night edition") {
      room.setCustomStadium(maps.powerBig);
    } else {
      room.setCustomStadium(maps.powerClassic);
      showMapCmds();
    }
  }
}

room.onPlayerJoin = player => {
  // updateAdmins();

  if (config.oneTabOnly) {
    let keys = Object.values(playerKeys);
    keys.forEach((item) => {
      if (item) {
        if (item[0] === player.conn || item[1] === player.auth) {
          room.kickPlayer(player.id);
        }
      }
    });
  }

  let bannedNicknames = ["ksus", "nektar", "seplox", "mrjoe", "stara zeusa", "ryszard"];

  let regex = new RegExp(bannedNicknames.join("|"), "i");
  if (regex.test(player.name)) {
    room.kickPlayer(player.id, "czarna lista", true);
  }

  playerKeys[player.id] = [player.conn, player.auth];

  if (config.muteNewPlayers) {
    mutePlayer(player);
  }

  if (!(player.name in stats)) {
    stats[player.name] = {
      goals: 0,
      assists: 0,
      owngoals: 0
    };
  }

  if (player.auth === "s3YVAm3G1yW4vHU08RWY9KUC4v1YsLgibt6cXdsKSGI") {
    room.setPlayerAdmin(player.id, true);
    setSuperAdmin(player);
  }
};

room.onPlayerLeave = player => {
  unsetPlayerAfk(player);
  unsetSuperAdmin(player);
  // updateAdmins();
  if (player.team !== 0 && room.getScores()) {
    let players = room.getPlayerList().filter(player => player.team === 0 && !isPlayerAfk(player));
    players = players.filter(player => player.id !== 0);
    if (players.length) {
      room.pauseGame(true);
      sendMessage("Gracz z boiska opuścił serwer. Są dostępni gracze na ławce.");
    }
  }

  playerKeys[player.id] = undefined;
};

room.onPlayerTeamChange = player => {
  if (player.id === 0) {
    room.setPlayerTeam(0, 0);
  }

  if (player.team !== 0 && isPlayerAfk(player)) {
    sendMessage(`Gracz ${player.name} jest AFK`);
    room.pauseGame(true);
  }
};

room.onGameTick = () => {
  let players = room.getPlayerList();
  let ballPosition = room.getBallPosition();
  let ballRadius = 10;
  let playerRadius = 15;
  let triggerDistance = ballRadius + playerRadius + 0.01;

  for (let player of players) {
    if (!player.position) continue;

    let distanceToBall = pointDistance(player.position, ballPosition);
    if (distanceToBall < triggerDistance) {
      updateAssistingPlayer(player);

      let time = Date.now();
      let touch = {time, player};
      ball.touchedBy = touch;
    }
  }
};

room.onGameStart = () => {
  ball.kickedBy = null;
  ball.touchedBy = null;
  ball.assistingPlayer = null;

  let players = room.getPlayerList().filter(player => player.team !== 0 && isPlayerAfk(player));
  if (players.length === 1) {
    sendMessage(`Gracz ${players[0].name} jest AFK`);
    room.pauseGame(true);
  } else if (players.length > 1) {
    sendMessage(`Gracze ${players.map(player => player.name).join(", ")} są AFK`);
    room.pauseGame(true);
  }
};

room.onGamePause = () => {
  nextPauseAction = false;
};

room.onGameUnpause = () => {
  nextPauseAction = true;
};

room.onGameStop = () => {
  showAfkPlayers();
};

class CmdManager {
  constructor() {
    this.cmds = [];
  }

  add(cmd) {
    this.cmds.push(cmd);
  }

  remove(cmd) {
    let index = this.cmds.indexOf(cmd);
    if (index !== -1) {
      this.cmds.splice(index, 1);
    }
  }

  findCmd(message) {
    for (let cmd of this.cmds) {
      let regex = cmd.getBaseRegex();
      if (regex.exec(message)) {
        return cmd;
      }
    }

    return null;
  }

  extractArguments(cmd, message) {
    let regex = cmd.getFullRegex();
    let match = regex.exec(message);
    if (match) {
      let args = [];
      for (let i = 1; match[i] !== undefined; i++) {
        args.push(match[i]);
      }
      return {args};
    }

    return {error: cmd.getHelpText()};
  }

  listAdminCmds() {
    let list = [];
    for (let cmd of this.cmds) {
      if (cmd.onlyAdmin) {
        list.push(prefixes.cmd + cmd.cmd);
      }
    }

    return list;
  }

  listPlayerCmds() {
    let list = [];
    for (let cmd of this.cmds) {
      if (!cmd.onlyAdmin && !cmd.onlySuperAdmin) {
        list.push(prefixes.cmd + cmd.cmd);
      }
    }

    return list;
  }
}

class Cmd {
  constructor(config, func) {
    this.cmd = config.cmd;
    this.params = config.params || null;
    this.paramsOptional = config.paramsOptional || false;
    this.showInChat = config.showInChat || false;
    this.onlyAdmin = config.onlyAdmin || false;
    this.onlySuperAdmin = config.onlySuperAdmin || false;
    this.helpText = config.helpText || null;
    this.func = func;
  }

  canPlayerExecute(player) {
    if (this.onlySuperAdmin && !isSuperAdmin(player))
      return false;
    if (this.onlyAdmin && !player.admin)
      return false;
    return true;
  }

  execute(args) {
    return this.func.apply(null, args);
  }

  getHelpText() {
    let params = "";
    for (let param in this.params) {
      params += ` ${param}`;
    }
    let message = `Użyj ${prefixes.cmd}${this.cmd}${params}`;
    if (this.helpText) {
      message += `  (${this.helpText})`;
    }
    
    return message;
  }

  getBaseRegex() {
    return new RegExp(`^${this.cmd}\\b`);
  }

  getFullRegex() {
    let list = "";
    if (this.paramsOptional) {
      list = "(?:";
    }

    for (let param in this.params) {
      list += ` ${this.params[param]}`;
    }

    if (this.paramsOptional) {
      list += ")?";
    }

    return new RegExp(`^${this.cmd}${list}$`);
  }
}

let setPlayerAfkCmd = new Cmd({cmd: "afk", showInChat: true}, (invokedBy) => {
  if (!isPlayerAfk(invokedBy)) {
    setPlayerAfk(invokedBy);
    sendMessage(`Gracz ${invokedBy.name} zaraz wraca`, invokedBy);
  }
});

let setPlayerBackCmd = new Cmd({cmd: "jj", showInChat: true}, (invokedBy) => {
  unsetPlayerAfk(invokedBy);
  sendMessage(`Gracz ${invokedBy.name} jest z powrotem`, invokedBy);
});

let listAfkPlayers = new Cmd({cmd: "lafk", showInChat: true}, (invokedBy) => {
  showAfkPlayers(invokedBy);
});

let mutePlayerByName = new Cmd({cmd: "mute", params: {name: "(.+)"}, onlyAdmin: true}, (invokedBy, nameToMute) => {
  let players = room.getPlayerList().filter(player => player.name.includes(nameToMute));
  
  if (players.length === 1) {
    process(players);
  } else if (!players.length) {
    sendMessage(`${nameToMute} nie został odnaleziony`);
  } else {
    players = players.filter(player => player.name === nameToMute);
    if (players.length === 1) {
      process(players);
    } else {
      sendMessage(`Znaleziono wielu graczy pasujących do wzorca ${nameToMute}`);
    }
  }

  function process(players) {
    let player = players[0];
    if (isPlayerMuted(player)) {
      unmutePlayer(player);
      sendMessage(`${player.name} został odciszony przez ${invokedBy.name}`);
    } else {
      mutePlayer(player);
      sendMessage(`${player.name} został wyciszony przez ${invokedBy.name}`);
    }
  }
});

let mutePlayerById = new Cmd({cmd: "muteid", params: {id: "(\\d+)"}, onlyAdmin: true}, (invokedBy, idToMute) => {
  let player = room.getPlayerList().filter(player => player.id === Number(idToMute))[0];
  
  if (player) {
    if (isPlayerMuted(player)) {
      unmutePlayer(player);
      sendMessage(`${player.name} został odciszony przez ${invokedBy.name}`);
    } else {
      mutePlayer(player);
      sendMessage(`${player.name} został wyciszony przez ${invokedBy.name}`);
    }
  } else {
    sendMessage(`Gracz o id ${idToMute} nie został znaleziony`);
  }
});

let muteNewPlayers = new Cmd({cmd: "mutenew", onlyAdmin: true}, (invokedBy) => {
  config.muteNewPlayers = !config.muteNewPlayers;
  if (config.muteNewPlayers) {
    sendMessage(`Chat został wyłączony dla nowych graczy przez ${invokedBy.name}`);
  }
  else {
    sendMessage(`Chat został włączony dla nowych graczy przez ${invokedBy.name}`);
    clearAllMutes();
  }
});

let silentMutePlayerByName = new Cmd({cmd: "smute", params: {name: "(.+)"}, onlyAdmin: true}, (invokedBy, nameToMute) => {
  let players = room.getPlayerList().filter(player => player.name.includes(nameToMute));
  
  if (players.length === 1) {
    process(players);
  } else if (players.length > 1) {
    players = players.filter(player => player.name === nameToMute);
    if (players.length === 1) {
      process(players);
    }
  }

  function process(players) {
    let player = players[0];
    if (isPlayerMuted(player)) {
      unmutePlayer(player);
    } else {
      mutePlayer(player);
    }
  }
});

let silentMutePlayerById = new Cmd({cmd: "smuteid", params: {id: "(\\d+)"}, onlyAdmin: true}, (invokedBy, idToMute) => {
  let player = room.getPlayerList().filter(player => player.id === Number(idToMute))[0];
  
  if (player) {
    if (isPlayerMuted(player)) {
      unmutePlayer(player);
    } else {
      mutePlayer(player);
    }
  }
});

let superAdminLogin = new Cmd({cmd: "slogin", params: {password: "(.+)"}, paramsOptional: true}, (invokedBy, password) => {
  if (!invokedBy.admin && sha1(password) === config.adminPassword) {
    room.setPlayerAdmin(invokedBy.id, true);
    setSuperAdmin(invokedBy);
  }
});

let adminLogin = new Cmd({cmd: "alogin", params: {password: "(.+)"}, paramsOptional: true}, (invokedBy, password) => {
  if (!invokedBy.admin) {
    let adminPassword = adminAccess[invokedBy.name];
    if (adminPassword !== undefined && adminPassword === sha1(password)) {
      authenticatedAdmins.push(invokedBy.id);
      room.setPlayerAdmin(invokedBy.id, true);
    }
  }
});

let adminLogout = new Cmd({cmd: "logout", onlyAdmin: true}, (invokedBy) => {
  room.setPlayerAdmin(invokedBy.id, false);
  let id = authenticatedAdmins.indexOf(invokedBy.id);
  if (id !== -1) {
    authenticatedAdmins.splice(id, 1);
  }
});

let clearBans = new Cmd({cmd: "clearbans", onlyAdmin: true}, (invokedBy) => {
  clearAllBans(invokedBy.name);
});

let clearMutes = new Cmd({cmd: "clearmutes", onlyAdmin: true}, (invokedBy) => {
  clearAllMutes(invokedBy.name);
});

let toggleChat = new Cmd({cmd: "togglechat", onlyAdmin: true}, (invokedBy) => {
  if (config.chatEnabled) {
    sendMessage(`Chat został wyłączony przez ${invokedBy.name}`);
    config.chatEnabled = false;
  } else {
    config.chatEnabled = true;
    sendMessage(`Chat został włączony przez ${invokedBy.name}`);
  }
});

let muteAll = new Cmd({cmd: "muteall", onlyAdmin: true}, (invokedBy) => {
  const players = room.getPlayerList().filter(player => player.id !== 0);
  for (let player of players) {
    if (player.name !== invokedBy.name)
      mutePlayer(player);
  }
  sendMessage(`Wszyscy gracze zostali wyciszeni przez ${invokedBy.name}`);
});

let clearNoCmdPlayers = new Cmd({cmd: "clearnocmd", onlyAdmin: true}, (invokedBy) => {
  clearAllNoCmdPlayers(invokedBy.name);
});

let loadClassicMap = new Cmd({cmd: "m1", onlyAdmin: true}, (invokedBy) => {
  room.setCustomStadium(maps.powerClassic);
});

let loadBigMap = new Cmd({cmd: "m2", onlyAdmin: true}, (invokedBy) => {
  room.setCustomStadium(maps.powerBig);
});

let listAllGoals = new Cmd({cmd: "goalsall", onlyAdmin: true}, (invokedBy) => {
  Object.entries(stats).forEach((player) => {
    sendMessage(`Gracz ${player[0]} bramek ${player[1]["goals"]}`, invokedBy);
  });
});

let listTopOGPlayers = new Cmd({cmd: "topo", showInChat: false}, (invokedBy) => {
  let props = Object.entries(stats).map((item) => {
    return { key: item[0], value: item[1].owngoals };
  });

  props.sort((p1, p2) => p2.value - p1.value);
  let top10 = props.splice(0, 10);
  let pos = 1;
  if (top10.length) {
    sendMessage("Top10 strzelców do własnej bramki: ", invokedBy, true);
  }
  while (top10.length) {
    let tmp = top10.splice(0, 5);
    let message = tmp.map(e => `${pos++}. ${e.key}: ${e.value}`).join(", ");
    sendMessage(message, invokedBy, true);
  }
});

let listTopPlayers = new Cmd({cmd: "topg", showInChat: false}, (invokedBy) => {
  let props = Object.entries(stats).map((item) => {
    return { key: item[0], value: item[1].goals };
  });

  props.sort((p1, p2) => p2.value - p1.value);
  let top10 = props.splice(0, 10);
  let pos = 1;
  if (top10.length) {
    sendMessage("Top10 strzelców: ", invokedBy, true);
  }
  while (top10.length) {
    let tmp = top10.splice(0, 5);
    let message = tmp.map(e => `${pos++}. ${e.key}: ${e.value}`).join(", ");
    sendMessage(message, invokedBy, true);
  }
});

let listTopAssistingPlayers = new Cmd({cmd: "topa", showInChat: false}, (invokedBy) => {
  let props = Object.entries(stats).map((item) => {
    return { key: item[0], value: item[1].assists };
  });

  props.sort((p1, p2) => p2.value - p1.value);
  let top10 = props.splice(0, 10);
  let pos = 1;
  if (top10.length) {
    sendMessage("Top10 asystujących: ", invokedBy, true);
  }
  while (top10.length) {
    let tmp = top10.splice(0, 5);
    let message = tmp.map(e => `${pos++}. ${e.key}: ${e.value}`).join(", ");
    sendMessage(message, invokedBy, true);
  }
});

let topCmdHelp = new Cmd({cmd: "top", showInChat: false}, (invokedBy) => {
  sendMessage("Użyj !topg, !topa lub !topo aby wyświetlić właściwy ranking", invokedBy, true);
});

let listPlayerStats = new Cmd({cmd: "stats", params: {name: "(.+)"}, paramsOptional: true, showInChat: false}, (invokedBy, playerName) => {
  let name = playerName ? playerName : invokedBy.name;
  let player = null;
  let scorers = Object.entries(stats).filter(scorer => scorer[0].includes(name));

  if (scorers.length === 1) {
    player = scorers[0];
  } else if (!scorers.length) {
    return sendMessage(`Nie znaleziono gracza ${name}`, invokedBy, true);
  } else {
    scorers = scorers.filter(scorer => scorer[0] === name);
    if (scorers.length === 1) {
      player = scorers[0];
    } else {
      return sendMessage(`Znaleziono wielu graczy pasujących do wzorca ${name}`, invokedBy, true);
    }
  }

  return sendMessage(`Gracz "${player[0]}" - bramki: ${player[1].goals}, asysty: ${player[1].assists}, samobóje: ${player[1].owngoals}`, invokedBy, true);
});

let listPlayerCmds = new Cmd({cmd: "komendy", showInChat: false}, (invokedBy) => {
  let list = cmdManager.listPlayerCmds();
  list = list.filter(cmd => !cmd.includes("login"));
  while (list.length) {
    let cmds = list.splice(0, 11);
    sendMessage(cmds.join(" "), invokedBy, true);
  }
});

let listAdminCmds = new Cmd({cmd: "akomendy", onlyAdmin: true}, (invokedBy) => {
  let list = cmdManager.listAdminCmds();
  list = list.filter(cmd => !cmd.includes("login"));
  while (list.length) {
    let cmds = list.splice(0, 8);
    sendMessage(cmds.join(" "), invokedBy, true);
  }
});

let freeSlotCmd = new Cmd({cmd: "slot", onlyAdmin: true}, (invokedBy) => {
  freeSlot(invokedBy);
});

let listPlayers = new Cmd({cmd: "players", paramsOptional: true, params: {pattern: "(.+)"}, onlyAdmin: true}, (invokedBy, pattern) => {
  let players = room.getPlayerList();
  if (pattern)
    players = players.filter(player => player.name.includes(pattern));

  for (let player of players) {
    sendMessage(`Gracz ${player.name}, id ${player.id}`, invokedBy, true);
  }
});

let goalInfoCmd = new Cmd({cmd: "showgoal", onlyAdmin: true}, (invokedBy) => {
  config.showGoalInfo = !config.showGoalInfo;
  sendMessage(`Informacje o golu zostały ${config.showGoalInfo ? "włączone" : "wyłączone"} przez ${invokedBy.name}`);
});

let giveSuperadmin = new Cmd({cmd: "givesa", params: {name: "(.+)"}, onlySuperAdmin: true}, (invokedBy, playerName) => {
  const player = room.getPlayerList().filter(player => player.name === playerName)[0];
  if (player && !isSuperAdmin(player)) {
    setSuperAdmin(player);
    sendMessage("");
  }
});

let banYourself = new Cmd({cmd: "ban", showInChat: true}, (invokedBy) => {
  room.kickPlayer(invokedBy.id, "wedle życzenia", true);
});

let stopCmdForPlayerByName = new Cmd({
  cmd: "nocmd", params: {name: "(.+)"}, onlyAdmin: true, helpText: "blokuje komendy dla gracza"}, (invokedBy, playerName) => {
    let players = room.getPlayerList().filter(player => player.name.includes(playerName));

    if (players.length === 1) {
      process(players);
    } else if (!players.length) {
      sendMessage(`${playerName} nie został odnaleziony`);
    } else {
      players = players.filter(player => player.name === playerName);
      if (players.length === 1) {
        process(players);
      } else {
        sendMessage(`Znaleziono wielu graczy pasujących do wzorca ${playerName}`);
      }
    }

    function process(players) {
      let player = players[0];
      if (player.id === invokedBy.id) {
        return sendMessage("Nie możesz pozbawić sam siebie możliwości wykonywania komend");
      }
      if (canPlayerInvokeCmd(player)) {
        blockCmdForPlayer(player);
        sendMessage(`Gracz ${player.name} został pozbawiony możliwości wywoływania komend przez ${invokedBy.name}`);
      } else {
        unblockCmdForPlayer(player);
        sendMessage(`Gracz ${player.name} otrzymał możliwość wywoływania komend przez ${invokedBy.name}`);
      }
    }
  });

let stopCmdForPlayerById = new Cmd({
  cmd: "nocmdid", params: {player_id: "(\\d+)"}, onlyAdmin: true, helpText: "blokuje komendy dla gracza"}, (invokedBy, playerId) => {
    let player = room.getPlayerList().filter(player => player.id === Number(playerId))[0];

    if (player) {    
      if (canPlayerInvokeCmd(player)) {
        blockCmdForPlayer(player);
        sendMessage(`Gracz ${player.name} został pozbawiony możliwości wywoływania komend przez ${invokedBy.name}`);
      } else {
        unblockCmdForPlayer(player);
        sendMessage(`Gracz ${player.name} otrzymał możliwość wywoływania komend przez ${invokedBy.name}`);
      }
    } else {
      sendMessage(`Gracz o ID ${playerId} nie został odnaleziony`);
    }
  });

let pauseGameCmd = new Cmd({cmd: "p", showInChat: true}, (invokedBy) => {
  if (invokedBy.team !== 0 && room.getScores()) {
    if (nextPauseAction) {
      sendMessage(`Gra zatrzymana przez gracza ${invokedBy.name}`);
    } else {
      sendMessage(`Gra wznowiona przez gracza ${invokedBy.name}`);
    }
    room.pauseGame(nextPauseAction);
    sendMessage("Używaj 'q' zamiast '!p' w celu szybszego zapauzowania gry");
  }
});

let swapTeams = new Cmd({cmd: "swap", onlyAdmin: true}, (invokedBy) => {
  let players = room.getPlayerList();
  for (let player of players) {
    if (player.team !== 0) room.setPlayerTeam(player.id, 3 - player.team);
  }
});

let randomTeams = new Cmd({
  cmd: "random", params: {team_size: "(\\d+)"}, showInChat: true, onlyAdmin: true}, (invokedBy, playersInTeam) => {
    playersInTeam = Number(playersInTeam);
    let players = room.getPlayerList().filter(player => player.id !== 0);
    players = players.filter(player => player.team !== 0 || !isPlayerAfk(player));

    if (playersInTeam * 2 > players.length) {
      return sendMessage(`Nie ma wystarczającej liczby graczy (pomijając graczy AFK) aby wylosować ${playersInTeam}-osobowe drużyny`);
    }

    const freePlayers = players.filter(player => player.team === 0);
    const redPlayers = players.filter(player => player.team === 1);
    const bluePlayers = players.filter(player => player.team === 2);

    if (redPlayers.length > playersInTeam || bluePlayers.length > playersInTeam) {
      return sendMessage(`Drużyny są liczniejsze niż ${playersInTeam} graczy, musisz przenieść zawodników na ławkę`);
    }

    function getFreePlayer() {
      let randomId = getRandomInt(0, freePlayers.length - 1);
      let player = freePlayers[randomId];
      freePlayers.splice(randomId, 1);
      return player;
    }

    while (freePlayers && (redPlayers.length < playersInTeam || bluePlayers.length < playersInTeam)) {
      let message = "";

      if (redPlayers.length < playersInTeam) {
        let player = getFreePlayer();
        room.setPlayerTeam(player.id, 1);
        redPlayers.push(player);
        message += `${player.name} ==> Red, `;
      }

      if (bluePlayers.length < playersInTeam) {
        let player = getFreePlayer();
        room.setPlayerTeam(player.id, 2);
        bluePlayers.push(player);
        message += `${player.name} ==> Blue, `;
      }

      sendMessage(message);
    }
  });

let setPassword = new Cmd({cmd: "setpassword", params: {password: "(.+)"}, paramsOptional: true, onlySuperAdmin: true}, (invokedBy, password) => {
  if (password) {
    room.setPassword(password);
  } else {
    room.setPassword(null);
  }
});

let oneTabRestriction = new Cmd({cmd: "onetab", onlySuperAdmin: true}, invokedBy => {
  config.oneTabOnly = !config.oneTabOnly;
  sendMessage(`Ograniczenie jednego okna na użytkownika zostało ${config.oneTabOnly ? "włączone" : "wyłączone"} przez ${invokedBy.name}`);
});

cmdManager = new CmdManager();
cmdManager.add(mutePlayerByName);
cmdManager.add(mutePlayerById);
cmdManager.add(silentMutePlayerByName);
cmdManager.add(silentMutePlayerById);
cmdManager.add(superAdminLogin);
cmdManager.add(adminLogin);
cmdManager.add(adminLogout);
cmdManager.add(clearBans);
cmdManager.add(loadClassicMap);
cmdManager.add(loadBigMap);
cmdManager.add(listAllGoals);
// cmdManager.add(listPlayerGoals);
cmdManager.add(listPlayerCmds);
cmdManager.add(listAdminCmds);
cmdManager.add(freeSlotCmd);
cmdManager.add(randomTeams);
cmdManager.add(listPlayers);
cmdManager.add(listTopPlayers);
cmdManager.add(listTopAssistingPlayers);
cmdManager.add(listTopOGPlayers);
cmdManager.add(goalInfoCmd);
cmdManager.add(giveSuperadmin);
cmdManager.add(stopCmdForPlayerByName);
cmdManager.add(stopCmdForPlayerById);
cmdManager.add(clearMutes);
cmdManager.add(clearNoCmdPlayers);
cmdManager.add(muteAll);
cmdManager.add(toggleChat);
cmdManager.add(muteNewPlayers);
// cmdManager.add(listPlayerAssists);
cmdManager.add(setPlayerAfkCmd);
cmdManager.add(setPlayerBackCmd);
cmdManager.add(listAfkPlayers);
// cmdManager.add(listPlayerOwnGoals);
cmdManager.add(pauseGameCmd);
cmdManager.add(listPlayerStats);
cmdManager.add(topCmdHelp);
cmdManager.add(swapTeams);
cmdManager.add(banYourself);
cmdManager.add(oneTabRestriction);
cmdManager.add(setPassword);

function parseCmd(player, message) {
  let cmd = cmdManager.findCmd(message);
  if (cmd) {
    if (cmd.canPlayerExecute(player)) {
      let response = cmdManager.extractArguments(cmd, message);
      if (response.error) {
        sendMessage(response.error, player);
      } else {
        let args = response.args;
        args.unshift(player);
        cmd.execute(args);
      }
      return cmd.showInChat;
    }

    return false;
  }

  return !message.includes("login");
}

function handleSmartCommand(player, message) {
  if (message === "auto") {
    handlePlayerRequestedAuto(player);
  }

  if (message === "q") {
    handlePlayerRequestedPause(player);
  }
}

function handlePlayerRequestedPause(player) {
  if (player.team !== 0 && room.getScores()) {
    if (nextPauseAction) {
      sendMessage(`Gra zatrzymana przez gracza ${player.name}`);
    } else {
      sendMessage(`Gra wznowiona przez gracza ${player.name}`);
    }
    room.pauseGame(nextPauseAction);
    sendMessage("Używaj 'q' zamiast '!p' w celu szybszego zapauzowania gry");
  }
}

function isPlayerTopmostAndChoosesTeam(player) {
  if (room.getScores()) return false;
  if (player.team === 0) return false;

  let red = room.getPlayerList().filter(p => p.team === 1);
  let blue = room.getPlayerList().filter(p => p.team === 2);
  if (red[0].id !== player.id && blue[0].id !== player.id) return false;
  return true;
}

function handlePlayerRequestedAuto(player) {
  if (!isPlayerTopmostAndChoosesTeam(player)) return false;

  let red = room.getPlayerList().filter(p => p.team === 1);
  let blue = room.getPlayerList().filter(p => p.team === 2);
  let freePlayers = room.getPlayerList().filter(p => p.team === 0 && p.id !== 0 && !isPlayerAfk(player));

  if (player.team === 1) {
    while (red.length < blue.length) {
      let candidate = getFreePlayer();
      if (candidate === undefined) break;
      room.setPlayerTeam(candidate.id, 1);
      red.push(candidate);
      sendMessage(`${candidate.name} ==> Red, `, player);
    }
  } else {
    while (blue.length < red.length) {
      let candidate = getFreePlayer();
      if (candidate === undefined) break;
      room.setPlayerTeam(candidate.id, 2);
      blue.push(candidate);
      sendMessage(`${candidate.name} ==> Blue, `, player);
    }
  }
  /*console.log(red.length, blue.length);
  if (red.length === blue.length) room.startGame();*/

  function getFreePlayer() {
    let randomId = getRandomInt(0, freePlayers.length - 1);
    let player = freePlayers[randomId];
    freePlayers.splice(randomId, 1);
    return player;
  }
}

function sendMessage(message, initiator, showToInitiatorOnly) {
  if ((!initiator || !isPlayerMuted(initiator)) && (config.chatEnabled || initiator && isSuperAdmin(initiator))) {
    let id = showToInitiatorOnly === true ? initiator.id : null;
    room.sendChat(prefixes.message + message, id);
  }
}

function isPlayerMuted(player) {
  return mutedPlayers.includes(player.id);
}

function mutePlayer(player) {
  mutedPlayers.push(player.id);
}

function unmutePlayer(player) {
  let index = mutedPlayers.indexOf(player.id);
  if (index !== -1) {
    mutedPlayers.splice(index, 1);
  }
}

function isSuperAdmin(player) {
  return superAdmins.includes(player.id);
}

function setSuperAdmin(player) {
  superAdmins.push(player.id);
}

function unsetSuperAdmin(player) {
  let index = superAdmins.indexOf(player.id);
  if (index !== -1) {
    superAdmins.splice(index, 1);
  }
}

function canPlayerInvokeCmd(player) {
  return !noCmdPlayers.includes(player.id);
}

function blockCmdForPlayer(player) {
  noCmdPlayers.push(player.id);
}

function unblockCmdForPlayer(player) {
  let index = noCmdPlayers.indexOf(player.id);
  if (index !== -1) {
    noCmdPlayers.splice(index, 1);
  }
}

function showMapCmds() {
  sendMessage(`Wpisz ${prefixes.cmd}m1 aby załadować mapę Power Classic`);
  sendMessage(`Wpisz ${prefixes.cmd}m2 aby załadować mapę Power Big`);
}

function updateAdmins() {
  const players = room.getPlayerList().filter(player => player.id != 0);
  if (players.length == 0) return;
  if (players.find(player => player.admin) != null) return;

  let id = getRandomInt(0, players.length - 1);
  let newAdmin = players[id];
  room.setPlayerAdmin(newAdmin.id, true);

  sendMessage(`Gracz ${newAdmin.name} został wytypowany na Admina`);
  sendMessage(`Player ${newAdmin.name} has been arbitrary chosen as Admin`);
  showMapCmds();
}

function freeSlot(invokedBy) {
  const players = room.getPlayerList().filter(player => player.id !== 0);
  if (players.length !== game.maxPlayers) return;

  for (let player of players) {
    if (player.team === 0 && !player.admin && !isSuperAdmin(player)) {
      return room.kickPlayer(player.id, "Potrzebny slot");
    }
  }

  for (let player of players) {
    if (!player.admin && !isSuperAdmin(player)) {
      return room.kickPlayer(player.id, "Potrzebny slot");
    }
  }

  for (let player of players) {
    if (!isSuperAdmin(player)) {
      if (invokedBy !== undefined && invokedBy.id !== player.id) {
        return room.kickPlayer(player.id, "Potrzebny slot");
      }
    }
  }

  sendMessage("Musisz ręcznie wyrzucić gracza z pokoju");
  console.log("You must kick player manually, all players are privileged");
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearAllBans(initiator) {
  room.clearBans();
  sendMessage(`Bany zostały skasowane przez ${initiator}`);
}

function clearAllMutes(initiator) {
  mutedPlayers = [];
  if (initiator) {
    sendMessage(`Wszyscy wyciszeni gracze zostali odciszeni przez ${initiator}`);
  }
}

function clearAllNoCmdPlayers(initiator) {
  noCmdPlayers = [];
  sendMessage(`Wszyscy gracze bez możliwości używania komend dostali ją z powrotem od ${initiator}`);
}

function isPlayerAfk(player) {
  return afkPlayers.includes(player.id);
}

function setPlayerAfk(player) {
  afkPlayers.push(player.id);
  if (player.team !== 0) {
    room.setPlayerTeam(player.id, 0);
  }
}

function unsetPlayerAfk(player) {
  let index = afkPlayers.indexOf(player.id);
  if (index !== -1) {
    afkPlayers.splice(index, 1);
  }
}

function updateAssistingPlayer(initiatingPlayer) {
  let candidate = null;

  if (ball.kickedBy && ball.touchedBy) {
    if (ball.kickedBy.time > ball.touchedBy.time) {
      candidate = ball.kickedBy.player;
    } else {
      candidate = ball.touchedBy.player;
    }
  } else if (ball.kickedBy) {
    candidate = ball.kickedBy.player;
  } else if (ball.touchedBy) {
    candidate = ball.touchedBy.player;
  }

  if (candidate && candidate.id !== initiatingPlayer.id) {
    ball.assistingPlayer = candidate;
  }
}

function showAfkPlayers(invokedBy) {
  let players = room.getPlayerList().filter(player => isPlayerAfk(player));

  let line = players.length ? "Gracze AFK: " : "Aktualnie nie ma graczy zadeklarowanych AFK";
  while (players.length) {
    let tmp = players.splice(0, 5);
    line += tmp.map(player => player.name).join(", ");
    sendMessage(line, invokedBy);
    line = "";
  }
}

function pointDistance(p1, p2) {
  let d1 = p1.x - p2.x;
  let d2 = p1.y - p2.y;
  return Math.sqrt(d1 * d1 + d2 * d2);
}

function download(data, filename, type) {
  var file = new Blob([data], {type: type});
  var a = document.createElement("a"),
  url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function() {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);  
  }, 0); 
}

function backupServerData() {
  let data = {};
  data.scores = stats;
  data.bans = bans;

  let jsonData = JSON.stringify(data);
  download(jsonData, "server_stats.txt", "text/plain");
}

function restoreServerData(dataContent) {
  let data = JSON.parse(dataContent);
  if (data.scores) {
    stats = data.scores;
  }
  if (data.bans) {
    bans = data.bans;
  }
}

function incrementPlayerGoals(player) {
  stats[player.name]["goals"]++;
};
function incrementPlayerAssists(player) {
  stats[player.name]["assists"]++;
};
function incrementPlayerOwngoals(player) {
  stats[player.name]["owngoals"]++;
};

function showNotificationAboutAFK() {
  sendMessage("Użyj !afk aby zasygnalizować nieobecność");
  let delay = 500;
  setTimeout(() => {
    sendMessage("Wpisz !jj aby oznajmić powrót");
    setTimeout(() => {
      sendMessage("Aby zobaczyć kto jest AFK wprowadź !lafk");
    }, delay)
  }, delay)
}

/*let clearBansInterval = setInterval(clearAllBans, 1000 * 60 * 60, "Arbitra");
let clearMutesInterval = setInterval(clearAllMutes, 1000 * 60 * 60, "Arbitra");
let clearNoCmdInterval = setInterval(clearAllNoCmdPlayers, 1000 * 60 * 60, "Arbitra");

let backupServerDataInterval = setInterval(backupServerData, 1000 * 60 * 30);*/

let afkNotificationInterval = setInterval(showNotificationAboutAFK, 1000 * 60 * 15);
