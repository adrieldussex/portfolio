export default function Layout(props) {
    return (
        <div className="min-h-screen flex justify-center items-center bg-neutral-800">
            {props.children}
        </div>
    )
}
