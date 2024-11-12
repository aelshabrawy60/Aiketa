import React, { useEffect, useState, useImperativeHandle } from 'react';
import './QuestionsCard.css';
import Question from '../Question/Question';

const QuestionsCard = React.forwardRef(({ questions, learnPrompot, color }, ref) => {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));

  const updateItem = (index, newValue) => {
    setAnswers(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index] = newValue;
      return updatedItems;
    });
  };

  useEffect(() => {
    console.log(answers);
    console.log(learnPrompot)
  }, [answers]);

  function createUserInput() {
    let prompot = 'i have answerd some question here to help you\n';
    for (let i = 0; i < questions.length; i++) {
      prompot += questions[i] + '\n' + answers[i] + '\n';
    }
    return [prompot, learnPrompot];
  }

  useImperativeHandle(ref, () => ({
    createUserInput,
  }));

  return (
    <div className='question-card-container d-flex flex-column gap-3'>
      {questions.map((q, i) => (
        <Question question={q} setAnswer={updateItem} color={color} index={i} key={i} />
      ))}
    </div>
  );
});

export default QuestionsCard;
