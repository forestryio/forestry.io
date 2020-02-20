module.exports = {
  setCodeTabs: function(tabName) {
    var tabGroups = Array.from(document.querySelectorAll(".code-tabs"))
    for (var tabGroup of tabGroups) {
      setActiveTab(tabGroup, tabName)
    }
  },
  initCodeTabs: function() {
    var tabGroups = document.querySelectorAll(".code-tabs")
    for (var tabGroup of tabGroups) {
      var firstLabel = tabGroup.querySelector(".tab-labels").children[0].dataset
        .for
      setActiveTab(tabGroup, firstLabel)
    }
  }
}

function setActiveTab(tabGroup, tabName) {
  var matchedTab = tabGroup.querySelector(`.tab[data-label="${tabName}"]`)
  var matchedLabel = tabGroup.querySelector(`.tab-label[data-for="${tabName}"]`)

  /*
   *  Only change active tab if the tab is present in this group.
   *  This allows tab switching to apply to all tabs on the page without causing issues
   */
  if (matchedTab && matchedLabel) {
    deactivateTabs(tabGroup)
    matchedTab.classList.add("active")
    matchedLabel.classList.add("active")
  }
}

function deactivateTabs(tabGroup) {
  var tabs = Array.from(tabGroup.querySelectorAll(".tab"))
  var labels = Array.from(tabGroup.querySelectorAll(".tab-label"))
  for (var tab of tabs) {
    tab.classList.remove("active")
  }
  for (var label of labels) {
    label.classList.remove("active")
  }
}
