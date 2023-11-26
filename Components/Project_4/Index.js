import React, { useState, useTransition } from 'react'
import Data from './Data'
import Questions from './Questions';
import './index.css'

const Index = () => {
    const [questions, setQuestions] = useState(Data);
  return (
    <main>
        <div className='container'>
            <h3>Questions and Answer About Login</h3>
            <section className='info'>
                {
                    questions.map((questions) =>{
                        return <Questions key={questions.id} {...questions} />
                    })
                }
            </section>
        </div>
    </main>
  )
}

export default Index