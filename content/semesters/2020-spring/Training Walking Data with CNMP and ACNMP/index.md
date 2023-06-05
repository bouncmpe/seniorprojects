---
advisors:
- Emre Uğur
poster: images/cmpe491_poster.png
students:
- name: Abdullah Enes Öncü
title: Training Walking Data with CNMP and ACNMP
type: project
---

In order to make robots have different skills, learning relations between complex temporal sensorimotor values with external parameters and goals is essential. Learning from demonstration is an efficient and intuitive way for the robots in which robots observes, learns, and produces the observed skills. Conditional Neural Movement Primitives (CNMP) is a recent state-of-the-art approach which can learn relations between complex multi-modal trajectories and environment parameters from a few demonstrations by producing representation from observations and destructuring trajectories from it. Moreover, Adaptive Conditional Neural Movement Primitives (ACNMP) is a framework built on top of CNMP and additionally uses reinforcement learning agent for extrapolation cases where CNMP cannot handle enough. In this project, a walking data is trained by using CNMP and ACNMP and recreated by using conditioned start position of robot. Walking data is obtained from motion database of KIT university and the temporal positions of the markers put on a human are used for learning. In order to generalize learning and make it reusable, relative marker positions are calculated and all components of 3d positions of 53 markers are separately learned by CNMP. Even though, CNMP learned and created trajectories enough for most of the marker positions, to learn some marker positions which has higher error, ACNMP stepped in.


Poster: <https://drive.google.com/file/d/12uIiKqycZx31gZ3tu7isQWC0eTPFmJt_/view>


Video: <https://www.youtube.com/watch?v=TMhdM2T64BI&feature=youtu.be>


{{< youtube TMhdM2T64BI >}}