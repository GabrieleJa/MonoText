// finds and sets textareas to use monospaced font
var monospaceTextareas = function() {
  var textareas = document.getElementsByTagName("textarea");

  for (i = 0; i < textareas.length; i++) {
      textareas[i].style.fontFamily = "monospace";
  }
}

// sets MutationObserver to look for dynamic textareas in the body of html
var setMutationObserver = function() {
  // select the target node for mutation observer
  var target = document.body;

  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
    monospaceTextareas();
  });

  // configuration of the observer:
  var config = { attributes: true, childList: true, subtree: true, characterData: true };

  // pass in the target node, as well as the observer options
  observer.observe(target, config);
}

// set textareas to be monospaced on page load
// and then set the mutation observer
monospaceTextareas();
setMutationObserver();
