const Cookies = require("js-cookie");
export default function ({ app }) {
  // If the user is not authenticated
  /*
  this.$socket.client.emit("join", this.$store.state.no._id);
  */

  if (!Cookies.get("Theme")) {
  } else {
    if (Cookies.get("Theme") == "B") {
      document.querySelector("body").classList.add("dark");

      app.store.commit("Theme", "B");
    } else {
      app.store.commit("Theme", "W");
      document.querySelector("body").classList.remove("dark");
    }
  }
}
