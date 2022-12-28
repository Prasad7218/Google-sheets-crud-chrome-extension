chrome.storage.local.get(["tdata"]).then((result) => {
  console.log("Value currently is " + result.tdata);
  //   document.getElementById("tab-data").innerHTML = result.tdata;
  localStorage.setItem("tabledata", result.tdata);
});

//
chrome.storage.local.get(["theaddata"]).then((result) => {
  console.log("Value currently is " + result.theaddata);
  //   document.getElementById("tab-data").innerHTML = result.tdata;
  localStorage.setItem("tableheaddata", result.theaddata);
});
