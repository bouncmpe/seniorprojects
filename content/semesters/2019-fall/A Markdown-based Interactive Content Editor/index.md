---
advisors:
- Tuna Tuğcu
- Haluk O. Bingöl
students:
- name: Doğa Yüksel
title: A Markdown-based Interactive Content Editor
type: project
---

**A Markdown-based Interactive Content Editor**


***(Possibly Two Students, Two Semesters)***


**Background.** We have been using teaching.codes in CMPE150 and CMPE160 since 2014; you probably used the system. The original content was in pure HTML5 pages. HTML is a good tool, but not easy to maintain for such a system.


**Current system.** We are currently working on a new way of generating the same HTML5 pages using Markdown markup language. This is how it goes:


1. You develop your content in markdown. We specifically use GitHub Markdown syntax.
2. We add some teaching.codes specific markups. We call this file as *md+tc file*.
3. First, we send the md+tc file to GitHub to convert md markup to pure HTML. The new file is in HTML with an extension of teaching.codes markup.
4. A series of bash scripts, using sed pattern substitutions, replaces teaching.codes markup to the corresponding HTML code. The result is pure HTML5 code.

This system is very flexible and it is very easy to add new functionality to the system. It works but requires the content developer to have Unix knowledge. It is not true in all cases and error-prone. So, it is definitely not foolproof.


**Project.** The aim of this senior project is to develop an app in Java (or a web service would be better) which provides the same functionality with an intuitive GUI without losing easy expandability in functions.


**Requirements.** Knowledge of Java, Unix, sed, regular expressions.