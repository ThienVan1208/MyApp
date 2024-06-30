

export default function About() {
    return (
        <div>
            <h1>
                This is about page.
            </h1>
            <Name />
            <Hello/>
        </div>
    );
}

export function Name() {
    return (
        <h1>
            My name is ThienZan.
        </h1>
    );
}
export function Hello () {
    return (
        <h1>
            Hello World.
        </h1>
    );
}
