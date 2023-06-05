---
advisors:
- Taflan Gündem
poster: images/adaptive_indexing-poster.jpg
students:
- name: Alp Hekimoğlu
- name: Furkan Kerim Kavukcu
title: Implementation Of Adaptive Indexing On Environmental Data
type: project
---

This project is about implementing adaptive indexing on environmental data. The goals of this project is understanding of database indexing, how to implement different indexing methods to databases, how query retrieval times vary in different methods and sizes.


In large relational databases dealing with excessive amount of tables and rows may cause information overhead. Constructing indexes according to incoming query known as database cracking   is a way of overcoming this overhead. After a point, number of partitions grow so big and starts to slow down query process timers, so we also implemented merging algorithms to keep up with optimal speed.We merged back some partitions according to their size and last usages. We tried to use this technique on environmental data which we get it from a website named kaggle, providing datasets on everything from government, health and science to popular games and dating trends. Basically, we are creating reflexive indexes for the database from a given set of queries. Each new query has a diminishing effect but slowly and surely reduce the fetch time.


{{< youtube AGiSH7ZYwnQ >}}