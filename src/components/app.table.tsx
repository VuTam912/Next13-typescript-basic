'use client';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
interface IProps {
	// cau truc cua types blogs
	blogs: IBlog[];
}
const AppTable = (props: IProps) => {
	// get data from props
	const { blogs } = props;
	console.log('---check props blog: ', blogs);

	// All state
	// modal create
	const [showModalCreate, setShowModalCreate] = useState(false);
	// modal edit
	const [showModalUpdate, setShowModalUpdate] = useState(false);

	// store blog để truyển qua edit (update.modal)
	const [DatablogEdit, SetDataBlogEdit] = useState<IBlog | null>(null);

	// handle Edit
	const handleEidtData = (blog: IBlog) => {
		// was get ID of blog
		SetDataBlogEdit(blog);
		setShowModalUpdate(true);
	};

	return (
		<>
			<div
				className='mb-3'
				style={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<h3>Table Blogs</h3>
				<Button variant='secondary' onClick={() => setShowModalCreate(true)}>
					Add Blog
				</Button>
			</div>
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
									<Button
										variant='warning'
										className='mx-3'
										onClick={() => handleEidtData(blog)}
									>
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
			{/* truyen props vao modal de nhan thong bao OnClick table  */}
			<CreateModal
				showModalCreate={showModalCreate}
				setShowModalCreate={setShowModalCreate}
			/>
			<UpdateModal
				showModalUpdate={showModalUpdate}
				setShowModalUpdate={setShowModalUpdate}
				DatablogEdit={DatablogEdit} // truyen du lieu blog vao các useState
				SetDataBlogEdit={SetDataBlogEdit}
			/>
		</>
	);
};

export default AppTable;
