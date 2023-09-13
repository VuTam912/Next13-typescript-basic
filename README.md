## Công nghệ đang sử dụng:

- React 18
- Next 13
- Typescript
- backend

## Cấu trúc dụ án Next.js cài đặt:

Thư mục:
.next: đây là code "đã được dịch" của Next.js để có chạy được project trên browser.

- public: chứa static file (CSS/JS/images) (dạng folder/file tĩnh không cần thông qua biên dịch để xử lý)

- src/app : chứa source dự án với Next 13 (router)

.eslintrc.json : config eslint (warning/error ở terminal khi đang debug/run)

.gitimore: các files ko push lên git remote

next.config.js : cấu hình Next.js

package.json : thông tin các thư viện cài đặt

tsconfig.json : cấu hình compiler (biên dịch) của typescript

##

Cac file sourse hay folder đều phải ở trong src/app mới biên dịch được.

Nếu muốn tạo route là /admin => tạo folder Admin và bên trong folder admin sẽ có file page.tsx
note: create folder => đặt tên folder phải viết thường ko viết hoa.

- Tóm lại phải theo rule của NEXT13.js không được tự ý thay đổi.

file layout.tsx => Giup táo sử dụng lại cho component khác (Menu,header,footer...)

## libraries

- swr: Fetch GET,PUT,DELETE... from api
- boostrap:
  npm i --save-exact react-bootstrap@2.8.0 bootstrap@5.3.0
- SWR: - react-hook for Data Fetching
  npm i --save-exact swr@2.2.0
- Toastify:
  npm i --save-exact react-toastify@9.1.3

# chay backend :

-để dự án có data.
backend-fake-json

cách chạy: npm run dev (cmd or vscode)

### `II.Các endpoint (apis) sử dụng:`

```
1. Lấy tất cả blogs:
GET    /blogs

2. Lấy blog theo id
GET    /blogs/:id

ví dụ: GET    /blogs/1

3. Tạo mới 1 blog
POST   /blogs
body truyền lên object { title, author, content}

4. Cập nhật 1 blog
PUT /blogs/:id
body truyền lên object { title, author, content}

ví dụ: PUT /blogs/1

5. Xóa 1 blog
DELETE  /blogs/:id

ví dụ: DELETE   /blogs/1
```
