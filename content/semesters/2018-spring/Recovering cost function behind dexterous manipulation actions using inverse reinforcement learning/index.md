---
advisors:
- Emre Uğur
poster: images/recovering-cost-function1-1.jpg
students:
- name: Pınar Baki
title: Recovering cost function behind dexterous manipulation actions using inverse
  reinforcement learning
type: project
---

Learning complex tasks which require dexterous manipulations is a very challenging task in robotics. This issue is getting importance as robots are used in human environment and industrial areas. Solving such complex tasks needs some nontrivial sensory motor skills, but it is hard to program manually these skills. On the other hand, specifying a reward function manually for such a task is also difficult. There are so many features to consider, but even a human expert cannot easily specify these features exactly and assign them weights. So, in this project, we use inverse reinforcement learning in order to recover a cost function from a pushing behavior of a human expert. At first, we take the orientation and position data from behaviors of human experts while they are pushing different objects through the specified trajectory. Then using the inverse reinforcement algorithms, we extract a reward function from these data.


{{< youtube bRxMd232fh0 >}}