import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
                'name':"loading"
            },
            type:{
                "bug":0,
                "dragon":1,
                "electric":2,
                "fairy":3,
                "fighting":4,
                "fire":5,
                "flying":6,
                "ghost":7,
                "grass":8,
                "ground":9,
                "ice":10,
                "normal":11,
                "poison":12,
                "psychic":13,
                "rock":14,
                "steel":15,
                "water":16
            }
        }
    }

    componentDidMount(){
        var i = fetch("https://pokeres.bastionbot.org/images/pokemon/"+this.props.myids+".png").then(res=>{
                return res.json();
            }).catch(e=>{
                return e;
            });
        this.setState({
            info:i
        });
    }

    render(){
        const { classes } = this.props;
        var ids = this.props.url + "";
        ids =ids.split("/")[6];
        return (
            <Grid item>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="300"
                image={"https://pokeres.bastionbot.org/images/pokemon/"+ids+".png"}
                title="Contemplative Reptile"
                backgroundSize="100% 100%"
                />
            </CardActionArea>
            <CardContent>
                <Typography className={classes.texts} gutterBottom variant="h5" component="h2">
                    {this.props.name}
                </Typography>
                <Avatar alt="type" src={images[0]} />
                </CardContent>
            <CardActions>
                
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(Pokemon);