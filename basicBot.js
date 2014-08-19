var fs=require("fs");

function init(twimod){
  eh=twimod.eventHandler;

  eh.registerEvent("loggedOn", function(){
    bot.setPersonaState(twimod.steam.EPersonaState.Online);
  });

  eh.registerCommand("about", function(msg){
    msg.reply(twimod.bot.users[twimod.bot.steamID].playerName + "\n(c) 2013-2014 No More Sugar, tdlive aw'sum & contributors.\nPowered by IWriteLists " + msg.twimod.version + ". http://github.com/NoMoreSugar/iwritelists");
  });
}

module.exports = init;
