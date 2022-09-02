import React, { createContext, useState } from "react";

export const QuizContext = createContext({})

function QuizProvider({ children }) {

    const [quizCount, setQuizCount] = useState(0)

    return (
        <QuizContext.Provider value={{ quizCount, setQuizCount }}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizProvider