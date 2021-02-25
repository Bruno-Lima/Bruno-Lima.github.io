---
layout: page
permalink: /thesis/index.html
title: Thesis
image:
  feature: black_bar.jpg
---
<section id="table-of-contents" class="toc">
  <header>
    <h3>Contents</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div> 
</section><!-- /#table-of-contents -->

# PHD Thesis

<b>Documents</b><br/><br/>
<a href="../thesis/BRUNO_LIMA_PHD_RESUMO_PT.pdf"><i class="icon-pdf"></i> - Resumo </a> <br/>
<a href="../thesis/BRUNO_LIMA_PHD_RESUMO_EN.pdf"><i class="icon-pdf"></i> - Abstract </a> <br/>

<br/><br/>
<b>Abstract</b><br/><br/>

Evermore end-to-end digital services in several domains (e-health, smart cities, etc.) depend on the proper interoperation of multiple products, forming a distributed system, often subject to timing requirements. To ensure interoperability and the timely behavior of such systems, it is important to conduct integration tests that verify the interactions with the environment and between the system components in key scenarios. The automation of such integration tests requires that test components are also distributed, with local testers deployed close to the system components, coordinated by a central tester. However, test automation in this type of systems is a huge challenge, namely due to the difficulty to test the system as a whole due to the number and diversity of individual components; the difficulty to coordinate and synchronize the test participants and interactions, due to the distributed nature of the system (particularly, in integration testing); the difficulty to test the components individually, because of the dependencies on other components.
<br/><br/>
In this research work, we tackle the challenge of automating the scenario-based integration testing of time-constrained distributed systems showing that is possible to solve the coordination problems by performing a pre-processing of the test scenarios to determine if they can be executed in a purely distributed way or, if that is not possible, determining the minimum number of coordination messages or time constraints to be inserted, minimizing the communication overhead whilst maximizing the fault detection capability and the test harness responsiveness.
<br/><br/>
To achieve this goal, we perform a state of the art analysis on time-constrained distributed systems testing and a state of the practice analysis on testing distributed and heterogeneous systems by collecting the opinion of more than 140 professionals. 
<br/><br/>
In response to the identified needs, we propose a novel testing approach and architecture for the integration testing of time-constrained distributed systems that provides a higher level of automation of the testing process because all phases of the test process are supported in an integrated fashion. To determine if a test scenario can be executed in a purely distributed way, we analyze two properties: local observability, defined as the ability of the local testers to detect conformance errors, without the need for exchanging coordination messages between them during test execution; and local controllability, defined as the ability of the local testers to decide test inputs locally, without the need for exchanging coordination messages between them during test execution. If such properties do not hold, we determine coordination messages and/or coordination time constraints that can be inserted to refine the given scenario and enforce local observability and/or local controllability. Even if the given scenario is not refined, the results of the analysis are helpful to influence the test execution strategy. Local observability and controllability analysis and enforcement algorithms are implemented in the DCO Analyzer tool, for test scenarios described by means of UML sequence diagrams. Since many local observability and controllability problems may be caused by design flaws or incomplete specifications, and multiple ways may exist to enforce local observability and controllability, the tool was designed as a static analysis assistant to be used before test execution. 
<br/><br/>
The DCO Analyzer tool was validated in an industry case study and proved to be useful for professionals who daily perform the modeling and testing of this type of systems. DCO Analyzer was able to detect local observability and controllability problems in different scenarios, as well as provide the user with corresponding solutions to overcome them, either through coordination messages, time constraints, or, in some cases, presenting the two alternatives. 

