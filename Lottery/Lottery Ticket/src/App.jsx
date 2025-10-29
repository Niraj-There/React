import { useState } from 'react'
import Lottery from './lottery.jsx'
import './App.css'
import {sum} from './helper.js'
import Ticket from './Ticket.jsx'
import TicketNum from './TicketNum.jsx'
import Form from './Form.jsx'
import CommentsForm from './CommentsForm.jsx'
import Comment from './Comment.jsx'

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
      {/* <Lottery n={3} winningSum={15} winCondition={winCondition} /> */}
      {/* <Form onSubmit={(value) => alert(`You submitted: ${value}`)} /> */}
      <CommentsForm />
      <Comment />
    </>
  )
}

export default App
