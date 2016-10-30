## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**ProjectContainer**
 - Project
 - Rewards
 - TagContainer

**BackingContainer**
 - Backing
  + NoteIndex

**SearchResultsContainer**
 - Search
 - Index

**TagContainer**
  - Tag

**Index**
 - Project
  + ProjectDetail
    + Project Description
    - Tags
      - Tag

**NewProjectContainer**
 - NewProject
  - Form


**NewBackingContainer**
 - NewBacking
  - Form

**Search**

**NewProject**
 - NewProject

**NewBacking**
 - NewBacking

**NewTag**
 - NewTag

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up"  (note: will be removed in bonus)| "AuthFormContainer" |
| "/sign-in" (note: will be removed in bonus)| "AuthFormContainer" |
| "/home/project/:projectId" | "ProjectContainer" |
| "/home/project/:projectId/backing/:backingID" | "BackingContainer" |
| "/home/tag/:tagId/" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/search" | "Search" |
| "/new-project" | "NewProjectContainer" |
| "/new-project" | "NewProject" |
| "/new-tag" | "NewTag" |
