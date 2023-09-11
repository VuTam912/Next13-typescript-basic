'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div>
      <ul>
        {/* use Link will not need refresh page */}
        <li><Link href="/facebook">Facebook</Link></li>
        <li><Link href="/tiktok" style={{color:'red'}}>TikTok</Link></li>
        <li><Link href="/youtube">Youtube</Link></li>
        
      </ul>
    </div>
    </>
  )
}
