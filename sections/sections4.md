# Lifting-up state.

We can pass data from child to parents by passing a function from the nearest parent to the child
then executing the function which in other words will gather all data and copy inside the parent compnent

```
const myFunction = (data) =>{
    //do something big here.
}

<ComponentParen onMyLiftingUpData={myFunction}>

//Child component.

export default childComponent = (props) =>{
    const submitHandler = (event) =>{
        event.preventDefault()
        //Asume you are using useState already.
        const myInput = setMyInput(event.target.value);
        //There you go!
        //Lifting up your data to parent component.
        props.onMyLiftingUpData(myInput);
    }
    return <div>
    <h1>some form here </h1>
    </div>
}
```

- When we suse two-ways component we can call these componen as a controlled compones.
  so, we can control the child component from its parent how is that:

```javaScript
parent-component --> Define a handler and a useState.
Child-component --> gets handler and filds by props.
Child-component --> triggers handler and filds controled by its parent.
```
