// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({

    // In your render function...
    render: function() {
        // Set variables `name` and `interest`
        var name = "Hello, my name is Chelsea."
        var interest = "I am interested in using technology to make a difference."

        // Return div with two paragraphs
        //div because you can only return ONE argument in this case
        return(
          <div>
            <p>{name}</p>
            <p>{interest}</p>
          </div>
        )
    }
});
// Render your component in the `main` section
ReactDOM.render(</div><MyComponent/>, document.querySelector('main'));

// //if you want more "MyComponent" then gotta put in a div because but gotta be in a div again bc one argument
// ReactDOM.render(
//   <div>
//     <MyComponent/>
//     <MyComponent/>
//   </div>,
//   document.querySelector('main'));
