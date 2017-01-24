function generateTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = m >= 10 ? m : ('0' + m);
  s = s >= 10 ? s : ('0' + s);
  return h + ':' + m + ':' + s;
}
function my_clock(ele){
  ele.innerHTML = generateTime()
  setTimeout(function(){my_clock(ele)}, 1000);
}

var clock_div = document.getElementById('my_time')
my_clock(clock_div)


var zhihu_div = document.getElementById('zhihu')
function displayField (response, node) {
  var contents = response.questions
  node.innerHTML = '<ul>' + contents.map(name => `<li>${name}</li>`).join('') + '</ul>'
}

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  chrome.tabs.sendMessage(
    tabs[0].id,
    { action: 'fetch' },
    function (response) {
      displayField(response, zhihu_div)
    }
  )
})