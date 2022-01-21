import {CSSProperties, FC} from 'react'
import {ConnectDropTarget} from 'react-dnd'
import {DropTarget} from 'react-dnd'
// import { ItemTypes } from './ItemTypes'

const ItemTypes = {
    BOX: 'box',
}

const style: CSSProperties = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}

export interface DustbinProps {
    allowedDropEffect: string
    connectDropTarget: ConnectDropTarget
    canDrop: boolean
    isOver: boolean
}

const Dustbin: FC<DustbinProps> = ({
                                       canDrop,
                                       isOver,
                                       allowedDropEffect,
                                       connectDropTarget,
                                   }) => {
    const isActive = canDrop && isOver

    let border = 'none'

    if (isActive) {
        border = '3px dotted purple'
    } else if (canDrop) {
        border = '3px dotted pink'
    }

    return connectDropTarget(
        <div style={{...style, border}}>
            {`Works with ${allowedDropEffect} drop effect`}
            <br/>
            <br/>
            {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>,
    )
}

export default DropTarget(
    ItemTypes.BOX,
    {
        drop: ({allowedDropEffect}: DustbinProps) => ({
            name: `${allowedDropEffect} Dustbin`,
            allowedDropEffect,
        }),
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
)(Dustbin)
