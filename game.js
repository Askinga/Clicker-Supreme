let clicks = document.querySelecter(.clicks)
}

function Click(){
  clicks.innerHTML = parseFloat(clicks.innerHTML) + 1;
}

function displayText() {
  var text = 'You have ' format(player.clicks) + ' Clicks';
  text.style.display = "block";
}

