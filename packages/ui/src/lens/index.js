import { ethers } from "ethers";
import util from "../util";
import hub from "./abi/LensHub.json";
import ADDRESS from "./const";
let provider = null;
let address = null;
let handle = null;
let profileId = null;
const configureLens = async (configure, addr) => {
  provider = configure;
  address = addr;
};
const getProfile = async () => {
  if (!provider || !address) {
    console.log("provider not setup");
    return null;
  }
  console.log("called lens");
  const signer = await provider.getSigner(0);
  address = await provider.getSigner(0).getAddress();
  const ilenshub = new ethers.Contract(ADDRESS.HUB, hub.abi, signer);
  const bal = await ilenshub.balanceOf(address);
  if (bal == 0) {
    const profile = {
      to: address,
      handle: "maj0trippy",
      imageURI: "https://google.com",
      followModule: ADDRESS.ZERO_ADDRESS,
      followModuleData: [],
      followNFTURI: "https://google.com",
    };
    await ilenshub.createProfile(profile);
    const tkns = await ilenshub.tokenOfOwnerByIndex(address, 0);
    profileId = tkns;
    if (tkns != 0) {
      const pr = await ilenshub.getProfile(tkns);
      handle = pr.handle;
      return {
        handle: pr.handle,
        image: pr.imageURI,
        address,
      };
    } else {
      return null;
    }
  } else {
    const tkns = await ilenshub.tokenOfOwnerByIndex(address, 0);
    profileId = tkns;
    const pr = await ilenshub.getProfile(tkns);
    handle = pr.handle;
    return {
      handle: pr.handle,
      image: pr.imageURI,
      address,
    };
  }
};
const createPost = async (title, image, desc) => {
  const signer = await provider.getSigner(0);
  address = await provider.getSigner(0).getAddress();
  const ilenshub = new ethers.Contract(ADDRESS.HUB, hub.abi, signer);
  const result = await util.pinFileToIPFS(image);
  if (result !== "") {
    const metadata = {
      description: desc,
      external_url: "https://0xplore-lens.vercel.app/",
      image: result,
      name: `@${handle}`,
      title: title,
      attributes: [
        {
          trait_type: "0xplore",
          value: "true",
        },
      ],
      exploreMetadata: {
        send: {
          isEnabled: true,
          address: ADDRESS.ZERO_ADDRESS,
          max: "100",
          tokens: [ADDRESS.ZERO_ADDRESS],
          expireAt: new Date().getTime(),
        },
      },
    };
    console.log(metadata);
    const content = await util.pinJSONToIPFS(metadata);
    console.log(content);
    //   profileId = ethers.BigNumber.from(1);
    console.log(profileId);

    const post = {
      profileId: profileId,
      contentURI: content,
      collectModule: "0xBbC60A8fAf66552554e460d55Ac0563Fb9e76c01",
      collectModuleData: [],
      referenceModule: ADDRESS.ZERO_ADDRESS,
      referenceModuleData: [],
    };
    console.log(post);
    const txn = await ilenshub.post(post);
    await txn.wait();
    console.log(txn);
  }
};
const getPosts = async () => {
  const signer = await provider.getSigner(0);
  address = await provider.getSigner(0).getAddress();
  const ilenshub = new ethers.Contract(ADDRESS.HUB, hub.abi, signer);
  let profileData = [];
  profileId = ethers.BigNumber.from(1);
  console.log(profileId);
  const count = await ilenshub.getPubCount(profileId);
  for (let i = 1; i <= count; i++) {
    let post = await ilenshub.getPub(profileId, i);
    console.log(post);
    let metadata = await util.getData(post.contentURI);
    console.log(metadata);
    profileData.push({
      address: profileId,
      image: metadata.image,
      exploreMetadata: metadata.exploreMetadata,
      desc: metadata.description,
      title: `#${profileId.toString()} ${metadata.title}`,
    });
  }

  return profileData;
};
const fn = {
  getProfile,
  configureLens,
  createPost,
  getPosts,
};

export default fn;
