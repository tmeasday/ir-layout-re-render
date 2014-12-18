Router.configure({
  layoutTemplate: 'layout'
});

Router.route('a');
Router.route('b');

if (Meteor.isClient) {
  Router.go('a')
  Template.layout.events({
    'click button': function(e, t) {
      e.preventDefault();
  
      var findme = $('#find-me').get(0);
      Router.go('b');
      Tracker.flush();
      if ($('#find-me').get(0) !== findme) {
        console.error("Find me was re-rendered for no good reason!!");
      }
    }
  })
}