export default function Nav() {
  return (
    <div className="navigation">
      <div className="filter">
        <h6>Filter By:</h6>
        <p>Open Now</p>
        <p>Price</p>
        <p>Categories</p>
      </div>
      <button className="clear-now">Clear Now</button>
    </div>
  );
}
