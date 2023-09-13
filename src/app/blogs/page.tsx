'use client';
import AppTable from '@/components/app.table';
import useSWR from 'swr';

const BlogPage = () => {
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

	// khi API đang isLoading nó sẽ hiện render ở dưới.
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='mt-3'>
			{/* Sort by desc id */}
			<AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
		</div>
	);
};

export default BlogPage;
