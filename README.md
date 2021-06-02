Super Chemex Bot
================

❗ Disclaimer
=====

**This project is not actively maintained or monitored.** Feel free to fork and work on it in your account. If you want to maintain but also collaborate with fellow developers, feel free to reach out to [Contentful's Developer Relations](mailto:devrel-mkt@contentful.com) team to move the project into our community GitHub organisation [contentful-userland](https://github.com/contentful-userland/).

---------

Our friendly bot-overlord notifying people when there is freshly brewed coffee in the kitchen. You can read the story of how this bot came be on [our blog](https://www.contentful.com/blog/2017/09/27/super-chemex-bot/).

Super Chemex Bot is a Slack app that posts a message in channel when an AWS IoT button is pressed.

Setup
=====

Super Chemex Bot is only a small piece of code but requires a bit of configuration to get running. Below is a high level overview of the steps you'll have to take to get it working.

 * Clone this repository
 * `cd` into the `lambda` directory and run `npm install` (`yarn install` is also supported).
 * Sign up for Contentful if you haven't already.
   * Follow the [instructions](https://www.contentful.com/r/knowledgebase/personal-access-tokens/#how-to-get-a-personal-access-token-the-web-app) to create a personal access token
   * Execute `./setups-space.js --management-token <your-personal-access-token>`
 * Create a Slack app
  * Go to the Slack [app wizard](https://api.slack.com/apps?new_app=1). Give your app a name and select a workspace.
  * Give the app the scope `chat:write:bot`
  * Install the app into your workspace. To do so you'll need to authenticate with oAuth. Follow Slack's [tutorial](https://api.slack.com/tutorials/app-creation-and-oauth) for the easiest way to do it.
 * Time to set up the button
   * Configure your button by following the [AWS tutorial](http://docs.aws.amazon.com/iot/latest/developerguide/configure-iot.html)
   * Choose to create an AWS Lambda function that is triggered by your button
   * Add three environment variables to the Lambda function: `SLACK_API_TOKEN`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_SPACE_ID`
   * [Install](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) and [configure](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration) the AWS cli.
   * Navigate to the project root folder and run `./deploy.sh <function-name>`
 * All done!

License
=======

Copyright (c) 2017-2018 Contentful GmbH. Code released under the MIT license. See [LICENSE][LICENSE] for further details.
