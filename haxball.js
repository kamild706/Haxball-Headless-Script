const hostPlayer = "Arbiter";
const messagePrefix = ">>>>> ";
const cmdPrefix = "!";
const privilegedPlayers = [];
const slots = 8;
const goals = {};
const muted = {
  names: [],
  ids: [],
};
let ballKickedBy = null;
let cmdManager;

const room = HBInit({
  roomName: "POWER ROOM",
  maxPlayers: 8,
  playerName: hostPlayer,
  public : true
});

room.onPlayerBallKick = player => {
  ballKickedBy = player.name;
};

room.onTeamGoal = team => {
  if (ballKickedBy !== null) {
    sendMessage(`Strzał oddał gracz ${ballKickedBy}`);
    
    let score = goals[ballKickedBy] | 0;
    goals[ballKickedBy] = score + 1;
    ballKickedBy = null;
  }
};

room.onPlayerChat = (player, message) => {
  if (message.startsWith(cmdPrefix)) {
    let showMessage =  parseCmd(player, message.substring(1));
    return showMessage && !isPlayerMuted(player);
  }

  return !isPlayerMuted(player);
};

room.onPlayerKicked = (kickedPlayer, reason, ban, byPlayer) => {
  if (isPlayerPrivileged(kickedPlayer)) {
    if (ban)
      room.clearBans();

    room.setPlayerAdmin(byPlayer.id, false);
    sendMessage("Próba wyrzucenia super administratora!");
  }
};

room.onPlayerAdminChange = (changedPlayer, byPlayer) => {
  if (!changedPlayer.admin && isPlayerPrivileged(changedPlayer)) {
    if (byPlayer !== null && byPlayer.name !== hostPlayer) {
      room.setPlayerAdmin(changedPlayer.id, true);
      room.setPlayerAdmin(byPlayer.id, false);

      sendMessage("Próba odebrania uprawnień superadministratorowi!");
    }
  }
};

room.onPlayerJoin = player => {
  updateAdmins();
};

room.onPlayerLeave = player => {
  updateAdmins();
};

class CmdManager {
  constructor() {
    this.cmds = [];
  }

  addCmd(cmd) {
    this.cmds.push(cmd);
  }

  removeCmd(cmd) {
    let index = this.cmds.indexOf(cmd);
    if (index !== -1) {
      this.cmds.splice(index, 1);
    }
  }

  matchCmd(message) {
    for (let cmd of this.cmds) {
      let match = cmd.regex.exec(message);
      if (match) {
        let args = this.extractArguments(match);
        return {args, cmd}
      }
    }

    return null;
  }

  extractArguments(match) {
    let args = [];
    for (let i = 1; match[i] !== undefined; i++) {
      args.push(match[i]);
    }

    return args;
  }

  listCmds(type) {
    if (type === "admin")
      type = true;
    else if (type === "regular")
      type = null;
    else
      return [];

    let list = [];
    for (let cmd of this.cmds) {
      if (cmd.opts.onlyAdmin == type) {
        let stringRegex = cmd.regex.toString();
        let match = /(\w+)/.exec(stringRegex);
        list.push(cmdPrefix + match[1]);
      }
    }

    return list;
  }
}

class Cmd {
  constructor(cmdText, opts, action) {
    if (arguments.length === 2) {
      action = opts;
      this.opts = {};
    } else {
      this.opts = opts;
    }

    this.regex = new RegExp(`^${cmdText}$`);
    this.action = action;
  }
}

let mutePlayerByName = new Cmd("mute (\\w+)", {onlyAdmin: true}, function(invokedBy, nameToMute) {
  let player = room.getPlayerList().filter(player => player.name === nameToMute)[0];
  if (player) {
    if (muted.names.includes(nameToMute)) {
      sendMessage(`${nameToMute} jest już wyciszony`);
    } else {
      muted.names.push(nameToMute);
      sendMessage(`${nameToMute} został wyciszony przez ${invokedBy.name}`);
    }
  } else {
    sendMessage(`${nameToMute} nie został odnaleziony`);
  }
});

let unmutePlayerByName = new Cmd("unmute (\\w+)", {onlyAdmin: true}, function(invokedBy, nameToUnmute) {
  let index = muted.names.indexOf(nameToUnmute);
  if (index !== -1) {
    muted.names.splice(index, 1);
    sendMessage(`${nameToUnmute} został odciszony przez ${invokedBy.name}`);
  } else {
    sendMessage(`${nameToUnmute} nie był wyciszony`);
  }
});

