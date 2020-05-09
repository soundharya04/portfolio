import React from "react";
import { VSection, Card, Divider } from "./elements";

const Resume = () => {
  return (
    <VSection className="resume" title="Resume">
      <Card color="coral" width="300">
        <div>
          <p className="head1">Experience</p>
          <p>
            Experienced Programmer with a demonstrated history of working in the
            information technology and services industry. Skilled in React.js,
            Node.js, Python, Django, Core Java, and MySQL, MangoDB.
          </p>
        </div>

        <Divider color="coral" widthPercent="35" />
        <div>
          <p className="head2">MiraMedAjuba</p>
          <p>Full Stack Developer 2019-Present</p>
        </div>
        <div>
          <p className="head2">Cognizant</p>
          <p>React Developer 2017-2019</p>
        </div>
      </Card>
      <Card
        color="yellow"
        width="300"
        bodyStyle={{
          backgroundColor: "rgba(255,255,255,0.05)",
          marginTop: "70px",
        }}
      >
        <div>
          <p className="head1">Education</p>
          <p>
            A Professional Engineer entitled with a Bachelor Degree in
            Electronics and Communications Engineering.
          </p>
        </div>
        <Divider color="yellow" widthPercent="35" />
        <div>
          <p className="head2">B.E.ECE</p>
          <p>GKM College of Engg 2012 - 2016</p>
        </div>
        <div>
          <p className="head2">HSC</p>
          <p>Zion Mat. Hr. Sec. School 2010 - 2012</p>
        </div>
        <div>
          <p className="head2">10th</p>
          <p>SDA Mat. SChool 2009 - 2010</p>
        </div>
      </Card>
      <Card color="deepskyblue" width="300">
        <p className="head1">Achievements</p>
        <Divider color="deepskyblue" widthPercent="35" />
        <p className="head2">Task Management System</p>
        <p>
          Web Application to allot, monitor and track tasks and productivity.
        </p>
        <p className="head2">Cards Drag and Drop</p>
        <p>
          Developed an intuitive Application of card data with nested Drag and
          Drop functionality
        </p>
        <p className="head2">IDE</p>
        <p>Developed an IDE for XML with dynamic preview</p>
      </Card>
    </VSection>
  );
};

export default Resume;
