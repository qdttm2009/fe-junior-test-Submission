import React, { useState } from "react";
import { IDataService } from "../common/types";

import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import { DataService } from "../service/DataService";
import "./QuestionOne.css";

export const QuestionOne: React.FC<{ service: IDataService }> = () => {
  const [displayJobs, setDisplayJobs] = useState<any[]>([]);
  //const [userinputText, setUserInputText] = useState("");

  const handleTextOnChange = async (e: any) => {
    const userInputText = e.target.value;
    if (userInputText.length < 4) {
      return setDisplayJobs([]);
    }

    const jobResults = await DataService.getJobsWithSearchTerm(userInputText);

    setDisplayJobs(jobResults);
  };

  return (
    <>
      <SectionGroup>
        <SectionPanel>
          <h1>Search bar</h1>
          <input
            className="input"
            type="search"
            onChange={handleTextOnChange}
            aria-label="Search"
            placeholder="Search..."
          />
          {displayJobs.map((job, id) => (
            <ul className="result" key={id}>
              <li>
                {job.name} | {job.start} | {job.end}
              </li>
            </ul>
          ))}
        </SectionPanel>
      </SectionGroup>
    </>
  );
};
