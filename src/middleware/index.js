import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleare } from 'redux'

export default applyMiddleare(
    thunk,
    logger,
)

