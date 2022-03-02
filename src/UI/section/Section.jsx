import './Section.css';
export default function Section(props) {
    return (
        <section className={`${props.className ? props.className + " " : ""}section`}>
            {props.children}
        </section>
    )
}