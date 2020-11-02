import React from "react";
import styled from "styled-components/native";
import CustomInput from "../CustomInput";

const FormWrapper = styled.View`
  width: 100%;
  flex-direction: column;
`;

const ContactForm = ({}) => {
  return (
    <FormWrapper>
      <CustomInput
        Display={true}
        Title={"Name"}
        placeholder={"First Name"}
      ></CustomInput>
      <CustomInput placeholder={"Last Name"}></CustomInput>
      <CustomInput
        Display={true}
        Title={"Contact Information"}
        placeholder={"Phone Number"}
        TitleDisplay={true}
        SubDisplay={true}
        MiniTitle={"Phone Number"}
        subtext={"(Atleast one number is mandatory)"}
      ></CustomInput>
      <CustomInput placeholder={"Home Number (optional)"}></CustomInput>
      <CustomInput
        TitleDisplay={true}
        MiniTitle={"Email Address"}
        placeholder={"Email Address"}
      ></CustomInput>
      <CustomInput
        Display={true}
        TitleDisplay={true}
        Title={"Location"}
        MiniTitle={"What city are you based in"}
        placeholder={"City"}
      ></CustomInput>
    </FormWrapper>
  );
};

ContactForm.defaultProps = {};

export default ContactForm;
