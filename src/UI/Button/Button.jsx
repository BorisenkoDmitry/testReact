import "./Button.css"

export default function Button(props) {
    const Class = `${props.className ? props.className + " " : ""}btn`
    return( 
        <button {...props} className={Class}>{props.children}</button>
    )
}