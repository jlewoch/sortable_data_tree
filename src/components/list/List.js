import React, { Component } from 'react'
import { setPath, searchTree, setNewLocation, flatarr } from './utils'
import ListItem from './ListItem'
import LoadingIcon from '../loading/LoadingIcon'
import { list } from '../../data/tree_data'
class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      list: []
    }
  }

  onDrop = e => {
    const data = JSON.parse(e.dataTransfer.getData('text'))

    this.setState({
      list: setNewLocation(
        this.state.list,
        e.currentTarget.id,
        data.oldParentPath,
        data.oldIndex
      )
    })
    console.log(this.state)

    e.stopPropagation()
  }
  componentDidMount = () => {
    setPath(list)
    this.setState({ loading: false, list: searchTree(list) })
  }

  render () {
    if (this.state.loading) {
      return <LoadingIcon />
    }

    return (
      <div className='list'>
        {flatarr(this.state.list).map((item, index) => {
          return (
            <ListItem
              title={item.title}
              description={item.description}
              id={item.path.split('/').pop()}
              key={item.path}
              parent={item.parent}
              path={item.path}
              onDrop={this.onDrop}
              depth={item.depth}
            />
          )
        })}
      </div>
    )
  }
}

export default List
