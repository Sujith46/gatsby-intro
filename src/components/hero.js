import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled(BackgroundImage)`
  background-image: url('../images/frontcover.jpg');
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin: 0;
  }
`;

const TextBox = styled('div')`
    background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px) / 2) 2rem;
    width: 100%;

    h1{
        text-shadow: 1px 1px 3px #eeddff66;
        font-size: 2.25rem;
    }

    p,
    a {
        color: #222;
        margin: 0;
    }

    a{
        margin-top: 0.5 rem;
    }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "frontcover.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  console.log(image);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft"> 
   
      <TextBox>
        <h1>My Personal Website</h1>
        <p>Hey there! how are you today!?</p>
        <p>
          Learn more about me <Link to="/about/">here &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
