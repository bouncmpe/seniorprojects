---
advisors:
- Haluk O. Bingöl
title: Effects of obstacle in Axelrod's Cultural Model
type: project
---

**Cmpe491/492 Project Offer**


**by Haluk Bingol**


2017 Spring


 


Social dynamics are very complex and also interesting to model. One of the agent based models, proposed by Axelrod in 1997 [1], investigates polarization of population.


Agents has culture represented with an F dimensional vector where each dimension has q different possible choices. Think that as the dimension represents the musical preference and there are q genres to select from.


Agents are at the vertices of a 2D grid. Each agent can interact with its local neighborhood, that is, with the ones in the north, sought, east and west. Interaction is defined in a simple manner. Two neighbor agents selected at random. If they share at least one common selection in any of the dimensions then they exchange a cultural trait. Note that after an interaction the culture vectors of the agents get closer. So one expects that population becomes monolithic. But the simulations show the opposite. Population becomes polarized.


We know that having obstacle affects social systems. Consider English in UK, USA and other English speaking countries. Due to lack of interaction they develop differences in the language.


In this project you are asked to investigate the effect of having a limited connectivity to the model.  We introduce a wall with a small aperture so that the agents that are in the opposite sides of the wall cannot interact while the ones at the aperture can. Then we investigate the effect of location and the size of the aperture.


 


[1]       Axelrod, “The Dissemination of Culture : A Model with Local Convergence and Global Polarization ”, Journal of Conflict Resolution 1997 41: 203  
<DOI: 10.1177/0022002797041002001>