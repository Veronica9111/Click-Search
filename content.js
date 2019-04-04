document.addEventListener('DOMContentLoaded', function()
{
  chrome.storage.sync.get({input: 'Default', interval: 5000}, function(items){
    setTimeout(function() {
      var input = document.getElementsByTagName("input")[0];
      input.value = items.input;
      var button = document.getElementsByTagName("button")[0];
      button.click();
    }, parseInt(items.interval));
  });
});
