import BackArrow from "@/components/BackArrow";
import NewsEntry from "@/components/NewsEntry";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const News = () => {
  const newsEntries = [
    {
      image: news1,
      caption: `‘GALUT/EXILE: Nervous Pathways’ - SHIUR Berlin Pop Up Gallery during Berlin Art Week
Leipzigerstr 61, Opening Sep 10, Shabbat Dinner Sep 12 

Sep 10 opening 6pm, 7:30pm featuring a reading by Samantha Bohatsch and an original instrumental performance by Nico Rosenberg.

Curated by Achinoam Alon

With

Achinoam Alon,
Ilit Azoulay,
Tarane Bazrafshan
& Max Broda,
Samantha Bohatsch,
Ruby von Czettritz,
Jakob Floess,
Stefan Fuchs,
Raúl Itamar Lima,
Paula Linke,
Maria Margolina,
Esther Martens,
Karam Natour,
Giulietta Ockenfuß,
Kasra Rahmanian,
Fatma Shanan,
Johannes Unger,
Theresa Volpp,
Yakov Weisskopf Tolstoy`
    },
    {
      image: news2,
      caption: `TEAM BERG
Tarane Bazrafshan & Max Broda

7.6.2025 - 15.6.2025
SOLD Gallery
Katzbachstr. 13
Berlin`
    },
    {
      image: news3,
      caption: `special project: Der Bau
Theater Erfurt
5.12.2024
20.00`
    }
  ];

  return (
    <div className="min-h-screen bg-background news-page-mobile">
      <BackArrow to="/" />
      <main className="pt-32 pb-20 px-8 md:px-16">
        {newsEntries.map((entry, index) => (
          <NewsEntry
            key={index}
            image={entry.image}
            caption={entry.caption}
          />
        ))}
      </main>
    </div>
  );
};

export default News;
