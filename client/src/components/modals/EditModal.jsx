// import axios from "axios";
import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";

// import useCurrentUser from "../../hooks/useCurrentUser";
import useEditModal from "../../hooks/useEditModal";
// import useUser from "../../hooks/useUser";

import Input from "./Input";
import Modal from "./Modal";
import ImageUpload from "./ImageUpload";
// import ImageUpload from "../ImageUpload";

const EditModal = () => {
  // const { data: currentUser } = useCurrentUser();
  // const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const editModal = useEditModal();

  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    // const fetchUser
  })

  // useEffect(() => {
  //   setCoverImage(editModal.data?.coverImage);
  //   setTitle(editModal.data[0]?.name);
  //   setRepo(editModal.data[0]?.username);
  //   setBio(editModal.data[0]?.bio);
  // }, [editModal.data]);

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
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeholder="Project Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        disabled={isLoading}
      />
      <ImageUpload
        value={coverImage}
        onChange={(image) => setCoverImage(image)}
        disabled={isLoading}
        label="Upload Display image"
      />
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={editModal.isOpen}
        onClose={editModal.onClose}
        title="Edit your Project"
        // onSubmit={onSubmit}
        actionLabel="Save"
        body={bodyContent}
      />
    </div>
  );
};

export default EditModal;
