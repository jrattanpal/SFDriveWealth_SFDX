<aura:application extends="force:slds">
    <aura:attribute name="recordId" type="Id" default="00141000007RP8w" />
    <aura:attribute name="debug" type="Boolean" default="true" />
    <aura:attribute name="debugClient" type="Boolean" default="true" />
   <!-- <c:DWSearchInstrument debug="{!v.debug}" debugClient="{!v.debugClient}" recordId="{!v.recordId}" fireEvtInstrumentInfo="false" />
    <c:DWCreateMarketOrder debug="{!v.debug}" recordId="{!v.recordId}" debugClient="{!v.debugClient}" />
    <c:DWOrderList debug="{!v.debug}" debugClient="{!v.debugClient}" recordId="{!v.recordId}" />
    -->
    <!--
    <c:DWSearchInstrument debug="{!v.debug}" debugClient="{!v.debugClient}" recordId="{!v.recordId}" fireEvtInstrumentInfo="false" />
    <c:DWCreateMarketOrder debug="{!v.debug}" recordId="{!v.recordId}" debugClient="{!v.debugClient}" />
    <c:DWCreateAccountForm recordId="{!v.recordId}" debug="{!v.debug}" debugClient="{!v.debugClient}"  />
    -->

    <c:DWOrderList debug="{!v.debug}" debugClient="{!v.debugClient}" recordId="{!v.recordId}" />

</aura:application>