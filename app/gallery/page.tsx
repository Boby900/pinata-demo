import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT!,
  pinataGateway: process.env.NEXT_PUBLIC_GATEWAY_URL,
});

export default async function page() {
  //fetch all the images and then render them here
 
  try {
    const data = await pinata.gateways.get(
      "bafkreig327jhbrudr3ah64lx4nxh4yh5lvmhkcwmtfnxwzacfnky7fh2re"
    );
    console.log(data);

    const url = await pinata.gateways.createSignedURL({
      cid: "bafkreig327jhbrudr3ah64lx4nxh4yh5lvmhkcwmtfnxwzacfnky7fh2re",
      expires: 1800,
    });
    console.log(url);
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <h2 className="text-center font-bold">Your Collection</h2>
    </div>
  );
}
page();

// cid: bafkreig327jhbrudr3ah64lx4nxh4yh5lvmhkcwmtfnxwzacfnky7fh2re
