---
title: "Student Guide"
---

#### Introduction
This guide will help you understand how to participate in senior projects at our university. Senior projects are an opportunity for students to work on a project of their choice and apply what they have learned throughout their studies.

#### 1. Visit the Offers Page
During course registration period, visit the [offers page](/offers) on our website and contact project advisors who are working on projects that interest you.

#### 2. Agree on a Project
In this step, you have found a project that interests you and have agreed upon it with your advisor(s). To claim the project, you will have to first get the project running locally. You can do so by following the steps in [README](https://github.com/bouncmpe/seniorprojects#run-the-website-locally).

Next, there are two possible scenarios:

##### 2.1: Project exists in offers page
If the project is already in `content/offers`, you will have to move it to `content/ongoing`. You also have to add 

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

#### Step 3: Enter Information
Enter some information like student names, etc.

#### Step 4: Move Project File
When semester ends make pull request to move project md file from ongoing to correct semester folder.

#### Step 5: Write Details
Write details about your project and provide poster also possible youtube video.