let mutePlayerById = new Cmd("muteid (\\d+)", {onlyAdmin: true}, function(invokedBy, idToMute) {
  idToMute = Number(idToMute);
  let player = room.getPlayerList().filter(player => player.id === idToMute)[0];
  if (player) {
    muted.ids.push(idToMute);
    sendMessage(`${player.name} został wyciszony przez ${invokedBy.name}`);
  } else {
    sendMessage(`Gracz o id ${idToMute} nie został znaleziony`);
  }
});

let unmutePlayerById = new Cmd("unmuteid (\\d+)", {onlyAdmin: true}, function(invokedBy, idToUnmute) {
  idToUnmute = Number(idToUnmute);
  let index = muted.ids.indexOf(idToUnmute);
  let player = room.getPlayerList().filter(player => player.id === idToUnmute)[0];
  if (index !== -1) {
    muted.ids.splice(index, 1);
    if (player) {
      sendMessage(`${player.name} został odciszony przez ${invokedBy.name}`);
    } else {
      sendMessage(`${idToUnmute} zostało odciszone przez ${invokedBy.name}`);
    }
  } else {
    if (player) {
      sendMessage(`${player.name} nie był wyciszony`);
    } else {
      sendMessage(`${idToUnmute} nie było wyciszone`);
    }
  }
});

let silentMutePlayerByName = new Cmd("smute (\\w+)", {onlyAdmin: true}, function(invokedBy, nameToMute) {
  let player = room.getPlayerList().filter(player => player.name === nameToMute)[0];
  if (player) {
    if (muted.names.includes(nameToMute)) {
    } else {
      muted.names.push(nameToMute);
    }
  }
});

let silentUnmutePlayerByName = new Cmd("sunmute (\\w+)", {onlyAdmin: true}, function(invokedBy, nameToUnmute) {
  let index = muted.names.indexOf(nameToUnmute);
  if (index !== -1) {
    muted.names.splice(index, 1);
  }
});

let silentMutePlayerById = new Cmd("smuteid (\\d+)", {onlyAdmin: true}, function(invokedBy, idToMute) {
  idToMute = Number(idToMute);
  let player = room.getPlayerList().filter(player => player.id === idToMute)[0];
  if (player) {
    muted.ids.push(idToMute);
  }
});

let silentUnmutePlayerById = new Cmd("sunmuteid (\\d+)", {onlyAdmin: true}, function(invokedBy, idToUnmute) {
  idToUnmute = Number(idToUnmute);
  let index = muted.ids.indexOf(idToUnmute);
  if (index !== -1) {
    muted.ids.splice(index, 1);
  }
});

let adminLogin = new Cmd("login password", function(invokedBy) {
  if (!invokedBy.admin) {
    room.setPlayerAdmin(invokedBy.id, true);
    privilegedPlayers.push(invokedBy.name);
  }
});

let adminLogout = new Cmd("logout", {onlyAdmin: true}, function(invokedBy) {
  room.setPlayerAdmin(invokedBy.id, false);
});

let clearBans = new Cmd("clearbans", {onlyAdmin: true}, function(invokedBy) {
  room.clearBans();
  sendMessage(`Bany zostały skasowane przez ${invokedBy.name}`);
});

