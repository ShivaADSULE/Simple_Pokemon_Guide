import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('./assets/Icons', false, /\.(png|jpe?g|svg)$/));
const styles = theme => ({
    root: {
      maxWidth: 300
    },

});


  
class Pokemon extends React.Component{

    constructor(){
        super();
        this.state = {
            info:{
                'name':"Loading..",
                "species":{
                    "name":"Loading"
                }
            },
            type:{
                "bug":0,
                "dark":1,
                "dragon":2,
                "electric":3,
                "fairy":4,
                "fighting":5,
                "fire":6,
                "flying":7,
                "ghost":8,
                "grass":9,
                "ground":10,
                "ice":11,
                "normal":12,
                "poison":13,
                "psychic":14,
                "rock":15,
                "steel":16,
                "water":17
            },
            colortypes:{
                "bug":[0,"#C3D221"],
                "dark":[1,"#8A6B56"],
                "dragon":[2,"#5C50A4"],
                "electric":[3,"#FEE63B"],
                "fairy":[4,"#FAACFF"],
                "fighting":[5,"#A05649"],
                "fire":[6,"#FB5643"],
                "flying":[7,"#7BA4FF"],
                "ghost":[8,"#7875D0"],
                "grass":[9,"#8DD952"],
                "ground":[10,"#EDCC59"],
                "ice":[11,"#95F1FE"],
                "normal":[12,"#BBBCAE"],
                "poison":[13,"#AA5DA1"],
                "psychic":[14,"#F760B1"],
                "rock":[15,"#CCBA70"],
                "steel":[16,"#C4C2DA"],
                "water":[17,"#55AEFE"]
            },
            mytype:"normal",
            myid:"1"
        }
    }

    async componentDidMount(){
        await fetch("https://pokeapi.co/api/v2/pokemon/"+this.props.ids).then(res=>{
            return res.json()
        }).then(res=>{
            this.setState({
                info:res,
                mytype:res.types[0].type.name
            })
        })
    }



    render(){
        const { classes } = this.props;
        return (
            <Grid item>
            <Card className={classes.root} style={{backgroundColor:this.state.colortypes[this.state.mytype][1]}}>
            <CardActionArea style={{backgroundColor:""}} >
                <CardMedia
                component="img"
                alt={this.props.name}
                height="300"
                image={"https://pokeres.bastionbot.org/images/pokemon/"+this.props.ids+".png"}
                title={this.props.name}
                backgroundSize="100% 100%"
                />
                <CardContent >
                    <Grid container spacing={2} direction="column">
                    <Grid item>
                    <Typography  className={classes.texts} gutterBottom variant="h5" component="h1" align="center">
                            {this.state.info.name}
                    </Typography>
                             </Grid>
                    <Grid  container direction="row">
                        <Grid item container xs={3} justify="center" alignItems="center">
                            <Avatar alt="type" src={images[this.state.type[this.state.mytype]]} title={this.state.mytype} />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography className={classes.texts} gutterBottom variant="subtitle1" component="h2" align="right">
                                <span style={{color:"#116611",fontWeight:"900"}}>{this.state.info.base_experience}Xp</span><br/>
                                Species : {this.state.info.species.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
          
            </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(Pokemon);