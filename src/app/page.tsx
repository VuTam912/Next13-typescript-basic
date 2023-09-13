'use client';

import Link from 'next/link';
import x from '@/styles/app.module.css'; // x from => module
import y from '@/styles/hoidanit.module.css';
import AppTable from '@/components/app.table';
import { useEffect } from 'react';

export default function Home() {
	return (
		<>
			<div>
				{/* "?" kiểm tra xem một giá trị có null hoặc undefined hay không => nếu có tự trả 0 hoặc ... và code vẫn chạy mà ko có báo lỗi.  */}
				{/* <div>{data?.length}</div> */}
				<ul>
					{/* use Link will not need refresh page */}
					<li className={x['red']}>
						<Link href={'/facebook'}>
							<span className={y['red']}>Facebook</span>
						</Link>
					</li>
					<li style={{ margin: '20px 0' }}>
						<Link href='/tiktok'>TikTok</Link>
					</li>
					<li style={{ margin: '20px 0' }}>
						<Link href='/youtube'>Youtube</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
