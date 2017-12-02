'use strict';

interface Options {
  direction: string
}

class Drag {
  public ele: HTMLElement
  public startX: number
  public startY: number

  constructor (ele: HTMLElement, options?: Options) {
    this.ele = ele
    this.startX = 0
    this.startY = 0

    this.ele.addEventListener('mousedown', this._startDrag, false)
  }

  private _startDrag = (ev: MouseEvent) => {
    this.startX = ev.clientX - this.ele.offsetLeft
    this.startY = ev.clientY - this.ele.offsetTop

    document.addEventListener('mousemove', this._dragging, false)
    document.addEventListener('mouseup', this._dragged, false)

    return false
  }

  private _dragging = (ev: MouseEvent) => {
    const left: number = ev.clientX - this.startX
    const top: number = ev.clientY - this.startY

    this.ele.style.left = `${left}px`
    this.ele.style.top = `${top}px`

    ev.preventDefault && ev.preventDefault()
  }

  private _dragged = (ev: MouseEvent) => {
    document.removeEventListener('mousemove', this._dragging, false)
    document.removeEventListener('mouseup', this._dragged, false)
  }
}

export default Drag
