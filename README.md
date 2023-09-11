## Công nghệ đang sử dụng:

- React 18
- Next 13
- Typescript

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

npm: boostrap:
npm i --save-exact react-bootstrap@2.8.0 bootstrap@5.3.0
