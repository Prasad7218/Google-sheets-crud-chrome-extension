console.log("hello");
const tdata = document.getElementsByTagName("td");
console.log(tdata);

var arr = [];

for (let i = 0; i < tdata.length; i++) {
  var data = tdata[i].innerHTML;
  arr.push(data);
}
chrome.storage.local.set({ tdata: JSON.stringify(arr) }).then(() => {
  console.log("Value is set to " + arr);
});

//

const theaddata = document.getElementsByTagName("span");
console.log(theaddata);

var arr1 = [];

for (let i = 0; i < theaddata.length; i++) {
  var headdata = theaddata[i].textContent;
  arr1.push(headdata);
}
chrome.storage.local.set({ theaddata: JSON.stringify(arr1) }).then(() => {
  console.log("Value is set to " + arr1);
});
