/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import {
  ZIonCol,
  ZIonContent,
  ZIonGrid,
  ZIonInput,
  ZIonRow,
  ZIonText,
} from "@/components/ZIonComponents";
import ZIonPage from "@/components/ZIonPage";
import { Formik } from "formik";
import React from "react";
import { calculate } from "specificity";

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */

/**
 * Type Imports go down
 * ? Like import of type or type of some recoil state or any external type import is a Type import
 * */

/**
 * Recoil State Imports go down
 * ? Import of recoil states is a Recoil State import
 * */

/**
 * Style files Imports go down
 * ? Import of style sheet is a style import
 * */

/**
 * Images Imports go down
 * ? Import of images like png,jpg,jpeg,gif,svg etc. is a Images Imports import
 * */

/**
 * Component props type go down
 * ? Like if you have a type for props it should be please Down
 * */

/**
 * Functional Component
 * About: (Info of component here...)
 * @type {*}
 * */

const ZTestingCssSpecificity: React.FC = () => {
  return (
    <ZIonPage pageTitle="testing css specificity">
      <ZIonContent>
        <ZIonGrid>
          <ZIonRow>
            <ZIonCol>
              <Formik initialValues={{ check: "" }} onSubmit={() => {}}>
                {({ values, setFieldValue, handleChange, handleBlur }) => {
                  return (
                    <>
                      <ZIonInput
                        fill="outline"
                        label="check"
                        labelPlacement="floating"
                        name="check"
                        onIonChange={({ target }) => {
                          setFieldValue(
                            "check",
                            calculate(String(target?.value)),
                            false
                          );

                          console.log({ c: calculate(String(target?.value)) });
                        }}
                      />
                    </>
                  );
                }}
              </Formik>
            </ZIonCol>
          </ZIonRow>
        </ZIonGrid>
      </ZIonContent>
    </ZIonPage>
  );
};

export default ZTestingCssSpecificity;
