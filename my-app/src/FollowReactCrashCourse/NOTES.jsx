/*
* what is conditional rendering?
* Conditional rendering is the act of controlling rendering with various methods such that conditions must be met for
* somehting to be rendered, or for something to be rendered a certain way.
*
* If somethings visibility or display depends on some particular condition then that something is subject to
* "conditional rendering"
*
* when would you use &&?
*
* && is the and short circuit operator. it can be used to "and" two conditions together ensuring that both of them are
* true before running a respective statement. This can be used to conditionally render components because of the
* short circuit.
*
* if the first condition is true only then will it test the second condition, but if the first condition is false it
* won't even run the second test "condition" and in this case the second test is the rendering of a component or
* Some code unit that results in a native DOM element. if the first condition is false, that element will not be
* rendered at all
*
* Would use a ternary if something is going to be rendered one way if a condition is true and a different way if that
* same condition is false
*
* If you need to decide between more than two options or need more complex decision logic,
*
* you coudl stirng ternary operators together, which I would not recommend, you could potentially use map functions,
*
* you coudl string map functions or other mapping logic functions together,
*
* or you could just use C style if else logic, or even switch statements.
*
* still ahve a lot left ot learn in this section so we keep moving forward.
*
* manage and deal with forms in react, strange segue but from are one of the most difficult things to understand and use.
*
* one of reacts greatest weaknesses is probably forms.
*
* many forms libraries that many people turn to so you don't have to build and manage from scratch.
*
* a really small form in the meme generator is not too difficult and a little practice goes a long way.
*
* forms have an action with a url that processes the form, method of post, submitted through submit obutton, php processes the form
*
* javascript and vanilla javascript
*
* selector (get element by ID) goes and gets the form and adds a submit event listener. Function will gather all of the
* information entered on the form and then submit it to the API somehow.
*
* in react we track every single keystroke and that data already is populated when the time comes to submit.
*
* in javascript we submit button click it runs a function gather all the data adn then submit it at that time, in recat we maintain up to date state on any input that happnes in our form, we need state to hold current data typed into our input.
*
*
*
* */

