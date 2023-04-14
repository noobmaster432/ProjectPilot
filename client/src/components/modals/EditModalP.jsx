// import axios from "axios";
import { useState } from "react";
// import { toast } from "react-hot-toast";

// import useCurrentUser from "../../hooks/useCurrentUser";
import useEditModalP from "../../hooks/useEditModalP";
// import useUser from "../../hooks/useUser";

import Input from "./Input";
import Modal from "./Modal";
import ImageUpload from "./ImageUpload";
// import ImageUpload from "../ImageUpload";

const EditModalP = () => {
  // const { data: currentUser } = useCurrentUser();
  // const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const editModal = useEditModalP();

  const [profileImage, setProfileImage] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");

  // useEffect(() => {
  //   setProfileImage(currentUser?.profileImage);
  //   setCoverImage(currentUser?.coverImage);
  //   setName(currentUser?.name);
  //   setUsername(currentUser?.username);
  //   setBio(currentUser?.bio);
  // }, [currentUser]);

  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = false;

  // const onSubmit = useCallback(async () => {
  //   try {
  //     setIsLoading(true);

  //     await axios.patch("/api/edit", {
  //       profileImage,
  //       coverImage,
  //       name,
  //       username,
  //       bio,
  //     });
  //     mutateFetchedUser();

  //     toast.success("Profile updated!");

  //     editModal.onClose();
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [
  //   bio,
  //   coverImage,
  //   name,
  //   profileImage,
  //   username,
  //   editModal,
  //   mutateFetchedUser,
  // ]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeholder="Github"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        disabled={isLoading}
      />
      <ImageUpload
        value={profileImage}
        onChange={(image) => setProfileImage(image)}
        disabled={isLoading}
        label="Upload Profile image"
      />
      <Input
        placeholder="Twitter"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeholder="LinkedIn"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={editModal.isOpen}
        onClose={editModal.onClose}
        title="Edit your Profile"
        // onSubmit={onSubmit}
        actionLabel="Save"
        body={bodyContent}
      />
    </div>
  );
};

export default EditModalP;
