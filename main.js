var s = browser.cookies.getAll({
  domain: ".instagram.com"
}, function(cookieList) {
  console.log(cookieList);
});