let loadClassicMap = new Cmd("m1", {onlyAdmin: true}, function(invokedBy) {
  let map = `{"name":"Joe's power classic night edition","width":420,"height":200,"spawnDistance":170,"bg":{"type":"hockey","height":0,"width":0,"cornerRadius":0,"kickOffRadius":0},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.12,"kickingDamping":0.96,"kickStrength":11},"vertexes":[{"x":370,"y":-170,"trait":"ballAreaVertical"},{"x":370,"y":-64,"trait":"ballAreaVertical"},{"x":370,"y":64,"trait":"ballAreaVertical"},{"x":370,"y":170,"trait":"ballAreaHorizontal"},{"x":-370,"y":64,"trait":"ballAreaVertical"},{"x":-370,"y":170,"trait":"ballAreaHorizontal"},{"x":-370,"y":-170,"trait":"ballAreaVertical"},{"x":-370,"y":-64,"trait":"ballAreaVertical"},{"x":-400,"y":-54,"trait":"goalNet"},{"x":-400,"y":54,"trait":"goalNet"},{"x":400,"y":-54,"trait":"goalNet"},{"x":400,"y":54,"cMask":["ball"]},{"x":371,"y":-170,"bCoef":0,"cMask":["ball"],"trait":"ballAreaVertical"},{"x":371,"y":-64,"bCoef":0,"cMask":["ball"],"trait":"ballAreaVertical"},{"x":371,"y":170,"bCoef":0,"cMask":["ball"],"trait":"ballAreaVertical"},{"x":371,"y":64,"bCoef":0,"cMask":["ball"],"trait":"ballAreaVertical"},{"x":-371,"y":-170,"bCoef":1,"cMask":["ball"]},{"x":-371,"y":-64,"bCoef":1,"cMask":["ball"]},{"x":-371,"y":64,"bCoef":1,"cMask":["ball"]},{"x":-371,"y":170,"bCoef":1,"cMask":["ball"]},{"x":-371,"y":-171,"cMask":["ball"]},{"x":371,"y":-171,"cMask":["ball"]},{"x":-371,"y":171,"cMask":["ball"]},{"x":371,"y":171,"cMask":["ball"]},{"x":0,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":170,"trait":"kickOffBarrier"},{"x":0,"y":-170,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-383,"y":-170,"trait":"bugFix"},{"x":-383,"y":-64,"trait":"bugFix"},{"x":-383,"y":64,"trait":"bugFix"},{"x":-383,"y":170,"trait":"bugFix"},{"x":383,"y":-170,"trait":"bugFix"},{"x":383,"y":-64,"trait":"bugFix"},{"x":383,"y":64,"trait":"bugFix"},{"x":383,"y":170,"trait":"bugFix"}],"segments":[{"v0":0,"v1":1,"trait":"ballAreaVertical"},{"v0":2,"v1":3,"trait":"ballAreaVertical"},{"v0":4,"v1":5,"trait":"ballAreaVertical"},{"v0":6,"v1":7,"trait":"ballAreaVertical"},{"v0":12,"v1":13,"bCoef":0,"trait":"ballAreaVertical"},{"v0":14,"v1":15,"bCoef":0,"trait":"ballAreaVertical"},{"v0":16,"v1":17,"bCoef":0,"trait":"ballAreaVertical"},{"v0":18,"v1":19,"bCoef":0,"trait":"ballAreaVertical"},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":6,"v1":0,"trait":"ballAreaHorizontal"},{"v0":5,"v1":3,"trait":"ballAreaHorizontal"},{"v0":20,"v1":21,"trait":"ballAreaHorizontal"},{"v0":22,"v1":23,"trait":"ballAreaHorizontal"},{"v0":1,"v1":2,"trait":"goalLine"},{"v0":7,"v1":4,"trait":"goalLine"},{"v0":13,"v1":15,"trait":"goalLine"},{"v0":17,"v1":18,"trait":"goalLine"},{"v0":7,"v1":8,"trait":"goalNet"},{"v0":8,"v1":9,"trait":"goalNet"},{"v0":9,"v1":4,"trait":"goalNet"},{"v0":1,"v1":10,"trait":"goalNet"},{"v0":10,"v1":11,"trait":"goalNet"},{"v0":11,"v1":2,"trait":"goalNet"},{"v0":27,"v1":24,"color":"ffffff","trait":"line"},{"v0":27,"v1":24,"curve":180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":27,"v1":24,"curve":-180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":25,"v1":28,"vis":false,"trait":"kickOffBarrier"},{"v0":26,"v1":29,"vis":false,"trait":"kickOffBarrier"},{"v0":30,"v1":31,"trait":"bugFix"},{"v0":32,"v1":33,"trait":"bugFix"},{"v0":34,"v1":35,"trait":"bugFix"},{"v0":36,"v1":37,"trait":"bugFix"}],"goals":[{"p0":[-383,-64],"p1":[-383,64],"team":"red"},{"p0":[383,-64],"p1":[383,64],"team":"blue"}],"discs":[{"pos":[-370,-64],"trait":"goalPost"},{"pos":[-370,64],"trait":"goalPost"},{"pos":[370,-64],"trait":"goalPost"},{"pos":[370,64],"trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-200},{"normal":[0,-1],"dist":-200},{"normal":[-1,0],"dist":-420},{"normal":[1,0],"dist":-420},{"normal":[0,1],"dist":-170,"bCoef":1,"cMask":["ball"]},{"normal":[0,-1],"dist":-170,"bCoef":1,"cMask":["ball"]}],"traits":{"ballAreaVertical":{"vis":true,"color":"C7C730","bCoef":1,"cMask":["ball"]},"ballAreaHorizontal":{"vis":true,"color":"363333","bCoef":0,"cMask":["ball"]},"goalPost":{"radius":8,"color":"FFCCCC","invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"color":"363333","bCoef":0.1,"cMask":["ball"]},"goalLine":{"vis":true,"cMask":["wall"],"bCoef":0,"color":"ffffff"},"kickOffBarrier":{"vis":true,"color":"ffffff","bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":["wall"],"bCoef":0},"bugFix":{"vis":false,"cMask":["ball"],"bCoef":1}}}`;
  room.setCustomStadium(map);
});

