import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import headshot from "../images/IMG_7644.jpg";
import JCwordL from "../images/jcwordl.jpg";
import Dashboard from "../images/Dashboard.png";
import FAQ from "../images/FAQ.png";
import Scheduling from "../images/Scheduling 1.png";

import YoutubeEmbed from "../components/YoutubeEmbed";
import "../index.css";

function Home(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#AAAE7F",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const ItemCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#AAAE7F",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "600px",
  }));

  return (
    <div>
      <Grid container spacing={2} padding={5}>
        <Grid item xs={6}>
          <Item>
            <img src={headshot} className="photo" alt="headshot" />

            <div className="font-text" style={{ textAlign: "center" }}>
              <p>Here I am at the St. Paul Farmer's Market</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <span className="font-fun">Hello!</span>
            <span className="font-text">
              <p>
                My name is Elizabeth and I am a final year master's student at
                Tufts University studying computer science. I am currently
                seeking a full-time software engineering role upon my graduation
                in May 2024.
              </p>
            </span>
          </Item>
          <Grid container spacing={2} paddingTop={2}>
            <Grid item xs={12}>
              <Item>
                <span className="font-header">Favorite Classes:</span>

                <span className="font-text">
                  <p>
                    Machine Structures and Programming Languages, Advanced
                    Algorithms, Computing For Developing Regions, Quantum
                    Software Development, Quantum Information, Introduction to
                    Cybersecuity, Software Development and Quality, and Modern
                    Physics
                  </p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <span className="font-text">
                  <p>Learn more about my resume, projects, and thoughts!</p>
                </span>
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <span className="font-fun">some of my favorite projects ...</span>
        </Grid>
        <Grid item xs={4}>
          <ItemCard>
            <span className="font-header">JCwordL</span>
            <img src={JCwordL} className="project-photo" alt="headshot" />

            <div className="font-text">
              <p>
                An implementation of a bilingual, English/Latin Wordle specific
                to conventions with a combined 2100+ attendees.
              </p>
            </div>
          </ItemCard>
        </Grid>
        <Grid item xs={4}>
          <ItemCard>
            <span className="font-header">HealthConnect</span>
            <YoutubeEmbed embedId="rA6jjL2kaZU?si=6H2huKo92uqyy8h-" />

            <div className="font-text">
              <p>
                A phone-based interface that quantifies medical severity through
                ChatGPT API and provides recommendations to the nearest clinic
                with the necessary specialty.
              </p>
            </div>
          </ItemCard>
        </Grid>
        <Grid item xs={4}>
          <ItemCard>
            <span className="font-header">JumboCode</span>
            <img src={Dashboard} className="project-photo" alt="headshot" />
            <img src={FAQ} className="project-photo" alt="headshot" />
            <img src={Scheduling} className="project-photo" alt="headshot" />

            <div className="font-text">
              <p>
                Serve as a frontend developer for a website for the Boston-based
                non-profit, GCode, a co-living, working, and learning
                opportunity for women of color with a team of 12 student
                developers.
              </p>
            </div>
          </ItemCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
