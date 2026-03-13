(function () {
  const isVercel = window.location.hostname.endsWith(".vercel.app");
  const isGitHubPages = window.location.hostname === "sarju88.github.io";

  const BASE_PATH = isVercel ? "/" : (isGitHubPages ? "/PlayX/" : "/");

  window.PLAYX_BASE_PATH = BASE_PATH;

  window.playxPath = function (file) {
    return BASE_PATH + file.replace(/^\/+/, "");
  };

  window.playxGo = function (file) {
    window.location.href = window.playxPath(file);
  };

  window.playxReplace = function (file) {
    window.location.replace(window.playxPath(file));
  };
})();
