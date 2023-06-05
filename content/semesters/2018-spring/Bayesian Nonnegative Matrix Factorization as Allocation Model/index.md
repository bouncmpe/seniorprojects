---
advisors:
- Ali Taylan Cemgil
poster: images/poster_7.png
students:
- name: Eşref Özdemir
title: Bayesian Nonnegative Matrix Factorization as Allocation Model
type: project
---

In this project, we provide efficient, parallelized inference algorithms for Allocation Model which has a close relationship with Nonnegative Matrix Factorization. NMF is the problem of writing a nonnegative matrix, X, as the multiplication two nonnegative factor matrices, W and H. Bayesian analysis of NMF models show us that (M x N) X matrix is implicitly decomposed into a hidden (M x N x K) tensor S. Allocation Model starts from this idea, and analyzes hidden tensor S more explicitly. We demonstrate the advantages of Allocation Model by challenging our inference algorithms on some examples and also on well-known public datasets. All of our algorithms are implemented in C++ and parallelized using OpenMP and CUDA.


{{< youtube 3nGAMPd8RyI >}}