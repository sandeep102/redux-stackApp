export const SelectedLibrary = (libraryId) =>{
    return{
        type: 'select_library',
        payload: libraryId
    }

}