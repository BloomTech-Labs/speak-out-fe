
import testObject from "../../views/userDashboard/components/placementTest/Child/TestObject";
export const GET_CHILD_QUESTIONS = 'GET_CHILD_QUESTIONS'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'

export const getChildQuestions = () => ({
    type: GET_CHILD_QUESTIONS,
    payload: testObject
})

export const nextPage = () => ({
    type: NEXT_PAGE
})

export const prevPage = () => ({
    type: PREV_PAGE
})