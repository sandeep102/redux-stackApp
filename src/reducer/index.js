import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectedReducer from './SelectedReducer'

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectedReducer
})

