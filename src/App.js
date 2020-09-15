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
      pokemons:[8,22,6,34,455,635],
      loading:true
    }
  }

  componentDidMount(){
    var y = []
    for(var i=0;i<9;i++){
          y.push(Math.ceil(Math.random()*850));
    }
    this.setState({
       loading:false,
       pokemons:y
    })

  }


  render(){
    const { classes } = this.props;
    return (
      <div >
        <NavigationBar />
        <Grid container spacing={2} className={classes.root} justify="center"
        style={{
          margin: 0,
          width: '100%',
        }}
        >
          {
            this.state.loading ? "Loading":(this.state.pokemons.map((v,i)=>{
              return <Pokemon key={i} ids={this.state.pokemons[i]}/>
            }))
          }
        </Grid>
      </div>
    )
  }
}

export default withStyles(useStyles)(App);