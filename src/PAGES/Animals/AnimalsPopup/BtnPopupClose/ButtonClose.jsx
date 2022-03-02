import "./ButtonClose.css"

export const ButtonClose = (props) => {
    const Class = `${props.className ? props.className + " " : ""}btn__close`
    return (
        <button {...props} className={Class}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.09082" width="29.5699" height="2.95699" transform="rotate(45 2.09082 0)" fill="#333333" />
                <rect y="20.9092" width="29.5699" height="2.95699" transform="rotate(-45 0 20.9092)" fill="#333333" />
            </svg>
        </button>
    )
}