import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFile,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skill</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rohitc437"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rohitkumar-chaudhari-0160b9119"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/rohitchaudhari_official/"
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>

      {/* <SocialIcons href="http://google.com">
        <AiFillFile size="3rem"></AiFillFile>
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
