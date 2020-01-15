import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Link, Router } from "react-router-dom";
import "../App.css";

const Friends = props => {
  console.log(`Friends Props :`, props);

  return (
    <div className="friends">
      <Card.Group>
        {props.friends.map(friend => (
          <Card>
            <Card.Content>
              <Image floated="right" size="mini" src={friend.avatar_url} />
              <Card.Header>{friend.login}</Card.Header>
              <Card.Meta>Follows Michael</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <a href={friend.html_url} target="_blank">
                  <Button basic color="green">
                    GitHub Profile
                  </Button>
                </a>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default Friends;
