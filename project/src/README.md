<!--Brewdog Beer Reviewer-->

In this project I took the craft beer company Brewdog and I made an app which the user would be able to look for a beer and check the information about the beer he/she was looking for. Also, the user will be able to rate the beer and comment on it.

I created several components to be used ultimately exported to the App.js.
The first component is the info.js. In this component I added all the info(props) that is needed to retrieve the information from the API. The user will be able to click on a beer image and get all the information necessary.
Other important component is the Form.js. In that file are all the buttons and the search bars needed to look for the beer the user is interested. The user will have the choice to find the beer by name, letters or simply by ABV levels. Those 2 components are exported to the timeline.js.
From the timeline.js all the API is retrieved and some animations takes place suck as fade ins and the burger menu effect that is needed when the application goes mobile. Also, there is a loader image that is shown when the page is loading the information and an error image which is the the form.js when the information is not found.
 Then the timeline.js isexported to the App.js.
