function Container({ children, size = "lg", className = "", padding=true }) {
  const sizes = {
    sm: "720px",
    md: "960px",
    lg: "1140px",
    xl: "1320px",
    full: "100%"
  }

  return (
    <div
        className={`container ${className}`}
            style={{ 
                maxWidth: sizes[size],
                padding: padding ? "0 24px" : "0"
        }}
    >
      {children}
    </div>
  );
}

export default Container