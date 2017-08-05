import React from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends React.Component{

    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(this.props.libraries)
    }

    renderRow(library){
        return <ListItem library={library} />
    }

    render(){
        return(
            <ListView dataSource={this.dataSource}
            renderRow={this.renderRow} />
        )
    }
}

const mapToStateProps = state =>{
    return { libraries: state.libraries}
}
export default connect(mapToStateProps)(LibraryList)
