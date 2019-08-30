class SortedList {
  constructor() {
    this.list = [];
    this.length = 0;
  }
  add(item) {
    this.length = this.list.push(item); // push returns new array length
    // sort elements ...
    this.list = this.list.sort((a, b) => a - b); // => returns directly
  }
  /**
   * 
   * @throws throws an OutOfBound error if the provided pos is outside range of the sorted list
   */
  get(pos) {
    if (pos < 0 || pos >= this.length) throw new Error("OutOfBounds");
    return this.list[pos]; // return last element in array
  }
  max() {
    if (!this.length) throw new Error("EmptySortedList");
    return this.list[this.length - 1]; // return last element in array
  }
  min() {
    if (!this.length) throw new Error("EmptySortedList");
    return this.list[0]; // return first element in array
  }
  average() {
    if (!this.length) throw new Error("EmptySortedList");
    return this.sum() / this.length; // returns sum / num of elements in array
  }
  sum() {
    if (!this.length) return 0; // if empty arrray (0 : falsy)
    return this.list.reduce((a, c) => a += c); // returns the sum
  }
};

// module is a global object in node runtime
module.exports = SortedList; // node's way to expose some values
