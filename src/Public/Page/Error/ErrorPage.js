import React from "react";

function ErrorPage() {
  return (
    <div className="container">
      <svg
        className="error"
        xmlns="http://www.w3.org/2000/svg"
        id="_404"
        data-name={404}
        viewBox="0 0 112 112"
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                    .cls-1,\n                    .cls-3 {\n                        fill: none;\n                        stroke-miterlimit: 10\n                    }\n        \n                    .cls-1 {\n                        stroke: #64676b\n                    }\n        \n                    .cls-1,\n                    .cls-3 {\n                        stroke-linecap: round\n                    }\n        \n                    .cls-1 {\n                        stroke-width: 8px\n                    }\n        \n                    .cls-3 {\n                        stroke: #1876f2;\n                        stroke-width: 2px\n                    }\n                ",
            }}
          />
        </defs>
        <path
          className="cls-1"
          d="M73.79 59.8a11.76 11.76 0 01-15.91 4.89A11.76 11.76 0 0153 48.78l14.4-27.2a11.77 11.77 0 0115.91-4.89 11.79 11.79 0 014.89 15.92l-4.38 8.26"
        />
        <path
          d="M20.09 92.53h0a11.77 11.77 0 011.28-16.6l23.37-20a11.77 11.77 0 0116.6 1.28h0a11.77 11.77 0 01-1.28 16.6l-6.38 5.47-6.31 5.4-10.68 9.13a11.77 11.77 0 01-16.6-1.28z"
          stroke="#a4a7ab"
          strokeWidth={8}
          fill="none"
          strokeMiterlimit={10}
        />
        <path
          className="cls-1"
          d="M73.79 59.8a11.76 11.76 0 01-15.91 4.89 11.3 11.3 0 01-2.81-2.07"
        />
        <path
          className="cls-3"
          d="M85.79 56.69l9.73-1.59M86.53 60.53l10.72 4.79M82.19 63.12l5.48 7.65"
        />
      </svg>
      <p className="text-user fs_24 fw_500">Trang này không hiển thị</p>
      <p className="text-time text-center">
        Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết
        mà bạn đang cố mở có chính xác không.
      </p>
      <a href="index.html" className="btn btn-primary fs_16 fw_500">
        Đi tới bảng tin
      </a>
      <a href="index.html" className="text-unread fs_16 fw_500">
        Quay lại
      </a>
      <a href="index.html" className="text-unread fs_16 fw_500">
        Truy cập Trung tâm trợ giúp
      </a>
    </div>
  );
}

export default ErrorPage;
