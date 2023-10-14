/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from "react";

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */
import classNames from "classnames";
import { calculate, compareDesc } from "specificity";

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import Header from "@/components/Header";
import {
  ZIonButton,
  ZIonCol,
  ZIonContent,
  ZIonGrid,
  ZIonIcon,
  ZIonInput,
  ZIonRow,
  ZIonText,
} from "@/components/ZIonComponents";
import ZIonPage from "@/components/ZIonPage";

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */
import { useZMediaQueryScale } from "@/ZaionsHooks/ZGenericHooks";
import { FieldArray, Formik } from "formik";
import {
  addOutline,
  duplicateOutline,
  listOutline,
  trashBinOutline,
} from "ionicons/icons";
import { getRandomKey } from "@/utils/helpers";
import { reportCustomError } from "@/utils/customErrorType";

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

const ZCssSpecificityCalculator: React.FC = () => {
  const { isXlScale, isLgScale, isMdScale, isSmScale, isXsScale } =
    useZMediaQueryScale();
  return (
    <ZIonPage pageTitle="ZTool CSS Specificity Calculator">
      {/* Header  */}
      <Header title="CSS Specificity Calculator" />

      {/* Content */}
      <ZIonContent color="light">
        <ZIonGrid className="lg:w-[80%] md:w-[95%] sm:w-[98%] xs:w-[100%] xl:w-[60%] mx-auto my-2 pt-5">
          <Formik
            initialValues={{
              items: [
                {
                  id: 1,
                  value: "nav > a:hover::before",
                  result: {
                    A: "0",
                    B: "1",
                    C: "3",
                  },
                },
              ],
            }}
            onSubmit={() => {}}
          >
            {({ values, setFieldValue, handleChange }) => {
              return (
                <>
                  <FieldArray name="items">
                    {({ remove, push }) => {
                      return (
                        <>
                          <ZIonRow>
                            <ZIonCol
                              sizeXl="6"
                              sizeLg="6"
                              sizeMd="6"
                              sizeSm="12"
                              sizeXs="12"
                              className={classNames({
                                "ion-text-center": !isMdScale,
                              })}
                            >
                              <ZIonText className="text-lg">
                                CSS Specificity Calculator is a free online tool
                                to calculate CSS Specificity.
                              </ZIonText>
                            </ZIonCol>
                            <ZIonCol
                              className={classNames({
                                "ion-text-end": isMdScale,
                              })}
                            >
                              <ZIonButton
                                className={classNames({
                                  "ion-no-margin": true,
                                  "me-2": isMdScale,
                                  "mt-2": !isMdScale,
                                })}
                                expand={!isMdScale ? "block" : undefined}
                                onClick={() => {
                                  const _values = Array.from(
                                    values?.items,
                                    ({ value }) => value
                                  );

                                  if (_values) {
                                    const _sorted = _values
                                      .map(calculate)
                                      .sort(compareDesc);

                                    console.log({ _sorted });
                                  }
                                }}
                              >
                                <ZIonIcon icon={listOutline} className="me-1" />
                                Sort by specificity
                              </ZIonButton>

                              <ZIonButton
                                className={classNames({
                                  "ion-no-margin": true,
                                  "mt-2": !isMdScale,
                                })}
                                expand={!isMdScale ? "block" : undefined}
                                onClick={() => {
                                  push({
                                    id: getRandomKey(),
                                    value: "",
                                    result: {
                                      A: "0",
                                      B: "0",
                                      C: "0",
                                    },
                                  });
                                }}
                              >
                                <ZIonIcon icon={addOutline} className="me-1" />
                                Add new Item
                              </ZIonButton>
                            </ZIonCol>
                          </ZIonRow>

                          {values?.items?.map((el, _index) => {
                            return (
                              <ZIonRow key={_index}>
                                <ZIonCol
                                  className="flex flex-col gap-4 mt-2 rounded-lg shadow-md ion-padding zaions__bg_white md:ion-align-items-center md:gap-0 ion-justify-content-between"
                                  size="12"
                                >
                                  <div className="w-full">
                                    <ZIonInput
                                      name={`items.${_index}.value`}
                                      minHeight={
                                        !isLgScale ? "40px" : undefined
                                      }
                                      aria-label="check input"
                                      value={values.items[_index].value}
                                      onIonChange={(e) => {
                                        try {
                                          handleChange(e);

                                          if (
                                            e.target?.value &&
                                            !isNaN(
                                              parseFloat(
                                                e.target?.value.toString()
                                              )
                                            )
                                          ) {
                                            setFieldValue(
                                              `items.${_index}.result`,
                                              {
                                                A: 0,
                                                B: 0,
                                                C: 0,
                                              },
                                              false
                                            );
                                          } else {
                                            const _calculatedValue = calculate(
                                              String(e?.target?.value)
                                            );

                                            if (_calculatedValue) {
                                              setFieldValue(
                                                `items.${_index}.result`,
                                                _calculatedValue,
                                                false
                                              );
                                            } else {
                                              setFieldValue(
                                                `items.${_index}.result`,
                                                {
                                                  A: 0,
                                                  B: 0,
                                                  C: 0,
                                                },
                                                false
                                              );
                                            }
                                          }
                                        } catch (error) {
                                          reportCustomError(error);
                                        }
                                      }}
                                    />
                                  </div>

                                  <ZIonRow>
                                    <ZIonCol
                                      size="12"
                                      className={classNames({
                                        "flex flex-wrap ion-justify-content-between":
                                          isMdScale,
                                      })}
                                    >
                                      <div className="flex w-auto mt-3 me-3 ion-align-items-center">
                                        <div className="flex w-10 h-10 rounded-full zaions__primary_bg ion-align-items-center ion-justify-content-center">
                                          <ZIonText
                                            className="text-xl"
                                            color="light"
                                          >
                                            {values.items[_index]?.result?.A ||
                                              0}
                                          </ZIonText>
                                        </div>
                                        <ZIonText
                                          className={classNames({
                                            "ms-3": true,
                                            "text-xl": isXlScale,
                                            "text-lg": !isXlScale && isLgScale,
                                            "text-md": !isLgScale && isMdScale,
                                            // "text-sm": !isMdScale && isSmScale,
                                          })}
                                        >
                                          ID's
                                        </ZIonText>
                                      </div>

                                      <div className="flex w-auto mt-3 me-3 ion-align-items-center">
                                        <div className="flex w-10 h-10 rounded-full zaions__secondary_bg ion-align-items-center ion-justify-content-center">
                                          <ZIonText
                                            className="text-xl"
                                            color="light"
                                          >
                                            {values.items[_index]?.result?.B ||
                                              0}
                                          </ZIonText>
                                        </div>
                                        <ZIonText
                                          className={classNames({
                                            "ms-3": true,
                                            "text-xl": isXlScale,
                                            "text-lg": !isXlScale && isLgScale,
                                            "text-md": !isLgScale && isMdScale,
                                            // "text-sm": !isMdScale && isSmScale,
                                          })}
                                        >
                                          Classes, attributes and pseudo-classes
                                        </ZIonText>
                                      </div>

                                      <div className="flex w-auto mt-3 me-3 ion-align-items-center">
                                        <div className="flex w-10 h-10 rounded-full zaions__tertiary_bg ion-align-items-center ion-justify-content-center">
                                          <ZIonText
                                            className="text-xl"
                                            color="light"
                                          >
                                            {values.items[_index]?.result?.C ||
                                              0}
                                          </ZIonText>
                                        </div>
                                        <ZIonText
                                          className={classNames({
                                            "ms-3": true,
                                            "text-xl": isXlScale,
                                            "text-lg": !isXlScale && isLgScale,
                                            "text-md": !isLgScale && isMdScale,
                                            // "text-sm": !isMdScale && isSmScale,
                                          })}
                                        >
                                          Elements and pseudo-elements
                                        </ZIonText>
                                      </div>

                                      <div className="flex w-auto mt-3 me-3 ion-align-items-center">
                                        <div className="flex w-10 h-10 rounded-full zaions__tertiary_bg ion-align-items-center ion-justify-content-center">
                                          <ZIonText
                                            className="text-xl"
                                            color="light"
                                          >
                                            {(
                                              (+values.items[_index]?.result
                                                ?.A || 0) *
                                                100 +
                                              (+values.items[_index]?.result
                                                ?.B || 0) *
                                                10 +
                                              (+values.items[_index]?.result
                                                ?.C || 0) *
                                                1
                                            ).toString()}
                                          </ZIonText>
                                        </div>
                                        <ZIonText
                                          className={classNames({
                                            "ms-3": true,
                                            "text-xl": isXlScale,
                                            "text-lg": !isXlScale && isLgScale,
                                            "text-md": !isLgScale && isMdScale,
                                            // "text-sm": !isMdScale && isSmScale,
                                          })}
                                        >
                                          Total Specificity Count
                                        </ZIonText>
                                      </div>
                                    </ZIonCol>

                                    <ZIonCol
                                      className={classNames({
                                        "flex ion-align-items-end ion-justify-content-end":
                                          isMdScale,
                                        "mt-1": isXlScale,
                                        "mt-2": !isXlScale,
                                      })}
                                    >
                                      <ZIonButton
                                        color="danger"
                                        className={classNames({
                                          "ion-no-margin": true,
                                          "me-2": isMdScale,
                                          "mt-2": !isMdScale,
                                        })}
                                        expand={
                                          !isMdScale ? "block" : undefined
                                        }
                                        onClick={() => {
                                          setTimeout(() => {
                                            remove(_index);
                                          }, 300);
                                        }}
                                      >
                                        <ZIonIcon
                                          icon={trashBinOutline}
                                          className="me-1"
                                        />
                                        <ZIonText className="mt-[2px]">
                                          Delete
                                        </ZIonText>
                                      </ZIonButton>

                                      <ZIonButton
                                        className={classNames({
                                          "ion-no-margin": true,
                                          "mt-2": !isMdScale,
                                        })}
                                        expand={
                                          !isMdScale ? "block" : undefined
                                        }
                                        onClick={() => {
                                          push({
                                            id: getRandomKey(),
                                            value: values.items[_index].value,
                                            result: values.items[_index].result,
                                          });
                                        }}
                                      >
                                        <ZIonIcon
                                          icon={duplicateOutline}
                                          className="me-1"
                                        />
                                        <ZIonText className="mt-[2px]">
                                          Duplicate
                                        </ZIonText>
                                      </ZIonButton>
                                    </ZIonCol>
                                  </ZIonRow>
                                </ZIonCol>
                              </ZIonRow>
                            );
                          })}
                        </>
                      );
                    }}
                  </FieldArray>
                </>
              );
            }}
          </Formik>
        </ZIonGrid>
      </ZIonContent>
    </ZIonPage>
  );
};

export default ZCssSpecificityCalculator;
