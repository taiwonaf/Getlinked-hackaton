import React from "react";
import CustomInput from "../component/input/CustomInput";
import CustomButtom from "../component/button/CustomButton";
import FormButton from "../component/button/FormButton";
import RegisterImg from "../assets/register.png";

const Register = () => {
  return (
    <div className="pt-[145px] h-screen">
      <div className="max-w-[1255px] w-full h-full flex justify-center items-center ">
        <div className="max-w-[300px] w-full mx-auto">
          <div className="w-full overflow-hidden flex justify-center items-center mb-[8px]">
            <img
              src={RegisterImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[12px] text-white mb-[7px]">
            Be part of this movement
          </p>
          <h4 className="capitalize text-[20px] font-[400] text-white mb-[23px]">
            create your account
          </h4>
          <div>
            <div className="flex gap-[18px] flex-col">
              <CustomInput
                name={"teamsName"}
                placeholder={"Enter the name of your group"}
                lable={"Team's Name"}
                type={"text"}
              />
              <CustomInput
                name={"phone"}
                placeholder={"Enter the name of your phone number"}
                lable={"Phone"}
                type={"text"}
              />
              <CustomInput
                name={"email"}
                placeholder={"Enter the name of your email address"}
                lable={"Email"}
                type={"text"}
              />
              <CustomInput
                name={"projectTopic"}
                placeholder={"Enter the name of your project topic"}
                lable={"Project Topic"}
                type={"text"}
              />
            </div>
            <div>
              <p className="text-[9px] text-pink italic">
                Please review your registration details before submitting
              </p>
              <FormButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
