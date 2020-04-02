var v1 = new Vue({
  el: "#app",
  data:{ //intialize the list of the ingredients
    message: "Hello World!"
  },
  computed: {
    identicon: function(){
      return jdenticon.toSvg(this.message,200);
    }
  },
  methods: { // all of the methods being defined here for that Vue instance events
    inputTextChange: function(event){
      console.log(event.target.value);
      this.message = event.target.value;
    }
  }
})

v1.message = "This is real world"