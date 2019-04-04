var button = document.getElementById("search-btn");                    
button.addEventListener("click", function(){                           
  var text = document.getElementById("search").value;
  var interval = document.getElementById("interval").value;
  if (isNaN(interval)) {
    interval = 5;
  }
  chrome.storage.sync.set({input: text, interval: parseInt(interval) * 1000}, function() {
    alert('Saved successfully!');
  });
});
