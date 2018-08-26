const game = {
  roomName: "POWER SERVER",
  maxPlayers: 8,
  playerName: "Arbiter­",
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
  adminPassword: "password"
};

const prefixes = {
  message: ">>>>> ",
  cmd: "!"
};

let superAdmins = [0];
let mutedPlayers = [];
let noCmdPlayers = [];
let afkPlayers = [];

let adminAccess = {
  "nickname1": "his_password",
};

let authenticatedAdmins = [];
let adminLogs = {};

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

let goals = {};
let ownGoals = {};
let assists = {};
let cmdManager;
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

    if (ownGoal) {
      let score = ownGoals[scorer.name] || 0;
      ownGoals[scorer.name] = score + 1;
    } else {
      let score = goals[scorer.name] || 0;
      goals[scorer.name] = score + 1;
    }

    if (assistOccured) {
      let score = assists[ball.assistingPlayer.name] || 0;
      assists[ball.assistingPlayer.name] = score + 1;
    }
  }

  ball.kickedBy = null;
  ball.touchedBy = null;
};

room.onPlayerChat = (player, message) => {
  if (message.startsWith(prefixes.cmd)) {
    if (!canPlayerInvokeCmd(player)) return false;

    let showMessage = parseCmd(player, message.substring(1));
    return showMessage && (!isPlayerMuted(player) && config.chatEnabled || isSuperAdmin(player));
  }

  return !isPlayerMuted(player) && config.chatEnabled || isSuperAdmin(player);
};

room.onPlayerKicked = (kickedPlayer, reason, ban, byPlayer) => {
  if (isSuperAdmin(kickedPlayer) || authenticatedAdmins.includes(kickedPlayer.id) && !isSuperAdmin(byPlayer)) {
    if (ban)
      room.clearBans();

    room.kickPlayer(byPlayer.id, "Tak się bawić nie będziemy", true);
  }

  let banInfo = {};
  banInfo.banned = kickedPlayer.name;
  banInfo.admin = byPlayer.name;
  banInfo.reason = reason;
  banInfo.isBan = ban;
  banInfo.time = new Date();

  if (!bans[byPlayer.id]) {
    bans[byPlayer.id] = [];
  }
  bans[byPlayer.id].unshift(banInfo);

  if (!authenticatedAdmins.includes(byPlayer.id) && !isSuperAdmin(byPlayer)) {
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
  }
};

room.onPlayerAdminChange = (changedPlayer, byPlayer) => {
  if (!changedPlayer.admin && (isSuperAdmin(changedPlayer) || authenticatedAdmins.includes(changedPlayer.id) && !isSuperAdmin(byPlayer))) {
    if (byPlayer !== null && byPlayer.name !== game.playerName) {
      room.setPlayerAdmin(changedPlayer.id, true);
      room.setPlayerAdmin(byPlayer.id, false);

      sendMessage("Próba odebrania uprawnień adminowi wyższej rangi!");
    }
  }
};

/*room.onStadiumChange = (newStadiumName, byPlayer) => {
  // Game host has to be set as SuperAdmin
  if (!isSuperAdmin(byPlayer)) {
    if (/finezja/i.exec(newStadiumName)) {
      sendMessage("Finezja to syf, na tym grać nie będziemy");
    } else if (newStadiumName === maps.powerClassic) {
      return room.setCustomStadium(maps.powerClassic);
    } else if (newStadiumName === maps.powerBig) {
      return room.setCustomStadium(maps.powerBig);
    } else {
      sendMessage(`Nie możesz ustawić innej mapy`);
    }
    showMapCmds();
    room.setCustomStadium(maps.powerClassic);
  }
};*/

