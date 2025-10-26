import Product from "./Product.jsx";


function ProductTab() {
  let styles = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
    color: "black"
  };
  return (
    <>
      <div style={styles}>
        
        <Product title="Logitech MX Master" idx={0} />
        <Product title="Apple Pencil (2nd Generation)" idx={1} />
        <Product title="Samsung Galaxy Tab S7" idx={2} />
        <Product title="Sony WH-1000XM4" idx={3} />
      </div>
    </>
  );
}


export default ProductTab;