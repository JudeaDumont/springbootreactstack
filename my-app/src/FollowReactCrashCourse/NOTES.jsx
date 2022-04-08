
/*

React will rerender any native dom element that depends on state as defined by the dev

React will also rerender any component that relies on the state to be configured properly.

so

if you have an app that has a parent component and that
parent component defines state,
and then has a child component that gets that state passed into it,
then, when that state changes, any native dom element that depnends on
that state will re render and any child component that has
that state passed into it as props will also be re rendered.

*/