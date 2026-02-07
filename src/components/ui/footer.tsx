import LinkText from "../base_ui/link_text";


export default function Footer() {
  return (
    <footer className="bg-footer w-full">
      <div className="mx-auto w-full max-w-[1600px] relative h-[250px]">
        {/* 顶部灰色横条 */}
        <div className="absolute top-[45px] left-0 w-full h-[50px] bg-footer-gray" />

        {/* 左上角 Logo */}
        <div className="absolute top-[130px] md:top-[16px] left-4 flex items-center gap-2.5">
          <div className="text-footer-text text-2xl md:text-4xl leading-9 font-inter">
            <LinkText href="/home">ORI</LinkText>
          </div>
        </div>

        {/* 中间分割线 */}
        <div className="absolute top-[180px] md:top-[135px] left-[50%] -translate-x-1/2 w-[90%] md:w-[108%] h-0 outline-1 outline-offset-[-0.5px] outline-footer-text" />

        {/* 左下版权与社区 */}
        <div className="absolute bottom-4 left-4 flex items-center gap-4">
          <div className="text-footer-text text-[15px] font-normal leading-[15px]">
            @2025 ORI.Tang
          </div>
          <div className="text-[15px] font-normal leading-[15px]">
            CommunityGuidelines
          </div>
        </div>

        {/* 右下区域 Region */}
        <div className="hidden sm:flex absolute bottom-[30px] right-4 flex-col items-center gap-2.5">
          <div className="text-footer-text text-xl font-normal leading-tight">
            Region
          </div>
        </div>

      </div>
    </footer>
  );
}
