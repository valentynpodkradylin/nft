import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import photo from "./../../images/DontGiveFuckBoi.jpg";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

interface AboutProps {
  text: {
    sectionName: string;
    paragraphs: string[];
  };
}

export const About = (props: AboutProps) => {
  const textShadow = useColorModeValue(
    " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de",
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff"
  );

  const { text } = props;
  const { sectionName, paragraphs } = text;

  return (
    <Box
      as="section"
      w="100vw"
      bgGradient={"linear-gradient(my-turquoise-dark 0%, my-pink 100%)"}
      id="about"
      py={"20px"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={["center", "center", "space-between", "space-between"]}
        minH={"100vh"}
        w="85%"
        mx="auto"
        gap="25px"
        flexDir={["column-reverse", "column-reverse", "row", "row"]}
      >
        <Center
          flexDirection={"column"}
          gap="20px"
          h="75%"
          w={["80%", "80%", "30%", "30%"]}
        >
          <motion.div initial="hidden" animate="visible" variants={container}>
            <Image
              borderRadius={"20px"}
              src={photo.src}
              alt="discord"
              h="100%"
            />
          </motion.div>
        </Center>
        <VStack
          alignItems={["center", "center"]}
          w={["80%", "80%", "70%", "70%"]}
          spacing={5}
        >
          <Heading
            fontFamily={'"Sedgwick Ave Display", cursive'}
            as="h3"
            fontSize={"5xl"}
            textShadow={textShadow}
            textAlign="center"
          >
            {sectionName}
          </Heading>
          {paragraphs.map((paragraph, index) => (
            <Text key={index.toString()}>{paragraph}</Text>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};
{
  /* <Image src={discord.src} alt="discord" />; */
}
