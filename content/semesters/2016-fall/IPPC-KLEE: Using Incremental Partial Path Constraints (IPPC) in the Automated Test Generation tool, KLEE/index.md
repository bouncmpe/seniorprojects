---
advisors:
- Alper Şen
poster: images/poster-ippc-klee.jpg
students:
- name: Tuba Topaloğlu
title: 'IPPC-KLEE: Using Incremental Partial Path Constraints (IPPC) in the Automated
  Test Generation tool, KLEE'
type: project
---

Software testing is an important but time-consuming step in the software development cycle. One of the most popular testing technique is manually writing unit tests. However, this technique lacks coverage and is not time-ecient. Thus, the gain from automating software testing is great. One of such tools is KLEE and it promises a high coverage. In this project we aimed to increase the performance of KLEE by decreasing its runtime. The costliest operation of KLEE is the calls made to the constraint solver which is proportional to the number of constraints contained in the query. We believed that by starting with an empty query and incrementally growing it until we reach a solution that satisfies the original query the time spent for query solving would be decreased and the overall runtime would be improved. The experimental results show that the decrease in the query length was not enough to make up for the loss by making more query call to the constraint solver and an performance improvement was not achieved. We believe that by focusing on the future work of this project and improving the initial constraint selection process of IPPC, we may see a better performance.


{{< youtube 95_ubUlDRu0 >}}