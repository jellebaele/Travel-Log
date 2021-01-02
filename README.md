# Travel-Log
A full stack application to store / list place you have travelled

## TODO
* [x] Setup Server<br />
    * [x] Install dependencies
    * [x] Install / setup linter
    * [x] Setup express app
    * [x] Setup not found and error middlewares 
* [x] Model DB<br />
    * What data will we store?
* [x] Setup Mongoose Model(s)<br />
* [x] POST /logs<br />
    * Create a new log entry
* [x] GET / logs
    * Get all log entries
* [ ] Setup client
* [ ] Create form to add new entry
* [ ] Setup Map SDK on client
* [ ] List all log entries on map

## Log Entry, database layout
* Title (e.g. Trip 2020) - Text
* Description - Text
* Comments - Text
* Rating - Number 1 to 10
* Image - Text - URL
* Latitude - Number
* Longitude - Number
* Created At - DateTime
* Updated At - DateTime