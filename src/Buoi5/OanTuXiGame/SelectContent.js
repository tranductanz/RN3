import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SelectItem from './SelectItem'

export class SelectContent extends Component {

    renderSelectItem = () => {
        return this.props.listSelect.map((selectItem) => {
            return (
                <SelectItem
                    key={selectItem.id}
                    selectImage={selectItem.image}
                    selectImageId={selectItem.id}
                    onPress={() => this.props.onSelect(selectItem)}
                    playerSelectItem={this.props.playerSelectItem}
                />
            )
        })
    }

    render() {
        return (
            this.renderSelectItem()
        )
    }
}

export default SelectContent
