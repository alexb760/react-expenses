# Renderion list and Conditional Content

## outputting conditional data.

we can render short conditional inside the return area like ternary condition

```javascript
return <div>{condition ? <p>true</p> : <p>true</p>}</div>;
```

we can not render long statement like `if` or `loops`

also we can trick reat by using javascript twicks.

```javascript
return (
  <div>
    {condition === 0 && <p>true</p>}
    {condition > 0 && <p>false</p>}
  </div>
);
```

the statement `&&` will tell javascript to match only this part of te condition
this will make our code more redable.

cleanest way to do this.

```javascript
let condition = ´fasle´
if (element.length > 0){
    condition = ´true´
}

return (
  <div>
    {condition}
  </div>
);
```
