import React, { useState } from 'react'

import styles from './Roomba.module.scss'

// import RoombaConstants from '@/components/Roomba.constants'
const GRID_SIZE = 10
const createNElementArray = (n: number) => Array(n).fill(0)
const POINT_RIGHT = 1
const POINT_LEFT = 3
const POINT_DOWN = 2
const POINT_UP = 0

const pointerArray = ['👆', '👉', '👇', '👈']
const pointerArraySize = pointerArray.length

function Roomba() {
  const [roombaPosn, setRoombaPosn] = useState([0, 0]) //mIdx, nIdx
  const [roombaPointerPosn, setRoombaPointerPosn] = useState(POINT_UP) //mIdx, nIdx

  const handleTurnRight = () => {
    const newRoombaPointerPosn = (roombaPointerPosn + 1) % pointerArraySize
    setRoombaPointerPosn(newRoombaPointerPosn)
  }

  const handleMoveFwd = () => {
    const currMIdx = roombaPosn[0]
    const currNIdx = roombaPosn[1]

    if (roombaPointerPosn === POINT_UP) {
      if (currNIdx === 0) {
        return
      }
      //UP
      const nextNIdx = currNIdx - 1
      setRoombaPosn([currMIdx, nextNIdx])
      return
    }
    if (roombaPointerPosn === POINT_RIGHT) {
      if (currMIdx === 9) {
        return
      }
      //RIGHT
      const nextMIdx = roombaPosn[0] + 1
      setRoombaPosn([nextMIdx, currNIdx])
      return
    }
    if (roombaPointerPosn === POINT_DOWN) {
      if (currNIdx === 9) {
        return
      }
      //DOWN
      const nextNIdx = roombaPosn[1] + 1
      setRoombaPosn([currMIdx, nextNIdx])
      return
    }
    if (roombaPointerPosn === POINT_LEFT) {
      if (currMIdx === 0) {
        return
      }
      //LEFT
      const nextMIdx = roombaPosn[0] - 1
      setRoombaPosn([nextMIdx, currNIdx])
      return
    }
  }

  const tenRows = (mIndex: number) => (
    <div className={styles.Column} key={mIndex}>
      <>{console.log('HIPPOS', mIndex)}</>
      {createNElementArray(GRID_SIZE).map((elem, nIndex) => (
        <div className={styles.Cell} key={nIndex}>
          <>{console.log('nIndex', mIndex, nIndex, roombaPosn[0])}</>
          {mIndex === roombaPosn[0] && nIndex === roombaPosn[1] ? (
            pointerArray[roombaPointerPosn]
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div>
      <h1>Roomba</h1>
      <button onClick={handleTurnRight}>Turn right</button>
      <button onClick={handleMoveFwd}>Move forward</button>

      <div className={styles.Roomba}>
        <div className={styles.Grid}>
          {createNElementArray(GRID_SIZE).map((elem, mIndex) =>
            tenRows(mIndex),
          )}
        </div>
      </div>
    </div>
  )
}

export default Roomba
