---
title: Glossary
---

# A

## Application Modernization 
Application Modernization is an approach to refactoring legacy applications into cloud-native microservices and re-platforming traditional apps onto container platforms.

## Appsody
Appsody provides pre-configured application stacks, which use the well-known Dockerfile syntax to specify which language runtimes, frameworks, libraries, and tools are included. Project templates build upon these stacks, providing developers with a templatized application to bring into their IDE of choice and begin development.

## Appsody CLI
The Appsody CLI is powerful and intuitive, allowing developers to discover the available collections and bring them into their local development environment. From here, they can build, run, test, and deploy applications locally.

## Appsody Hub
(see Kabanero Collection Hub)

## Appsody Stacks
These are configurable technology stacks built with popular runtimes and frameworks, such as Java with Eclipse MicroProfile and Node.js with Express. These stacks provide the foundation for building applications that can be deployed and managed effectively in Kubernetes. They are a piece of the overall definition of a Kabanero collection, they are focused on the creation of containers that will be deployed into a server by Kabanero.
# C

## CodeWind
Eclipse Codewind is an open source project that makes it easier for developers to create cloud-native applications within their favorite IDE. Currently, Codewind supports Visual Studio Code, Eclipse IDE and Eclipse Che.

## Kabanero
Kabanero is an open source project focused on bringing together foundational open source technologies into a modern microservices-based framework.

## Kabanero Foundation 
The Kabanero Foundation Instance is a deployment of a Kabanero collection in a specific Kubernetes cluster. The Kabanero operator is leveraged to install and operate the various curated infrastructure and artifacts as defined by the Kabanero collection.

## Kabanero Enterprise Edition
Kabanero Enterprise comprises of all open-source Kabanero tools as well as few additional tools for enterprise. It is built from the Kabanero.io open source project. It provides a well-defined set of tools, processes and resources for the enterprise developer, operator and architect to collaborate. As part of Cloud Pak for Applications, Kabanero Enterprise has support available from IBM.

## Kabanero Operator
Similar to Kubernetes Operator. An Operator is a method of packaging, deploying and managing a Kubernetes application. See Kabanero Foundation for more.

## Kabanero Collections
Collections are pre-configured with popular open-source technologies to enable rapid development and deployment of quality microservice-based applications. Collections provide best-of-breed runtimes, tools and build pipelines. They include everything you need to create an app or microservice and deploy as a container image, with enterprise-grade deployment & integrated continuous delivery pipelines. The choice of technology and pipelines are customizable to meet enterprise and platform needs. A Kabanero collection includes the following: 1) Appsody Stack and operator 2) The pipelines used in conjunction with the Appsody stack. 3) Dashboards. A Kabanero Collection is created by an application architect, as a logical set of software components for developing and deploying applications. A collection is realized as components (such as tools and container images) used at coding time by application developers, and components forming a deployment pipeline that can extract, build, and deploy the resulting application image to a running Kubernetes cluster.
Active collection - a collection that has been activated and is available for development and deployment
Master collection - collections that are curated in Github <sjk> I hate this name -- since *master* has special connotation with github.   btw, we changed this name in the CLI to "curated collection"</sjk>
New collection - new is a status assigned to deactivated collections; they remain in master (note: there was discussion to change the term for this status)  <sjk>we changed this to "Inactive"</sjk>

## Kabanero Collection Hub
he Kabanero Collection Hub is the central point of control for the solution architect to define Appsody Stacks, pipeline definitions, event handlers, and all aspects of building, deploying and managing applications in Kabanero.

## Kabanero Instance
A particular instance of Kabanero running on OpenShift or OKD. And instances is associated with a team of developers that are using it to develop and deploy applications.  An instance is associated with Kabanero Collection Hub. There can be many instances inside a single cluster,  and physically they are represented by a set of Openshift projects (namespaces) and Kubernetes resources.

## Knative
Knative is an open-source project that allows developers to run applications in a serverless mode on top of kubernetes.

## Openshift Project (Namespace)
A grouping of Kubernetes resources that are secured together.  Resources such as containers, pods.  Only those Openshift users that have been granted access to a project may have operate on the resources inside it.

## Tekton
Tekton is a powerful yet flexible Kubernetes-native open-source framework for creating continuous integration and delivery (CI/CD) systems. It lets you build, test, and deploy across multiple cloud providers or on-premises systems by abstracting away the underlying implementation details.

## Tekton Pipeline
The Tekton Pipelines project provides k8s-style resources for declaring CI/CD-style pipelines, using the Tekton service for processing pipeline steps.

## Template
A set of predefined code that is used to create artifacts inside a Kabanero project when Appsody Init is called for a particular Kabanero Collection.

## Transformation Advisor
Transformation Advisor is a developer tool that helps customers to quickly evaluate on-premise Java EE apps for deployment readiness to the cloud.