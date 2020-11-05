import React from "react";
import styled from "styled-components/native";
import CustomInput from "../CustomInput";

const FullWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const FormWrapper = styled.View`
  width: 90%;
  flex-direction: column;
`;

const ContactForm = ({}) => {
  return (
    <FullWrapper>
      
    <FormWrapper>
      <CustomInput
        DisplayIt={true}
        Title={"Name"}
        placeholder={"First Name"}
      ></CustomInput>
      <CustomInput placeholder={"Last Name"}></CustomInput>
      <CustomInput
        Seperation={true}
        DisplayIt={true}
        Title={"Contact Information"}
        placeholder={"Phone Number"}
        MiniSeperation={true}
        TitleDisplay={true}
        SubDisplay={true}
        MiniTitle={"Phone Number"}
        subtext={"(Atleast one number is mandatory)"}
      ></CustomInput>
      <CustomInput placeholder={"Home Number (optional)"}></CustomInput>
      <CustomInput
        MiniSeperation={true}
        Seperation={true}
        TitleDisplay={true}
        MiniTitle={"Email Address"}
        placeholder={"Email Address"}
      ></CustomInput>
      <CustomInput
        Seperation={true}
        DisplayIt={true}
        TitleDisplay={true}
        Title={"Location"}
        MiniTitle={"What city are you based in"}
        placeholder={"City"}
      ></CustomInput>
    </FormWrapper>
    </FullWrapper>

  );
};

ContactForm.defaultProps = {};

export default ContactForm;
