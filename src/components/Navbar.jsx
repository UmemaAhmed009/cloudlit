import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  useDisclosure,
  IconButton,
  Hide,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/white1.png";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const onHomeButtonClick = () => {
    navigate("/home");
    //window.open('/contact');
  };
  const onAboutButtonClick = () => {
    navigate("/about");
    //window.open('/contact');
  };
  const onServicesButtonClick = () => {
    navigate("/services");
    //window.open('/contact');
  };
  const onBenefitsButtonClick = () => {
    navigate("/benefits");
    //window.open('/contact');
  };
  const onRoadmapButtonClick = () => {
    navigate("/roadmap");
    //window.open('/contact');
  };
  const onContactButtonClick = () => {
    navigate("/contact");
    //window.open('/contact');
  };

  return (
    <div className="navFix">
      <Box
        bg="white
        "
        px={9}
        width={["100%"]}
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <div className="logo">
            <img
              src={logo} // Replace with the URL of your image
            />
          </div>
          <HStack w="42%"></HStack>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button
                  className="btnRes"
                  style={{ backgroundColor: "white" }}
                  onClick={onHomeButtonClick}
                >
                    <b>Home</b>
                </Button>

                <Button
                  className="btnRes"
                  style={{ backgroundColor: "white" }}
                  onClick={onAboutButtonClick}
                >
                  <b>About</b>
                </Button>

                <Button className="btnRes" style={{ backgroundColor: "white" }}
                 onClick={onServicesButtonClick}>
                    <b>Services</b>
                </Button>

                <Button className="btnRes" style={{ backgroundColor: "white" }}
                onClick={onBenefitsButtonClick}>
                    <b>Benefits</b>
                </Button>

                <Button className="btnRes" style={{ backgroundColor: "white" }}
                onClick={onRoadmapButtonClick}>
                    <b>Roadmap</b>
                </Button>

                {/* <Button className="btnRes">
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button> */}
              </HStack>
            </HStack>
          </Flex>
          {/* {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button>
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Skills">
                    {" "}
                    <b>Skills</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Projects">
                    <b>Projects</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null} */}

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}

              <Button
                background="linear-gradient(to right, #5146CA, #6015B2)"
                _hover={{
                  bg: "linear-gradient(to right,blue, blueviolet)",
                  color: "white",
                }}
                color="white"
                variant="solid"
                onClick={onContactButtonClick}
                size={["sm", "md"]}
                id="resumeBtn"
              >
                {/* <Link to="/contact"> */}
                CONTACT US
                {/* </Link> */}
                {/* <Link></Link> */}
                {/* <Link
                    id="navRes"
                    href={Shubham_Verma_Resume}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    download="Shubham_Verma_Resume"
                  >
                    RESUME
                  </Link> */}
              </Button>
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#About">
                    <b>Services</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Skills">
                    {" "}
                    <b>Benefits</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Projects">
                    <b>Roadmap</b>
                  </a>
                </Button>

                {/* <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button> */}
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}
