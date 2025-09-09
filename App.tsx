import React from 'react';
import Chatbot from './components/Chatbot';

// --- USER ACTION REQUIRED ---
// Please replace the placeholder content below with your actual knowledge base content.
const KNOWLEDGE_BASE_1 = `
🔹 General Profile

Q: Who is Yvonne?/Who is Yvonne Sun?/Who is this person?/Who is the owner of this webpage?/Who is the creater of this page?/
A: Yvonne Sun (also known as 孙悦 in Chinese, pronounced Sun Yue) is a dynamic and results-driven product and technology leader with over 8 years of experience delivering digital solutions in the automotive and manufacturing industries. She specializes in PLM systems, agile transformation, software factories, data platforms, and product certification.

Q: What is Yvonne’s background?
A: Yvonne was born in Dandong, Liaoning, China. She spent 4 years studying in Beijing and 2 years in Taipei. After completing her education, she moved to Shanghai in 2017 and has been working there since.

---

🔹 Professional Experience

Q: What is Yvonne’s current role?
A: Yvonne is the Product Cluster Owner for APAC Quality & Certification at Volvo Cars Asia Pacific, since May 2023.

Q: What does Yvonne do as Product Cluster Owner at Volvo?
A: She leads multi-national, cross-functional teams to ensure compliance with China's regulatory frameworks (e.g., GB-44496 SUMS audits). She rebuilt the Environment Information Publish System to comply with new Ministry of Ecology regulations and deployed RPA tools to automate reporting and approval workflows.

Q: What previous roles has Yvonne held at Volvo?

A:

- Product Owner (2021–2023): Focused on China R&D data-driven transparency, building executive dashboards, vendor engagement roadmaps, and AWS-hosted business metrics systems.
- Scrum Master (2020–2021): Supported Volvo’s global SAFe agile transformation, led agile ceremonies, and helped her team become APAC’s first globally certified “Brave Agile Team.”
- Business Analyst (2019–2021): Acted as a bridge between China regional business and global PLM product teams, led digital expansion in CAD, CAE, and testing systems, and enhanced executive communication through product newsletters.

Q: Where did Yvonne work before Volvo?
A: From 2017 to 2019, Yvonne worked at Siemens Industry Software as a PLM Consultant. She delivered Teamcenter solutions to clients like Geely, Chery, CRRC, and DF Nissan, specializing in BOM management, BOP, configuration, and integration.

---

🔹 Education

Q: What is Yvonne's educational background?

A:

- M.S. in Mechanical Engineering (2014–2016): National Taiwan University
- B.S. in Spacecraft Design & Engineering (2010–2014): Beihang University

---

🔹 Skills & Tools

Q: What are Yvonne’s core technical skills?

A:

- Agile product management and Scrum leadership
- PLM systems (Teamcenter, CATIA)
- DevOps and CI/CD tools
- Business intelligence (PowerBI, SQL)
- Regulatory systems and compliance frameworks
- Cloud platforms (AWS, Azure)

Q: What software tools is Yvonne proficient in?
A: JIRA, Azure DevOps, Planisware, SQL, PowerBI, Dify, and more.

Q: What certifications does Yvonne hold?

A:

- PMP Agile Certified Practitioner
- Siemens Certified Professional – Teamcenter
- ITIL Foundation Certificate in IT Service Management

---

🔹 Languages

Q: What languages does Yvonne speak?
A: She is a native speaker of Mandarin and is fluent in English.

---

🔹 Awards & Recognition

Q: Has Yvonne received any awards?

- 2021: Volvo APAC President Award Nomination (China R&D Data Transparency)
- 2021: Department Quality Award (Digital Recharge Project)
- 2020: Best Agile Transformation Team (Software Factory China)

---

🔹 Career Summary by Expertise Areas

Q: How much experience does Yvonne have in key domains?

- Project Management & Agile: 4 years
- CAD/PLM Systems: 4 years
- CI/CD and DevOps: 1 year
- Data & BI: 2 years
- Quality & Certification Systems: 2 years
- Overall Digital Product Development: 8 years

---

🔹 Personal Info

Q: How can I contact Yvonne?

A:
📧 Email: [sunyue_cn@foxmail.com](mailto:sunyue_cn@foxmail.com)
📞 Phone: (+86) 15010792678

A:
🔗 LinkedIn: https://linkedin.com/in/yuesun-cn

---

🔹 Hobbies and Interests

Q: What are Yvonne's hobbies?

A:

- Golf: Over 5 years of experience and regular practice
- Art: Has studied various painting styles for 6 years since childhood

---

🔹About this webpage:

Yvonne developed a web-based interactive project chart to clearly present her complex and overlapping project history. The webpage is fully self-built and integrates Power BI visualizations to showcase project scope, timelines, and my roles across multiple initiatives. It serves as a structured and dynamic overview of my professional contributions beyond what a standard resume or LinkedIn timeline can provide.

🌐URL: https://yuesuncn.github.io/myprojects/

⭐Key Features:

· Detailed breakdown of each project and role

· Visualized timelines and interdependencies

· Powered by Power BI, hosted via GitHub Pages

· Designed for clarity and transparency in career discussions
`;

