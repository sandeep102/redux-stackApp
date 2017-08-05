import React from 'react'
import {Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import {CardSection} from './common'
import * as actions from '../action'

class ListItem extends React.Component{

    componentWillUpdate(){
        LayoutAnimation.spring()
    }
    renderDescription(){
        const { library, expended } = this.props

        if(expended){
            return(
                <Text>{library.description}</Text>
            );
        }
    }

    render(){
        const { textStyle } = styles
        const { id,title } = this.props.library

        return(
            <TouchableWithoutFeedback onPress={()=> {this.props.SelectedLibrary(id)}}>
                <View>
                    <CardSection>
                        <Text style={textStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = {
    textStyle:{
        fontSize: 18,
        paddingLeft: 10
    }
}

const mapStateToProps = (state,ownProps) =>{
    const expended = state.selectedLibraryId === ownProps.library.id

    return { expended }
}

export default connect(mapStateToProps,actions)(ListItem)