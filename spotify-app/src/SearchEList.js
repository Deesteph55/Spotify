import React from "react";
import { Button, Card, Image, Icon, Grid } from "semantic-ui-react";

export const SearchEList = ({ track, artist, album, playlist }) => {
  const altsrc ='data:image/png;base64,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'
  return (
    <div>
      <Grid columns={3} divided centered>
        <Grid.Row>
          <Grid.Column>
            Songs
            <Card.Group centered itemsPerRow={2} >
              {track.map(unit => (
                <Card key={unit.id} color="purple" >
                  <Image src={unit.album.images[0].url} size="mini" />
                  <Card.Content>
                    <Card.Header>{unit.name}</Card.Header>
                  </Card.Content>
                  <Card.Meta>
                    {unit.artists[0].name}
                  </Card.Meta>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
          <Grid.Column>
            Album
            <Card.Group centered itemsPerRow={2}>
              {album.map(unit => (
                <Card key={unit.id} color="pink" size="mini">
                  <Image src={unit.images[0].url} size="mini" />
                  <Card.Content>
                    <Card.Header>{unit.name}</Card.Header>
                  </Card.Content>
                  <Card.Meta>
                    {unit.artists[0].name}
                  </Card.Meta>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            Artist
            <Card.Group centered itemsPerRow={2}>
              {artist.map(unit => (
                <Card key={unit.id} color="teal" size="small">
                  <Image src={unit.images[0].url} size="mini" />
                  <Card.Content>
                    <Card.Header>{unit.name}</Card.Header>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
          <Grid.Column>
            Playlist
            <Card.Group centered itemsPerRow={2}>
              {playlist.map(unit => (
                <Card key={unit.id} color="olive" size="mini">
                  <Image src={unit.images.length ? unit.images[0].url : altsrc} size="mini" />
                  <Card.Content>
                    <Card.Header>{unit.name}</Card.Header>
                  </Card.Content>
                  <Card.Meta>
                    Owner:
                    {unit.owner.display_name}
                  </Card.Meta>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );

};
