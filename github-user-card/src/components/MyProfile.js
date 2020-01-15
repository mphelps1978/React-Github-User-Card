//TODO: Need to figure out how to configure the date range for the Contributions Calendar

import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import Calendar from "react-github-contribution-calendar";
import MyCalendar from "./MyCalendar";
import "../App.css";

const MyProfile = props => {
  console.log(`MyProfile Props: `, props);
  return (
    <div>
      <div className="me">
        <Card color="blue">
          <Image src={props.aviurl} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <a href={props.linkurl}>{props.name}</a>
            </Card.Header>
            <Card.Meta>{props.repocount} Repos</Card.Meta>
            <Card.Description>{props.bio}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            {props.followers} Followers | {props.following} Following
          </Card.Content>
        </Card>
      </div>
      <div className="ghcontainer">
        <p>My Github Contributions</p>

        <MyCalendar />
      </div>
    </div>
  );
};

export default MyProfile;
