---
advisors:
- Arda Yurdakul
poster: images/poster-1_10.jpg
students:
- name: Can Güler
title: Dataflow Graph Generation From an SQL Query
type: project
---

As the programs represented as dataflow graphs can be implemented in the hardware level, a performance gain is achieved compared to ordinary programs, especially in the execution of data retrieval queries. The purpose of this project is to create a frontend application and necessary framework for generation of the dataflow graph from an SQL query.  

 This generation is to be completed in two levels. First of all, a high level dataflow graphs from the operational blocks of an SQL query is generated. These operational blocks are SELECT, WHERE, ORDER BY, GROUP BY clauses of the query.  

 At the second level, low level dataflow graphs for each operational block with atomic operations are generated. Our project generates low level graphs for selection and filtering blocks.  

 It tries to hide the details of a specific SQL implementation from the main algorithm by allowing the user to define data types with their storage sizes and declare functions with their argument and return types.  

 Its designed to be extended by its future users, so that low level graphs for other operational blocks may be implemented in the future. Output of this application, dataflow graphs, may be used in query optimization with the help of the other tools or human inspection.


{{< youtube r7FHBXGyH4E >}}