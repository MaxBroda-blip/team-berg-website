import BackArrow from "@/components/BackArrow";
import ProjectDisplay from "@/components/ProjectDisplay";

import work1 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-1.jpg";
import work2 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-2.jpg";
import work3 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-3.jpg";
import work4 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-4.jpg";
import work5 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-5.jpg";
import work6 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-6.jpg";
import work7 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-7.jpg";
import work8 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-8.jpg";
import work9 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-9.jpg";
import work10 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-10.jpg";
import work11 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-11.jpg";
import work12 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-12.jpg";
import work13 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-13.jpg";
import work14 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-14.jpg";
import work15 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-15.jpg";
import work16 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-16.jpg";
import work17 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-17.jpg";
import work18 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-18.jpg";
import work19 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-19.jpg";
import work20 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-20.jpg";
import work21 from "@/assets/tarane-bazrafshan-max-broda-team-berg-2025-work-21.jpg";

const Works = () => {
  const projects = [
    {
      title: "",
      images: [
        [work7]
      ],
      description: (
        <>
          <p>Untitled (Team Berg), 2025</p>
        </>
      )
    },
    {
      title: "",
      images: [
        [work1, work2],
        [work3, work4],
        [work5]
      ],
      description: (
        <>
          <p>آزادی هر روز (liberté toujours), 2025</p>
        </>
      )
    },
    {
      title: "",
      images: [
        [work6]
      ],
      description: (
        <>
          <p>Untitled (Team Berg), 2025</p>
        </>
      )
    },
    {
      title: "",
      images: [
        [work8],
        [work9, work10]
      ],
      description: (
        <>
          <p>Untitled (Team Berg), 2025</p>
        </>
      )
    },
    {
      title: "",
      images: [
        [work11, work12],
        [work13, work14]
      ],
      description: (
        <>
          <p>untitled, 2024</p>
        </>
      )
    },
    {
      title: "",
      images: [
        [work15]
      ],
      description: (
        <>
          <p>untitled, 2024</p>
        </>
      )
    },
    {
      title: "",
      images: [
        [work16],
        [work17],
        [work18]
      ],
      description: (
        <>
          <p>untitled, 2024</p>
        </>
      )
    },
    {
      title: "",
      images: [
        [work19],
        [work20],
        [work21]
      ],
      description: (
        <>
          <p>MOBBINq DIq, 2023</p>
          <p>
            Mobbinq ist eine dezentrale performative Praxis, eine Bewegung des
            Zusammenkommens, des Kollektivs und des Widerstands gegen
            hierarchische Strukturen.
          </p>
          <p>
            "Mobbinq ist eine stetige Aushandlung von Identität und Rolle, die
            sich in der performativen Interaktion als “fluid body” mit sich
            selbst und der Gruppe im Moment entfaltet. Die über drei Monate
            andauernde Ausstellungsreihe „Mobbinq Diq“ untersuchte kritisch und
            multimedial die Differenzlinien zwischen strukturell geformten Rollen
            im Gründungszeitraum eines Künstlerkollektivs sowie deren Beziehung
            zum Galeriebetrieb. Der Prozess der Namensgebung als finale „Phase“
            fand online statt, wobei der Galerie-Account übernommen wurde und die
            Öffentlichkeit durch eine Abstimmung an der Wahl des Namens beteiligt
            wurde.
          </p>
        </>
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
            images={project.images}
            description={project.description}
          />
        ))}
      </main>
    </div>
  );
};

export default Works;







