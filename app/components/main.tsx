"use client";

import { useState } from "react";
import { pinata } from "../../utils/config";
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
      try {
        const groups = await pinata.groups.get({
          groupId: "019284a8-2202-7e10-b799-6e74ace4b3da",
        });
        console.log("Groups fetched successfully:", groups);
      } catch (e) {
        console.error("Error fetching groups:", e);
      }
      const keyRequest = await fetch("/api/key");
      const keyData = await keyRequest.json();

      const upload = await pinata.upload.file(file).key(keyData.JWT);
      const urlRequest = await fetch("/api/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cid: upload.cid }),
      });
      const url = await urlRequest.json();
      console.log("Raw url from /api/sign:", url);

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
