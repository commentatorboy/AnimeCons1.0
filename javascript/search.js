var searchbar = document.getElementById('mySearch');
var searchlist = document.getElementById("searchoptions");
searchbar.onkeyup = checkKeyPress;
var json = data;

/* check if keypress was an enter */
function checkKeyPress(e) {
  //notice the of the "mySearch" it is the id of the input
  if (e.keyCode == 13) {
    loadResult(mySearch.value);
  } else {
    searchJSON(mySearch.value);
  }
}

function searchJSON(searchvalue) {
  var result = findKeys(searchvalue);

  removeList();

  if (searchvalue.length > 0) {
    createList(result);
  }

}

function loadResult(key) {
  var regex = "/" + key + "/";
  for (var item in Object.keys(jsonfile)) {
    if (regex.test(item)) {
      window.location.href = jsonfile[item];
      return;
    }
  }
}

function findKeys(query) {
  return json.conventions.filter(function(el) {
    return el.id.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });

}

//remove the search results everytime you press a key
function removeList() {
  searchlist.innerHTML = '';
}

function createList(result) {
  //check if there is something in the list

  //go through each element in the list/object
  for (var i = 0; i < result.length; i++) {
    var entry = document.createElement('li');
    var item = result[i];
    var textnode = document.createTextNode(item.id);
    entry.appendChild(textnode);
    searchlist.appendChild(entry);

  }

}
