import { useParams } from 'react-router'

function Survey() {
  const { questionNumber } = useParams();
  console.log(questionNumber);

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
    </div>
  )
}
export default Survey
