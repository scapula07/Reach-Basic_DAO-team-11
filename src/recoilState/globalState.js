import {atom} from "recoil"

export const AccountState = atom({
    key: 'AccountState',
    default: {},
  });



export const TimeoutState =atom({
  key:"Timeout",
  default:"Ongoing"
})


export const PollState =atom({
  key:"Poll",
  default:"counting..."
})


export const DaoState =atom({
  key:"Dao",
  default:"rejected"
})


export const ExternalFunctionState =atom({
  key:"extenalfunc",
  default:""
})