import React from 'react'
import css from './Filter.module.css'

export default function Filter({handleFilter }){
  
  return (
    <div>
      <input type="text"
        onChange={(e) => { handleFilter(e) }}
        placeholder="Search contacts by name..."
        className={css.filter}
            />
    </div>
  )
}