'use client';

import Link from 'next/link';
import x from '@/styles/app.module.css'; // x from => module
import y from '@/styles/hoidanit.module.css';
import AppTable from '@/components/app.table';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('http://localhost:8000/blogs');
			// the data is using JSON. => res.json()
			const data = await res.json();
			console.log('--Check res: ', data);
		};

		fetchData();
	}, []);
	return (
		<>
			<div>
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

				<AppTable />
			</div>
		</>
	);
}
