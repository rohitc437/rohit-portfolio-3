import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <img
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            src="https://media-exp1.licdn.com/dms/image/C5603AQHZThGy-zfUnA/profile-displayphoto-shrink_400_400/0/1615536543229?e=1646870400&v=beta&t=8_Y3gqedCH3IeM26uqjwj6L-G4RlOwt92_eGH9pkGTc"
          ></img>
          <br />
          <h5>
            Rohitkumar Chaduhari <br />
            Personal Portfolio
          </h5>
        </SectionTitle>
        {/* <SectionText>
          The purpose of JavaScript Mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </SectionText> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/10tc12POBX1UyP2Hvr1gMWXJHBtYElOje/view?usp=sharing"
        >
          <Button>Resume </Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
