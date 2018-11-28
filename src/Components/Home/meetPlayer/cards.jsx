import React, {Component} from 'react'
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate'
import PlayerCard from '../../ui/playerCard'
import Otamendi from '../../../Resources/images/players/Otamendi.png'

class  HomeCards extends Component {

     state = {
         cards :[
              {
                  bottom:90,
                  left:300

              },
              {
                  bottom:60,
                  left:200

              },
              {
                  bottom:30,
                  left:100

              },
              {
                  bottom:0,
                  left:0

              }
         ]
          
     }

     showAnimeDiv = () => (
          this.state.cards.map((card, i) => (
               <Animate
               key={i}
               show={this.props.show}
               start={{
                    left:0,
                    bottom:0
               }}
               enter={{
                   left:[card.left],
                   bottom:[card.bottom],
                   timing:{duration:500, ease: easePolyOut}
               }}

               >
                   {({left, bottom}) => {
                       return (
                           <div
                           style={{
                                position:'absolute',
                                left,
                                bottom
                           }}
                           >
                            <PlayerCard
                        number="31"
                        firstName="Nicolos"
                        lastName="Otomendi"
                        bck={Otamendi}
                            />
                               </div>
                       )

                   }}
                    
                   </Animate>
          )) 
     )

    render () {
        console.log('Otamendi',Otamendi)
        return (
            <div>

                {this.showAnimeDiv()}
    
                </div>
    
        )

    }
       
  
}

export default HomeCards