## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Mon Apr 28 2025 14:43:01 GMT+0100 (British Summer Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.17.3|
|**Generation Platform**<br>Visual Studio Code|
|**Template Used**<br>Basic|
|**Service Type**<br>None|
|**Service URL**<br>N/A|
|**Module Name**<br>poc_npmts|
|**Application Title**<br>use npm package in ui5|
|**Namespace**<br>com.thaj|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.135.0|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>True|
|**Add Eslint configuration**<br>False|

## poc_npmts

use npm package in ui5

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


###########Use Third-Party NPM Packages

In this POC we will how to use npm packages in UI5 app without using the downloaded files
I have used jsPDF node module and it downloads a sample PDF

1.To be able to consume NPM packages directly you need to install a custom task and a custom middleware to your project. The custom task takes care to create a bundle for the NPM package when building your application and the custom middleware is used during development to generate the NPM package bundle on request.

First you need to install the NPM package providing both ui5-tooling-modules extensions as dev dependency to your project:

npm install ui5-tooling-modules --save-dev

2.Afterwards, you need to enhance the ui5.yaml file and add the ui5-tooling-modules-task as the first custom task to the builder > customTasks section. Then, add the ui5-tooling-modules-middleware as the first custom middleware to the server > customMiddleware section. The order of the tooling extensions matters. The processing order of the tooling extensions added after a task or a middleware is reverse.

⚠️ Remark: Make absolutely sure the indentation is correct! It needs to be like for the previous items!

  specVersion: "3.0"
  […]
  builder:
    customTasks:
    - name: ui5-tooling-modules-task
      afterTask: replaceVersion
      configuration:
        addToNamespace: true
    […]
  server:
    customMiddleware:
    - name: ui5-tooling-modules-middleware
      afterMiddleware: compression
    […]

3. Install the required npm package

npm install jspdf --save-dev

4. Add the following in index.html

data-sap-ui-resourceroots='{
            "com.thaj.pocnpmts": "./",
			"jspdf": "./resources/jspdf"
        }'

5.Open the file webapp/controller/pdf.controller.ts and import all exports from jspdf by adding the following line to the list of imports at the top.

import * as jspdf from "jspdf";


The library is now available in the controller and we can start using it.

const doc = new jspdf.jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");

