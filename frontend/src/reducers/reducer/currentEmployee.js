import { ASSIGN_EMPLOYEE } from "../../actions/actionTypes";

const currentEmployee = (state = [], action) => {
    switch (action.type) {
        case ASSIGN_EMPLOYEE:
            //console.log(`from reducer: ${JSON.stringify(action.payload)}`);
            return action.payload;
        default:
            return state;
    }
};
export default currentEmployee;