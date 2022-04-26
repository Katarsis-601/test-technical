export default function ContainerLayout(props) {
  return (
    <div
      className="container"
      style={{
        width: "90%",
        display: "flex",
        flexFlow: "column wrap",
      }}
    >
      {props.children}
    </div>
  );
}
