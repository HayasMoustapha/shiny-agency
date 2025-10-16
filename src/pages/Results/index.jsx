import { useContext } from "react"
import { SurveyContext } from "../../utils/context"

const Results = () => {
  const { answers } = useContext(SurveyContext)

  console.log(answers)
  return (
    <div>
        <h1>These are results of your questions tags</h1>
    </div>
  )
}

export default Results