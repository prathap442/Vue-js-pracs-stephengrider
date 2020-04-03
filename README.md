# Vuejs
  - the Vue js is basically able to provide us with the directives with which help in the manipulations can be done to a greater extent .
  - The Vue js has got the html field extensions like the that manipulate the html tag and make the normal html attributes to be used for and the extension for the attributes would be 

  Directives: 
    that which add the functionality in manovering the data in the html tags
  ```
    v-if
  ```

  There exists the two way data binding for the Vue

# VueApi details

* data
  - this is basically used to string interpolate the contents in the html and these data can be made available by the syntax of the {{ message }} and the data will have the message
* computed
  - this data can be made to be done in such a way that when there is a change in the data the visualisation can also be changed .
* methods
  - the methods are implemented based on the change of the events like in the inputTextChange and then with the change in the input in the input text field
* template:
  - this can be of the two types like the normal template that exists in the html 
  - the rendered template that can be of the sub html can be attached directly to the Vue instance .


# the computed functions

* These are being declared under the keyword called as the computed that can be utilised as of this way


```
new Vue({
  el: "#app",
  computed:{
    identicon: function(){ // this is the computed function1
      console.log("This is the computed function with name: identicon");
    },
    progress: function(){ // this is the computed function2
      console.log("This is the progressive function");
    }
  },
  data:{ // This can be injected into the html template
    message: "This is the text message1",
    hugo: "THis is the hugo1"
  }
})
```
* These computed functions can be utilised in the Vue Templates

# Interpolated Values 
- in the template can also take up the javascript expressions 

so if we take values to be injected into the template and the data can also be modified at the instinct by using the javascript expressions
```
  {{ message.split('').reverse().join('') }}
```

The message can be split and then can be reversed and then joined to get the output .

# Final Output of the Task
![alt Thisisoutput](https://github.com/prathap442/Vue-js-pracs-stephengrider/blob/master/Peek%202020-04-03%2010-38.gif)

