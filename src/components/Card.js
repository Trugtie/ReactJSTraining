import React from "react";
import CardImg from "../images/cardavt.jpg";
import IconMail from "../images/Mail.jpg";
import IconLink from "../images/linkedin.png";
import TwiterIcon from "../images/Twitter Icon.png"
import FacebookIcon from "../images/Facebook Icon.png"
import InstaIcon from "../images/Instagram Icon.png"
import GitHubIcon from "../images/GitHub Icon.png"
export default function Card() {
  return (
    <div className="card">
      <div className="card__content">
        <img src={CardImg} class="card__img" />
        <h1 class="card__name">Laura Smith</h1>
        <h5 class="card__job">Frontend Developer</h5>
        <h6 class="card__website">laurasmith.website</h6>
        <div className="card__btn">
          <button className="btn">
            <img className="icon__btn" src={IconMail}></img>
            Email
          </button>
          <button className="btn btn--linkedi">
            <img src={IconLink}  className="icon__btn"/>
            LinkedIn
          </button>
        </div>
        <div className="Card__info">
          <h4 className="Info__Title">About</h4>
          <p className="Info__Description">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h4 className="Info__Title">Interests</h4>
          <p className="Info__Description">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
        <div className="Card__Link">
          <img src={TwiterIcon}/>
          <img src={FacebookIcon}/>
          <img src={InstaIcon}/>
          <img src={GitHubIcon}/>
        </div>
      </div>
    </div>
  );
}
