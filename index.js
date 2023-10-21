const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const JWT = "pinata key";

const pinFileToIPFS = async () => {
  const formData = new FormData();
  const src = "/Users/sleepyqadir/BlockApex/elektrik_token_list/token.json";

  const file = fs.createReadStream(src);
  formData.append("file", file);

  const pinataMetadata = JSON.stringify({
    name: "File name",
  });
  formData.append("pinataMetadata", pinataMetadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", pinataOptions);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5YWZjYjkzNS1hZTQ0LTRhOWEtYjFjMi1hZTA1OWNmN2ZmNTgiLCJlbWFpbCI6ImEucWFkaXI2MjIyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIzZjUyOTdkMjNkZDc4M2VjODk0MCIsInNjb3BlZEtleVNlY3JldCI6IjlmNzhjMWY2ZTM3ZmY3NTg2MmQyYjljY2Y4MDg0ZmY3NzJlZWRkZTM0YWI1Njg5NjA2ZWIzNDRlMmQ1ZmRlZWEiLCJpYXQiOjE2OTc4NzY3NjR9.OVD_Jm1CPDT79MRCi9dMrVkFRguap45DXPEagRrBN5A}`,
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
pinFileToIPFS();
