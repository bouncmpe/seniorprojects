---
title: Develop a runtime verification tool in Go or Rust
date: 2023-01-28T19:55:16+04:00
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
slug: develop-runtime-verification-tool-rust
---
## Summary
Runtime verification is a computing system analysis and execution approach based on extracting information from a running system and using it to detect and possibly react to observed behaviors satisfying or violating certain properties. Reelay is a header-only C++ library for system-level verification and testing of real-time systems. Reelay implements state-of-the-art runtime verification techniques to construct runtime monitors that check temporal behaviors of the system against system-level requirements. Hence, Reelay can be used to enhance rigorous systems engineering practices by formalizing and automating the assessment phase. See https://doganulus.github.io/reelay/ for more information.

The goal of this project is to implement Reelay’s algorithm in programming languages Go or Rust.

The correct functionality will be graded with CC. For AA, your project must also include:

- Automated code linting/formatting
- Automated builds and packaging
- Automated testing and code coverage (95% coverage at least)
- Performance testing
- Fuzz testing
- CI setup
- Documentation including design choices