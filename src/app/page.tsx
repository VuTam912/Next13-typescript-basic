import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <div>
      <ul>
        <li><a href="/facebook">Facebook</a></li>
        <li><a href="/tiktok" style={{color:'red'}}>TikTok</a></li>
        <li><a href="/youtube">Youtube</a></li>
        
      </ul>
    </div>
    </>
  )
}
