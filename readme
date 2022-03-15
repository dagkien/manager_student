; ----------- Tổ chức scss ------------

Abstracts (hay ultilities) : chứa các CSS helper bao gồm biến, functions, mixins....

Components (hay modules) : Thư mục này chứa code cho các thành phần (components) mà có thể reusable cho trang của bạn như buttons, forms, cards, v.v..

Layout : Chứa code định nghĩa cho layout của project như header, footer, navigation, grid,....

client: trang khách hàng

admin: trang quản trị


; -------------- Tổ chức root -------------
/Controllers - Thư mục này sẽ chứa tất cả các chức năng dể viết các API của bạn. Cách đặt tên: xxxxx.controller.js trong đó xxx là nhiệm vụ thôi, ví dụ: login.controller.js 

/Routes - Thư mục này sẽ chứa tất cả các tuyến đường mà bạn đã tạo bằng cách sử dụng Express Router và kết hợp với Controllers. Cách đặt tên cũng như trên xxxxx.routes.js 

/Models - Thư mục này sẽ chứa tất cả các files như schema của bạn và và các chức năng cần thiết cho schema cũng sẽ nằm ở đây. Đặt tên xxxxx.model.js /Middleware - Thư mục này sẽ chứa tất cả phần mềm trung gian mà bạn đã tạo, ví dụ như là xác thực chẳng hạn... Cách đặt tên: xxxxx.middleware.js /Utils - Các chức năng phổ biến mà bạn sẽ yêu cầu nhiều lần trong suốt mã của mình ví dụ như check missing params trước khi xử lý dữ liệu chẳng hạn. Rất cần thiết. /Configs - File này dùng cấu hình cho các API / dịch vụ của bên thứ ba như passport / S3, v.v. Những thông số như keyAPI các kiểu. 

app.js - Tệp này về cơ bản sẽ là khai báo của ứng dụng Express 