import React from 'react'
import data from '../data'

const GiftList = () => {
  return (
    <div className='list-container'>
       <h2>Lista de Regalos</h2>
       <ul>
        	{data.map((gift) => { 
						return (
						<li key={gift.id}>{gift.name}</li>
					)})}
        </ul> 
    </div>
  )
}

export default GiftList