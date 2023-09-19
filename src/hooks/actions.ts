import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

const actions = {
//   ...weatherActions,
//   ...langueActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}