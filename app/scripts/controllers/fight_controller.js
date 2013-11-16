function osrcUrlFor(name) {
  return "/?url=" + encodeURI("http://osrc.dfm.io/" + name + ".json")
}

function computeScore(data) {
  var eventSum = data.usage.events.reduce(function(acc, e) {
    return acc + e.total
  }, 0)
  return eventSum
}

OssRace.FightController = Ember.ObjectController.extend({
  actions: {
    newFight: function() {
      var challenger = this.get("challengerName")
      var defender = this.get("defenderName")
      if(challenger === "" || defender === "") return

      var that = this
      return Ember.$.getJSON(osrcUrlFor(challenger), function(data) {
        that.content.set("scoreChallenger", computeScore(data));

        Ember.$.getJSON(osrcUrlFor(defender), function(data) {
          that.content.set("scoreDefender", computeScore(data));
          that.content.set("fightEnded", true);
        })
      })
    }
  }
})
