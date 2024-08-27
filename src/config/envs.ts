import 'dotenv/config';
import * as joi from 'joi';

interface Envars {
    PORT :number;
   }

const envsSchema=joi.object({
    PORT:joi.number().required(),
   
})
.unknown(true);
const {error, value }=envsSchema.validate(process.env);

if (error){
    throw new Error(`config validation error: ${error.message}`);

}

const envVars:Envars=value;


export const envs={
    port:envVars.PORT,
   
}