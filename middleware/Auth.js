const Cookies = require("js-cookie");
export default function ({ app }) {
  // If the user is not authenticated
  /*
  this.$socket.client.emit("join", this.$store.state.no._id);
  */
  console.log(Cookies.get("Theme"));
  if (!Cookies.get("Theme")) {
    app.store.commit("Theme", "B");
  } else {
    if (Cookies.get("Theme") == "B") {
      app.store.commit("Theme", "B");
    } else {
      app.store.commit("Theme", "W");
    }
  }
}
