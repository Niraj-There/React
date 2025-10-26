import "./Product.css";
import Price from "./price.jsx";


function Product({ title, idx}) {
  let oldPrice = ["$100", "$200", "$300", "$400"];
  let newPrice = ["$90", "$180", "$270", "$360"];
  let Description = [[["High-performance wireless mouse"],["Ergonomic design for comfort"]], [["Precision stylus for iPad"],["Perfect for drawing and note-taking"]] , [["Powerful Android tablet"],["Great for productivity on the go"]], [["Noise-cancelling headphones"],["Immerse yourself in sound"]]];
  return (
      <div className="Product">
       <h4>{title}</h4>
       <ul>
         {Description[idx].map((desc, i) => (
           <li key={i}>{desc}</li>
         ))}
       </ul>
       <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      </div>
    );
  } 

export default Product;
