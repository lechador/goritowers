'use client'
import {useTranslations} from 'next-intl';
import RequestCall from "./requestCall"
import LocaleSwitcher from './languageSwitch';

export default function CallModal({locale}) {
  const t = useTranslations('Navigation');
  return (
    <div className="navbar-end">
        <LocaleSwitcher locale={locale} />
        <a className="btn bg-defaultOrange text-white hover:bg-defaultOrange" onClick={()=>window.my_modal_2.showModal()}>
        {t("RequestCall")}
        </a>
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
