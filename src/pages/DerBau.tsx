import BackArrow from "@/components/BackArrow";
import ProjectDisplay from "@/components/ProjectDisplay";

import bau1 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-1.jpg";
import bau2 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-2.jpg";
import bau3 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-3.jpg";
import bau4 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-4.jpg";
import bau5 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-5.jpg";
import bau6 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-6.jpg";
import bau7 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-7.jpg";
import bau8 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-8.jpg";
import bau9 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-9.jpg";
import bau10 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-10.jpg";
import bau11 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-11.jpg";
import bau12 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-12.jpg";
import bau13 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-13.jpg";
import bau14 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-14.jpg";
import bau15 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-15.jpg";
import bau16 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-16.jpg";
import bau17 from "@/assets/tarane-bazrafshan-der-bau-theater-erfurt-franz-kafka-performance-studio-box-2024-bau-17.jpg";

const altTexts = [
  "Tarane Bazrafshan – Der Bau, Theater Erfurt, Franz Kafka Performance, Studio Box, 2024 – Radfahrerin auf Rolle, Bühnenlicht.",
  "Tarane Bazrafshan – Der Bau, Theater Erfurt, Performance nach Franz Kafka – Detailaufnahme des Fahrrads im Bühnenraum.",
  "Tarane Bazrafshan – Der Bau, 2024, Theater Erfurt – Performer auf Rennrad im geschlossenen Kreislauf, Projektion im Hintergrund.",
  "Tarane Bazrafshan – Der Bau, Performance im Theater Erfurt – Nahaufnahme der Videoprojektion, Franz Kafka Bezug.",
  "Tarane Bazrafshan – Der Bau, Theater Erfurt – Performance mit Rennrad und Teleprompter, 2024, Studio Box.",
  "Tarane Bazrafshan – Der Bau, Franz Kafka Performance – Licht- und Projektionselemente in der Studio Box, Theater Erfurt.",
  "Tarane Bazrafshan – Der Bau – Performer in Bewegung auf dem Rennrad, Theater Erfurt, 2024.",
  "Tarane Bazrafshan – Der Bau – Projektion der Kopfaufnahme während der Performance im Theater Erfurt, 2024.",
  "Tarane Bazrafshan – Der Bau, 2024 – Installation und Performance mit Fahrrad, Franz Kafka, Studio Box, Theater Erfurt.",
  "Tarane Bazrafshan – Der Bau – Performanceansicht mit Video-Feedback, Theater Erfurt, 2024.",
  "Tarane Bazrafshan – Der Bau – Bühnenansicht, Rennrad, Performer, geschlossener Kreislauf, Theater Erfurt.",
  "Tarane Bazrafshan – Der Bau – Detail der Bühne mit Videoübertragung, Theater Erfurt, 2024.",
  "Tarane Bazrafshan – Der Bau – Franz Kafka Performance, Licht, Video, Bewegung, Theater Erfurt, Studio Box.",
  "Tarane Bazrafshan – Der Bau – Projektion und Performance im Raum, Theater Erfurt, 2024.",
  "Tarane Bazrafshan – Der Bau – Videoprojektion der Performerin auf Leinwand, Franz Kafka, Theater Erfurt.",
  "Tarane Bazrafshan – Der Bau, 2024 – Fahrrad, Performer, Lichtprojektionen, Theater Erfurt.",
  "Tarane Bazrafshan – Der Bau – Abschluss der Performance, Theater Erfurt, Studio Box, 2024."
];

const BauProject = () => {
  const images = [
    bau1, bau2, bau3, bau4, bau5, bau6, bau7, bau8, bau9,
    bau10, bau11, bau12, bau13, bau14, bau15, bau16, bau17
  ];

  const projects = [
    {
      title: "special project: Der Bau, Theater Erfurt, 2024",
      images: images.map((src, i) => [{ src, alt: altTexts[i] }]),
      description: (
        <div>
          <p>
            As has recently been highlighted in the year marking the 100th anniversary of his death, Franz Kafka was a passionate swimmer. Tarane Bazrafshan reimagines Kafka’s story The Burrow (1923–24) through the actions of a racing cyclist. Clad in a form-fitting time trial suit, wearing an aerodynamic professional helmet and cycling shoes with clipless pedals, the performer mounts her carbon racing bike, fixed to a roller trainer, and pedals, pedals, and pedals — without the audience ever experiencing a clear beginning or end. All the while, she reads the monologic stream of text from a teleprompter. That Kafka was an athlete is little more than an anecdotal correlation. Rather, it was Bazrafshan’s reading of The Burrow that led her to this vivid, performative translation — one that foregrounds the narrator’s isolated and inescapable self-referentiality. In Kafka’s story, an unspecified animal obsessively optimises its underground burrow, battling with a sound — most likely produced by itself — in a state of self-absorbed, paranoid hyper-vigilance.
          </p>

          <p className="mt-6">
            The term closed circuit refers to the feedback (both auditory and visual) between the input and output signals of a recording and playback system. This feedback loop amplifies signals, generating a self-contained feedback system. In the visual arts of the 1970s — notably through the works of Dan Graham, Nam June Paik, and Bruce Nauman — installations and video sculptures explored such feedback, not only as a media phenomenon but also, as in this case, to interrogate physical and psychological paradigms of perception. Unrelenting and soon breathless, the performer struggles on her racing bike, drawing on the paratheatrical techniques of Jerzy Grotowski’s special projects — resisting the looming desolation of the closed system. For, as thermodynamics warns, a system that produces only itself and nothing beyond will inevitably be overtaken by entropy: distinctions dissolve, as no external input remains to generate difference. Like a high-performance cyclist, the performer is thrown back upon herself — and only herself. The live projection of an oversized close-up of her head seems to mirror her paranoid imaginings, expanding them into the space while simultaneously displacing them. And yet, despite her relentless pedalling, the performer will not move forward by so much as a millimetre. The entrances are blocked, the exits obstructed. Driven into a corner, she becomes further entangled in the compulsive, paranoid projections of her self-created labyrinth — a labyrinth that even gains a name: an app connected to the roller trainer translates this spaceless "riding through" into an environmental simulation.
          </p>

          <p className="mt-6">
            While Kafka offers a textual escape from the closed circuit by leaving the final sentence of his story open-ended, his editor Max Brod seals it off. The last sentence of the posthumously published 1931 version reads: “But everything remained unchanged.” However, Kafka had written: “But everything remained unchanged, that –”. In 2024, Bazrafshan translates Kafka’s The Burrow into a multimedia, cinematic-installative performance in the studio.box at Erfurt Theatre — an experience through which the audience can move freely. Through the tools of aesthetics, Bazrafshan counters the threat of desolation posed by the closed system handed down to readers through the truncation of Kafka’s final sentence. Parallel to the performer’s physical struggle against the allegorical prison she pedals against, Bazrafshan expands the theatrical space: she opens it with imagery, mediates it through digitality, mobilises genres, and sets both the recipients and the audience of the visual (rather than the performing) arts in motion. And she leaves us with a hopeful outlook — both for the potential of the arts and the significance of open systems.   - Dr. Birte Kleine-Benne
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackArrow to="/projects" />
      <main className="pt-28 pb-16">
        {projects.map((project, index) => (
          <ProjectDisplay
            key={index}
            title={project.title}
            images={project.images.map(group => group.map(img => img.src))}
            description={project.description}
          />
        ))}
      </main>
    </div>
  );
};

export default BauProject;


