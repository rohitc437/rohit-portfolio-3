import React from 'react';
import { DiReact, DiHtml5, DiCss3, DiJavascript,DiMongodb,DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skill</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="6rem" />
        </picture>
        
        <ListContainer>
          <ListTitle>React</ListTitle>
          {/* <ListParagraph>
            Experiece with <br />
            React.js, HTML, CSS, JavaScript
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml5 size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMongodb size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mongodb</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejs size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Technologies;
