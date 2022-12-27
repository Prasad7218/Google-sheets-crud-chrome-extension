console.log("hello");
const tdata = document.getElementsByTagName("td");
console.log(tdata);

var arr = [];

for (let i = 0; i < tdata.length; i++) {
  var data = tdata[i].innerHTML;
  arr.push(data);
}
chrome.storage.local.set({ tdata: arr }).then(() => {
  console.log("Value is set to " + arr);
});
