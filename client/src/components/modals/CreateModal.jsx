// import axios from "axios";
import { useCallback, useState } from "react";
// import { toast } from "react-hot-toast";

// import useCurrentUser from "../../hooks/useCurrentUser";
import useCreateModal from "../../hooks/useCreateModal";
// import useUser from "../../hooks/useUser";

import Input from "./Input";
import Modal from "./Modal";
import ImageUpload from "./ImageUpload";
import { toast } from "react-hot-toast";
// import ImageUpload from "../ImageUpload";

const CreateModal = () => {
  // const { data: currentUser } = useCurrentUser();
  // const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const createModal = useCreateModal();

  // const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGithub] = useState("");

  // useEffect(() => {
  //   setProfileImage(currentUser?.profileImage);
  //   setCoverImage(currentUser?.coverImage);
  //   setName(currentUser?.name);
  //   setUsername(currentUser?.username);
  //   setBio(currentUser?.bio);
  // }, [currentUser]);

  const [isLoading, setIsLoading] = useState(false);
  // const isLoading = false;

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      console.log({
        name,
        username,
        bio,
        github,
        coverImage
    });
      // await axios.patch("/api/edit", {
      //   profileImage,
      //   coverImage,
      //   name,
      //   username,
      //   bio,
      // });
      // mutateFetchedUser();

      toast.success("Profile updated!");

      createModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [
    createModal,
    bio,
    name,
    github,
    username,
    coverImage
  ]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload
        onChange={(image) => setCoverImage(image)}
        disabled={isLoading}
        label="Upload Display image"
      />
      <Input
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
        required={true}
      />
      <Input
        placeholder="Github"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        disabled={isLoading}
        required={true}
      />
      <Input
        placeholder="Lead By"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLoading}
        required={true}
      />
      <Input
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        disabled={isLoading}
        required={true}
      />
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={createModal.isOpen}
        onClose={createModal.onClose}
        title="Create your Project"
        onSubmit={onSubmit}
        actionLabel="Create"
        body={bodyContent}
      />
    </div>
  );
};

export default CreateModal;
