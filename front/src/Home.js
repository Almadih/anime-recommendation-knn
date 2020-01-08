import React, { Component } from 'react'
import {Icon,Card,CardActionArea,CardContent,CardMedia,Grid,LinearProgress} from '@material-ui/core';
export default class Home extends Component {
    state = {
        animes:[],
        loading:true
    }
    
    
    baseUrl = 'https://feline-jade.glitch.me/'

    componentDidMount() {
       this.load(this.baseUrl+'anime')
    }

    load = (url)=>{
        this.setState({loading:true})
        fetch(url).then(res => res.json()).then(data=>{
            this.setState({animes:data,loading:false})
            
        }).catch(err =>{
           
        })
    }


    navigate = (prams)=>{
        this.props.history.push(prams)
    }

    renderList = ()=>(
        <Grid container spacing={2}>
        {this.state.animes.map((anime)=>(
            <Grid item xs={6} md={2} key={anime.id} onClick={()=>{this.navigate({pathname:'/anime/'+anime.id,state:{anime:anime}})}} >
                <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={this.baseUrl+'images/'+anime.cover}
                    title={anime.name}
                  />
                  <CardContent>
                  <h3>
                    {anime.name}
                  </h3>
                  <p className="score" ><Icon>star_outline</Icon>{" "}{anime.score}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
        ))}
        </Grid> 
    )
    
    render() {
        return (

            <div className="manga-container" >
                {this.state.loading?<LinearProgress color="secondary" style={{marginRight: 16}} />:this.renderList() }
                {this.state.err?<div className="error-container" > <Icon className="error" >cloud_offline</Icon></div>:null}
               
            </div>

        )
    }
}
