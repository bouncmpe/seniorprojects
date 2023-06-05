---
advisors:
- Arda Yurdakul
poster: images/poster-tekelioglu.jpg
students:
- name: Kaan Bulut Tekelioğlu
title: Processing Data ow Graphs of SQL Queries
type: project
---

As SQL queries can be represented as data ow graphs, performance gain can be achieved in a multiprocessor architecture by taking advantage of the parallelism inherent in the graph structure. The aim of the project is to extend upon the work of Can Guler's Data ow Graph Generation From an SQL Query [1] to develop tools necessary for automatic scheduling.  

 A multipurpose toolkit on data ow graphs is generated to facilitate this aim. This toolkit supports operations such as retrieving all paths of a table column and creating a meta-vertex from a part of the graph. This should be useful as the project is intended to be extended by future users.  

 With the use of the generated toolkit, the previous work is improved upon with additional features. Besides small improvements, the main goal was to be able to merge the high-level query graph with the low-level graphs for the FILTER and SELECT sub- queries.  

 Several approaches were taken to schedule the merged graph. Hu's scheduling algorithm and List scheduling algorithm were adapted to this framework. The system architecture used in the scheduling can be con gured by the user according to their needs.


{{< youtube u81K82FrYAo >}}