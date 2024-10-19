"use client";
import { pinata } from "@/utils/config";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    if (!file) {
      alert("No file selected");
      return;
    }

    try {
      setUploading(true);
      const groupData = await fetch("/api/group")
      const groupJson = await groupData.json(); // Await the Promise
      console.log(groupJson.id);
      const keyRequest = await fetch("/api/key");
      const keyData = await keyRequest.json() 

      const upload = await pinata.upload.file(file).group(groupJson.id).key(keyData.JWT);
      const urlRequest = await fetch("/api/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cid: upload.cid }),
      });
      const url = await urlRequest.json();

      setUrl(url);

      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target?.files?.[0]);
  };

  return (
    <main className="w-full text-lg min-h-screen m-auto flex flex-col justify-center items-center">
      <input type="file" onChange={handleChange} />
      <button disabled={uploading} onClick={uploadFile}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {url ? (
        <Image height={700} width={500} src={url} alt="Image" />
      ) : (
        <p>Loading image...</p>
      )}
    </main>
  );
}