let loadBigMap = new Cmd("m2", {onlyAdmin: true}, function(invokedBy) {
  let map = `{"name":"Joe's power big night edition","width":600,"height":270,"spawnDistance":350,"bg":{"type":"hockey","height":0,"width":0,"cornerRadius":0,"kickOffRadius":0},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.12,"kickingDamping":0.96,"kickStrength":11},"vertexes":[{"x":-550,"y":240,"cMask":["ball"]},{"x":550,"y":240,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"cMask":["ball"]},{"x":-550,"y":-80,"cMask":["ball"],"trait":"ballArea","color":"363333"},{"x":-550,"y":80,"cMask":["ball"]},{"x":550,"y":-80,"cMask":["ball"],"pos":[550,-80]},{"x":550,"y":80,"cMask":["ball"]},{"x":0,"y":-240,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":240,"trait":"kickOffBarrier"},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":-580,"y":-70,"cMask":["ball"]},{"x":-580,"y":70,"cMask":["ball"]},{"x":580,"y":-70,"cMask":["ball"]},{"x":580,"y":70,"cMask":["ball"]},{"x":-551,"y":-241,"trait":"line"},{"x":551,"y":-241,"trait":"line"},{"x":-551,"y":241,"cMask":["ball"]},{"x":551,"y":241,"cMask":["ball"]},{"x":551,"y":-240,"cMask":["ball"]},{"x":551,"y":-80,"cMask":["ball"]},{"x":551,"y":80,"cMask":["ball"]},{"x":551,"y":240,"cMask":["ball"]},{"x":-551,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-551,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-551,"y":80,"cMask":["ball"]},{"x":-551,"y":240,"cMask":["ball"]},{"x":551,"y":-80,"cMask":["ball"]},{"x":551,"y":80,"cMask":["ball"]},{"x":-551,"y":-80,"cMask":["ball"]},{"x":-551,"y":80,"cMask":["ball"]},{"x":-563,"y":-240,"trait":"bugFix"},{"x":-563,"y":-80,"trait":"bugFix"},{"x":-563,"y":80,"trait":"bugFix"},{"x":-563,"y":240,"trait":"bugFix"},{"x":563,"y":80,"trait":"bugFix"},{"x":563,"y":240,"trait":"bugFix"},{"x":563,"y":-240,"trait":"bugFix"},{"x":563,"y":-80,"trait":"bugFix"}],"segments":[{"v0":2,"v1":4,"color":"C7C730","trait":"ballArea"},{"v0":0,"v1":5,"color":"C7C730","trait":"ballArea"},{"v0":3,"v1":6,"color":"C7C730","trait":"ballArea"},{"v0":1,"v1":7,"color":"C7C730","trait":"ballArea"},{"v0":22,"v1":23,"color":"C7C730","trait":"line"},{"v0":24,"v1":25,"color":"C7C730","trait":"line"},{"v0":26,"v1":27,"color":"C7C730","trait":"line"},{"v0":28,"v1":29,"color":"C7C730","trait":"line"},{"v0":6,"v1":7,"color":"ffffff","trait":"line"},{"v0":4,"v1":5,"color":"ffffff","trait":"line"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"color":"ffffff","trait":"line"},{"v0":8,"v1":12,"vis":false,"trait":"kickOffBarrier"},{"v0":11,"v1":13,"vis":false,"trait":"kickOffBarrier"},{"v0":0,"v1":1,"color":"363333","bCoef":0,"trait":"ballArea"},{"v0":2,"v1":3,"color":"363333","bCoef":0,"trait":"ballArea"},{"v0":18,"v1":19,"color":"363333","trait":"line"},{"v0":20,"v1":21,"color":"363333","trait":"line"},{"v0":4,"v1":14,"trait":"goalNet"},{"v0":5,"v1":15,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet"},{"v0":6,"v1":16,"trait":"goalNet"},{"v0":16,"v1":17,"trait":"goalNet"},{"v0":17,"v1":7,"trait":"goalNet"},{"v0":30,"v1":31,"color":"ffffff","trait":"line"},{"v0":32,"v1":33,"color":"ffffff","trait":"line"},{"v0":34,"v1":35,"trait":"bugFix"},{"v0":36,"v1":37,"trait":"bugFix"},{"v0":38,"v1":39,"trait":"bugFix"},{"v0":40,"v1":41,"trait":"bugFix"}],"goals":[{"p0":[-563,-80],"p1":[-563,80],"team":"red"},{"p0":[563,-80],"p1":[563,80],"team":"blue"}],"discs":[{"pos":[-550,-80],"trait":"goalPost"},{"pos":[-550,80],"trait":"goalPost"},{"pos":[550,-80],"trait":"goalPost"},{"pos":[550,80],"trait":"goalPost"}],"planes":[{"normal":[-1,0],"dist":-600},{"normal":[1,0],"dist":-600},{"normal":[0,1],"dist":-270},{"normal":[0,-1],"dist":-270},{"normal":[0,1],"dist":-240,"bCoef":1,"cMask":["ball"]},{"normal":[0,-1],"dist":-240,"bCoef":1,"cMask":["ball"]}],"traits":{"ballArea":{"vis":true,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"color":"FFCCCC","invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"color":"363333","bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":true,"color":"ffffff","bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":["wall"],"bCoef":0},"bugFix":{"vis":false,"cMask":["ball"],"bCoef":1}}}`;
  room.setCustomStadium(map);
});

