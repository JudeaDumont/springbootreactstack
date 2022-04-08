
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

I finally came to the solution I was looking for.



//Section of code used to refresh list component
    constructor(props) {
        super(props)
        this.listComponent = React.createRef()
    }

    refreshList = () => {
        this.listComponent.current.refreshObjectList();
    };
                <ObjectListComponent
                    ref={this.listComponent}
                    title={"List Of Objects!"}
                />

//Additions to save component
const ObjectSaveComponent = (props) => {
            <Form refreshList={props.refreshList}/>
}

const Form = (props) => {
    const handleSubmit = e => {
        props.refreshList()
        }
}

if the parent component is a class component you have to add a constructor, and in that constructor
create a reference (this.listComponent = React.createRef()) to the child component (ObjectListComponent)  such
that you can call its methods(refreshObjectList()) from the parent .
in the parent, you create a function (refreshList) that you can pass to the sibling (ObjectSaveComponent)
of the reffed component(ObjectListComponent).
the sibling component will execute some behavior(props.refreshList())
which will, in turn, bubble up to the parent until the method of the reffed sibling is hit
(this.listComponent.current.refreshObjectList();)
which the ref "ref={this.listComponent}" defined in the parent gives access.





*/