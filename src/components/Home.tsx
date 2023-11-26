import {Container, Typography, Button, Stack} from '@mui/material';
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "French",
    code: "fr",
  },
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "Korean",
    code: "ko",
  },
  {
    name: "Spanish",
    code: "es",
  
  },
  {
    name: "Chinese",
    code: "zh-Hans",
    
  },
  {
    name: "English",
    code: "en"
  },
];


const Home = () => {
  const navigate = useNavigate();

  const languageSelectHandler = (language: string): void => {
    navigate(`/learn?language=${language}`);
  };
  return (
    <Container maxWidth = {"md"}>
    <Typography variant = "h3" p = {"3.5rem"} textAlign= {"center"} > Welcome to Speak Up</Typography>

      <Typography textAlign={"center"} variant = "h5" p= {"1rem"}>
        Choose one language to start learning!
      </Typography>
      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {languages.map((i) => (
        <Button
              onClick={() => languageSelectHandler(i.code)}
              key={i.code}
              variant="contained"
            >
              {i.name}
            </Button>
          ))}
        </Stack>
        
    </Container>
      );
};

export default Home;