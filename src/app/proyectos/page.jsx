import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
// import imagenPageCv from "../../assets/images/imagenPageCv.png";
// import imagenGym from "../../assets/images/imagenGym.png";

export default function Proyectos() {

  const pages = [
    {
      name: "Creador de CV",
      title: "",
      to: "https://cv-ariel-blue.vercel.app",
      text: "Proyecto creado para crear currículum de una manera personalizada, cambiando colores de textos y colores de la hoja, luego se puede descargarlo en formato PDF para poder reenviarlo de forma facil y eficiente",
      // img: imagenPageCv,
    },
    {
      name: "Gimnasio KingGym",
      title: "",
      to: "https://rutinas-five.vercel.app",
      text: "Proyecto para rutinas de gimnasio, en el cual se puede dividir ejercicios por días, y armar un proceso de entrenamiento mas ajustable a las necesidades del alumno.",
      // img: imagenGym,
    },
  ];

  return (
    <div className="flex justify-center flex-col mx-10 gap-11 mt-16">
      {pages.map((proyect, index) => {
        return (
          <Card key={index} className="flex">
            <CardContent>
              {/* <Image src={proyect.img} alt="image"/> */}
            </CardContent>
            <CardContent>
              <Typography variant="h4">{proyect.name}</Typography>
              <Typography component="div">{proyect.text}</Typography>
              <Typography
                sx={{ color: "text.secondary", mb: 1.5 }}
              ></Typography>
              <Typography variant="body2"></Typography>
              <CardActions>
                <Link href={proyect.to}>
                  <Button>Ver página</Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
