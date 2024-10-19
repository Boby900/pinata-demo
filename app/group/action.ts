'use server'
import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT!,
  pinataGateway: process.env.NEXT_PUBLIC_GATEWAY_URL,
});

export default async function handleSubmit(formData: FormData) {

    let groupName = formData.get("data") as string;
    let publicValue = formData.get("visiblity") 
    console.log("form submitted", groupName,publicValue);
    const group = await pinata.groups.create({
      name: groupName.toUpperCase(),
      isPublic: publicValue?true:false,
    });
  }