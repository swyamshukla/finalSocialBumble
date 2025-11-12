import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { uploadData } from "../../features/authSlice";
import { useNavigate } from "react-router";

export const FormProfile = ({ existingData = {}, onSave }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate()
  const { currUser } = useSelector((state) => state.auth);

  const [images, setImages] = useState(existingData.images || [null, null, null]);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: existingData || {},
  });

  const onSubmit = (data) => {
    const fullData = { ...currUser, ...existingData, ...data, images };

    dispatch(uploadData(fullData));

    // Reset and trigger save
    
    reset();

    navigate('/dashboard')
  };


  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedImages = [...images];
      updatedImages[index] = reader.result;
      setImages(updatedImages);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-12 max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-amber-100"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        {existingData?.name ? "Edit" : "Complete"} Your{" "}
        <span className="text-amber-300">StitchLove</span> Profile 💫
      </h2>

      {/* Basic Info */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Basic Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input {...register("name")} placeholder="Full Name" className="border p-3 rounded-xl" />
          <select {...register("gender")} className="border p-3 rounded-xl">
            <option>Male</option>
            <option>Female</option>
            <option>Non-binary</option>
            <option>Prefer not to say</option>
          </select>
          <input {...register("date")} type="date" className="border p-3 rounded-xl" />
          <input {...register("city")} placeholder="City, Country" className="border p-3 rounded-xl" />
        </div>
      </section>

      {/* About */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">About You</h3>
        <textarea {...register("bio")} rows="3" placeholder="Tell us about yourself..." className="w-full p-3 border rounded-xl" />
      </section>

      {/* Lifestyle */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Lifestyle & Interests</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input {...register("occupation")} placeholder="Occupation" className="border p-3 rounded-xl" />
          <input {...register("education")} placeholder="Education" className="border p-3 rounded-xl" />
          <input {...register("interest")} placeholder="Interests" className="border p-3 rounded-xl" />
          <input {...register("hobbie")} placeholder="Hobbies" className="border p-3 rounded-xl" />
        </div>
      </section>

      {/* Preferences */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Match Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select {...register("interestedIn")} className="border p-3 rounded-xl">
            <option>Men</option>
            <option>Women</option>
            <option>Everyone</option>
          </select>
          <input {...register("ageRange")} placeholder="e.g. 20 - 30" className="border p-3 rounded-xl" />
        </div>
      </section>

      {/* Images */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Profile Photos</h3>
        <div className="flex flex-wrap gap-5">
          {images.map((img, i) => (
            <label
              key={i}
              className="w-32 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-xl cursor-pointer hover:border-[#FF5A8A] hover:bg-[#FFF0F5] transition relative overflow-hidden"
            >
              {img ? (
                <img src={img} alt={`Uploaded ${i + 1}`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400 text-sm">Upload</span>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(e, i)}
              />
            </label>
          ))}
        </div>
      </section>

      {/* Submit */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#2E2E2E] hover:bg-[#FF5A8A] text-white px-10 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          Save Profile
        </button>
      </div>
    </form>
  );
};
