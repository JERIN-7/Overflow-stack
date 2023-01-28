import React from 'react'
import { useParams } from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import'./Questions.css'
import {Link} from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers'
const QuestionDetails = () => {

    const { id } = useParams();
   
  var questionslist=[{
    _id:"1" ,
    upVotes: 3,
    downVotes:2,
    numberofAnswers:2 ,
    questionTitles : "What is the function?",
    questionBody : "It meant to be",
    questionTags : ["node js","java","react js","moongo db"],
    userPosted : "mono",
    askedOn : "1 Jan",
    answer: [{
        answerBody:"Answer",
        userAnswered:"kumar",
        answeredOn:"Jan 2",
        userId:2
    }]
    

  },
  {
    _id:"2" ,
    upVotes: 2,
    downVotes:5,
    numberofAnswers:0 ,
    questionTitles : "What is the function?",
    questionBody : "It meant to be",
    questionTags : ["javascript","react js","python"],
    userPosted : "mono",
    askedOn : "1 Jan",
    answer: [{
        answerBody:"Answer",
        userAnswered:"kumar",
        answeredOn:"Jan 2",
        userId:2
    }]

  },
  {
    _id:"3" ,
    upVotes: 3,
    downVotes:5,
    numberofAnswers:2 ,
    questionTitles : "What is the function?",
    questionBody : "It meant to be",
    questionTags : ["javascript","R","python"],
    userPosted : "mono",
    askedOn : "1 Jan",
    answer: [{
        answerBody:"Answer",
        userAnswered:"kumar",
        answeredOn:"Jan 2",
        userId:2
    }]

  }]
  return (
    <div className='question-details-page'>
        {
            questionslist === null ?
            <h1> Loading.....</h1> :
            <>
            {
                  questionslist.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                        <section className='question-details-container'>
                            <h1>{question.questionTitles}</h1>
                              <div className='question-details-container-2'>
                                     <div className="question-votes">
                                        <img src={upvote} alt="" width="18"/>
                                        <p>{question.upVotes - question.downVotes}</p>
                                        <img src={downvote} alt="" width="18"/>

                                     </div>
                                     <div style={{width : "100%"}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map((tag) =>(
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-action-user">
                                            <div>
                                                <button type='button'>Share</button>
                                                <button type='button'>Delete</button>

                                            </div>
                                            <div>
                                                <p>Asked {question.askedOn}</p>
                                                <Link to={`/User/${question.userId}`} className="user-link" style={{color:"#0086d8"}}>
                                                    
                                                 <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                 <div>
                                                    <p>{question.userPosted}</p>
                                                 </div>
                                                </Link>
                                            </div>
                                        </div>
                                     </div>
                              </div>
                        </section>
                        {
                            question.numberofAnswers !== 0 && (
                                <section>
                                    <h3>{question.numberofAnswers} answers</h3>
                                    <DisplayAnswers key={question._id} question = {question}/>
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                               <h3>Your Answers</h3>
                               <form >
                                <textarea name="" id="" cols="30" rows="10" /> <br/>
                                <input type="Submit" className='post-ans-btn' value="post Your Answer"/>
                               </form>
                               <p>Browse other Questions Tagged 
                                {
                                    question.questionTags.map((tag) => (
                                        <Link to="/Tags" key={tag} className="ans-tags">{tag}</Link>
                                    ))
                                } or 
                                <Link to='/AskQuestions' style={{textDecoration : "none" , color:"009dff"}}> ask your own question.</Link>
                               </p>
                        </section>
                    </div>
                    
              ))
            }

            </>
        }
    </div>
  )
}

export default QuestionDetails