<br/><br/>
<b>Resumo</b><br/><br/>
Cada vez mais os serviços digitais ponta-a-ponta em diversos domínios (e-saúde, cidades inteligentes, etc.) dependem da correta interoperação de múltiplos produtos, formando um sistema distribuído, muitas vezes sujeito a requisitos temporais. Para garantir a interoperabilidade e o correto comportamento destes sistemas, é importante realizar testes de integração que verifiquem as interações com o ambiente e entre os componentes do sistema em cenários chave. No entanto, a automatização de testes neste tipo de sistemas é um grande desafio, nomeadamente devido à dificuldade em testar o sistema como um todo devido ao número e diversidade de componentes envolvidos; a dificuldade de coordenar e sincronizar os participantes do teste e as suas interações, devido à natureza distribuída do sistema; e a dificuldade de testar os componentes individualmente, devido à dependência de outros componentes.
<br/><br/>
Neste trabalho, abordamos o desafio de automatizar o teste de integração de sistemas distribuídos baseado em cenários com restrições temporais, mostrando que é possível resolver os problemas de coordenação no teste deste tipo de sistemas através da realização de um pré-processamento dos cenários de teste para determinar se podem ser executados de forma puramente distribuída ou, caso não seja possível, determinar o número mínimo de mensagens de coordenação ou restrições temporais a inserir, minimizando a sobrecarga de comunicação enquanto se maximiza a capacidade de detecção de falhas e a responsividade do ambiente de teste. 
<br/><br/>
Para atingir esse objetivo, realizamos uma análise do estado da arte em testes de sistemas distribuídos com restrições temporais e uma análise do estado da prática em testes de sistemas distribuídos e heterogéneos, recolhendo a opinião de mais de 140 profissionais.
<br/><br/>
Em resposta às necessidades identificadas, propomos nesta tese uma nova abordagem de teste e arquitetura para o teste de integração de sistemas distribuídos com restrições temporais que fornece um maior nível de automação do processo de teste uma vez que todas as fases do processo de teste são suportadas por um inovador sistema integrado. Para determinar se um cenário de teste pode ser executado de forma puramente distribuída, analisamos duas propriedades: observabilidade local, definida como a capacidade dos componentes de teste locais detetarem erros de conformidade, sem a necessidade de trocarem mensagens de coordenação entre eles durante a execução do teste; e controlabilidade local, definida como a capacidade dos componentes de teste locais decidirem os próximos dados de entrada localmente, sem a necessidade de trocarem mensagens de coordenação entre eles durante a execução do teste. Se tais propriedades não forem válidas, determinamos o conjunto de mensagens de coordenação e/ou restrições temporais que podem ser inseridas para refinar o cenário de forma a garantir a observabilidade local e/ou controlabilidade local. Mesmo que o cenário não seja refinado, os resultados da análise são úteis para selecionar a estratégia de execução dos testes.  Os algoritmos para análise e garantia de observabilidade e controlabilidade local, para cenários de teste descritos por diagramas de sequência UML, foram implementados na ferramenta DCO Analyzer. Uma vez que muitos dos problemas de observabilidade e controlabilidade local podem ser causados por falhas de conceção ou especificações incompletas, e podem existir várias formas para impor a observabilidade e controlabilidade local, a ferramenta foi projetada como um assistente de análise estática para ser usado antes da execução dos testes. 
<br/><br/>
A ferramenta DCO Analyzer foi validada em um estudo de caso industrial, mostrando-se útil para profissionais que modelam e testam este tipo de sistemas. A DCO Analyzer foi capaz de detetar problemas de observabilidade e controlabilidade local em diferentes cenários, bem como fornecer ao utilizador as soluções correspondentes para corrigir os problemas encontrados, recorrendo a mensagens de coordenação, restrições temporais ou, em alguns casos, apresentando as duas alternativas.

# Master's Thesis

<b>Documents</b><br/><br/>
<a href="../thesis/BRUNO_LIMA_RESUMO_PT.pdf"><i class="icon-pdf"></i> - Resumo </a> <br/>
<a href="../thesis/BRUNO_LIMA_RESUMO_EN.pdf"><i class="icon-pdf"></i> - Abstract </a> <br/>

<br/><br/>
<b>Abstract</b><br/><br/>

Due to the aging of the world population it is urgent that traditional health systems find solutions to increase the people lifetime in their preferred environment by increasing their autonomy, self-confidence and mobility. It is precisely in this context that fits the AAL4AAL project that, through the development of an ecosystem of products and standardized and interoperable services of Ambient Assisted Living (AAL), aims to be an answer to this problem.
<br/><br/>
Inserted in the AAL4ALL project arises this dissertation project, which aimed to define a methodology for testing and certification components of AAL. The proposed methodology is based on a process composed of three different phases: analysis of prerequisites, conformance testing and interoperability testing. The prerequisites are intended to ensure that the candidates components have evidences that are necessary to enter the ecosystem. The conformance test, aim to ensure that the candidate component communicates according to what is specified in the rules. Interoperability tests aim to demonstrate that the candidate component behaves as expected when integrated with other components. 
The proposed methodology was validated in a pilot scenario, composed of components of AAL4ALL project, for which test cases were defined. Was also set up an automatic testing platform, which allowed not only automate some of these tests but also optimize the testing and certification process.

<br/><br/>
<b>Resumo</b><br/><br/>

<p>Devido ao envelhecimento da população mundial é urgente que os sistemas tradicionais de saúde encontrem soluções que permitam aumentar o tempo de vida das pessoas no seu ambiente preferido, aumentando a sua autonomia, autoconfiança e mobilidade. É precisamente neste contexto que se insere o projeto AAL4AAL que, através do desenvolvimento de um ecossistema de produtos e serviços normalizados e interoperáveis de Ambient Assisted Living (AAL), pretende ser uma resposta para este problema.</p>
<p>Inserido no projeto AAL4ALL surge o presente projeto de dissertação, que teve como objetivo definir uma metodologia de teste e certificação para componentes de AAL. A metodologia proposta é assente num processo composto por três diferentes fases: anáise de pré-requisitos, testes de conformidade e testes de interoperabilidade. Os pré-requistos visam garantir que os componentes candidatos possuem evidências que são à partida necessárias para entrarem no ecossistema. Os testes de conformidade têm como objetivo garantir que o componente candidato comunica de acordo com aquilo que está especificado nas normas. Os testes de interoperabilidade visam comprovar que o componente candidato se comporta como é esperado quando integrado com outros componentes. 
A metodologia proposta foi ainda alvo de uma validação através de um cenário piloto tão real quanto possível, composto por componentes do projeto AAL4ALL, para o qual foram definidos casos de testes e desenvolvida uma plataforma automática de teste, que permitiu não só automatizar alguns desses testes mas também optimizar o processo de teste e certificação. </p>