let listAllGoals = new Cmd("goals", {showInChat: true}, function(invokedBy) {
  for (let scorer in goals) {
    sendMessage(`Gracz ${scorer} bramek ${goals[scorer]}`);
  }
});

let listPlayerGoals = new Cmd("goals (\\w+)", {showInChat: true}, function(invokedBy, player) {
  let score = goals[player] | 0;
  sendMessage(`Gracz ${player} bramek ${score}`);
});

let listUserCmds = new Cmd("komendy", {schowInChat: true}, function(invokedBy) {
  let list = cmdManager.listCmds("regular");
  list = list.filter(cmd => cmd !== cmdPrefix + "login");
  sendMessage(list.join(" "));
});

let listAdminCmds = new Cmd("akomendy", {onlyAdmin: true}, function(invokedBy) {
  let list = cmdManager.listCmds("admin");
  list = list.filter(cmd => cmd !== cmdPrefix + "login");
  sendMessage(list.join(" "));
});

let freeSlotCmd = new Cmd("slot", {onlyAdmin: true}, function(invokedBy) {
  freeSlot();
});

let randomTeams = new Cmd("random (\\d+)", {onlyAdmin: true}, function(invokedBy, playersInTeam) {
  playersInTeam = Number(playersInTeam);
  const players = room.getPlayerList().filter(player => player.id !== 0);

  if (playersInTeam * 2 > players.length) {
    return sendMessage(`Nie ma wystarczającej liczby graczy aby wylosować ${playersInTeam} osobowe drużyny`);
  }

  const freePlayers = players.filter(player => player.team === 0);
  const redPlayers = players.filter(player => player.team === 1);
  const bluePlayers = players.filter(player => player.team === 2);

  if (redPlayers.length >= playersInTeam || bluePlayers.length >= playersInTeam) {
    return sendMessage(`Drużyny są liczniejsze niż ${playersInTeam} graczy, musisz przenieść graczy na ławkę`);
  }

  let nextTeam = 1;
  while (freePlayers) {
    let randomId = getRandomInt(0, freePlayers.length - 1);
    let player = freePlayers[randomId];
    freePlayers.splice(randomId, 1);

    if (nextTeam == 1 && redPlayers.length < playersInTeam) {
      room.setPlayerTeam(player.id, 1);
      redPlayers.push(player);
      nextTeam = 2;
      sendMessage(`Gracz ${player.name} został przydzielony do drużyny Red`);
    } else if (nextTeam == 2 && bluePlayers.length < playersInTeam) {
      room.setPlayerTeam(player.id, 2);
      bluePlayers.push(player);
      nextTeam = 1;
      sendMessage(`Gracz ${player.name} został przydzielony do drużyny Blue`);
    } else if (redPlayers.length < playersInTeam) {
      room.setPlayerTeam(player.id, 1);
      redPlayers.push(player);
      sendMessage(`Gracz ${player.name} został przydzielony do drużyny Red`);
    } else if (bluePlayers.length < playersInTeam) {
      room.setPlayerTeam(player.id, 2);
      bluePlayers.push(player);           
      sendMessage(`Gracz ${player.name} został przydzielony do drużyny Blue`);
    } else {
      return;
    }
  }
});

