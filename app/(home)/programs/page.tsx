import { Progress } from "antd";
import SelectCardGroup from "../../../components/SelectCardGroup";

const ProgramsPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SelectCardGroup
        beforeContent={(item) => {
          return (
            <div className="mt-4">
              My progress: 0% (0 / 10 classes)
              <Progress percent={0} showInfo={false} />
            </div>
          );
        }}
        data={[
          {
            id: "1",
            title: "Depression Care",
            content: [
              "This program offers a compassionate and nurturing environment where participants can delve into their emotions and experiences without",
              "Next Session",
              "Nurturing Your Understanding with Compassion",
            ],
            btnLabel: "Start Session 1",
          },
          {
            id: "1",
            title: "Depression Care",
            content: [
              "This program offers a compassionate and nurturing environment where participants can delve into their emotions and experiences without",
              "Next Session",
              "Nurturing Your Understanding with Compassion",
            ],
            btnLabel: "Start Session 1",
          },
          {
            id: "1",
            title: "Depression Care",
            content: [
              "This program offers a compassionate and nurturing environment where participants can delve into their emotions and experiences without",
              "Next Session",
              "Nurturing Your Understanding with Compassion",
            ],
            btnLabel: "Start Session 1",
          },
          {
            id: "1",
            title: "Depression Care",
            content: [
              "This program offers a compassionate and nurturing environment where participants can delve into their emotions and experiences without",
              "Next Session",
              "Nurturing Your Understanding with Compassion",
            ],
            btnLabel: "Start Session 1",
          },
          {
            id: "1",
            title: "Depression Care",
            content: [
              "This program offers a compassionate and nurturing environment where participants can delve into their emotions and experiences without",
              "Next Session",
              "Nurturing Your Understanding with Compassion",
            ],
            btnLabel: "Start Session 1",
          },
          {
            id: "1",
            title: "Depression Care",
            content: [
              "This program offers a compassionate and nurturing environment where participants can delve into their emotions and experiences without",
              "Next Session",
              "Nurturing Your Understanding with Compassion",
            ],
            btnLabel: "Start Session 1",
          },
          {
            id: "1",
            title: "Depression Care",
            content: [
              "This program offers a compassionate and nurturing environment where participants can delve into their emotions and experiences without",
              "Next Session",
              "Nurturing Your Understanding with Compassion",
            ],
            btnLabel: "Start Session 1",
          },
        ]}
      ></SelectCardGroup>
    </div>
  );
};
export default ProgramsPage;
