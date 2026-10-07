import Image from "next/image";
import BarraProgreso from "../components/barra";
import Formulario from "../components/formulario";
import Timer from "../components/time";

export default function Home() {
  return (
    <div>
    <div className="flex justify-center">
      <BarraProgreso/>
    </div>
    <div className="flex justify-center">
      <Formulario/>
    </div>
    <div className="flex justify-center">
      <Timer />
    </div>
    </div>
  );
}
