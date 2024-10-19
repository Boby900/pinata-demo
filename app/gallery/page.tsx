
//get the group images with filling the form and adding the group name, get their CID from that form and pass that down.
import Image from "next/image";
import { PinataSDK } from "pinata";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT!,
  pinataGateway: process.env.NEXT_PUBLIC_GATEWAY_URL,
});
const pinataDomain = process.env.NEXT_PUBLIC_GATEWAY_URL;

export default async function GalleryPage() {
  const files = await pinata.files
    .list()
    .group("019284a8-2202-7e10-b799-6e74ace4b3da");

  const data = files.files.map((file) => file.cid);

  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-background">
        {data && (
          <form className="space-y-4 m-4 p-4 max-w-lg">
            <div>
              <Label
                htmlFor="groupName"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Group Name
              </Label>
              <Input
                id="groupName"
                type="text"
                placeholder="Enter group name to fetch files"
                className="w-full bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fetch Images
            </Button>
          </form>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 m-4 gap-6">
        {data.map((cid) => {
          const imageUrl = `https://${pinataDomain}/files/${cid}`;
          return (
            <Card key={cid} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={imageUrl}
                    alt={`Image for CID: ${cid}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm truncate">{cid}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
