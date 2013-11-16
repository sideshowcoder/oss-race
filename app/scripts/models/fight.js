OssRace.Fight = Ember.Object.extend({
  challengerName: "",
  defenderName: "",
  fightEnded: false,
  scoreChallenger: 0,
  scoreDefender: 0,

  defenderWins: function() {
    return (this.get("scoreDefender") > this.get("scoreChallenger"))
  }.property("scoreChallenger", "scoreDefender"),

  challengerWins: function() {
    return (this.get("scoreChallenger") > this.get("scoreDefender"))
  }.property("scoreChallenger", "scoreDefender")
})
