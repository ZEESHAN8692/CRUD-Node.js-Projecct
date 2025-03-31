import mongoose from "mongoose";
import mongoosePagination from "mongoose-paginate-v2";

const contactSchema = mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

contactSchema.plugin(mongoosePagination);
const Contact = mongoose.model("Contacts", contactSchema);
export default Contact;
