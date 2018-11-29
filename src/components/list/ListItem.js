import React, { Component } from 'react'
import DragHandle from './DragHandle'

export default class ListItem extends Component {
  onDragStart = e => {
    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({
        oldIndex: e.currentTarget.id,
        oldParentPath: this.props.parent
      })
    )
  }

  render () {
    return (
      <div
        style={{
          width: '350px',
          transform: `translateX(${this.props.depth * 22.5}px)`
        }}
        id={this.props.path}
        onDrop={this.props.onDrop}
        onDragOver={e => e.preventDefault()}
      >
        <div
          className='card-container'
          draggable
          onDragStart={this.onDragStart}
          id={this.props.id}
        >
          <div className='card-handle'>
            <DragHandle />
          </div>

          <div className='card'>
            <div className='card-content'>
              <p className='title'>{this.props.title}</p>
              <p className='title'>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
