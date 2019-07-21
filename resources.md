---
layout: page
title: "Resources"
description: "Talks, papers, and more"
header-img: "img/about-bg.jpg"

---

# Talks

<strong>Autonomic Marketing: How far are we?</strong>
<br/><small><em>[TMLS Micro-Summit on Retail and Advertising](https://www.eventbrite.ca/e/toronto-machine-learning-micro-summit-series-tmls-retail-and-advertising-special-focus-tickets-56919639173#), March 2019 </em></small>
<br/><small><em>In this talk, I explore the question of whether true autonomic marketing is possible. To answer this question, I provide an overview of AI applications in advertising and marketing with an emphasis on digital marketing. Specifically, I survey the applications of AI in promotions, advertisements, search, pricing and programmatic marketing. Given the current state, I then explore what might be possible in the future. Towards this, I present some of the trends in AI unocovered by Omnicom Media Group and our point of view on AI applications in advertising and retail. Finally, I conclude with some case studies of applying AI at OMG and lessons learned.</em></small>

<strong>Time series modeling of network traffic and alarms</strong>
<br/><small><em>[Vector Institute for Artificial Intelligence Endless Summer School on Time Series Applications
](https://vectorinstitute.ai/), TELUS presentation, November 2018 </em></small>
<br/><small><em>In this talk, we describe two use cases where we have applied time series modeling techniques. In the network traffic forecasting use case, we describe our approach to forecasting traffic which was then used in network build planning and prioritization. In the network alarms use case, we describe an approach where we apply deviations from trend to proactively spot alarms and identify device breakdowns. In both cases, we describe some implementation challenges and conclude with lessons learned.</em></small>

<strong><em>Big Data and applications at TELUS</em></strong>
<br/><small><em>[CASCON 2018: Workshop on developing Big Data Applications and Services](https://dl.acm.org/citation.cfm?id=3291361), October 2018 </em></small>

<strong>Evaluating the success of conversational agents at TELUS</strong>
<br/><small><em>[Vector Institute for Artificial Intelligence Endless Summer School on New Algorithms
](https://vectorinstitute.ai/), TELUS presentation, November 2017 </em></small>
<br/><small><em>In this talk, we will present the results of the evaluation of business success of conversational agents at TELUS. Noting the two sides of conversational AI, namely the task-completion or productivity side and the emotional side, we present the evaluations from deploying multiple conversational agents across brands and different lines of business at TELUS. Our study emphasizes the importance of multidimensional evaluation of commercial deployment of conversational agents. Our evaluations also provide insight into the next generation of conversational agents, namely agents that generate context-sensitive responses, and the opportunities with deep learning based chatbots. We also outline TELUS's overall chatbot strategy as part of the end to end customer experience and our vision for AI.</em></small>


# Papers

<strong>Private Machine Learning in TensorFlow using Secure Computation</strong>
<br/><small>with  Jason Mancuso, Yann Dupis, et al.</small>
<br/><small><em>[NeurIPS workshop on Privacy Preserving Machine Learning](https://ppml-workshop.github.io/ppml/), December 2018 (**[paper](https://arxiv.org/abs/1810.08130)**, [slides](https://github.com/mortendahl/talks/raw/master/PPML18-slides.pdf))</em></small>
<br/><small><em>We present a framework for experimenting with secure multi-party computation directly in TensorFlow. By doing so we benefit from several properties valuable to both researchers and practitioners, including tight integration with ordinary machine learning processes, existing optimizations for distributed computation in TensorFlow, high-level abstractions for expressing complex algorithms and protocols, and an expanded set of familiar tooling. We give an open source implementation of a state-of-the-art protocol and report on concrete benchmarks using typical models from private machine learning.</em></small>

<strong>A Generic Framework for Privacy Preserving Deep Learning</strong>
<br/><small>with Theo Ryffel, Andrew Trask, et al.</small>
<br/><small><em>[NeurIPS workshop on Privacy Preserving Machine Learning](https://ppml-workshop.github.io/ppml/), December 2018 ([paper](https://arxiv.org/abs/1811.04017))</em></small>
<br/><small><em>We detail a new framework for privacy preserving deep learning and discuss its assets. The framework puts a premium on ownership and secure processing of data and introduces a valuable representation based on chains of commands and tensors. This abstraction allows one to implement complex privacy preserving constructs such as Federated Learning, Secure Multiparty Computation, and Differential Privacy while still exposing a familiar deep learning API to the end-user.</em></small>

<strong>Private Data Aggregation on a Budget</strong>
<br/><small>with Valerio Pastro and Mathieu Poumeyrol</small>
<br/><small><em>[Homomorphic Encryption Applications and Technology](https://heat-project.eu/finalworkshop/) (HEAT), November 2017 (**[slides](https://github.com/mortendahl/talks/raw/master/HEAT17-slides.pdf)**)</em></small>
<br/><small><em>[Theory and Practice of Multi-Party Computation](http://www.multipartycomputation.com/tpmpc-2017) (TPMPC), April 2017 ([slides](https://github.com/mortendahl/talks/raw/master/TPMPC17-slides.pdf))</em></small>
<br/><small><em>[NIPS workshop on Private Multi-Party Machine Learning](https://pmpml.github.io/PMPML16/) (PMPML), December 2016 (**[full paper](https://eprint.iacr.org/2017/643)**)</em></small>
<br/><small><em>We provide a practical solution to performing cross-user machine learning through aggregation on a sensitive dataset distributed among privacy-concerned users. We focus on a scenario in which a single company wishes to obtain the distribution of aggregate features, while ensuring a high level of privacy for the users. We are interested in the case where users own devices that are not necessarily powerful or online at all times, like smartphones or web browsers. This premise makes general solutions, such as general multiparty computation (MPC), less applicable. We design an efficient special-purpose MPC protocol that outputs aggregate features to the company, while keeping online presence and computational complexity on the users’ side at a minimum. This basic protocol is secure against a majority of corrupt users, as long as they do not collude with the company. If they do, we still guarantee security, as long as the fraction of corrupt users is lower than a certain, tweakable, parameter. We propose different enhancements of this solution: one guaranteeing some degree of active security, and one that additionally ensures differential privacy. Finally, we report on the performance of our implementation on several realistic real-world use-cases across different devices.</em></small>

<strong>Universally Composable Symbolic Analysis for Two-Party Protocols based on Homomorphic Encryption</strong>
<br/><small>with Ivan Damgård</small>
<br/><small><em>[EUROCRYPT](http://ec14.compute.dtu.dk/), May 2014 ([full paper](https://eprint.iacr.org/2013/296))</em></small>
<br/><small><em>We consider a class of two-party function evaluation protocols in which the parties are allowed to use ideal functionalities as well as a set of powerful primitives, namely commitments, homomorphic encryption, and certain zero-knowledge proofs. We illustrate that with these it is possible to capture protocols for oblivious transfer, coin-flipping, and generation of multiplication-triple.
We show how any protocol in our class can be compiled to a symbolic representation expressed as a process in an abstract process calculus, and prove a general computational soundness theorem implying that if the protocol realises a given ideal functionality in the symbolic setting, then the original version also realises the ideal functionality in the standard computational UC setting. In other words, the theorem allows us to transfer a proof in the abstract symbolic setting to a proof in the standard UC model. Finally, we show that the symbolic interpretation is simple enough in a number of cases for the symbolic proof to be partly automated using the ProVerif tool.</em></small>

<strong>On Secure Two-Party Integer Division</strong>
<br/><small>with Chao Ning and Tomas Toft</small>
<br/><small><em>[Financial Cryptography and Data Security](https://fc12.ifca.ai/) (FC), February 2012 ([full paper](https://eprint.iacr.org/2012/164))</em></small>
<br/><small><em>We consider the problem of secure integer division: given two Paillier encryptions of l-bit values n and d, determine an encryption of n/d without leaking any information about n or d. We propose two new protocols solving this problem.</em></small>

<strong>Type-Based Automated Verification of Authenticity in Asymmetric Cryptographic Protocols</strong>
<br/><small>with Naoki Kobayashi, Yunde Sun, and Hans Hüttel</small>
<br/><small><em>[Automated Technology for Verification and Analysis](https://link.springer.com/conference/atva) (ATVA), 2011</em></small>
<br/><small><em>Gordon and Jeffrey developed a type system for verification of asymmetric and symmetric cryptographic protocols. We propose a modified version of Gordon and Jeffrey’s type system and develop a type inference algorithm for it, so that protocols can be verified automatically as they are, without any type annotations or explicit type casts. We have implemented a protocol verifier SPICA2 based on the algorithm, and confirmed its effectiveness.</em></small>

<strong>Formal Analysis of Privacy for Anonymous Location Based Services</strong>
<br/><small>with Stéphanie Delaune and Graham Steel</small>
<br/><small><em>[Theory of Security and Applications](https://www.springer.com/us/book/9783642273742) (TOSCA), March 2011 ([paper](http://www.lsv.fr/Publis/PAPERS/PDF/DDS-tosca11.pdf))</em></small>
<br/><small><em>We propose a framework for formal analysis of privacy in location based services such as anonymous electronic toll collection. We give a formal definition of privacy, and apply it to the VPriv scheme for vehicular services. We analyse the resulting model using the ProVerif tool, concluding that our privacy property holds only if certain conditions are met by the implementation. Our analysis includes some novel features such as the formal modelling of privacy for a protocol that relies on interactive zero-knowledge proofs of knowledge and list permutations.</em></small>

<strong>Formal Analysis of Privacy for Vehicular Mix-Zones</strong>
<br/><small>with Stéphanie Delaune and Graham Steel</small>
<br/><small><em>[European Symposium on Research in Computer Security](https://dblp.uni-trier.de/db/conf/esorics/esorics2010.html) (ESORICS), 2010</em></small>
<br/><small><em>Embedded Security in Cars (ESCAR), 2010</em></small>
<br/><small><em>Formal Methods and Cryptography (CryptoForma), 2010</em></small>
<br/><small><em>[Foundations of Security and Privacy](http://www.floc-conference.org/FCS-PrivMod-home.html) (FCS-PrivMod), July 2010</em></small>
<br/><small><em>Safety critical applications for recently proposed vehicle to vehicle ad-hoc networks (VANETs) rely on a beacon signal, which poses a threat to privacy since it could allow a vehicle to be tracked. Mix-zones, where vehicles encrypt their transmissions and then change their identifiers, have been proposed as a solution to this problem. In this work, we describe a formal analysis of mix-zones. We model a mix-zone and propose a formal definition of privacy for such a zone. We give a set of necessary conditions for any mix-zone protocol to preserve privacy. We analyse, using the tool ProVerif, a particular proposal for key distribution in mix-zones, the CMIX protocol. We show that in many scenarios it does not preserve privacy, and we propose a fix.</em></small>

# More

<strong>Experimenting with TF Encrypted</strong>
<br/><small><em>with Jason Mancuso ([blog post](https://medium.com/dropoutlabs/experimenting-with-tf-encrypted-fe37977ff03c))</em></small>

<strong>Private Analytics with SDA</strong>
<br/><small><em>with Mario Cornejo and Mathieu Poumeyrol ([blog post](https://medium.com/snips-ai/private-analytics-with-sda-d98a0251ab32), [code](https://github.com/snipsco/sda))</em></small>

<strong>Benchmarking Paillier Encryption</strong>
<br/><small><em>with Mario Cornejo and Mathieu Poumeyrol ([blog post](https://medium.com/snips-ai/benchmarking-paillier-encryption-15631a0b5ad8), [code](https://github.com/mortendahl/rust-paillier), [benchmarks](https://github.com/mortendahl/paillier-libraries-benchmarks))</em></small>

<strong>Prime Number Generation in Rust</strong>
<br/><small><em>with Mario Cornejo ([blog post](https://medium.com/snips-ai/prime-number-generation-2a02f28508ff))</em></small>

<strong>Optimizing Threshold Secret Sharing</strong>
<br/><small><em>with Mathieu Poumeyrol ([blog post](https://medium.com/snips-ai/optimizing-threshold-secret-sharing-c877901231e5))</em></small>

<strong>High-Volume Secret Sharing</strong>
<br/><small><em>with Mathieu Poumeyrol ([blog post](https://medium.com/snips-ai/high-volume-secret-sharing-2e7dc5b41e9a), [code](https://github.com/mortendahl/rust-threshold-secret-sharing))</em></small>

<strong>How Practical is Somewhat Homomorphic Encryption Today?</strong>
<br/><small><em>with Maeva Benoit ([blog post](https://medium.com/snips-ai/how-practical-is-somewhat-homomorphic-encryption-today-6818d1c6f7f6))</em></small>

<strong>Differential Privacy for the Rest of Us</strong>
<br/><small><em>with Joseph Dureau ([blog post](https://medium.com/snips-ai/differential-privacy-for-the-rest-of-us-665e053cec17))</em></small>

