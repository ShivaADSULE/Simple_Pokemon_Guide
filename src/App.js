import React from 'react';
import './App.css';
import NavigationBar from './Navigationbar';
import Pokemon from './Pokemon';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
});

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      pokemons:[1,2,3]
    }
  }

  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then(r=>{
      return r.json();
    }).then(r=>{
      console.log(r);
      this.setState({
        pokemons:r.results
      });
      console.log(this.state.pokemons);
    }).catch(e=>{
      console.log(e);
    })

  }


  render(){
    const { classes } = this.props;
    return (
      <div >
        <NavigationBar />
        <Grid container spacing={2} className={classes.root} justify="center">
          {
            this.state.pokemons.map((v,i)=>{
              return <Pokemon key={i} {...this.state.pokemons[i]} />
            })
          }
        </Grid>
      </div>
    )
  }
}

export default withStyles(useStyles)(App);