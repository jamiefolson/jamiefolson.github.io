---
title: Research
layout: page
---

### Background

I currently on a leave of absence from the Computation, Organization and
Society PhD program at the Institute for Software Research in the Carnegie
Mellon School of Computer Science.  My advisor at CMU is Kathleen Carley,
with whom I've worked on a variety of research projects.

### Network Topology and Variability

Computed statistics indicating a node's position in a network have long been
an important part of network analysis.  Nearly as long, researchers have
been concerned about the sensitivity of these computed statistics to
unreliable or incomplete data.  Recently, a number of studies have
attempted to quantify these concerns through various simulations, however,
these studies make several simplifying assumptions that are inappropriate
for real network data. In particular, they assume that
uncertainty/variability is equal for all nodes and edges in the network,
despite evidence to the contrary.  I have examined empirical networks as
well as frequently used statistical models, with both indicating high
variability for statistics related to weak ties (e.g. betweenness
centrality) as well as low variability for statistics related to strong
ties (e.g. closeness centrality).

### Modeling Dynamic Social Activity

Frequently, social network data originates in some (electronic) record of a
specific social action.  Despite this, there are few viable continuous-time
models for representing the various ways in which social actions propagate
through a social network. Specifically, the p* models generally require
discrete observations of the entire network, while Siena models generally
do not scale beyond tens to hundreds of nodes. Furthermore, these models
have been developed to model the relatively stable patterns of social
relationships, rather than the often fleeting specific social actions which
contribute to their maintenance.

I have developed a variation on the Hawkes self-exciting process that I
believe to be uniquely appropriate for the modeling of dynamic social
activity.  In particular, I have developed a parameterization that permits
an intuitive causal interpretation in conjunction with a scalable algorithm
for parameter estimation.


### Analyzing Spatially-Embedded Networks
I've been working at the intersection of spatial information and network
information, trying to develop ways of integrating the two types of
information. This is not the <a
href="http://en.wikipedia.org/wiki/Spatial_network">"spatial
networks"</a> that are used to analyze space syntax and transportation
networks. Instead, I'm interested in looking at arbitrary networks of
things where some of the things are labeled with spatial location
information.  

So far I've analyzed drug seizure networks, shipping networks,
organizational network of terrorist groups, epidemiological networks and
simulated social networks. Most of this analysis has been to test new
methodologies I've developed. There are two main techniques I've been
working on, manipulating network scale and aggregation and visualizing
spatial dependencies in network topology.

There is a fundamental discord between network and space. Space is continuous;
relationships in networks are defined as between discrete entities. This means
that some level of aggregation of space (implicit or explicit) us required in
order to do a meaningful analysis of the network. Different levels of
aggregation can lead do quite different networks. I've been working on methods
of capturing the tradeoffs of aggregation versus precision.

Second, visualization of social networks has been important historically in
providing the intuition for many commonly used network statistics. My hope is
that the visualization of spatially embedded network data will be similarly
useful. However, simple visualizations of spatially embedded networks quickly
become noisy and difficult to interpret. For this reason, I'm developing
techniques for visualizing higher-level network topological properties and
their interaction with spatial location. I am also working to develop a
statistical measure of the spatial dependencies in structural properties of a
spatially embedded network.

All of these techniques and more have been implemented in the Geospatial
Network Visualizer in the ORA dynamic network analysis tool.


<!--
Right now I'm working on problems related to the analysis and visualization of
spatially embedded network/relational data.  Here are some of the interesting
problems: <ul>
<li>How do social distance and physical distance interact to determine who knows who?</li>
<li>How can we use physical locations to extract additional structure out of network data?</li>
<li>Can we predict the locations of individuals whose social network is known but whose physical location is unknown?</li>
<li>How/Can physical locations be integrated into existing models of network evolution?</li>
</ul>
</p>
-->

### Misc

As an undergraduate I worked on two computer science-related projects.  The
first, working with Amy Csizmar Dalal, involved predicting the User-Perceived
Quality of streaming multimedia clips.  We gathered real-time metrics about the
stream and used a simple nearest-neighbor regression to predict quality.  I
tested several different time-series distance metrics and developed a new
metric.

I also worked with Dave Musicant on EnChIlADA:Environmental Chemistry through
Intelligent Analysis of Data.  We developed tools to aid environmental chemists
in the analysis of Aerosol Time-of-Flight Mass Spectrometry data.  We
implemented a variety of clustering algorithms and distance metrics and tested
them for real-world meaning and usefulness.

You can find my cv <a href="{{ '/documents/papers/jfolson-cv.pdf' | prepend: site.baseurl}}">here</a>.

### Publications:

{% for paper in site.data.papers %}
<dl><dt><b> {{paper.authors}} </b>{{paper.year}}</dt>
<dd>{% if paper.link %}
    <a href="{{ paper.link | prepend: site.baseurl}}">{{paper.title}}</a>
{% else %}
    {{paper.title}}
{% endif %}
</dd>
<dd> {{paper.journal}}</dd>
</dl>
{% endfor %}