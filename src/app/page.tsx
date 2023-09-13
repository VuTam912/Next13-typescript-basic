'use client';

import Link from 'next/link';
import x from '@/styles/app.module.css'; // x from => module
import y from '@/styles/hoidanit.module.css';
import AppTable from '@/components/app.table';
import { useEffect } from 'react';
import useSWR from 'swr';

export default function Home() {
	// kieu du lieu cua variable la string
	const fetcher = (url: string) => fetch(url).then((res) => res.json());

	const { data, error, isLoading } = useSWR(
		'http://localhost:8000/blogs',
		fetcher,
		// không cần load lại data khi chuyển hướng page và quay lại. (nếu data đó là cũ thì ko cần load lại)
		// cải thiện hiện suất load website
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);

	// khi load API nó sẽ hiện render ở dưới.
	if (!data) {
		return <div>Loading...</div>;
	}

	// khi load API thì trả về data của API
	return (
		<>
			<div>
				{/* "?" kiểm tra xem một giá trị có null hoặc undefined hay không => nếu có tự trả 0 hoặc ... và code vẫn chạy mà ko có báo lỗi.  */}
				<div>{data?.length}</div>
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

				<AppTable blogs={data} />
			</div>
		</>
	);
}
