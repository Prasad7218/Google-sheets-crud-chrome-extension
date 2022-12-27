chrome.storage.local.get(["tdata"]).then((result) => {
  console.log("Value currently is " + result.tdata);
  //   document.getElementById("tab-data").innerHTML = result.tdata;
  localStorage.setItem("tabledata", result.tdata);
});
