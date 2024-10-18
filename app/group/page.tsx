'use client'
import handleSubmit from "./action";
import { useToast } from "@/components/hooks/use-toast"
//TODO: add a variant of success in our locally cloned repo, named UI, use-toast.
export default function CreateGroup() {
 

  const { toast } = useToast()
 
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
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </div>
        <div className="flex items-center">
          <input
            id="isPublic"
            name="visiblity"
            required
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded bg-gray-700"
          />
          <label htmlFor="isPublic" className="ml-2 text-sm text-gray-300">
            Make this group publicly visible
          </label>
        </div>
        <button
          type="submit"
          onClick={() => {
            toast({
              variant: 'default',
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            })
          }}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Create Group
        </button>
      </form>
    </div>
  );
}
