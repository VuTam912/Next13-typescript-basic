'use client';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

// define types for variable
interface IProps {
	showModalUpdate: boolean;
	// value => name of variable and type value
	setShowModalUpdate: (value: boolean) => void;
	DatablogEdit: IBlog | null;
	SetDataBlogEdit: (value: IBlog | null) => void;
}

// --------- Update a blog --------

function UpdateModal(props: IProps) {
	const { showModalUpdate, setShowModalUpdate, DatablogEdit, SetDataBlogEdit } =
		props;

	// Store state
	//update cần có id để xác đinh blog nào cần update
	const [id, setId] = useState<Number>(0);
	// gan gia tri cho state từ DataBlogEdit qua useEffect
	const [title, setTitle] = useState<string>('');
	const [author, setAuthor] = useState<string>('');
	const [content, setContent] = useState<string>('');

	// Sử dụng useEffect mỗi khi render xong thì cập nhập gán giá trị vào tất cả state từ DatablogEdit.
	useEffect(() => {
		if (DatablogEdit && DatablogEdit.id) {
			setId(DatablogEdit.id);
			setTitle(DatablogEdit.title);
			setAuthor(DatablogEdit.author);
			setContent(DatablogEdit.content);
		}
	}, [DatablogEdit]); // neu datablogEdit nhan duoc id khac hoăc blog thay đổi thi useEffect duoc kich hoat su dung nhieu lan

	// handle submit
	const handleSubmit = () => {
		if (!title) {
			toast.error('Title is required!');
			return;
		}
		if (!author) {
			toast.error('Author is required!');
			return;
		}
		if (!content) {
			toast.error('Content is required!');
			return;
		}

		// UPDATE
		fetch(`http://localhost:8000/blogs/${id}`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, author, content }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res) {
					toast.success('Update blog success!');
					handleColseModal();
					// when create a blog done. then will re-render/update data in table
					mutate('http://localhost:8000/blogs');
				}
			});
	};

	// When the modal is closed, all state must be empty.
	const handleColseModal = () => {
		setTitle('');
		setAuthor('');
		setContent('');
		SetDataBlogEdit(null);
		setShowModalUpdate(false);
	};

	return (
		<>
			<Modal
				show={showModalUpdate}
				onHide={() => handleColseModal()}
				backdrop='static'
				keyboard={false}
				size='lg'
			>
				<Modal.Header closeButton>
					<Modal.Title>Update A Blog</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className='mb-3'>
							<Form.Label>Title</Form.Label>
							<Form.Control
								type='text'
								placeholder='...'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Author</Form.Label>
							<Form.Control
								type='text'
								placeholder='...'
								value={author}
								onChange={(e) => setAuthor(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Content</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								// style={{ resize: 'none' }}
								value={content}
								onChange={(e) => setContent(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={() => handleColseModal()}>
						Close
					</Button>
					<Button variant='primary' onClick={() => handleSubmit()}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default UpdateModal;
