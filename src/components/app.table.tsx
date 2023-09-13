'use client';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
interface IProps {
	// cau truc cua types blogs
	blogs: IBlog[];
}
const AppTable = (props: IProps) => {
	const { blogs } = props;
	console.log('---check props blog: ', blogs);

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>No</th>
					<th>TItle</th>
					<th>Author</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{/* ? -> neu bi return false thi code cung ko bi báo lỗi. - Reactjs có thể áp dụng được */}

				{blogs?.map((blog) => {
					return (
						<tr key={blog.id}>
							<td>{blog.id}</td>
							<td>{blog.title}</td>
							<td>{blog.author}</td>
							<td>
								<Button> View </Button>
								<Button variant='warning' className='mx-3'>
									{' '}
									Edit{' '}
								</Button>
								<Button variant='danger'> Delete </Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

export default AppTable;
