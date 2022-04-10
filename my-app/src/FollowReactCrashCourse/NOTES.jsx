
/*
everytime a box gets clicked it runs the function that is assigned to onCLick
in this case, props.toggle(props.id)

remember that we have ot wrap the function in another function to pass arguments to it.

so onClick is assigned like this:
onCLick={()=>{props.toggle(props.id)}}

when we call this function we are updating react state,

when we update a variable that is defined as react state, i.e.
[sArrayOfBoxes, sSetArrayOfBoxes]React.useState(arrayOfBoxes)

then we need to consider if we are updating react state with regard to what the state previously was.

so if we are counting up, then we need to use the function that is passed back to us to update react state.
since we care about what the number previously was to get the new number.

And in this case, if we are updating an element in an array, then we need to use the previous contents of the array
that that element is included.



*/