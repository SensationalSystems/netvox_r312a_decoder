# The Things Network decoder function for Netvox emergency button

To use this:
* create a TTN application and register your devices using the TTN console
* in your application, choose "Payload Formats" from the navigation
* paste the decoder function into the textarea

The unit sends a few different payloads that are well documented. A startup packet is sent when the unit is first installed, or reboots. A packet is also sent when any of the buttons are pressed, with an emergency bit being set when the emergency button is pressed

This code is MIT licensed, and it works fine in our testing. We don't claim it to be excellent, pull requests are encouraged!
