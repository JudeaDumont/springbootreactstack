
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

One of the things that is a concern is, which comonents it is re rendering, how it is rerendering the components,
and how to optimize what is being re rendered as well as how it is deciding to render it potentially.

and now, the reason why i started this tutorial, to figure out how a child component can gain access to its parents
state and make changes to it.

if that is the case, then the parent child component relationship is a dependency tree. in which case,
cycles are probably catastrophic.

*/