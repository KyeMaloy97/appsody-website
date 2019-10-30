---
title: Glossary
---

# A

## Appsody
Helps you develop containerized applications for the cloud. (Source: website overview)

## Appsody CLI
Allows you to connect to an Appsody hub, pull down a stack, and create, build, test and deploy your application. (Source: website first page). The Appsody CLI is powerful and intuitive, allowing developers to discover the available stacks and bring them into their local development environment. From here, they can build, run, test, and deploy applications locally. The Docker container that's built for an application can then be integrated with Tekton pipelines and deployed to Kubernetes cloud environments. (Source: Overview Appsody site) 
Allows developers to discover Appsody stacks and create applications based on these stacks within their local development environment. From here, they can build, run, test, and deploy applications locally. When the application is ready for deployment into production, the Docker container that is built for an application can then be integrated with Tekton pipelines and deployed to Kubernetes cloud environments. (my rewording of above)

## Appsody Stack
Appsody stacks are pre-configured language runtimes, frameworks, and additional libraries and tools to simplify application development. Stacks are an easy way to manage consistency and adopt best practices across many applications. [They can be customised by individual developers, or development teams, to suit their needs]. Stacks include a base container image (see dockerfile-stack) and [project templates]() that act as a starting point for your application development. (Source: website)

## Project Templates
These typically provide a 'Hello World' starting point for application development. As with other components within an Appsody stack, they are customisable by developers and can be shared across teams.

## Dockerfile and Dockerfile-stack
Dockerfile-stack is a Dockerfile that builds the base container image of a stack and specifies its behavior during development. åDockerfile combines your application and the stack to build a production image, ready for deployment. 
<!-- 
## Appsody Hub

## Appsody Operator

## Controller

## Stable / Incubator / Experimental

## Index -->

## Cloud Functions
Provide a 'Functions-as-a-Service' programming model. You can think of it as similar to AWS lambda, however - the key difference is that lambdas are their own 'thing', they have their own SDK and are very proprietary tech. With our implementation developers can use the APIs they are already using in traditional apps, so there is less of a learning curve/jar in the experience. For Java, you can write JAX-RS functions, in Node.js you write to 'Connect' which is what Express (web framework) uses. So developers are already familar with writing the function handler - only now that's all they need to write.

## Cloud Native
Includes a pre-configured web framework, such as Express or Liberty, and provides a number of endpoints which help with cloud deployments, such as health (liveness/readiness) and montoring/metrics (/metrics).  
Cloud Native - as a term - we describe as applications which leverage the services provided by a cloud platform. So if your cloud (i.e. IBM Cloud) uses prometheus monitoring, your apps should integrate with that. Given nearly all clouds are aligning around Kubernetes - this is the base point. Health Checks are how Kubernetes knows whether your app can have work routed towards it, or if it needs restarting.

## Cloud Packaged
Allows you to take an application, wrapper it in a best-practice Dockerfile and it is ready to deploy to cloud. This is basically a black box.