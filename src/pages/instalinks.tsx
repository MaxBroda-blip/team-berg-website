import BackArrow from "@/components/BackArrow";

const Instalinks = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <BackArrow to="/about" />
      <main className="px-8 md:px-16 max-w-3xl w-full flex justify-center">
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/taranebazrafshan/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-courier text-tiny text-foreground underline hover:opacity-60 transition-opacity"
          >
            instagram.com/taranebazrafshan/
          </a>
          <a
            href="https://www.instagram.com/maxbroda/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-courier text-tiny text-foreground underline hover:opacity-60 transition-opacity"
          >
            instagram.com/maxbroda/
          </a>
        </div>
      </main>
    </div>
  );
};

export default Instalinks;

