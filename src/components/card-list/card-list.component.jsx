import React from 'react'
import "./card-list.style.css"
import {Card} from '../card/card.component'

export const CardList = (props) => {
    return (
          
            <div className="card-list">
                {
                    props.users.map((user)=>{
                        return (
                            <Card key={user.id} user={user}></Card>
                        )
                    })
                }
            </div>
    )
}