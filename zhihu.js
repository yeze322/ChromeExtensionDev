function dataExtractor (className, deconstructor) {
  return function () {
    var nodes = document.getElementsByClassName(className)
    var ret = []
    for(var i=0;i<nodes.length;i++){
      ret.push(deconstructor(nodes[i]))
    }
    return ret
  }
}
var getAuthorList = dataExtractor('author-link', x => x.text)
var getQuestionList = dataExtractor('question_link', x => x.text.trim())

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'fetch') {
    console.log('send items')
    sendResponse({
      authors: getAuthorList(),
      questions: getQuestionList()
    })
  }
})