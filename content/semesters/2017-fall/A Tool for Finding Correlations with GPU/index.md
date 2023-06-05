---
advisors:
- Taflan Gündem
poster: images/posterupdated.png
students:
- name: Muhammed Taha Sürmeli
title: A Tool for Finding Correlations with GPU
type: project
---

Some algorithms like statistical calculations in our project are based on arithmetic operations rather than input/output type of operations. Usually this situation means that one part of the code is not affecting the following code and that they can be seperated. Let's give an example. You are playing tetris and what will happen one milisecond later is mostly depended on what your keyboard input will be. Now consider matrix multiplication. When we are multiplying two matrices, we can divide both matrices to four parts and multiply every pair independently. That means the latter is parallelizable, we can run four threads running at the same time to speed up the software.
The main difference between a CPU and a GPU is that CPU is developed for general purposes while GPU is mostly based on arithmetic operations. Computer graphics is nothing but calculations of the color and alpha value in every pixel in every frame. Engineers developed more sophisticated processor to handle that heavy calculations. So why are we not using that more suitable processor for our other bulk calculations? 
{{< youtube n2yYpO3aipk >}}