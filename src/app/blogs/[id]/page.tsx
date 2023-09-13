// any là kiểu dữ liệu cho phép bạn gán giá trị bất kì vào biến
// props có thể string,number,boolean... => ok
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
	console.log('---check props view blog:', params.id);

	return <div>View Detail with Ryo...{params.id}</div>;
};

export default ViewDetailBlog;

// app/blog/[slug]/page.js	/blog/a	{ slug: 'a' }
