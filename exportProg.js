var secureList = [3, 55, 6, 1, 20];

exports.sortedList = [];


// exports.pusher = function () {
//     this.sortedList.push();
// };

var sorter = function sortfunction(a, b) { 
    return (a - b)
};

exports.action = function () {
    // duplicates an array, (x,y) x is start, y is end (but not including) 
    var clone = secureList.slice(0)
    // this.sortedList = secureList;
    // if using (this.sortedList = secureList) you are copying by reference, and it will mutate source. Use splice() to build a clone
    this.sortedList = clone;
    this.sortedList = this.sortedList.sort(sorter);
    // console.log(secureList);
    // this.pusher(this.sortedList);
};