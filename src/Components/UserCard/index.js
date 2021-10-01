import { useDispatch } from "react-redux";
import ActReducer from "../../Store/Modules/Action/ActReducer";
import {useSelector} from 'react-redux'
import { useState } from 'react'

const UserCard = () => {

  const [inputValue, setInputValue] = useState()
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ActReducer(inputValue));
  }

  const result = useSelector((store) => store.User)

  return (
    <div>
      <h1> Username: {result.name}</h1>
      <input value={inputValue} type="text" onChange={(e) => setInputValue(e.target.value)}/>
      <button OnClick={handleClick}>Change</button>
    </div>
  )
}

export default UserCard;