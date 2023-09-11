

import Link from 'next/link'
import x from '@/styles/app.module.css';  // x from => module
import y from '@/styles/hoidanit.module.css'
import AppTable from '@/components/app.table';

export default function Home() {
  return (
    <>
    <div>
      <ul>
        {/* use Link will not need refresh page */}
        <li className={x['red']}>
          <Link href={"/facebook"}>
            <span className={y['red']}>Facebook</span>
            </Link>
          </li>
        <li  style={{ margin: '20px 0' }}>
          <Link href="/tiktok">TikTok</Link>
          </li>
        <li>
          <Link href="/youtube">Youtube</Link>
          </li>
        
      </ul>

      <AppTable />

    </div>
    </>
  )
}
