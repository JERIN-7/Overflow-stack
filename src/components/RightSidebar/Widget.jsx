import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'
const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>Observability is key to the future of of software(and your DevOps carrer) </p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>Podcast 374:How valuable is your screen name?</p>
        </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18' />
            <p>Review queue workflows-Final release.....</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18' />
            <p>Please welcome valued Associates :#958 -V2blast #959-SpenerG</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={blacklogo} alt="pen" width='18' />
            <p>Outdated Answers: accepted answer is now unpined on stack overflow</p>
        </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <p>38</p>
            <p>Why was this spam flag declined ,yet the question marked as spam?</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>20</p>
            <p>What is the best couese of action when a user was high enough rep to... </p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>14</p>
            <p>Is a link to the"How to ask" help pge a useful comment?</p>
        </div>
        </div>

    </div>
  )
}

export default Widget
