---
advisors:
- Alper Şen
poster: images/poster_son.jpg
students:
- name: Mehmet Bilal Yaşar
title: Benchmark Suite for Parallel Programming Design Patterns
type: project
---

The first computers are single core. So they run the programs sequentially. After that, multicore and multiprocessor computers has been built. So developer can run multiple threads in their programs simultaously. Thanks to new powerful multiprocessors, parallel computers and systems has gained importance last years.


This topic seems trend topic in computer science area. So also researchers developed parallel algortihms to use multi core advantages. Also there are many libraries and frameworks that supports parallel programming. So that developer can think of high layer to their program and can write parallel programs easily. Those libraries schedules, runs threads as blackbox.


There are also many design patterns according to algorithm. The implementation and structure of the program may change with respect to algorithm. So many programmers can suffer while selecting appropriate libraries.


In this project, I selected some parallel programming libraries/frameworks and selected parallel programming design patters. Then I have implemented a sample program for every design pattern for every library. So this way, I tried to compare performance results of frameworks with respect to design patterns.


After testing, I found that some parallel programming libraries are very convenient to use for some specific design patterns. For example, if the problem is cpu intensive task, OpenMP or Pthreads may be logical. If the problem requires a lot of synchronization and communication between threads, you can use Goroutines. (GoLang)


{{< youtube WD31ZhwPsck >}}