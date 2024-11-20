const { defaults } = require("joi");
const mongoose = require ("mongoose");



const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: {
        url: { 
            type: String, 
            required: true,
            default:"https://www.google.com/search?q=default+image&rlz=1C1RXQR_enIN1036IN1036&oq=de&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNDAwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#vhid=cmONzJaEjGDkSM&vssid=_Sd89Z_CqFvu84-EP54fE2Ak_33",
        }, 
    },
    price: { type: Number, required: true },
    
    location: { type: String, required: true },
    country: { type: String, required: true },
});

  
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
//model or class
