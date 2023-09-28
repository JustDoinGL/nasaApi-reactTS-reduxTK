import { LoadErrorProps } from "./LoadError.type"

import {Loader, Error} from "../index"

const LoadError = ({status}:LoadErrorProps ) => {
  return (
    <>
    {status === 'pending' ? <Loader/> : <Error />}
    </>
    
  )
}

export default LoadError
