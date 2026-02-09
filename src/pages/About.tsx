import BackArrow from "@/components/BackArrow";
import instagramIcon from "@/assets/instagram.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <BackArrow to="/" />
      <main className="pt-32 pb-20 px-8 md:px-16 max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="font-courier text-tiny text-foreground leading-relaxed mb-6">
            Tarane Bazrafshan and Max Broda are an artist duo currently living and working in Berlin. Their practice combines sculpture, photography and performance within installation-based works.
          </p>
        </div>

        <div className="mb-32 flex flex-col items-start gap-4">
          {/* E-Mail Link */}
          <a 
            href="mailto:contact@tarane-max.art" 
            className="font-courier text-tiny text-foreground underline hover:opacity-60 transition-opacity"
          >
            contact@tarane-max.art
          </a>

          {/* Icon-Link zur neuen Seite */}
          <a 
            href="/instalinks" 
            className="hover:opacity-60 transition-opacity"
          >
            <img src={instagramIcon} alt="Instagram" className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-auto pt-20">
          <p className="font-courier text-micro text-foreground">
            © Tarane Bazrafshan & Max Broda, 2025
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;



