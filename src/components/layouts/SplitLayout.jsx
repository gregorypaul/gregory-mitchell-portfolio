function SplitLayout({ children, reverse=false}) {
    return (
        <div className="split-layout" 
            style={{
                display:"grid",
                gridTemplateColumn: "1fr 1fr",
                gap: "60px",
                alignItems: "center",
                direction: reverse ? "rtl" : "ltr"
            }}
        >
            { children }
        </div>
    )
}

export default SplitLayout