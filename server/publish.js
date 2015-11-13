Meteor.publish('publicLists', function() {
  var publicLdapContext = Meteor.npmRequire('epfl-ldap')();

  var getSyncUserBySciper = Meteor.wrapAsync(publicLdapContext.users.getUserBySciper);


    yield ({
      listId: 1,
      text: 'coucou',
      checked: false,
      createdAt: new Date()
    });

  return;
  return[getSyncUserBySciper(169419)];

  //return Lists.find({userId: {$exists: false}});
});

Meteor.publish('privateLists', function() {

  if (this.userId) {
    return Lists.find({userId: this.userId});
  } else {
    this.ready();
  }
});

Meteor.publish('todos', function(listId) {
  check(listId, String);

  return Todos.find({listId: listId});
});
