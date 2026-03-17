function Section({ children, className="", noPadding = false}) {
    return (
        <section className={`section ${noPadding ? "noPadding" : ""} ${className}`}>
            { children }
        </section>
    );
}

export default Section