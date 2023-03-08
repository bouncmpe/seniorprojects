---
title: Tool to determine microservice boundaries for software-defined vehicles
date: 2022-04-28T19:55:16+04:00
draft: false
advisors:
  - Doğan Ulus
authors:
  - Doğan Ulus
type: posts
toc:
  enable: true
  keepStatic: false
  auto: true
slug: tool-determine-microservice-boundaries-software-defined-vehicles
---
## Summary
This project aims to develop a tool that analyzes the functionality and dependencies of different software components in a vehicle and recommends the optimal boundaries for dividing the system into microservices that follow the publisher-subscriber pattern. The goal of this project is to improve the scalability, flexibility, and maintainability of software-defined vehicles by breaking down monolithic systems into smaller, modular, and independently deployable services that can communicate using the publisher-subscriber architecture. The tool will consider factors such as message communication patterns, data flow, and system requirements to make its recommendations, and will be tested on real-world vehicle systems (e.g. Autoware) to evaluate its effectiveness.

## Includes
- Extraction of the computation graph from pub-sub networks, especially from Robot Operating System (ROS) networks
- Study and implementation of graph partitioning and clustering algorithms
- Comparison of different design requirements by the tool