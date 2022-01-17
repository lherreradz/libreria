import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Icon, Input } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";


export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Link href="/">
              <a>
                <Icon name='home' size='big' color="black"/>
              </a>
            </Link>
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <Link href="crearAutor">
              <a>
                <Button>Crear Autor</Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
