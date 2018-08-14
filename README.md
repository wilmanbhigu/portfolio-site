# My Portfolio Site

## Purpose

I wanted to create a space on the web to showcase any projects I've been working, as well as give me somewhere to write blog articles about a variety of topics. It also provides somewhere to consolidate my public links to make it easier for people to contact me.

## Prettify Those Source Files!

I use Prettier for all of my Javascript files. No use having messy code.

## Technologies Used

I've wanted to build something using a Javascript framework for some time, and after trying all the cool kids on the block (Angular, React, Vue) it was Vue.js that really grabbed me. I decided that a Vue rebuild of my previous static portfolio site would be a great opportunity to learn more about the framework, and push me towards larger projects.

Additionally I'm no CSS master, currently I'm implementing https://materializecss.com/, with additional styles written on top. As my site continues to grow, I'm moving more towards all custom styling - **stay tuned**

## Stack

- HTML
- CSS
- Javascript
  - Vue.js

## Production

My site exists at https://andrewrobilliard.com, thanks to Github pages and AWS

## Install and Run Locally

Make sure you have Node installed.

_Note: I'm retrieving posts by connecting to Firebase using a config file that is not available within this source code. In order to have posts to look at, you must create your own Firebase project and use that connection string instead._

```bash
$ git clone https://github.io/alrobilliard/portfoliosite-vuejs
$ cd portfoliosite-vuejs
$ npm install
$ npm run serve
```
