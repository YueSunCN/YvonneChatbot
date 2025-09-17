import { profileKnowledgeBase } from './kb_profile';
import { projectsKnowledgeBase } from './kb_projects';
import { guideKnowledgeBase } from './kb_guide';
import { abbreviationsKnowledgeBase } from './kb_abbreviations';

// This is the central configuration file for the chatbot's knowledge base.
// To add new knowledge, create a new file (e.g., kb_new_topic.ts),
// export the content as a string constant, then import it here and add it to the array below.

export const knowledgeBases = [
  {
    name: 'General Profile & CV',
    content: profileKnowledgeBase,
  },
  {
    name: 'Project Experience Details',
    content: projectsKnowledgeBase,
  },
  {
    name: 'Webpage Guide',
    content: guideKnowledgeBase,
  },
  {
    name: 'Abbreviations',
    content: abbreviationsKnowledgeBase,
  },
];