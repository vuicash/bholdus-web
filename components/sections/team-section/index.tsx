import Section from "../sections";
import TeamProfile from "./team-profile";

const TeamSection = ({ data }) => {
  return (
    <Section
      className="mt-20 lg:mt-80 scroll-margin-top"
      smallTitle={data.smallTitle}
      title={data.title}
    >
      <div className="lg:grid lg:grid-cols-3 lg:gap-6 flex flex-col lg:space-y-0 space-y-10">
        {data.persons.map((person: any, index: number) => (
          <TeamProfile key={person.id} data={person} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;
