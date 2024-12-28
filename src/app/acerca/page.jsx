import { Box, Chip, Typography } from "@mui/material";
import ariel from "@/assets/images/Foto.png";
import Image from "next/image";
import { lenguajes } from "@/complementos/lenguajes";

export default function Acerca() {

  return (
    <Box sx={{ margin: 5 }}>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={ariel} alt="Ariel Mendez" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography sx={{ fontSize: 30 }}>Biografía</Typography>
          <Typography sx={{ fontSize: 20 }}>
            Hola, soy desarrollador Full Stack con 4 años de experiencia en
            desarrollo web y aplicaciones móviles en desarrollo web y
            aplicaciones móviles. Creo que la tecnología y la programación son
            herramientas poderosas que nos permiten crear soluciones innovadoras
            y transformar el mundo que nos rodea. Con el conocimiento y la
            creatividad adecuada, podemos construir un futuro más inclusivo,
            sostenible y próspero para todos. Mi principal prioridad es
            mantenerme al día de las últimas tendencias del sector
            actualizándome para desarrollarme y crecer profesionalmente. Tengo
            capacidad para trabajar en grupo, empatía y resolución de problemas.
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 5,
            fontSize: 40,
          }}
        >
          Skills
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 4, justifyContent: 'center' }}>
          { lenguajes.map((lenguaje, index) => {
            return (
              <Chip
                sx={{ ":hover": { background: "#dcdcdc" } }}
                className="custom-link"
                label={lenguaje}
                variant="outlined"
                key={index}
              />
            );
          })}
        </Box>
        
      </Box>
    </Box>
  );
}