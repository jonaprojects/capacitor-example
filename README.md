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

In the included project, these settings are aleady set (in the 'mobile-build' branch)

Then, you can simply use the `npm run build` command to build a static website form our Next JS project. 

You should see a new folder appearing in your project, named 'out'. This is important, because we will later have to configure capacitor to be aware of this directory, so it can create a mobile app from the static site in this folder.

 It's also important to make sure that there's an <code> index.html</code> in the 'out' folder. It will be the entry point of the mobile project. This should usually work without manual intervention in the files though, as long as the build process succeeded.

## Building the mobile app with capacitor 

First of all, you need to install the capacitor CLI, via the following command:
<code>
npm install npm install --save-dev @capacitor/cli
</code>
or
<code> npm install npm install -D @capacitor/cli</code>, which are equivalent.

After the initial installation, you need to initialize capacitor with your project's data. You could do this with the following command in the terminal.

<code>
npx cap init
</code>


You should now encounter a dialogue in the terminal. There you'll be prompted to specify 3 things:

1. The project's name
2. The mobile app's id: should be in the form <code>com.example.app</code>. You can read more on that on androids official docs, but it's imperative that this will be unique.
3. The folder with the static website. You need to specify the folder of the website, that Capacitor will try to convert to a mobile app. You should provide here the value <code>out</code>, because that's the name of the folder that was generated for the static website build. If you have any other name for the folder that contains the static HTML, JS, CSS files - specify it instead.

After completing the form, install these libraries with the following command:
<code>
npm install @capacitor/core @capacitor/ios @capacitor/android
</code>

You can now create the native mobile projects with the following commands:

<code>
npx cap add ios
</code>

<code>npx cap add android
</code>

You should see an <code>android</code> and an <code>ios</code> folder respectively. You can open and execute them with Android Studio and XCode (Again, respectively).

## Found this helpful?
Give this repo a star!
