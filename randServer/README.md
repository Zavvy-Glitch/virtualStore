
[CLI Deployment](http://randserver-dev.us-west-2.elasticbeanstalk.com/)

[GUI Deployment](http://manualrandserver-env.eba-mp3mpuxj.us-west-2.elasticbeanstalk.com/)

# Documentation

- CLI Deployment:
  - Ensure you're in the wanted parent folder of the application
  - In your command line:
    - type `eb init`, this will initialize an application creation on AWS's Elastic Beanstalk
      - There will be a series of setup questions prompts

    - type `eb create`, this will initialize the creation of an environment for your application
      - Troubleshooting: (if the environment creation fails)
        - Ensure all dependencies are installed into the package.json file
        - If there is an issue with the Node version checkout this [solution](https://reactgo.com/specify-node-version/)
        - All other issues checkout the EB documentation on [AWS](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html)
    - type `eb deploy`, this will deploy your created application.

- GUI Deployment:
  - Locate your application files you intend to deploy to Elastic Beanstalk
  - Ensure you place all files into a zipped folder.
    - Exceptions: Do not place your package-lock.json file or node_modules files/folder into the zipped folder. (AWS EB will do this on their end for you)
  - In the Elastic Beanstalk console, click on `Create a New Environment` in the top right corner
    - Select Web Server Environment
    - Choose an Application Name of your choice
    - Choose an Environment Name of your choice
    - You may choose Managed Platform / Custom Platform (this will depend on you and your application - default: Managed platform)
    - Platform dropdown: Select the framework your application was built on
    - In application code, Select `Upload your code`
      - Select where you will be transferring your code from. If you've chosen Local, you will need to click `Choose File` and navigate to where you've created that zipped file from the earlier steps.
    - Click `Create Environment`
