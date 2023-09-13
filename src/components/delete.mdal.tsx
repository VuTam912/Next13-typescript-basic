'use client';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

// define types for variable
interface IProps {
	showModalDelete: boolean;
	// value => name of variable and type value
	setShowModalDelete: (value: boolean) => void;
	DatablogDelete: IBlog | null;
	SetDataBlogDelete: (value: IBlog | null) => void;
}

// --------- Delete a blog --------

function DeleteModal(props: IProps) {
	const {
		showModalDelete,
		setShowModalDelete,
		DatablogDelete,
		SetDataBlogDelete,
	} = props;

	// Store state
	//update cần có id để xác đinh blog nào cần update
	const [id, setId] = useState<Number>(0);
	// gan gia tri cho state từ DataBlogEdit qua useEffect
	const [title, setTitle] = useState<string>('');
	const [author, setAuthor] = useState<string>('');
	const [content, setContent] = useState<string>('');

	// Sử dụng useEffect mỗi khi render xong thì cập nhập gán giá trị vào tất cả state từ DatablogEdit.
	useEffect(() => {
		if (DatablogDelete && DatablogDelete.id) {
			setId(DatablogDelete.id);
			setTitle(DatablogDelete.title);
			setAuthor(DatablogDelete.author);
			setContent(DatablogDelete.content);
		}
	}, [DatablogDelete]); // neu datablogEdit nhan duoc id khac hoăc blog thay đổi thi useEffect duoc kich hoat su dung nhieu lan

	// handle submit
	const handleSubmit = () => {
		// DELETE
		fetch(`http://localhost:8000/blogs/${id}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, author, content }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res) {
					toast.success('Delete blog success!');
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
		setShowModalDelete(false);
		SetDataBlogDelete(null);
	};

	return (
		<>
			<Modal
				show={showModalDelete}
				onHide={() => handleColseModal()}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Delete Blog</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						Do you want to delete this blog ?
						<br />
						Title: <b>{title}</b>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={() => handleColseModal()}>
						Close
					</Button>
					<Button variant='primary' onClick={() => handleSubmit()}>
						Confirm
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteModal;
