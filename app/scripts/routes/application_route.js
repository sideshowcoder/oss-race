OssRace.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo("fight")
  }
});