const KNOWLEDGE_BASE_2 = `
No.01 ---------

**Time: 2017-04 ~ 2018-05**      Company: Siemens Industry Software              Title: Consultant

**Project: Geely TcPMM**          Project Type: New Development                    Project Size: Middle

**Role: DevOps**                            Team Size: 6

**Responsibility:**

◦ Conducted daily solution deployments, including system customization, data synchronization, and data correction tasks.

◦ Delivered foundational training sessions and technical support to Geely’s BOM team.

**Achievement:**

◦ Ensured consistent system stability and data accuracy through timely deployment and issue resolution.

◦ Improved team efficiency and reduced onboarding time by delivering clear, tailored training and ongoing support to end users.

**Skill Tag:** Development | PLM | Hardware Engineering

No.02 ---------

**Time:   2018-05 ~ 2018-07**    Company: Siemens Industry Software              Title: Consultant

**Project:** **Chery BOM**               Project Type: New Development                    Project Size: Middle

**Role: Solution Design**           Team Size: 8

**Responsibility:**

◦ Participated in early-stage system design for Chery’s After-Sales BOM Project, contributing to solution planning and architecture.

◦ Collected and analyzed user requirements, translating them into technical specifications for customized development.

◦ Conducted functional testing and live demonstrations of core system capabilities.

**Achievement:**

◦ Accelerated project alignment by effectively bridging user expectations with system capabilities during the design phase.

◦ Proposed tailored development solutions that enhanced system usability and addressed key business needs, improving user satisfaction and adoption.

**Skill Tag:** Development | PLM | Hardware Engineering

No.03 ---------

**Time: 2018-08 ~ 2018-10**                                   Company: Siemens Industry Software       Title: Consultant

**Project: CRRC Change Management**         Project Type: New Development Project              Size: Small

**Role: DevOps**                                                         Team Size: 2

**Responsibility:**

◦ Supported the deployment and testing of the final release for change management system.

◦ Provided ongoing maintenance and user support for newly implemented features.

**Achievement:**

◦ Contributed to a smooth and timely system go-live by ensuring stability during final testing and deployment phases.

◦ Strengthened client trust through effective communication and issue resolution, supporting successful system handover and user adoption.

**Skill Tag:** Development | PLM | Change Management

No.04 ----------

**Time: 2018-10 ~ 2018-12**                     Company: Siemens Industry Software          Title: Consultant

**Project: Dongfeng Nissan TCM**      Project Type: New Development                             Project Size: Middle

**Role: DevOps**                                           Team Size: 6

**Responsibility:**

◦ Participated in project closure activities, including acceptance procedures and performance reporting for the TCM Phase I project.

◦ Developed C++ code for the Phase II data synchronization module and conducted basic functional validation and testing.

**Achievement:**

◦ Ensured smooth project closure by supporting accurate documentation and reporting, contributing to successful Phase I acceptance.

◦ Accelerated Phase II progress by delivering reliable C++ code and validating core synchronization functions, laying a solid technical foundation for further development.

**Skill Tag:** Development | PLM | Hardware Engineering

No.05 ---------

**Time: 2018-12 ~ 2019-07**      Company: Siemens Industry Software               Title: Consultant

**Project: Geely TcPMM**          Project Type: New Development                    Project Size: Middle

**Role: Solution Design**           Team Size: 6

**Responsibility:**

◦ Delivered training to overseas engineers (Lotus and CEVT) on the fundamental concepts, usage scenarios, and operations of Geely TcPMM & TCC systems.

◦ Provided system support and developed custom features in response to user requirements from the UK side.

◦ Participated in the design and integration planning of After-Sales BOM and Secondary Track Parts solutions across multiple Geely brands.

◦ Conducted proof-of-concept (POC) testing and system demonstrations for CAD-BOM linkage and 3D model visualization features.

**Achievement:**

◦ Enhanced international collaboration by equipping overseas teams with practical system knowledge and operational confidence.

◦ Improved user satisfaction and system usability through timely delivery of tailored features and support.

◦ Contributed to strategic solution design efforts that unified processes across multiple Geely brands, improving downstream data integration.

◦ Demonstrated the feasibility and value of advanced system functions through successful POC testing, helping guide further development decisions.

**Skill Tag**: Business Analysis | PLM | Hardware Engineering

No.06 ---------

**Time: 2019-09 ~ 2019-12**                    Company: Volvo Cars Asia Pacific               Title: Business Analyst

**Project: China VDI Expansion**         Project Type: Continuous Improvement Project Size: Small

**Role: Business Analyst**                       Team Size: 2

**Responsibility:**

◦ Planned and executed the capacity expansion of the local VDI server to support increased user demand.

◦ Coordinated hardware procurement, installation, and configuration to ensure seamless integration with existing infrastructure.

◦ Monitored system performance and optimized resource allocation during and after the expansion process.

**Achievement:**

◦ Successfully increased VDI server capacity, resulting in improved system responsiveness and user experience.

◦ Minimized downtime by carefully managing the expansion process, ensuring continuous availability for end-users.

◦ Enhanced scalability of the VDI environment, supporting future growth and workload demands.

**Skill Tag:** Business Analysis | VDI | Hardware Engineering

No.07 ---------

**Time: 2019-08 ~ 2021-09**      Company: Volvo Cars Asia Pacific                Title: Business Analyst

**Project: Digital Recharge**    Project Type: Continuous Improvement Project Size: Small

**Role: Business Analyst**        Team Size: 2

**Responsibility:**

◦ Served as the liaison between regional business units and global PLM product owners, managing and prioritizing requests related to licensing, system performance, and functionality enhancements.

◦ Led the 'Digital Recharge' task force aimed at expanding digital engineering capabilities, including CAD, CAE, test labs, software factory, and ADAS, to support business growth.

◦ Authored and distributed monthly product newsletters to executive stakeholders, ensuring transparency and alignment on roadmap progress and delivery.

**Achievement:**

◦ Successfully bridged communication gaps between regional needs and global teams, resulting in improved product responsiveness and user satisfaction.

◦ Drove strategic expansion of digital engineering tools, enabling scalable business operations and enhanced engineering productivity.

◦ Increased executive engagement and visibility through consistent, clear communication on product development milestones and plans.

**Skill Tag:** Business Analysis | Others | Hardware Engineering

No.08 ---------

**Time: 2020-04 ~ 2021-04**      Company: Volvo Cars Asia Pacific                Title: Scrum Master

**Project: Software Factory**   Project Type: Continuous Improvement Project Size: Middle

**Role: Scrum Master**               Team Size: 6

**Responsibility:**

◦ Led the adoption of agile practices within the department as part of a global SAFe transformation, conducting agile training and facilitating ceremonies to ensure smooth team-level implementation.

◦ Coached the team on continuous improvement through retrospectives and tailored agile tool customizations to boost productivity and workflow efficiency.

**Achievement:**

◦ Successfully guided the team to become APAC’s first globally certified ‘Brave Agile Team,’ recognized for outstanding agile maturity and high performance.

◦ Fostered a culture of continuous improvement, significantly enhancing team collaboration and delivery consistency.

**Skill Tag:** Agile | CI/CD | Software Engineering

No.09 ---------

**Time: 2021-04 ~ 2023-04**      Company: Volvo Cars Asia Pacific                Title: Product Owner

**Project: China R&D DDT**      Project Type: New Development                    Project Size: Large

**Role: Product Owner**             Team Size: 10

**Responsibility:**

◦ Developed data visualization dashboards for VP-level leadership and APAC teams to enhance data-driven-transparency (DDT).

◦ Managed the department’s first agile Time & Materials engagement with an external vendor, creating a delivery roadmap and risk management model.

◦ Delivered a scalable business metrics system and implemented an AWS-hosted big data infrastructure to support enterprise-wide data sharing and advanced data modeling.

**Achievement:**

◦ Improved leadership decision-making through intuitive, real-time dashboards, increasing data-driven transparency across APAC.

◦ Established a successful vendor engagement model that balanced agility and risk, streamlining project delivery.

◦ Enabled enterprise-wide analytics capability by deploying robust, scalable big data infrastructure, facilitating advanced business insights.

**Skill Tag:** Project Management | BI | Planning

No.10 ---------

**Time: 2023-03 ~ 2024-12**      Company: Volvo Cars Asia Pacific                Title: Product Cluster Owner

**Project: CoDev China**           Project Type: New Development                    Project Size: Large

**Role: Product Owner**                           Team Size: 10

**Responsibility:**

◦ Led the localization and implementation of the CoDev product in China Azure, ensuring alignment with global architecture and DevOps practices.

◦ Interpreted and applied Chinese cross-border data transfer regulations and cloud compliance requirements into actionable system and deployment decisions.

◦ Coordinated with security, legal, and infrastructure teams to ensure regulatory alignment and technical feasibility for data flow and hosting models.

**Achievement:**

◦ Successfully enabled the backup solution and final rollout of CoDev product in China Azure by establishing a localized operational and governance framework.

◦ Ensured compliance with China’s Personal Information Protection Law (PIPL) and other data localization requirements, avoiding legal and operational risks.

◦ Streamlined collaboration between global and local teams, reducing friction and ensuring a smooth transfer of global solutions to the local market.

◦ Played a critical role in building a compliance-ready deployment pipeline that became a reference model for future cloud localization initiatives.

**Skill Tag:** Project Management | Azure | Quality

No.11 ---------

**Time: 2023-05 ~ 2023-12**      Company: Volvo Cars Asia Pacific                Title: Product Cluster Owner

**Project: Planisware China Rollout**              Project Type: Continuous Improvement     Project Size: Small

**Role: Business Analyst**                       Team Size: 3

**Responsibility:**

◦ Led system localization, user onboarding, and iterative enhancements to align the global Planisware platform with regional business needs.

**Achievement:**

◦ Improved user satisfaction and operational efficiency by tailoring the platform to local workflows and providing ongoing support and enhancements.

◦ Enabled smoother adoption of the global system in the region through structured onboarding and continuous feedback-driven improvements.

**Skill Tag:** Business Analysis | Planisware | Planning

No.12 ----------

**Time: 2024-05 ~ 2025-09**      Company: Volvo Cars Asia Pacific                Title: Product Cluster Owner

**Project: EIP 2.0**                         Project Type: New Development                    Project Size: Middle

**Role: Product Owner**             Team Size: 6

**Responsibility:**

◦ Led requirement analysis, system design, and full lifecycle delivery of the Environmental Information Publish System to comply with updated Ministry of Ecology regulations.

**Achievement:**

◦ Successfully rebuilt the system to fully meet new regulatory requirements, ensuring compliance and enhancing data accuracy and transparency.

◦ Delivered the project on time, enabling uninterrupted environmental reporting and reducing regulatory risk.

**Skill Tag:** Project Management | AWS | Homologation

No.13 ---------

**Time: 2024-10 ~ 2025-12**      Company: Volvo Cars Asia Pacific                Title: Product Cluster Owner

**Project: China SUMS**                           Project Type: New Development               Project Size: Large

**Role: Business Analyst**        Team Size: 10

**Responsibility:**

◦ Led multi-national teams to ensure compliance with China SUMS audit standards, focusing on digital tool functionality, traceability, and data integrity.

**Achievement:**

◦ Successfully achieved full compliance with GB-44496 standards, enhancing system reliability and audit readiness.

◦ Strengthened cross-border collaboration to meet stringent regulatory requirements on time, reducing compliance risks.

**Skill Tag:** Business Analysis | Others | Homologation

`;
// --- END OF USER ACTION SECTION ---


const App: React.FC = () => {
  // Combine the two knowledge bases into a single string for the chatbot.
  const combinedKnowledgeBase = `KNOWLEDGE BASE 1:\n${KNOWLEDGE_BASE_1.trim()}\n\n---\n\nKNOWLEDGE BASE 2:\n${KNOWLEDGE_BASE_2.trim()}`;

  return (
    <div className="min-h-screen font-sans antialiased text-gray-800 bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] md:h-[90vh]">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col h-full">
           <Chatbot knowledgeBase={combinedKnowledgeBase} />
        </div>
      </div>
    </div>
  );
};

export default App;
