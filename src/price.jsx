export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
        color: "black"
    };
    let newStyles = {
        fontWeight: "bold",
        color: "black"
    };

    let styles = {
        backgroundColor: "#e0c367",
        height: "25%",
        width: "100%",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    };
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>

        </div>
    );
}