'use client'

import RequestCall from "./requestCall"

export default function CallModal() {
  return (
    <div className="navbar-end">
        <a className="btn bg-defaultOrange text-white hover:bg-defaultOrange" onClick={()=>window.my_modal_2.showModal()}>შეუკვეთე ზარი</a>
        <dialog id="my_modal_2" className="modal">
        <div method="dialog" className="modal-box w-11/12 max-w-5xl" data-theme="dark" >
            <RequestCall showTitle={false} theme={'dark'} /> 
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    </div>
  )
}
