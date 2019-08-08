/* 
 * Decoder function for The Things Network to unpack the payload of the Netvox emergency button
 *
 * This function was created by Cameron Sharp at Sensational Systems - cameron@sensational.systems
 */

function Decoder(bytes, port) {

    var params = {
        "bytes": bytes
    }

    // Handle startup message
    if (bytes[2] === 0x00) {
        params.protocol_version = bytes[0]
        params.report_type = bytes[2]
        params.software_version = bytes[3]
        params.hardware_version = bytes[4]
    } else {
        // Handle everything else
        params.protocol_version = bytes[0]
        params.report_type = bytes[2]
        params.battery = bytes[3] / 10
        params.emergency = bytes[4]
    }

    return params

}
