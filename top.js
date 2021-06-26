if (!location.hostname.includes("scratch.mit.edu")) {
  alert("You cannot use the bookmarklet on this website!");
  throw new Error("Invalid URL");
}
