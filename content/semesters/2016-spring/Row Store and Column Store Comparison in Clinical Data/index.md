---
advisors:
- Taflan Gündem
poster: images/seniorprojectposter.jpg
students:
- name: Murat Sinan Açlan
- name: Oğuz Erdoğmuş
title: Row Store and Column Store Comparison in Clinical Data
type: project
---

Clinical data is growing repeatedly with its characteristics such as sparseness, high dimensionality and changing set of attributes. Thanks to the surveys hold by Search Health IT, we know that medical center administrators spend more money for health care analytic tools in every year and they will keep spending. They want to analyze the data with better performance. We aimed to illuminate them by comparing the row store databases and column store databases. Also we showed that how the performance would be if there is a hybrid structure.  

 We generated dozens of XML data with basic random number, text, date, phone and unique identifier generator using Python libraries. We benefited existDB as row stored database and monetDB as column store database. After putting all the data to those databases, we chose 13 queries and tried not to be unfair in terms of choosing those queries.  

 We ran them on both databases and got some execution times. As a visual comparison, we show the execution times for each query and total execution time for total execution time with the tables and graphics.  

 As a conclusion, we saw that row store database provides better performance some of the queries and for the rest, column store so. As a future work, we are suggesting vendors to think about a hybrid structure which can provide remarkably better performance comparing to both that we mentioned.


{{< youtube yQU7dHRN4E0 >}}