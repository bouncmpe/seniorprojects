---
title: "Student Guide"
type: guide
---

### Introduction
This guide will help you understand how to participate in senior projects at our university. Senior projects are an opportunity for students to work on a project of their choice and apply what they have learned throughout their studies.

### Finding and Agreeing on Project Offers
#### 1. Visit the Offers Page
During course registration period, visit the [offers page](/offers) on our website and contact project advisors who are working on projects that interest you.

#### 2. Agree on a Project
In this step, you have found a project that interests you and have agreed upon it with your advisor(s). 
To claim the project, you will have to first get the project running locally. You can do so by following the steps in [README](https://github.com/bouncmpe/seniorprojects#run-the-website-locally).

Next, there are two possible scenarios:

##### 2.1: Project exists in offers page
If the project is already in `content/offers`, you will remove it by moving it to `content/ongoing`. You also have to add 

```
students:
  - name: <STUDENT_NAME1>
    github: <STUDENT_GITHUB_USERNAME1>
  - name: <STUDENT_NAME2>
    github: <STUDENT_GITHUB_USERNAME2>
course: <491 or 492>
type: project
```

to frontmatter.

##### 2.2: Project does not exists in offers page
If the project is not in `content/offers`, you will have to create a new `.md` file in `content/ongoing` with the following content:

```
---
title: <TITLE>
advisors:
  - <ADVISOR_NAME1>
  - <ADVISOR_NAME2>
students:
  - name: <STUDENT_NAME1>
    github: <STUDENT_GITHUB_USERNAME1>
  - name: <STUDENT_NAME2>
    github: <STUDENT_GITHUB_USERNAME2>
course: <491 or 492>
type: project
---

***Some information regarding the project in markdown format***
```

For the <ADVISOR_NAME>, make sure that you use how it is used everywhere else. For example, if advisor's name is 'H. Doğan Ulus', make sure to write it as 'H. Doğan Ulus', not without the 'H' or as 'H. Dogan Ulus'. Make sure that abbreviations are also done as done in the past.

### Completing the Project

#### 1. Create Relevant Project Folder
If you are in the year <year>, and semester <semester>, create the relevant folder under `content/semesters/<year>-<semester>/<Your project title>`. In there, create your `<title>.md` file - if it didn't exist in the `ongoing` directory - and `images` directory for all your images that you wish to use.
#### 2. Remove Project from Ongoing
Remove your project from the `ongoing` directory and move the `index.md` to the directory you created in the previous step.

#### 3. Populate Frontmatter
In the `index.md` file that you created, populate all the details with the following frontmatter data:
```
---
advisors:
- <Advisor 1>
- <Advisor 2>
poster: images/<your image for poster>.jpg
students:
- name: <student name 1>
- name: <student name 2>
title: <project-title>
type: project
tags: 
    - <tag1>
    - <tag2>
---
```
For the <ADVISOR_NAME>, make sure that you use how it is used everywhere else. For example, if advisor's name is 'H. Doğan Ulus', make sure to write it as 'H. Doğan Ulus', not without the 'H' or as 'H. Dogan Ulus'. Make sure that abbreviations are also done as done in the past.

#### 4. Populate Project Details
Write details about your project and provide the poster in metadata. Also add your youtube video to the last section.

#### 5. Preview
To make sure your completed `.md` file looks as expected once published, head out to the repository of this website. There, you will see running instructions. Run the modified version and verify that you see your input as expected.

#### 6. Creating PR
When semester ends make a pull request with the changes you have made to the GitHub repository.