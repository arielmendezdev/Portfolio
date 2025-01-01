import { pages } from "@/complementos/pages";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export default function Proyectos() {
  return (
    <div className="flex justify-center flex-col mx-10 gap-11 mt-16">
      {pages.map((proyect, index) => {
        return (
          <Card key={index} className="flex">
            <CardContent>
              <Image src={proyect.img} alt="image"/>
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
