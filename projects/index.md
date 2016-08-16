---
title: Projects
layout: page
---

### R, Hive and SQL

In order to complement the excelent [RHadoop](https://github.com/RevolutionAnalytics/RHadoop/wiki) tools, I developed several R packages for use with Hive databases.  I found it
desirable to be able express SQL expressions using R, particularly for `WHERE` and `SELECT`
expressions. To that end, I developed the [rsql](http://github.com/jamiefolson/rsql) package.

I found the existing packages for R and Hive unsatisfactory, requiring too much
explicit importing and exporting of variables.  I decided to build my own
package leveraging the RHadoop framework, which seemlessly exports the current
R environment, transfers it to a shared location on hdfs and copies it locally
onto each task node, loading it into an R session before evaluating whatever
expression the user provided.  There were several impediments to enabling that
workflow with Hive.  For the initial version, I chose to focus on implementing
the Hive `TRANSFORM` statement, which streams each row through a
user-provided executable.  This required implementing a SerDe for the
typedbytes data format preferred by RHadoop.  For more information check out the [rhive](http://github.com/jamiefolson/rhive) package on github
or read any of my blog articles about it.

I also implemented a very limited subset of the fantastic [caret](http://caret.r-forge.r-project.org/) package for Hive
tables as represented in rhive.  Specifically, I implemented several functions related to sampling and partitioning.

### Gradle Plugins
[Gradle](http://www.gradle.org/) is pretty much amazing.  I fought
with ant and maven, before finding gradle, and I much prefer gradle.  My needs
may be somewhat unusual, since my goal was to integrate the generating,
building, and testing of R packages into gradle. In general, the process for
building R packages is quite simple: "R CMD build", but I have several packages
that make use of java and I was hoping to be able to seemlessly compile and
package jar files that would then be copied into my R packages as they are
built. Gradle also simplified things by letting me run the [roxygen](https://github.com/yihui/roxygen2) tool to generate
documentation as well as the `NAMESPACE` file.  This functionality and a tad bit
more can be found in my [Gradle plugin for R](https://github.com/jamiefolson/gradle-plugin-r), also on github. 

