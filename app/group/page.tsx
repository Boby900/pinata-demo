import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.NEXT_PUBLIC_GATEWAY_URL
  
});

export default async function CreateGroup() {
  async function handleSubmit(formData: FormData) {
    "use server";
    let groupName = formData.get("data") as string;
    let publicValue = formData.get("visiblity") 
    console.log("form submitted", groupName,publicValue);
    const group = await pinata.groups.create({
      name: groupName.toUpperCase(),
      isPublic: publicValue?true:false,
    });
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Create a Group
      </h2>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="data" className="text-sm font-medium mb-1">
            Group Name
          </label>
          <input
            name="data"
            type="text"
            required
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </div>
        <div className="flex items-center">
          <input
            id="isPublic"
            name="visiblity"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded bg-gray-700"
          />
          <label htmlFor="isPublic" className="ml-2 text-sm text-gray-300">
            Make this group publicly visible
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Create Group
        </button>
      </form>
    </div>
  );
}