cmdManager = new CmdManager();
cmdManager.addCmd(mutePlayerByName);
cmdManager.addCmd(unmutePlayerByName);
cmdManager.addCmd(mutePlayerById);
cmdManager.addCmd(unmutePlayerById);
cmdManager.addCmd(silentMutePlayerByName);
cmdManager.addCmd(silentUnmutePlayerByName);
cmdManager.addCmd(silentMutePlayerById);
cmdManager.addCmd(silentUnmutePlayerById);
cmdManager.addCmd(adminLogin);
cmdManager.addCmd(adminLogout);
cmdManager.addCmd(clearBans);
cmdManager.addCmd(loadClassicMap);
cmdManager.addCmd(loadBigMap);
cmdManager.addCmd(listAllGoals);
cmdManager.addCmd(listPlayerGoals);
cmdManager.addCmd(listUserCmds);
cmdManager.addCmd(listAdminCmds);
cmdManager.addCmd(freeSlotCmd);
cmdManager.addCmd(randomTeams);

function parseCmd(player, message) {
  let cmdData = cmdManager.matchCmd(message);
  if (cmdData) {
    if (cmdData.cmd.opts.onlyAdmin && !player.admin)
      return false;

    let args = cmdData.args;
    args.unshift(player);
    let func = cmdData.cmd.action;
    func.apply(null, args);

    if (cmdData.cmd.opts.showInChat)
      return true;

    return false;
  }

  return !message.startsWith("login");
}

function sendMessage(message) {
  room.sendChat(messagePrefix + message);
}

function isPlayerMuted(player) {
  return muted.names.includes(player.name) || muted.ids.includes(player.id);
}

function isPlayerPrivileged(player) {
  return privilegedPlayers.includes(player.name);
}

function updateAdmins() {
  const players = room.getPlayerList().filter(player => player.id != 0);
  if (players.length == 0) return;
  if (players.find(player => player.admin) != null) return;
  room.setPlayerAdmin(players[0].id, true);
  sendMessage(`Gracz ${players[0].name} otrzymał uprawnienia Admina`);
  sendMessage(`Wpisz ${cmdPrefix}m1 aby załadować mapę Power Classic`);
  sendMessage(`Wpisz ${cmdPrefix}m2 aby załadować mapę Power Big`);
}

function freeSlot() {
  const players = room.getPlayerList();
  if (players.length !== slots) return;

  for (let id = players.length - 1; id > 0; id--) {
    if (players[id].team === 0 && !players[id].admin && !isPlayerPrivileged(players[id])) {
      return room.kickPlayer(id, "Potrzebny slot");
    }
  }

  for (let id = players.length - 1; id > 0; id--) {
    if (!players[id].admin && !isPlayerPrivileged(players[id])) {
      return room.kickPlayer(id, "Potrzebny slot");
    }
  }

  for (let id = players.length - 1; id > 0; id--) {
    if (!isPlayerPrivileged(players[id])) {
      return room.kickPlayer(id, "Potrzebny slot");
    }
  }

  console.log("You must kick player manually, all players are privileged");
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
