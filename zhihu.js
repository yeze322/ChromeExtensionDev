function getAuthorList(){
  var eles = document.getElementsByClassName('author-link')
  var ret = []
  for(var i=0;i<eles.length;i++){
    ret.push(eles[i].text)
  }
  return ret
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'fetch') {
    var authors = getAuthorList()
    console.log('author: ', authors)
    sendResponse({authors: authors})
  }
})