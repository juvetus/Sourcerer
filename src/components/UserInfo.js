import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { USER_INFOS } from "../graphql/UserQuery";
import { Card, Form, Image, Icon } from "semantic-ui-react";
import { UserStats } from "./UserStats";

function UserInfo() {
  const { error, loading, data } = useQuery(USER_INFOS);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [login, SetLogin] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [rerepositories, setRepositories] = useState("");
  const [userInput, setUserIpunt] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("New data: ", data);
    setAvatarUrl(data.user.avatarUrl);
    // setName(data.user.name);
    // setFollowers(data.user.followers);
  }, [data]);

  return (
    <div>
      <div className="navbar">GitHub Profil</div>
      <div className="search">
        {/* <Form>
          <Form.Group>
            <Form.Input placeholder="GitHub user" name="github"></Form.Input>
            <Form.Button content="Search"></Form.Button>
          </Form.Group>
        </Form> */}
      </div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="card">
          <Card>
            <Image src={avatarUrl} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{data.user.name}</Card.Header>
              <Card.Header>{data.user.login}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Icon name="handshake" />
              {data.user.bio}
            </Card.Content>
            <Card.Content extra>
              <Icon name="github" />
              {data.user.followers.totalCount} Followers
            </Card.Content>
            <Card.Content extra>
              <Icon name="github" />
              {data.user.following.totalCount} Following
            </Card.Content>
            <Card.Content extra>
              <Icon name="archive" />
              {data.user.repositories.totalCount} Repositories
            </Card.Content>
            <Card.Content extra>
              <Icon name="home" />
              {data.user.location} Location
            </Card.Content>
          </Card>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
