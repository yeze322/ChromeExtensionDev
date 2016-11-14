function getAuthorList(){
  var eles = document.getElementsByClassName('author-link')
  var ret = []
  for(var i=0;i<eles.length;i++){
    ret.push(eles[i].text)
  }
  return ret
}
function renderAuthorList(node){
  var authors = getAuthorList()
  node.innerHTML = authors.length
} 
var header = document.getElementById('zh-home-list-title')
header.innerText = "汪汪汪"
var zhihu_author = document.getElementById('zhihu_author')
renderAuthorList(zhihu_author)