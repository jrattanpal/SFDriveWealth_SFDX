# Salesforce DX  App
DF
## Dev, Build and Test

## Deploy to DX DevHub to create scratch org

1. Install Salesforce DX. Enable the Dev Hub in your org or sign up for a Dev Hub trial org and install the Salesforce DX CLI. Follow the instructions in the Salesforce DX Setup Guide or in the App Development with Salesforce DX Trailhead module.

2. Clone the **SFDriveWealth_SFDX** repository, switch the branch to work on a specific branch (if needed):
    ```
    git clone https://github.com/jrattanpal/SFDriveWealth_SFDX
    cd SFDriveWealth_SFDX
    
    git checkout DFSession2017
    ```

3. Create a scratch org and provide it with an alias (dh):
    ```
    sfdx force:org:create -s -f config/FSCDW_SFDX-scratch-def.json -a dh
    ```

4. Push the app to your scratch org:
    ```
    sfdx force:source:push
    ```

5. Assign the FSC_DW permission set to the default user:
    ```
    sfdx force:user:permset:assign -n FSC_DW
    ```

6. Open the scratch org:
    ```
    sfdx force:org:open
    ```

7. Open "DriveWealth" custom settings and add login information that you received from DriveWealth

8. Open "FSC DW" app

9. Open "Rache Adams" account, "Drive Wealth" tab and start using Drive Wealth components like search, create account, create order or list orders
 
## Deploy to regular salesforce org

1. Authenticate org where you want to deploy these components
     
    ```
    sfdx force:auth:web:login -a NEW_ALIAS
    ```
2. Convert this DX project to regular salesforce metadata which will be saved in mdapioutput folder
    ```
    cd project
    
    mkdir mdapioutput
    
    sfdx force:source:convert -d mdapioutput/
    ```

3. Deploy converted project to your regular salesforce org (that you authenticated in first step)
    ``` 
    sfdx force:mdapi:deploy -d mdapioutput/ -u NEW_ALIAS -w 100
    ```


## Resources
DriveWealth API: http://developer.drivewealth.com/
ETLC_ApexBridge: https://github.com/eltoroit/ETLC_ApexBridge
CodeScience: https://github.com/CodeScience/CSUtils/wiki/Using-Security-Coding-Library-(ESAPI)



