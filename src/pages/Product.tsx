import React from 'react';
import Breadcrumb from 'src/components/Breadcrumb';

export default function Product() {
  return (
    <div>
      <Breadcrumb />
      <section className="main-content max-w-[1230px] font-poppins w-full px-[30px] mx-auto">
        <h1 className="text-xl font-semibold mb-4">Nhẫn bạc nam đẹp giá rẻ</h1>
        <div className="space-y-4 mb-4">
          <p className="text-sm text-gray-500">
            -Khắc tên và số hoàn toàn miễn phí trong lòng nhẫn
          </p>
          <p className="text-sm text-gray-500">
            - Chất liệu bạc cao cấp 925 ( gồm 92,5% bạc nguyên chất, phần còn
            lại là hợp chất làm tăng độ cứng và sáng bóng cho bạc )
          </p>
          <p className="text-sm text-gray-500">
            - Thay màu đá theo mệnh hoàn toàn miễn phí
          </p>
          <p className="text-sm text-gray-500">
            - <strong>Nhẫn bạc nam đẹp</strong> cao cấp được bảo hành trọn đời
            đánh bóng làm mới hoặc gắn lại đá do va chạm mạnh
          </p>
          <p className="text-sm text-gray-500">
            - Thời gian shop làm nhẫn theo size tay 3 đến 4 ngày
          </p>
          <p className="text-sm text-gray-500">
            - Shop cam kết đúng mẫu mã và chất lượng sản phẩm
          </p>
          <p className="text-sm text-gray-500">
            - Giao hàng toàn quốc và thanh toán tại nhà khi nhận được hàng.
          </p>
        </div>
        <h1 className="text-xl font-semibold mb-8">
          Các mẫu nhẫn bạc nam đẹp giá rẻ đang được bán tại website
        </h1>
        <div className="result mb-6">
          <div className="mb-4"></div>

          <div className="pagination"></div>
        </div>
      </section>
    </div>
  );
}
