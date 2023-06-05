---
advisors:
- A. C. Cem Say
poster: images/bitirmeposter-1.jpg
students:
- name: Mehmet Eren Söğüt
title: Average Case Complexity
type: project
---

While investigating the complexity of a problem the start point is complexity for a single input and then running time of an algorithm starts to depend the distribution of the instances.When  

 we talking about a distribution of the instances ,there might be differences from the worst-case running time.Therefore the complexity can be better than worst case for the many of the  

 situations .We can use that the notions of easy of hard on average.Rather than a specific input we can tell the complexity according to a distribution.But this problem is not solved as tagging easy on average for the running time because Equating easy on average with polynomially-bounded expected running time has significant drawbacks.In 1984,Levin came up with alternative idea to  

 describe and show a new concept for the average-case complexity studies.  

 There are some algorithm which are not polynomial time but necessary for the sake of some important NP-hard problems.Because of the practical impartance of this problems,we can  

 not avoid from these problems.Via Approximation algorithms,probabilistic algorithms,algorithm which work efficient on a restricted input set we try to come up with this problem.  

 Another idea to be able to solve DistNP problem is checking whether problem can be efficientl solvable on average or not.The idea becomes different using average case rather than  

 the worst case.If there are some NP-complete problems which may be very rare ,than this problem might be not hard on the average.Actually Reductions to NP-complete languages reduce instances of an NP-problem to instances of the NP-complete problem that are not very typical.Now the question become how can we decide the which problems are hard and which problems are easy on average.  

 The concept of easy and hard on average should be clear and to be able to do this we must check and control the distributions for the systems input ,a definition of easy on average and reduction between distributional problem will be used with this purpose.  

 Firstly, there is a deterministic algorithm running in polynomial time on the input x and outputs the binary expansion of μx ,this distribution named as a P-computable distribution. Secondly,A distributional problem (A,μ) belongs to the class DistNP if A ∈ NP and μ is a Pcomputable distribution.Another notation for this clas is (NP,P-computable) .Thirdly,(A,μ) is a distributional problem which is in the Average Polynomial time (AP) if there is an algorithm which has polynomial on μ-average running time for A. These three definitions help us to see that DistNP problems that are easy on the average and we make a more convenient description for the notation of the easy on the average which is polynomial on μ-average.But is there any DistNP problems that are hard on average.  

 Via modifying the reduction definition and call it to domination ,then we must modify the reduction formula for making it respective for the distributions involved. And finally we are getting enable to see several of the other NP-complete problems are also ≤P m-complete for DistNP. After talking about DistNP problems which are distributional versions of NP-complete and a new question come around that is how can we differentiate as hard or easy .And with the flat distribution definition Yuri Gurevich solved this question.  

 After the definition of the P-samplable distribution we get able to understand Impagliazzo and Levin definition that shown that every distributional problem that is complete for (NPsearch,Pcomputable) under randomized many-one reductions .


{{< youtube 64aO5h95F5A >}}