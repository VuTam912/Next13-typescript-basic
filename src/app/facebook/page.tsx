'use client' // render on client side only

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";


const Facebook = () => {

    const router = useRouter();

    const handleBtn = () => {
        router.push('/');// home page
    
    }
    return (
        <div>
            <h1>Facebook</h1>
            <div>
                <Button variant="success">Hỏi dân IT</Button>
                <button onClick={()=>handleBtn()}>Back Home</button>
            </div>
        </div>
    )
}

export default Facebook;

// 'use client': dùng để chỉ định rằng hàm được sử dụng chỉ có thể được truy cập ở phía máy khách. 
// Điều này có nghĩa là hàm sẽ không được tải trên máy chủ và sẽ chỉ được tải khi trang được tải trên trình duyệt của người dùng.