import LinkText from "../base_ui/link_text";
import ProfileIcon from "../base_ui/profile_icon";
import { FaInfoCircle, FaUsers, FaEnvelope } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <div className="w-full h-auto relative bg-header mb-6  mt-2 md:mt-6 px-4 sm:px-6">
                {/* 右侧导航 + 头像 */}
                <div className="flex flex-row justify-end items-center gap-4 sm:gap-14 pr-1 md:pr-4">

                    <div className="flex flex-row justify-start items-center gap-3 sm:gap-10">
                        {/* about */}
                        <div className="flex justify-center items-center gap-2.5">
                            <LinkText
                                className="block sm:hidden text-header-text text-xl"
                                href="/about"
                            >
                                <FaInfoCircle />
                            </LinkText>
                            <LinkText
                                className="hidden sm:block text-center text-header-text text-2xl font-normal leading-tight"
                                href="/about"
                            >
                                about
                            </LinkText>
                        </div>

                        {/* community */}
                        <div className="flex justify-center items-center gap-2.5">
                            <LinkText
                                className="block sm:hidden text-header-text text-xl"
                                href="/community"
                            >
                                <FaUsers />
                            </LinkText>
                            <LinkText
                                className="hidden sm:block text-center text-header-text text-2xl font-normal leading-tight"
                                href="/community"
                            >
                                community
                            </LinkText>
                        </div>

                        {/* contact */}
                        <div className="flex justify-center items-center gap-2.5">
                            <LinkText
                                className="block sm:hidden text-header-text text-xl"
                                href="/contact"
                            >
                                <FaEnvelope />
                            </LinkText>
                            <LinkText
                                className="hidden sm:block text-center text-header-text text-2xl font-normal leading-tight"
                                href="/contact"
                            >
                                contact
                            </LinkText>
                        </div>
                    </div>

                    {/* 头像 */}
                    <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] overflow-hidden avatar-rounded">
                        <ProfileIcon imageUrl="/images/avatar.jpg" href="/profile" />
                    </div>
                </div>

                {/* 左上角 logo */}
                <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 inline-flex justify-center items-center gap-4 sm:gap-10">
                    <LinkText
                        className="text-center text-header-text text-2xl sm:text-5xl font-bold font-inter leading-[36px] sm:leading-[48px]"
                        href="/home"
                    >
                        ORI
                    </LinkText>
                </div>
            </div>
        </header>
    );
}
