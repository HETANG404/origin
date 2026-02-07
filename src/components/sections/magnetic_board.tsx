interface MagneticBoardProps {
    className?: string;
  }
  
  export default function MagneticBoard({ className }: MagneticBoardProps) {
    return (
      <section className={`relative ${className ?? ""}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-36 pt-24">
          {/* MagneticBoard content */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-row flex-wrap mb-12 justify-center">
            <h2 className="text-5xl font-extrabold">
              MAGNETIC&nbsp;&nbsp;&nbsp;&nbsp;BOARD
            </h2>
          </div>
          <div className="pt-48 pb-32 md:pt-144 md:pb-40 bg-amber-50 rounded-3xl"></div>
        </div>
      </section>
    );
  }
  