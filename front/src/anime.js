import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Paper,Icon,Grid,Card,CardActionArea,CardContent,CardMedia} from '@material-ui/core'

class Anime extends Component {
    state = {
        details:{},
        id:0,
        recom:[],
        loading:true
    }
    basUrl = 'https://feline-jade.glitch.me/'
    componentDidMount() {

       this.setState({id:this.props.match.params.id,details:this.props.location.state.anime})
       fetch(`${this.basUrl}anime/${this.props.match.params.id}/recommendation`).then(res => res.json()).then(data=>{
           this.setState({recom:data,loading:false})
       })

    }

    
    renderDetails = ()=>(
       <Paper className="details" >
            <Grid container >
            <Grid>
           <img src={this.basUrl+'images/'+this.state.details.cover}/>
            </Grid>
            <Grid  style={{margin:20,textAlign:'left'}}>
           <h3> {this.state.details.name}</h3>
           <p className="score" ><Icon>star_outline</Icon>{" "}{this.state.details.score}</p>
            </Grid>
            
            
            </Grid>
        </Paper>
    )

   

    renderList = ()=>(
        <div>
        <h2>Recommendations</h2>
        <Grid container spacing={2}>
        
        {this.state.recom.map((anime)=>(
            <Grid item xs={6} md={2} key={anime.id}  >
                <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={this.basUrl+'images/'+anime.cover}
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
        </div>
    )

    loading = ()=>(
        <div>
            loading
        </div>
    )

    
    render() {
        return (
            <div>
               {this.renderDetails()}
               <Paper className="details" >
                {this.state.loading?this.loading():this.renderList()}
               </Paper>
              
               
            </div>
        )
    }
}

export default withRouter(Anime)
