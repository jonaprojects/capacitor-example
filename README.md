# Build a mobile app from a Next JS Website with Capacitor

## Overview
In this tutorial, we're going to see how to generate a mobile app from a Next JS website using the capacitor CLI. Capacitor is a tool that can create mobile apps in both Android and iOS from static websites. Static websites are websites that contain only HTML, CSS and JS files.

 Therefore, the process of converting a Next JS website to a mobile app will entail 2 main steps:

 1. Building a static site from our Next.JS Project.
 2. Building a mobile app from the static website using Capacitor.


## Installation
Clone the repository, so you can work with it locally. You can also fork it if you'd like.

Then install all the dependencies via the 
<code>
npm install
</code>
command.

You will be directed by default to the main branch of the project. There are two branches to this project:

1. The main branch - should be ready for production as a website.
2.  The mobile-build branch - customized for building a mobile app from the website.

In the main branch, you can start the website in a localhost server with the
<code> npm run dev</code>   command.

After you verified that all is working, you should move to the mobile-build branch. We're gonna work there from now on.


 ## Building a static website
 In order to build a static website, we first need to modify the settings of our Next.JS project, specifically - we need to edit the <code>next.config.js</code> file.
 

 There, we need to add this field: 
 <code>
  output: 'export'
  </code>

In the included project, these settings  