import userPhoto1 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto1.jpg'
import userPhoto2 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto2.jpg'
import userPhoto3 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto3.jpg'
import userPhoto4 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto4.jpg'
import userPhoto5 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto5.jpg'
import userPhoto6 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto6.jpg'
import userPhoto7 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto7.jpg'
import userPhoto8 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto8.jpg'
import userPhoto9 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto9.jpg'
import userPhoto10 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto10.jpg'

const SEND_MESSAGE = 'ADD-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: "Alex", photo: userPhoto1},
        {id: 2, name: "Tim", photo: userPhoto2},
        {id: 3, name: "Tobby", photo: userPhoto3},
        {id: 4, name: "John", photo: userPhoto4},
        {id: 5, name: "Arina", photo: userPhoto5},
        {id: 6, name: "Victoria", photo: userPhoto6},
        {id: 7, name: "Max", photo: userPhoto7},
        {id: 8, name: "Kate", photo: userPhoto8},
        {id: 9, name: "Maria", photo: userPhoto9},
        {id: 10, name: "Lina", photo: userPhoto10},
    ],
    messages: [
        {id: 1, message: "Hi", author: false},
    ],
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const message = action.message;
            return {
                ...state,
                messages:
                    [
                        ...state.messages,
                        {id: state.messages.slice(-1)[0].id + 1, message, author: true}
                    ]
            };
        }
        default:
            return state
    }
}

export const sendMessage = (message) => ({type: SEND_MESSAGE, message});