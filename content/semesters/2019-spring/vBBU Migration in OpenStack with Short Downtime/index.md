---
advisors:
- Tuna Tuğcu
poster: images/cmpe492-2019-1-poster-mertakozcan-cemalburakaygun-vbbu_migration_in_openstack_with_short_downtime.jpeg
students:
- name: Mert Aközcan
- name: Cemal Burak Aygün
title: vBBU Migration in OpenStack with Short Downtime
type: project
---

5G is the latest generation of cellular mobile communications.In preparation to 5G era, a new architecture called vRAN (Virtual RAN) is introduced to centralize and virtualize Radio Access Networks (RANs). In traditional RAN, each base station has its own physical BBU (baseband unit). The new vRAN architecture offers implementing the functions of a BBU using virtual machines (VMs) on generic servers at a central location. It's a requirement to move VMs between physical machines for a number of reasons. The process of moving a VM from one physical host to another while the VM keeps running is called live migration. In the case of vRAN, virtual instances are the virtual BBUs (vBBU). Although VM keeps running during the migration, there exists some duration during which the VM is unreachable or unresponsive. The duration of this downtime is above the latency requirement of 5G technology, which is 1 ms. In this project, current live migration strategies are studied on OpenStack cloud infrastructure, and a solution for decreasing the downtime duration as much as possible is investigated.


{{< youtube hw7b-3_xX4s >}}