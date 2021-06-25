function MyObject(data) {
    this.data = data;
  }  
   
  MyObject.prototype = {
    getData: function() {
      return this.data;
    }
  }
   
  var o = new MyObject("data");
  ///////////////////////////////////////////////////////////////

  var proto = {protoprop: "protoprop"};
function C() { this.cprop = "cprop" };
C.prototype = proto;
function F() { this.fprop = "fprop" };
F.prototype = proto;
 
var f = new F();
f.protoprop;    // Has prototype properties
//=> "protoprop"
f.fprop;        // Has F properties
//=> "fprop"
f.cprop;        // Doesn't have C properties
//=> undefined
f instanceof C; // Is an instance of C!?!
//=> true

//////////////////////////////////////////////////////////////////

function C() {
    this.instance_member = "whoops!"
  }
   
  var c = C();             // Forgot "new"
  c;
  //=> undefined;
  window.instance_member;  // Property added to global namespace!
  ///=> "whoops!"

  //////////////////////////////////////////////////////////////////