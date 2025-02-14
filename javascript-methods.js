/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype."
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object.
- If a method is constructed, then it will be available for the object.
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  res=[]
  // if (callbackFn==undefined) return res; // error in native map if you dont pass a function
  for (let i=0; i<this.length; i++) {
      if (this[i]==undefined) continue;
      res.push(callbackFn(this[i]));
  }
  return res
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  res=[];
  for (let i=0; i<this.length;i++) {
	  if (this[i]==undefined) continue;
      if (callbackFn(this[i])) res.push(this[i]);
  }
  return res
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i=0; i<this.length; i++) {
      if (this[i]==undefined) continue;
      if (callbackFn(this[i])) return true;
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i=0; i<this.length; i++){
      if (this[i]==undefined) continue;
      if (!callbackFn(this[i])) return false;
  }
  return true;
};


// REDUCE //
Array.prototype.myReduce = function(callbackFn, initValue) {
  let value = initValue;
  for(let i = 0; i < this.length; i++){
    value = callbackFn(value, this[i]);
  }
  return value;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let index = 0; index < this.length; index++){
    if(searchElement == this[index]){
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  index = -1;
  for(let i = 0; i < this.length; i++){
    if(searchElement == this[i]){
      return i;
    }
  }
  return index;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  var ret = -1;
  for (let i = 0; i < this.length; i++) {
    if (this[i] == searchElement) ret = i;
  }
  return ret;
};

// KEYS //
Object.myKeys = function(object) {
  var ret = [];
  for (const i in object) {
    ret.push(i);
  }
  return ret;
};

// VALUES //
Object.myValues = function(object) {
  var ret = [];
  for (const i in object) {
    ret.push(object[i]);
  }
  return ret;
};