room.onPlayerJoin = player => {
  // updateAdmins();
  if (config.muteNewPlayers) {
    mutePlayer(player);
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

let superAdminLogin = new Cmd({cmd: `slogin ${config.adminPassword}`}, (invokedBy) => {
  if (!invokedBy.admin) {
    room.setPlayerAdmin(invokedBy.id, true);
    setSuperAdmin(invokedBy);
  }
});

let adminLogin = new Cmd({cmd: "alogin", params: {password: "(.+)"}, paramsOptional: true}, (invokedBy, password) => {
  if (!invokedBy.admin) {
    authenticatedAdmins.push(invokedBy.id);
    let adminPassword = adminAccess[invokedBy.name];
    if (adminAccess[invokedBy.name] && adminPassword === password) {
      room.setPlayerAdmin(invokedBy.id, true);
    }
  }
});

let adminLogout = new Cmd({cmd: "logout", onlyAdmin: true}, (invokedBy) => {
  room.setPlayerAdmin(invokedBy.id, false);
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
  for (let scorer in goals) {
    sendMessage(`Gracz ${scorer} bramek ${goals[scorer]}`, invokedBy);
  }
});

let listTopOGPlayers = new Cmd({cmd: "otop10", showInChat: true}, (invokedBy) => {
  let props = Object.keys(ownGoals).map(function(key) {
    return { key: key, value: this[key] };
  }, ownGoals);

  props.sort((p1, p2) => p2.value - p1.value);
  let top10 = props.splice(0, 10);
  let pos = 1;
  if (top10.length) {
    sendMessage("Top10 Strzelców do własnej bramki: ", invokedBy);
  }
  while (top10.length) {
    let tmp = top10.splice(0, 5);
    let message = tmp.map(e => `${pos++}. ${e.key}: ${e.value}`).join(", ");
    sendMessage(message, invokedBy);
  }
});

let listTopPlayers = new Cmd({cmd: "top10", showInChat: true}, (invokedBy) => {
  let props = Object.keys(goals).map(function(key) {
    return { key: key, value: this[key] };
  }, goals);

  props.sort((p1, p2) => p2.value - p1.value);
  let top10 = props.splice(0, 10);
  let pos = 1;
  if (top10.length) {
    sendMessage("Top10 Strzelców: ", invokedBy);
  }
  while (top10.length) {
    let tmp = top10.splice(0, 5);
    let message = tmp.map(e => `${pos++}. ${e.key}: ${e.value}`).join(", ");
    sendMessage(message, invokedBy);
  }
});

let listTopAssistingPlayers = new Cmd({cmd: "atop10", showInChat: true}, (invokedBy) => {
  let props = Object.keys(assists).map(function(key) {
    return { key: key, value: this[key] };
  }, assists);

  props.sort((p1, p2) => p2.value - p1.value);
  let top10 = props.splice(0, 10);
  let pos = 1;
  if (top10.length) {
    sendMessage("Top10 Asystujących: ", invokedBy);
  }
  while (top10.length) {
    let tmp = top10.splice(0, 5);
    let message = tmp.map(e => `${pos++}. ${e.key}: ${e.value}`).join(", ");
    sendMessage(message, invokedBy);
  }
});

let listPlayerGoals = new Cmd({cmd: "goals", params: {name: "(.+)"}, showInChat: true}, (invokedBy, playerName) => {
  let scorers = Object.keys(goals).filter(scorer => scorer.includes(playerName));
  let score;
  let player = null;

  if (scorers.length === 1) {
    score = goals[scorers[0]];
    player = scorers[0];
  } else if (!scorers.length) {
    score = 0;
  } else {
    scorers = scorers.filter(scorer => scorer === playerName);
    if (scorers.length === 1) {
      score = goals[scorers[0]];
      player = scorers[0];
    } else {
      return sendMessage(`Znaleziono wielu graczy pasujących do wzorca ${playerName}`);
    }
  }

  player = player || playerName;
  sendMessage(`Gracz ${player} bramek ${score}`, invokedBy);
});

let listPlayerOwnGoals = new Cmd({cmd: "owngoals", params: {name: "(.+)"}, showInChat: true}, (invokedBy, playerName) => {
  let scorers = Object.keys(ownGoals).filter(scorer => scorer.includes(playerName));
  let score;
  let player = null;

  if (scorers.length === 1) {
    score = ownGoals[scorers[0]];
    player = scorers[0];
  } else if (!scorers.length) {
    score = 0;
  } else {
    scorers = scorers.filter(scorer => scorer === playerName);
    if (scorers.length === 1) {
      score = ownGoals[scorers[0]];
      player = scorers[0];
    } else {
      return sendMessage(`Znaleziono wielu graczy pasujących do wzorca ${playerName}`);
    }
  }

  player = player || playerName;
  sendMessage(`Gracz ${player} bramek samobójczych ${score}`, invokedBy);
});

let listPlayerAssists = new Cmd({cmd: "assists", params: {name: "(.+)"}, showInChat: true}, (invokedBy, playerName) => {
  let scorers = Object.keys(assists).filter(scorer => scorer.includes(playerName));
  let score;
  let player = null;

  if (scorers.length === 1) {
    score = assists[scorers[0]];
    player = scorers[0];
  } else if (!scorers.length) {
    score = 0;
  } else {
    scorers = scorers.filter(scorer => scorer === playerName);
    if (scorers.length === 1) {
      score = assists[scorers[0]];
      player = scorers[0];
    } else {
      return sendMessage(`Znaleziono wielu graczy pasujacych do wzorca ${playerName}`);
    }
  }

  player = player || playerName;
  sendMessage(`Gracz ${player} asyst ${score}`, invokedBy);
});

let listPlayerCmds = new Cmd({cmd: "komendy", showInChat: true}, (invokedBy) => {
  let list = cmdManager.listPlayerCmds();
  list = list.filter(cmd => !cmd.includes("login"));
  while (list.length) {
    let cmds = list.splice(0, 11);
    sendMessage(cmds.join(" "), invokedBy);
  }
});

let listAdminCmds = new Cmd({cmd: "akomendy", onlyAdmin: true}, (invokedBy) => {
  let list = cmdManager.listAdminCmds();
  list = list.filter(cmd => !cmd.includes("login"));
  while (list.length) {
    let cmds = list.splice(0, 8);
    sendMessage(cmds.join(" "), invokedBy);
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
    sendMessage(`Gracz ${player.name}, id ${player.id}`);
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
  if (invokedBy.team !== 0) {
    if (nextPauseAction) {
      sendMessage(`Gra zatrzymana przez gracza ${invokedBy.name}`);
    } else {
      sendMessage(`Gra wznowiona przez gracza ${invokedBy.name}`);
    }
    room.pauseGame(nextPauseAction);
  }
});

let randomTeams = new Cmd({
  cmd: "random", params: {team_size: "(\\d+)"}, showInChat: true, onlyAdmin: true}, (invokedBy, playersInTeam) => {
  playersInTeam = Number(playersInTeam);
  let players = room.getPlayerList().filter(player => player.id !== 0);
  players = players.filter(player => player.team !== 0 || !isPlayerAfk(player));

  if (playersInTeam * 2 > players.length) {
    return sendMessage(`Nie ma wystarczającej liczby graczy (pomijając graczy AFK) aby wylosować ${playersInTeam} osobowe drużyny`);
  }

  const freePlayers = players.filter(player => player.team === 0);
  const redPlayers = players.filter(player => player.team === 1);
  const bluePlayers = players.filter(player => player.team === 2);

  if (redPlayers.length > playersInTeam || bluePlayers.length > playersInTeam) {
    return sendMessage(`Drużyny są liczniejsze niż ${playersInTeam} graczy, musisz przenieść zawodników na ławkę`);
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
cmdManager.add(listPlayerGoals);
cmdManager.add(listPlayerCmds);
cmdManager.add(listAdminCmds);
cmdManager.add(freeSlotCmd);
cmdManager.add(randomTeams);
cmdManager.add(listPlayers);
cmdManager.add(listTopPlayers);
cmdManager.add(goalInfoCmd);
cmdManager.add(giveSuperadmin);
cmdManager.add(stopCmdForPlayerByName);
cmdManager.add(stopCmdForPlayerById);
cmdManager.add(clearMutes);
cmdManager.add(clearNoCmdPlayers);
cmdManager.add(muteAll);
cmdManager.add(toggleChat);
cmdManager.add(muteNewPlayers);
cmdManager.add(listPlayerAssists);
cmdManager.add(listTopAssistingPlayers);
cmdManager.add(setPlayerAfkCmd);
cmdManager.add(setPlayerBackCmd);
cmdManager.add(listAfkPlayers);
cmdManager.add(listTopOGPlayers);
cmdManager.add(listPlayerOwnGoals);
cmdManager.add(pauseGameCmd);

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

function sendMessage(message, initiator) {
  if ((!initiator || !isPlayerMuted(initiator)) && (config.chatEnabled || initiator && isSuperAdmin(initiator))) {
    room.sendChat(prefixes.message + message);
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
  data.goals = goals;
  data.assists = assists;
  data.ownGoals = ownGoals;
  data.bans = bans;

  let jsonData = JSON.stringify(data);
  download(jsonData, "server_stats.txt", "text/plain");
}

function restoreServerData(dataContent) {
  let data = JSON.parse(dataContent);
  if (data.goals) {
    goals = data.goals;
  }
  if (data.assists) {
    assists = data.assists;
  }
  if (data.ownGoals) {
    ownGoals = data.ownGoals;
  }
  if (data.bans) {
    bans = data.bans;
  }
}

function showNotificationAboutAFK() {
  sendMessage("Użyj !afk aby zasygnalizować nieobecność");
  let delay = 500;
  setTimeout(() => {
    sendMessage("Wpisz !jj aby oznajmić powrót");
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
