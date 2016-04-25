# SMS-location-tracking
Location tracking via sms service 
This project relates to a system for tracking the status and location of users who poor wireless  and internet capable devices and more particularly rural and hard to reach location, and also for Service that require to access the current user location, where having a dedicated Phone app doesn’t make sense ,such as food delivery, online service delivery system and other ,the  tracking system making use of a combination of SMS and Web  technology.
A user generate a request by sending a message, to the a registered twilio number, the server responsible for the twilio endpoint(receiver) respond with a unique a url , a combination of url endpoint and phone number as a url parameter , 
When the user received and proceed to access the url , it send backs the current url using the web standards geolocation API ,enable in most browsers , to grab the coordinate of the user, and proceed to respond back to the user with the coordinates 

This is open sourced and following are the issues and feature to implement in the future 


        •	Get detailed location information(address ,street same ) using the google maps services 
        
        
      •	Allow for continues tracking via SMS 

