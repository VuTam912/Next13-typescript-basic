'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// define types for variable
interface IProps {
	showModalCreate: boolean;
	// value => name of variable and type value
	setShowModalCreate: (value: boolean) => void;
}

function CreateModal(props: IProps) {
	const { showModalCreate, setShowModalCreate } = props;

	const [title, setTitle] = useState<string>('');
	const [author, setAuthor] = useState<string>('');
	const [content, setContent] = useState<string>('');

	// handle submit
	const handleSubmit = () => {
		console.log('---handleSubmit: ', title, author, content);
	};

	// When the modal is closed, all state must be empty.
	const handleColseModal = () => {
		setTitle('');
		setAuthor('');
		setContent('');
		setShowModalCreate(false);
	};

	return (
		<>
			<Modal
				show={showModalCreate}
				onHide={() => handleColseModal()}
				backdrop='static'
				keyboard={false}
				size='lg'
			>
				<Modal.Header closeButton>
					<Modal.Title>Add New A Blog</Modal.Title>
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

export default CreateModal;
