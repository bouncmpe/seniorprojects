---
advisors:
- Haluk O. Bingöl
title: Clinical Trial Simulation
type: project
---

**Cmpe491/492 Clinical Trial Simulation**


(with cooperation with Mehmet Yusuf of Biomedical Engineering)


 


Analysis of clinical trials in Wikipedia is particularly useful in following this document. <https://en.wikipedia.org/wiki/Analysis_of_clinical_trials#Choice_of_analysis_set>


This model will create three data sets and a few statistical results as output of a clinical trial simulation.


The clinical trial will simulate comparison of two groups (parallel prospective clinical trial)


**Definitions:**


* ·      *Cross over (Transfer)*: The act of changing group membership i.e. changing to group 2 from group 1 or vice versa.
* ·      *Lost to follow up*:  Losing track of a subject at a random time point.
* ·      *Per Protocol (PP)*: The group (data set) which has no cross overs, no losses to follow up, no deaths
* ·      *Intention to treat (ITT)*: The group (data set) which each subject is initially in (randomized into). Crossover, death, lost to follow up does not change group membership.
* ·      *As Treated (AT)*: The group (data set) where subjects end up after cross overs, the final group in which a subject is treated at the end of the trial.
* ·      *Last observation carried forward (LOCF)* is a method of imputing missing data in longitudinal studies. If a person drops out of a study before it ends, then his or her last observed score on the dependent variable is used for all subsequent (i.e., missing) observation points.  Other imputation methods exist. <https://www.google.com/search?sxsrf=ACYBGNSMZY6YIYshccPLPlKh9XP4BE1dTw%3A1580374917421&ei=hZsyXquyGc-H1fAPsZq9sAc&q=missing+data+imputation+python&oq=imputation+methods&gs_l=psy-ab.1.2.0i71l8.0.0..110722...0.2..0.0.0.......0......gws-wiz.0aAa68uXiQ0>
* ·      *Odds Ratio (OR)*, 95% Confidence Interval and Chi Squared: Statistical calculations. <https://select-statistics.co.uk/calculators/confidence-interval-calculator-odds-ratio/> <https://www.mathsisfun.com/data/chi-square-test.html>

**Inputs:**


* ·      Cross over (transfer) rates from group 1 to 2; from 2 to 1
* ·      Lost to follow up rates separately for groups 1 and 2
* ·      Death rates separately for groups 1 and 2
* ·      Endpoint (cure) rates separately for groups 1 and 2
* ·      Number of time points to simulate passage of time and randomly creating events at each point.
* ·      Method of imputation
* ·      Number of subjects

**Outputs:**


·      All three data sets: PP, ITT and AT


* ·      Comparisons of two groups in all three data sets via their endpoint (cure) OR and statistical meaning tests %95 CI and Chi Squared
* ·      Cross over (Transfer) rates realized for both groups
* ·      Lost to follow up rates realized for both groups
* ·      Death rates realized for both groups
* ·      Endpoint (Cure) rates realized for both groups in all 3 data sets
* ·      Odds Ratios of group comparisons in all 3 data sets and their 95% CI test (should not contain 1)
* ·      Chi Squared significance test comparing endpoint frequencies of the 2 groups in all 3 data sets.