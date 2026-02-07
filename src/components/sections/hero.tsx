import RedButton from "../base_ui/red_button";

export default function HeroHome() {
    return (
        <section className="relative">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="pb-6 pt-24 md:pb-6 md:pt-40 flex flex-col items-cente">
                    {/* Section header */}
                    <div className="md:pd-6 text-center">
                        <h1
                            className="mb-2 md:mb-6 text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-body-text"
                            data-aos="zoom-y-out"
                            data-aos-delay={25}
                        >
                            Coding, creating, <p className="hidden sm:inline" >and occasionally <br />obsessing over </p>
                            tiny details.
                        </h1>
                    </div>


                    {/* 中间那条横线 */}
                    <div className="relative  h-[2px]">
                        <div
                            className="absolute left-1/2 top-0 md:w-[110%] w-[90%] h-[2px] -translate-x-1/2 border-t-2 border-transparent [border-image:linear-gradient(to_right,transparent,var(--foreground),transparent)1]"
                            data-aos="zoom-y-out"
                            data-aos-delay={800}
                        />
                    </div>

                    {/* 欢迎语 */}
                    <div className="pb-12 text-center">
                        <h2
                            className="text-2xl sm:text-4xl md:text-6xl font-medium text-body-text leading-relaxed tracking-wide"
                            data-aos="zoom-y-out"
                            data-aos-delay={150}
                        >
                            Glad you&apos;re here.
                        </h2>
                    </div>

                    {/* 按钮组 */}
                    <div className="relative before:absolute before:inset-0">
                        <div
                            className="mx-auto flex flex-row items-center justify-center gap-8 sm:gap-12 max-w-xs sm:max-w-none"
                            data-aos="zoom-y-out"
                            data-aos-delay={250}
                        >
                            <RedButton href="/about" className="bg-transparent text-xl md:text-2xl w-auto">
                            <p className="hidden sm:inline" >more </p>about <p className="hidden sm:inline" >me</p>
                            </RedButton>
                            <RedButton href="/profile" className="bg-transparent text-xl md:text-2xl w-auto">
                            <p className="hidden sm:inline" >my </p>resume
                            </RedButton>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
