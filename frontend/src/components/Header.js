import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 60,
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Grid container>
              <Grid item xs={6} className={classes.left}>
                <a href="#">
                  <img src="./logo_Dabyss.png" className={classes.logo} />
                </a>
                <Typography variant="h6" className={classes.title}>
                  <a href="#">MinigameDabyss</a>
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.right}>
                <Button color="inherit" className={classes.games}>
                  ゲーム一覧
                </Button>
                <Button color="inherit">ブログ</Button>
                <Button color="inherit">お問い合わせ</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default Header;
