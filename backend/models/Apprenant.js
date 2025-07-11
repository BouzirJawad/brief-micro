import mongoose from 'mongoose';
const apprenantSchema=new mongoose.schema({
    nom:String,
    email:String,
    briefAffectés:[{type:mongoose.schema.Types.objectId,ref:'Brief'}]
});
export default mongoose.model('Apprenat',apprenatSchema);