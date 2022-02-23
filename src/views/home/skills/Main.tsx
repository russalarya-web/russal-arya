import React from 'react';
import '../../../App.css';
import styled from 'styled-components';
import { Content, Section, Subtitle } from '../Page';
import ListGen from './ListGen';

type Props = {text: string}

export const Label = ({text}: Props) => {
    const RoundLabel = styled.span`
        border: 1px solid;
        padding: 8px 16px;
        font-size: calc(16px + 0.2vmin);
        margin: 5px;
        border-radius: 20px;
        font-family: Oxygen;
    `;

    return <RoundLabel className="yellow-text">{text}</RoundLabel>
}

const RowContent = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 50px;
    text-align: center;
`;

const ColContent = styled.div`
    display: flex;
    width: 50%;
    margin: 0;
    padding: 30px;
    flex-direction: column;
`;

export const Area = styled.div`
    margin: 10px;
    width: 100%;
`;

export const LabelGen = (list: string[]) => {
    return list.map(listItem => {
        return <Label text={listItem} />;
    })
}

const Languages = [
    "JavaScript", "TypeScript",
    "Python", "Java", "Bash", 
    "HTML/CSS", "PHP", "SQL", 
    "Swift", "C#"
]

const Apps = [
    "Web Apps", "Desktop Apps",
    "Chrome Extensions", "Mobile Apps",
    "REST APIs", "Command Line"
]

const Frameworks = [
    "React.js", "Node.js", "Express",
    "Electron", "Next.js", "Angular",
    "Mongoose", "SwiftUI",
    "Chrome APIs", "React Native"
]

const MoreFrameworks = [
    "Create React App", "Nodemon", 
    "React Hooks", "Bootstrap", 
    "Axios", "Styled Components",
    "BodyParser", "ReactRouter", 
    "Fetch API", 
    "RandomString", "FontAwesome"
]

const Divider = styled.hr`
    width: 25%;
    border: solid 1px;
`;

function Skills() {
    return (
        <Section className="dark-green-gradient">
            <Content>
                <RowContent>
                    <ColContent className="right-border yellow-text">
                        <ListGen list={Languages} heading="Languages" />
                        <ListGen list={Apps} heading="What apps have I worked on?" />
                    </ColContent>
                    <ColContent>
                        <ListGen list={Frameworks} heading="Frameworks" />
                        <Divider className="yellow-text"/>
                        <ListGen list={MoreFrameworks} />
                    </ColContent>
                </RowContent>
            </Content>
        </Section>
    );
}

export default Skills;