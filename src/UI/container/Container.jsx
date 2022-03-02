import './Container.css';
export default function Container(props) {
    return (
        <div className={`container ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    )
}