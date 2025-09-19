import React from "react";

const CoverTemplate1 = () => {
  return (
    <div className={`flex flex-col w-[210mm] h-[297mm] bg-white p-16 gap-2`}>
      {/* header */}
      <div>
        <h3>[Your Name]</h3>
        <h3>[Your Address]</h3>
        <h3>[City, State, ZIP]</h3>
        <h3>[Email Address] | [PhoneNumber] | [LinkedIn/GitHub/Portfolio]</h3>
      </div>
      {/* Date */}
      <div>
        <h3>[Date]</h3>
      </div>
      {/* Company Details */}
      <div>
        <h3>[Hiring Manager’s Name]</h3>

        <h3>[Company Name]</h3>
        <h3>[Company Address]</h3>
        <h3>[City, State,ZIP]</h3>
      </div>
      {/* Hiring Manager Name*/}
      <div>
        <h3>Dear [Hiring Manager’s Name],</h3>
      </div>
      {/* Paragraphs */}
      <div className="flex flex-col gap-2">
        <p>
          I am writing to express my interest in the [Job Title] position at
          [Company Name]. With my background in [Your Field/Skills], I am
          confident in my ability to contribute to your team and help achieve
          your company’s goals.
        </p>
        <p>
          In my previous role at [Previous Company/Project], I [briefly
          highlight an achievement, project, or skill that’s relevant to the
          job]. This experience has equipped me with [specific skills or
          knowledge relevant to the role], which I believe align well with the
          requirements of this position. What excites me most about [Company
          Name] is [mention something specific about the company, culture,
          mission, or project that genuinely interests you].
        </p>
        <p>
          I am eager to bring my [key skills] to your team and contribute to
          [specific goal or project of the company]. I would welcome the
          opportunity to discuss how my experience and skills can benefit
          [Company Name]. Thank you for considering my application. I look
          forward to the possibility of contributing to your team.
        </p>
      </div>
      {/* footer */}
      <div>
        <h3> Sincerely,</h3>
        <h3>[Your Name]</h3>
      </div>
    </div>
  );
};

export default CoverTemplate1;
