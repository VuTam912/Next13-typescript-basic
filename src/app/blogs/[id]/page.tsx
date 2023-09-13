'use client';

import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import useSWR, { Fetcher } from 'swr';

// any là kiểu dữ liệu cho phép bạn gán giá trị bất kì vào biến
// props có thể string,number,boolean... => ok

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
	console.log('---check props view blog:', params.id);

	const router = useRouter();

	// const [title, setTitle] = useState<string>('');
	// const [author, setAuthor] = useState<string>('');
	// const [content, setContent] = useState<string>('');

	// Solution 1:  GET DATA by id - body dung yeu cau gui den server nen ko dung cho GET duoc
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await fetch(`http://localhost:8000/blogs/${params.id}`, {
	// 			method: 'GET',
	// 			headers: {
	// 				Accept: 'application/json, text/plain, */*',
	// 				'Content-Type': 'application/json',
	// 			},
	// 		});
	// 		const data = await res.json();
	// 		setTitle(data.title);
	// 		setAuthor(data.author);
	// 		setContent(data.content);
	// 	};

	// 	fetchData();
	// }, [params.id]);

	// solution 2: similiar fetch GET above
	const fetcher: Fetcher<IBlog, string> = (url: string) =>
		fetch(url).then((res) => res.json());

	const { data, error, isLoading } = useSWR(
		`http://localhost:8000/blogs/${params.id}`,
		fetcher,
		// không cần load lại data khi chuyển hướng page và quay lại. (nếu data đó là cũ thì ko cần load lại)
		// cải thiện hiện suất load website
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);

	console.log(data);

	// khi API đang isLoading nó sẽ hiện render ở dưới.
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Button variant='primary' onClick={() => router.push('/blogs')}>
				Go Back
			</Button>
			<div className='mt-3'>
				<Card className='text-center my-3'>
					{/* add Fetcher<IBlog, string> để check ? */}
					<Card.Header>Title: {data?.title}</Card.Header>
					<Card.Body>
						<Card.Text>{data?.content}</Card.Text>
					</Card.Body>
					<Card.Footer className='text-muted'>
						Author:{data?.author}
					</Card.Footer>
				</Card>
			</div>
		</div>
	);
};

export default ViewDetailBlog;

// app/blog/[slug]/page.js	/blog/a	{ slug: 'a' }
