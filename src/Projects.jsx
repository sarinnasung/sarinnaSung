import React from "react";
import Card from "./card";

const Projects = () => {
  return (
    <div>
      <Card
        title="Cybersecurity Log Analyzer powered by Claude"
        body="This project simulates a Security Operations Center (SOC) workflow by automatically identifying suspicious login behavior from uploaded log files. The application combines rule-based detection with Large Language Model (LLM) analysis to provide security teams with actionable insights."
        link="https://github.com/sarinnasung/cybersecurity-log-analyzer-powered-by-claude"
      />

      <Card
        title="Munchies"
        body="This web application that allows users to select their preferred restaurants and receive recommended activities in the surrounding area by utilizing Yelp Restaurant API and Decathlon API. Created wireframes, planned use cases, and conducted user testing to ensure a seamless user experience. Languages used: React, Node.js, MySQL"
        link="https://github.com/sarinnasung/CS411project"
      />

      <Card
        title="Asian Impact & Equity"
        body="This project was proposed by Boston Chinatown Neighborhood Center (BCNC) organization, is a comprehensive statistical analysis on Asian American in Massachusetts, including demographic analysis of population and community analysis of jobs, education, housing. Languages used: Python"
        link="https://github.com/sarinnasung/BCNC---Asian-Impact-Equity"
      />

      <Card
        title="Mini Facebook"
        body="This is a dyanamic application that emulates Facebook. It allows you to add, create, delete friends and create status messages for each one. Languages used: Python"
        link="https://github.com/sarinnasung/cs108-examples"
      />
    </div>
  );
};

export default Projects;
