// in a vanilla js app you gather all the fomr data for submission when you click submit

// in react, the fomr data is being constantly aggregated into react state, so when you submit, all the data is already there.

//the name of the element should match the key in state for said elements value
// that way when you handle a change, you can do so by storing the value of an element at that elements name

//saving a checkbox element requires a boolean value, as opposed to other elements whcih mostly use "value" as a string instead of "checked" as a boolean

//watch for a form submit by assigning a function to onSubmit within the properties of a form
//prevent default so that antiquated methods of form submission are not used.

//trigger a form submit by creating a button in a form and clicking that button.