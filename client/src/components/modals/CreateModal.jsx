// import axios from "axios";
import { useCallback, useState } from "react";
// import { toast } from "react-hot-toast";
import axios from 'axios';

// import useCurrentUser from "../../hooks/useCurrentUser";
import useCreateModal from "../../hooks/useCreateModal";
// import useUser from "../../hooks/useUser";

import Input from "./Input";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
// import ImageUpload from "../ImageUpload";

const CreateModal = () => {
  // const { data: currentUser } = useCurrentUser();
  // const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const createModal = useCreateModal();

  // const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGithub] = useState("");

  // useEffect(() => {
  //   setProfileImage(currentUser?.profileImage);
  //   setCoverImage(currentUser?.coverImage);
  //   setName(currentUser?.name);
  //   setUsername(currentUser?.username);
  //   setBio(currentUser?.bio);
  // }, [currentUser]);
  const createdBy=JSON.parse(localStorage?.getItem("loginData"))?.other?._id;
  // console.log(createdBy);

  const [isLoading, setIsLoading] = useState(false);
  // const isLoading = false;

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const formData=new FormData();
      formData.append("image", coverImage);
      formData.append("createdBy", createdBy);
      formData.append("bio", bio);
      formData.append("gitHubRepoLink", github);
      formData.append("title", name);
      await axios.post("http://localhost:5000/api/project/createproject", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
    createdBy,
    github,
    coverImage
  ]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <input
        onChange={(e) => setCoverImage(e.target.files[0])}
        // disabled={isLoading}
        label="Upload Display image"
        type="file"
        required={true}
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
      {/* <Input
        placeholder="Lead By"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLoading}
        required={true}
      /> */}
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
