'use client'
import axios from "axios";
import ComponentTitle from "./componentTitle";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";


export default function RequestCall({showTitle, theme}) {
  const t = useTranslations('RequestCall')
  const nameRef = useRef('')
  const numberRef = useRef('')
  const reasonRef = useRef('')
  function handleSubmit(e) { 
    e.preventDefault()
    let name = nameRef.current.value
    let number = numberRef.current.value
    let reason = reasonRef.current.value
    axios.post('/api/send-email', {
      name, number, reason
    })
    nameRef.current.value = ''
    numberRef.current.value = ''
    reasonRef.current.value = `${t('goal')}`
    toast.success(`${t('alert')}`, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <div className="text-center py-10" data-theme={theme}>
        {
          showTitle ? <ComponentTitle title={t('request')} /> : null
        }
        
        <h3 className="my-8 text-lg">{t('sendNumber')}</h3> 
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center"> 
                <input type="text" ref={nameRef} placeholder={t('name')} className="input input-bordered w-full max-w-xs mb-4" />
                <input type="tel" ref={numberRef} placeholder={t('number')} className="input input-bordered w-full max-w-xs mb-4" />
                <select defaultValue={t('goal')} ref={reasonRef} className="select select-bordered w-full max-w-xs mb-4">
                    <option disabled>{t('goal')}</option>
                    <option>{t('buy')}</option>
                    <option>{t('other')}</option>
                </select>
                <button type="submit" className="btn bg-defaultOrange text-white tracking-wider hover:bg-defaultOrange">
                  {t('button')}
                </button>
            </div>
          </form>
    </div>
  )
}
