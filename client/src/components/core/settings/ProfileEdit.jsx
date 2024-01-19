import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import {
  updateProfileFailure,
  updateProfileStart,
  updateProfileSuccess,
} from "../../../redux/global/userSlice";
import { app } from "../../client/firebase/firebase";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layout/Layout";
import { selectUser } from "../../../redux/app/state";
import Loading from "../../../utils/Loading";
import LeftArrow from "../vendors/Icons/LeftArrow";
import FieldConfig from "../vendors/utils/FieldConfig";
import { updateValidationSchema } from "./validation/profileValidationSchema";

const ProfileEdit = () => {
  const fileRef = useRef();
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector(selectUser);
  const navigate = useNavigate();
  const [image, setImage] = useState(undefined);
  const [uploadingPercentage, setUploadingPercentage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [changeImage, setChangeImage] = useState(currentUser.profilePicture);

  const fieldConfig = [
    { name: "firstName", placeholder: "First Name", type: "text" },
    { name: "lastName", placeholder: "Last Name", type: "text" },
    { name: "email", placeholder: "Email Address", type: "email" },
  ];

  const formik = useFormik({
    initialValues: {
      email: currentUser.email || "",
      firstName: currentUser.firstName || "",
      lastName: currentUser.lastName || "",
      profilePicture: currentUser.profilePicture || "",
    },
    validationSchema: updateValidationSchema,
    onSubmit: async (values) => {
      try {
        dispatch(updateProfileStart());
        const updatedValues = { ...values, profilePicture: changeImage };
        const response = await axios.patch(
          `/api/user/updateProfile/${currentUser._id}`,
          updatedValues
        );
        if (response.status === 200) {
          dispatch(updateProfileSuccess(response.data));
          navigate("/settings");
        }
      } catch (error) {
        dispatch(updateProfileFailure(error.response.data));
      }
    },
  });

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = nanoid() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadingPercentage(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      async () => {
        try {
          const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
          setChangeImage(imgUrl);
        } catch (error) {
          setImageError(true);
        }
      }
    );
  };
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  return (
    <Layout>
      <Link to={"/settings"}>
        <LeftArrow width={29} />
      </Link>
      <hgroup className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card o-hidden border-warning bg-color shadow-lg mt-3">
            <main className="card-body p-0">
              <div className="row">
                <div className="px-5 py-4">
                  <form className="user" onSubmit={formik.handleSubmit}>
                    <div className="text-center border-bottom border-dark mb-4">
                      <div className="profile-img-div">
                        <img
                          src={
                            changeImage
                              ? changeImage
                              : currentUser.profilePicture
                          }
                          alt="profile picture"
                          className="card-img-top img-responsive rounded-circle pb-4 mx-auto d-block"
                          style={{ width: "10rem" }}
                          onClick={() => fileRef.current.click()}
                        />
                        <span className="border-white d-block">
                          <i
                            className="bi bi-pencil pencil-icon text-white"
                            onClick={() => fileRef.current.click()}
                          ></i>
                        </span>
                      </div>
                      <input
                        type="file"
                        name="profilePicture"
                        id="profilePicture"
                        ref={fileRef}
                        hidden
                        accept="image/*"
                        value={formik.values.image}
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                      <p className="text-center">
                        {imageError ? (
                          <span className="text-danger">
                            Error uploading image
                          </span>
                        ) : uploadingPercentage > 0 &&
                          uploadingPercentage < 100 ? (
                          <span className="text-warning">{`uploading ${uploadingPercentage}%`}</span>
                        ) : uploadingPercentage === 100 ? (
                          <span className="text-success">
                            uploaded successfully
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                    {fieldConfig.map((field, index) => (
                      <FieldConfig field={field} formik={formik} key={index} />
                    ))}
                    <div className="text-center">
                      <button
                        className="btn btn-warning btn-user btn-block col-sm-5 col-md-6"
                        type="submit"
                      >
                        {loading ? <Loading /> : "Update"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </hgroup>
    </Layout>
  );
};

export default ProfileEdit;
