export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
        })
        .catch(function(error) {
          window.alert(`
        ${error.message}

        Error code:${error.code}`);
        });
    }
  }
};
