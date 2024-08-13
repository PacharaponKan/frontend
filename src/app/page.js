import Nav from "./component/navbar";
import Car from "./component/carousel";
import Card from "./component/card";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="bg-dark">
      <div style={{ marginBottom: "10px" }} />
      <Car />
      <div style={{ marginBottom: "10px" }} />
      <Card />
    </div>
  );
}
