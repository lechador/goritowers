import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content" data-theme="forest">
  <div>
    <img src='/logo.png' alt="logo" width={150} />
    <p>გორი თაუერსი<br/>AG Development</p>
  </div> 
  <div>
    <span className="footer-title">სათაური 1</span> 
    <a className="link link-hover">ბლოკი</a> 
    <a className="link link-hover">ბლოკი</a> 
    <a className="link link-hover">ბლოკი</a> 
    <a className="link link-hover">ბლოკი</a>
  </div> 
  <div>
    <span className="footer-title">სათაური 2</span> 
    <a className="link link-hover">ბლოკი</a> 
    <a className="link link-hover">ბლოკი</a> 
    <a className="link link-hover">ბლოკი</a> 
    <a className="link link-hover">ბლოკი</a>
  </div> 
  <div>
    <span className="footer-title">სათაური 3</span> 
    <a className="link link-hover">ბლოკი</a> 
    <a className="link link-hover">ბლოკი</a> 
    <a className="link link-hover">ბლოკი</a>
  </div>
</footer>
  )
}
