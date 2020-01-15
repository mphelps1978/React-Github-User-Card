import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "../App.css";

const MyProfile = props => {
  console.log(`MyProfile Props: `, props);
  return (
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

      {/* <p>
        <img src={props.aviurl} />
      </p>
      <p>
        <a href={props.linkurl}>{props.login}</a>
      </p>
      <p>{props.name}</p>
      <p>{props.bio}</p>
      <p>Repos: {props.repocount}</p>
      <p>
        Followers: {props.followers} Following: {props.following}
      </p> */}
    </div>
  );
};

export default MyProfile;
